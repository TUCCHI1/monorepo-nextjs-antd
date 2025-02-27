/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    
    // トランスパイルするパッケージ（UIコンポーネントはここに含める）
    transpilePackages: ["ui", "utils", "antd"],
    
    // スタンドアロン出力を有効化
    output: 'standalone',
    
    // 実験的な機能
    experimental: {
      // サーバーアクションの設定
      serverActions: {
        allowedOrigins: ['localhost:3000', '192.168.0.3:3000'],
        bodySizeLimit: '2mb'
      }
    },
};
    
module.exports = nextConfig;