"use client";

import { List, Tag } from 'antd';

export interface DataItem {
    id: number;
    name: string;
    description: string;
}

export interface DataListProps {
    data: DataItem[];
}

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
                    <Tag color="blue">サーバーレンダリング</Tag>
                </List.Item>
            )}
        />
    );
}