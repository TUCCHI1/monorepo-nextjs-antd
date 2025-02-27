"use client";

import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

interface PageHeaderClientProps {
    title: string;
    description: string;
}

/**
 * クライアントコンポーネントとしてのページヘッダー
 * Ant Designのコンポーネントを使用するため、クライアントサイドで実行
 */
export function PageHeaderClient({ title, description }: PageHeaderClientProps) {
    return (
        <>
            <Title level={1}>{title}</Title>
            <Paragraph>{description}</Paragraph>
        </>
    );
}