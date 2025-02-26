// apps/web/src/components/server/ServerDataComponent.tsx
import { Card, List, Typography, Tag } from 'antd';

const { Title, Text } = Typography;

/**
 * APIからデータを取得する関数をシミュレート
 * 実際のアプリケーションでは実際のAPI呼び出し
 */
const fetchServerData = async () => {
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
 * サーバー上でデータを取得し、コンテンツをレンダリング
 * "use client"ディレクティブがないため、これはサーバーコンポーネント
 */
export async function ServerDataComponent() {
    // サーバーコンポーネントでは、useEffectやuseStateなしで直接async/awaitを使用可能
    const data = await fetchServerData();

    return (
        <Card title="サーバーコンポーネント例" bordered>
            <Title level={4}>サーバーサイドデータ</Title>
            <Text>
                このコンポーネントはサーバー上でデータを取得し、レンダリングします。
                このコンポーネントに対するJavaScriptはクライアントに送信されません。
            </Text>

            <List
                className="my-4"
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            title={item.name}
                            description={item.description}
                        />
                        <Tag color="blue">サーバーレンダリング</Tag>
                    </List.Item>
                )}
            />

            <Text type="secondary">
                サーバーコンポーネントは、API呼び出しなしでバックエンドリソースに直接アクセスできます。
            </Text>
        </Card>
    );
}