"use client";

import { ConfigProvider } from 'antd';
import React from 'react';
import themeConfig from '@/theme/themeConfig';

interface ThemeProviderProps {
    children: React.ReactNode;
}

/**
 * クライアントコンポーネントとしてのテーマプロバイダー
 * このパターンを使うことで、サーバーコンポーネントの
 * メリットを維持しながらAnt Designを使用できる
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
    return (
        <ConfigProvider theme={themeConfig}>
            {children}
        </ConfigProvider>
    );
}