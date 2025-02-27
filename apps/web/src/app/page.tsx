import { DashboardButtonWrapper } from '@/components/client/DashboardButtonWrapper';
import { UserCounterWrapper } from '@/components/client/UserCounterWrapper';
import { PageHeader } from '@/components/server/PageHeader';
import { ServerDataFetcher } from '@/components/server/ServerDataFetcher';

/**
 * サーバーコンポーネントとしてのホームページ
 * UIレンダリングはクライアントコンポーネントに委譲し、
 * データ取得やメタデータなどはサーバーコンポーネントで処理
 */
export default function HomePage() {
    return (
        <main className="container mx-auto px-4 py-8">
            <PageHeader />

            <div className="my-8">
                <ServerDataFetcher />
            </div>

            <div className="my-8">
                <UserCounterWrapper />
            </div>

            <DashboardButtonWrapper />
        </main>
    );
}