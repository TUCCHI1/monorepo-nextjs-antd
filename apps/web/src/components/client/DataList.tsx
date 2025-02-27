"use client";

import { List, Tag } from 'antd';
import type { DataItem } from '@/types/data';

interface DataListProps {
    data: DataItem[];
}

/**
 * データリストを表示するクライアントコンポーネント
 */
export function DataList({ data }: DataListProps) {
    return (
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
                    <Tag color="blue">サーバーから取得</Tag>
                </List.Item>
            )}
        />
    );
}