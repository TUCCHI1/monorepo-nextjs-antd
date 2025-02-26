/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	
	// トランスパイルするパッケージ（UIコンポーネントはここに含める）
	transpilePackages: ["ui", "utils", "antd"],
	
	// ルートレベルに移動された設定（以前はexperimental内）
	serverExternalPackages: [],
	
	experimental: {
	  // サーバーアクションの設定（Next.js 15ではオブジェクトが必要）
	  serverActions: {
		allowedOrigins: ['localhost:3000', '192.168.0.3:3000'],
		bodySizeLimit: '2mb' // 任意のサイズ制限
	  }
	},
  };
  
module.exports = nextConfig;