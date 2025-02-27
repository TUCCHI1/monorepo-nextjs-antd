import { PageHeaderClient } from '@/components/client/PageHeaderClient';

/**
 * サーバーコンポーネントとしてのページヘッダー
 * 実際のレンダリングはクライアントコンポーネントに委譲
 */
export function PageHeader() {
    const title = "Next.js 15 with Ant Design サンプルアプリ";
    const description = `
    このサンプルアプリケーションは、Next.js 15とAnt Designを使用して
    サーバーコンポーネントとクライアントコンポーネントを組み合わせたアプリケーションです。
    pnpm Turborepoで構築されています。
  `;

    return <PageHeaderClient title={title} description={description} />;
}