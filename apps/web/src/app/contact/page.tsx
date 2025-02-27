import { ContactFormWrapper } from '@/components/client/ContactFormWrapper';

/**
 * コンタクトページコンポーネント
 */
export default function ContactPage() {
    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">お問い合わせ</h1>

            <div className="max-w-2xl">
                <ContactFormWrapper />
            </div>
        </main>
    );
}