// apps/web/src/app/layout.tsx
import { Metadata } from 'next';
import { ConfigProvider } from 'antd';
import { Inter } from 'next/font/google';
import './globals.css';
import themeConfig from '../theme/themeConfig';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Next.js 15 with Ant Design',
    description: 'Sample application using Next.js 15, Ant Design, and pnpm Turborepo',
};

/**
 * ルートレイアウトコンポーネント
 * アプリケーションの基本構造とテーマを設定
 * Next.js 15のApp Routerではデフォルトでサーバーコンポーネント
 */
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ja">
            <body className={inter.className}>
                <ConfigProvider theme={themeConfig}>
                    {children}
                </ConfigProvider>
            </body>
        </html>
    );
}