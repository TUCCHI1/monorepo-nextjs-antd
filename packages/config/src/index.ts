export const appConfig = {
    apiUrl: process.env.NODE_ENV === 'production'
        ? 'https://api.example.com'
        : 'http://localhost:3001',
    app: {
        name: 'Next.js Monorepo App',
        version: '0.1.0'
    },
    theme: {
        primaryColor: '#1677ff',
        secondaryColor: '#52c41a'
    }
};