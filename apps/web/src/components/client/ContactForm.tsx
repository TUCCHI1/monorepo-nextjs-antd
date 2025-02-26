// apps/web/src/components/client/ContactForm.tsx
"use client";

import { useState } from 'react';
import { Form, Input, Button, Alert } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import { submitContactForm } from '@/app/contact/actions';

/**
 * フォーム値の型
 */
interface ContactFormValues {
    name: string;
    email: string;
    message: string;
}

/**
 * コンタクトフォーム用クライアントコンポーネント
 * クライアントコンポーネントからServer Actionsを使用する例
 */
export const ContactForm = () => {
    const [form] = Form.useForm<ContactFormValues>();
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

    /**
     * Server Actionを使用したフォーム送信処理
     */
    const handleSubmit = async (values: ContactFormValues) => {
        setLoading(true);
        setResult(null);

        try {
            // サーバーアクションに渡すFormDataを作成
            const formData = new FormData();
            formData.append('name', values.name);
            formData.append('email', values.email);
            formData.append('message', values.message);

            // サーバーアクションを呼び出し
            const result = await submitContactForm(formData);

            setResult(result);

            // 成功した場合はフォームをリセット
            if (result.success) {
                form.resetFields();
            }
        } catch (error) {
            console.error('フォーム送信エラー:', error);
            setResult({
                success: false,
                message: '予期せぬエラーが発生しました。もう一度お試しください。',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {result && (
                <Alert
                    message={result.success ? '成功！' : 'エラー'}
                    description={result.message}
                    type={result.success ? 'success' : 'error'}
                    showIcon
                    closable
                    className="mb-6"
                />
            )}

            <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                autoComplete="off"
            >
                <Form.Item
                    name="name"
                    label="お名前"
                    rules={[{ required: true, message: 'お名前を入力してください' }]}
                >
                    <Input size="large" placeholder="あなたのお名前" />
                </Form.Item>

                <Form.Item
                    name="email"
                    label="メールアドレス"
                    rules={[
                        { required: true, message: 'メールアドレスを入力してください' },
                        { type: 'email', message: '有効なメールアドレスを入力してください' }
                    ]}
                >
                    <Input size="large" placeholder="あなたのメールアドレス" />
                </Form.Item>

                <Form.Item
                    name="message"
                    label="メッセージ"
                    rules={[{ required: true, message: 'メッセージを入力してください' }]}
                >
                    <Input.TextArea
                        rows={5}
                        placeholder="あなたのメッセージ"
                    />
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        icon={<SendOutlined />}
                        size="large"
                        loading={loading}
                    >
                        送信
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};