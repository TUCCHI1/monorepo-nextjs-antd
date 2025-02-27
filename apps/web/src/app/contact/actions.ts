'use server';

/**
 * コンタクトフォームデータの型
 */
export interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

/**
 * コンタクトフォーム送信を処理するServer Action
 */
export async function submitContactForm(formData: FormData): Promise<{ success: boolean; message: string }> {
    // フォーム値を抽出
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    // 基本的なバリデーション
    if (!name || !email || !message) {
        return {
            success: false,
            message: 'すべてのフィールドが必要です',
        };
    }

    try {
        // サーバー処理時間をシミュレート
        await new Promise(resolve => setTimeout(resolve, 1000));

        console.log('フォーム送信を受信:', { name, email, message });

        return {
            success: true,
            message: 'メッセージをいただきありがとうございました！近日中にご連絡いたします。',
        };
    } catch (error) {
        console.error('フォーム送信エラー:', error);

        return {
            success: false,
            message: 'フォームの送信中にエラーが発生しました。後でもう一度お試しください。',
        };
    }
}