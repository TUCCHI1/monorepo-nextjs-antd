"use client";

import Link from 'next/link';
import { Button } from 'antd';
import { DashboardOutlined } from '@ant-design/icons';

/**
 * ダッシュボードボタンのラッパー
 * クライアントコンポーネントのエントリーポイント
 */
export function DashboardButtonWrapper() {
    return (
        <Link href="/dashboard" passHref>
            <Button type="primary" icon={<DashboardOutlined />} size="large">
                ダッシュボードへ
            </Button>
        </Link>
    );
}