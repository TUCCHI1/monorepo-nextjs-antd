"use client";

import { useState } from 'react';
import { Button, Card, Space, Typography } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

/**
 * クライアントコンポーネントの例
 * クライアント側でステート管理を行うコンポーネント
 */
export function UserCounter() {
    const [count, setCount] = useState<number>(0);

    // 関数型アプローチでステート更新
    const incrementCount = () => setCount((prevCount) => prevCount + 1);
    const decrementCount = () => setCount((prevCount) => Math.max(0, prevCount - 1));

    return (
        <Card title="クライアントコンポーネント例" variant="outlined">
            <Title level={4}>ユーザーカウンター</Title>
            <Text>このコンポーネントはクライアント側で動作し、独自の状態を管理します。</Text>

            <div className="my-4">
                <Space>
                    <Button
                        type="primary"
                        shape="circle"
                        icon={<MinusOutlined />}
                        onClick={decrementCount}
                    />
                    <Text strong style={{ margin: '0 16px', fontSize: '18px' }}>
                        {count}
                    </Text>
                    <Button
                        type="primary"
                        shape="circle"
                        icon={<PlusOutlined />}
                        onClick={incrementCount}
                    />
                </Space>
            </div>

            <Text type="secondary">
                このコンポーネントはクライアント側のインタラクティブ性を示しています。
            </Text>
        </Card>
    );
}