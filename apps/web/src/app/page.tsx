// apps/web/src/app/page.tsx
import { Suspense } from 'react';
import Link from 'next/link';
import { Button, Typography } from 'antd';
import { DashboardOutlined } from '@ant-design/icons';
import { UserCounter } from '@/components/client/UserCounter';
import { ServerDataComponent } from '@/components/server/ServerDataComponent';

const { Title, Paragraph } = Typography;

/**
 * ホームページコンポーネント
 * Next.js 15ではデフォルトでサーバーコンポーネント
 */
export default function HomePage() {
    return (
        <main className="container mx-auto px-4 py-8">
            <Title level={1}>Next.js 15 with Ant Design サンプルアプリ</Title>

            <Paragraph>
                このサンプルアプリケーションは、Next.js 15とAnt Designを使用して
                サーバーコンポーネントとクライアントコンポーネントを組み合わせたアプリケーションです。
                pnpm Turborepoで構築されています。
            </Paragraph>

            <div className="my-8">
                <Suspense fallback={<div>サーバーデータを読み込み中...</div>}>
                    <ServerDataComponent />
                </Suspense>
            </div>

            <div className="my-8">
                <UserCounter />
            </div>

            <Link href="/dashboard" passHref>
                <Button type="primary" icon={<DashboardOutlined />} size="large">
                    ダッシュボードへ
                </Button>
            </Link>
        </main>
    );
}