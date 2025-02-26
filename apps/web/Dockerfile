# apps/web/Dockerfile
# 最新の安定版Node.jsをベースイメージとして使用
FROM node:22-alpine AS base

# pnpmをインストール
RUN npm install -g pnpm

# ビルド依存関係を設定
FROM base AS builder
WORKDIR /app

# すべてのパッケージからpackage.jsonファイルをコピー
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/web/package.json ./apps/web/
COPY packages/ui/package.json ./packages/ui/
COPY packages/utils/package.json ./packages/utils/
COPY packages/config/package.json ./packages/config/

# 依存関係をインストール
RUN pnpm install --frozen-lockfile

# すべてのソースファイルをコピー
COPY . .

# アプリをビルド
RUN pnpm turbo build --filter=web...

# 本番イメージを設定
FROM base AS runner
WORKDIR /app

# ビルドされたアプリをコピー
COPY --from=builder /app/apps/web/next.config.js ./
COPY --from=builder /app/apps/web/package.json ./
COPY --from=builder /app/apps/web/public ./public
COPY --from=builder /app/apps/web/.next/standalone ./
COPY --from=builder /app/apps/web/.next/static ./.next/static

# 環境変数を設定
ENV NODE_ENV=production
ENV PORT=8080

# ポートを公開
EXPOSE 8080

# アプリを起動
CMD ["node", "server.js"]