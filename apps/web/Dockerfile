# 特定バージョンの Node.js を使用して一貫性と小さいサイズを確保
FROM node:22-alpine AS base

# package.json に合わせて特定バージョンの pnpm をインストール
RUN npm install -g pnpm@10.5.1

# ビルドステージの設定
FROM base AS builder
WORKDIR /app

# レイヤーキャッシングのために package.json ファイルを先にコピー
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/web/package.json ./apps/web/
COPY packages/ui/package.json ./packages/ui/
COPY packages/utils/package.json ./packages/utils/
COPY packages/config/package.json ./packages/config/

# 再現可能なビルドのために --frozen-lockfile オプションを使用
RUN pnpm install --frozen-lockfile

# 残りのソースファイルをコピー
COPY . .

# 本番最適化でアプリケーションをビルド
RUN pnpm turbo build --filter=web...

# 本番ステージの設定 - standalone 出力があるため小さいベースイメージを使用
FROM node:22-alpine AS runner
WORKDIR /app

# 最適化を確保するために早い段階で NODE_ENV を設定
ENV NODE_ENV=production
ENV PORT=8080

# 必要なビルド出力のみをコピー
COPY --from=builder /app/apps/web/next.config.js ./
COPY --from=builder /app/apps/web/package.json ./
COPY --from=builder /app/apps/web/public ./public
COPY --from=builder /app/apps/web/.next/standalone ./
COPY --from=builder /app/apps/web/.next/static ./.next/static

# ヘルスチェック用に curl をインストール
RUN apk --no-cache add curl

# セキュリティのための非 root ユーザーを使用
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs && \
    chown -R nextjs:nodejs /app
USER nextjs

# ポートを公開
EXPOSE 8080

# ヘルスチェックを追加
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:8080/ || exit 1

# アプリケーションを起動
CMD ["node", "server.js"]