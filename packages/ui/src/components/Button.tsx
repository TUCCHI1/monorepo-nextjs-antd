import React from 'react';
import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd';

/**
 * カスタムボタンコンポーネント用の拡張プロパティ
 * プロパティ名の衝突を避けるため、独自の命名を使用
 */
export interface CustomButtonProps extends Omit<AntButtonProps, 'variant'> {
    buttonStyle?: 'default' | 'primary' | 'secondary' | 'danger';
}

/**
 * Ant DesignのButtonをラップするカスタムボタンコンポーネント
 * モノレポで共有UIコンポーネントを作成する方法を示す
 */
export const Button: React.FC<CustomButtonProps> = ({
    buttonStyle = 'default',
    children,
    ...props
}) => {
    // buttonStyleプロパティをAnt Designのプロパティにマッピング
    const getButtonProps = (): AntButtonProps => {
        switch (buttonStyle) {
            case 'primary':
                return {
                    type: 'primary' as const,
                    ...props
                };
            case 'secondary':
                return {
                    type: 'default' as const,
                    ghost: true,
                    ...props
                };
            case 'danger':
                return {
                    type: 'primary' as const,
                    danger: true,
                    ...props
                };
            default:
                return {
                    type: 'default' as const,
                    ...props
                };
        }
    };

    return <AntButton {...getButtonProps()}>{children}</AntButton>;
};