# ===== ビルドステージ =====
# 特定バージョンを指定して予期しない変更を防止
FROM node:22-alpine@sha256:b308dff83a775f0c6c1c61e04f8c53792cae73105889a1aeac42f0651f2590f4 AS builder
WORKDIR /app

# 依存関係ファイルを先にコピー
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/web/package.json ./apps/web/
COPY packages/ui/package.json ./packages/ui/
COPY packages/utils/package.json ./packages/utils/
COPY packages/config/package.json ./packages/config/

# 特定バージョンのpnpmをインストールし、依存関係を固定
RUN npm install -g pnpm@10.5.1 --no-fund --no-audit && \
    pnpm install --frozen-lockfile --no-optional

# ソースコードをコピーしてビルド
COPY . .
RUN pnpm turbo build --filter=web...

# ===== 実行ステージ =====
FROM node:22-alpine@sha256:b308dff83a775f0c6c1c61e04f8c53792cae73105889a1aeac42f0651f2590f4 AS runner
WORKDIR /app

# 本番環境設定
ENV NODE_ENV=production
ENV PORT=8080

# 必要最小限のファイルのみをコピー
COPY --from=builder /app/apps/web/next.config.js ./
COPY --from=builder /app/apps/web/package.json ./
COPY --from=builder /app/apps/web/public ./public
COPY --from=builder /app/apps/web/.next/standalone ./
COPY --from=builder /app/apps/web/.next/static ./.next/static

# セキュリティを強化するための非rootユーザーを作成
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs && \
    chown -R nextjs:nodejs /app && \
    # アプリディレクトリの権限を適切に設定
    chmod -R 550 /app && \
    chmod -R 770 /app/.next/cache

# 非rootユーザーに切り替え
USER nextjs

# 公開ポートの指定
EXPOSE 8080

# アプリケーション起動コマンド
CMD ["node", "server.js"]