import { Card, Typography } from 'antd';
import { DataList } from '../client/DataList';
import type { DataItem } from '@/types/data';

const { Title, Text } = Typography;

/**
 * APIからデータを取得する関数をシミュレート
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
 * サーバーコンポーネント例
 */
export async function ServerDataComponent() {
    const data = await fetchServerData();

    return (
        <Card title="サーバーコンポーネント例" bordered>
            <Title level={4}>サーバーサイドデータ</Title>
            <Text>
                このコンポーネントはサーバー上でデータを取得し、レンダリングします。
                このコンポーネントに対するJavaScriptはクライアントに送信されません。
            </Text>

            <DataList data={data} />

            <Text type="secondary">
                サーバーコンポーネントは、API呼び出しなしでバックエンドリソースに直接アクセスできます。
            </Text>
        </Card>
    );
}