import { ServerDataPresentation } from '@/components/client/ServerDataPresentation';
import type { DataItem } from '@/types/data';

/**
 * サーバー側でデータを取得する関数
 */
const fetchServerData = async (): Promise<DataItem[]> => {
    // API遅延をシミュレート
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return [
        { id: 1, name: 'サーバーサイドレンダリング', description: 'サーバー上でコンポーネントをレンダリング' },
        { id: 2, name: 'クライアントサイドハイドレーション', description: 'クライアント上でインタラクティブコンポーネントをハイドレート' },
        { id: 3, name: 'データフェッチング', description: 'サーバーコンポーネントで直接データを取得' },
        { id: 4, name: 'ストリーミング', description: 'サーバーからクライアントへUIをストリーミング' },
    ];
};

/**
 * サーバーコンポーネントでデータを取得し、
 * プレゼンテーションはクライアントコンポーネントに委譲する設計
 */
export async function ServerDataFetcher() {
    // サーバー側でデータを取得
    const data = await fetchServerData();

    // クライアントコンポーネントにデータを渡す
    return <ServerDataPresentation data={data} />;
}