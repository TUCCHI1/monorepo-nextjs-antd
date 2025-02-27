"use client";

import { Card, Typography } from 'antd';
import { DataList } from '@/components/client/DataList';
import type { DataItem } from '@/types/data';

const { Title, Text } = Typography;

interface ServerDataPresentationProps {
    data: DataItem[];
}

/**
 * クライアントコンポーネントとしてのデータ表示
 * Ant Designのコンポーネントを使用するため、クライアントサイドで実行
 */
export function ServerDataPresentation({ data }: ServerDataPresentationProps) {
    return (
        <Card title="サーバーコンポーネント例" variant="outlined">
            <Title level={4}>サーバーサイドデータ</Title>
            <Text>
                このコンポーネントはサーバー上でデータを取得し、UIはクライアントで表示します。
                これはReact Server ComponentsとClient Componentsの分離を示す例です。
            </Text>

            <DataList data={data} />

            <Text type="secondary">
                サーバーコンポーネントは、API呼び出しなしでバックエンドリソースに直接アクセスできます。
            </Text>
        </Card>
    );
}