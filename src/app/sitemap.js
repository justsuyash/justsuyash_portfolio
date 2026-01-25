import { articles } from '../data/portfolio_content';

export default function sitemap() {
    const baseUrl = 'https://justsuyash.com';

    // Static pages
    const routes = [
        '',
        '/articles',
        // Ventures/Lab are currently single page sections or placeholders? 
        // Based on file structure: src/app/connect, src/app/ventures, src/app/lab
        '/connect',
        '/ventures',
        '/lab',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
    }));

    // Dynamic article pages
    const articleRoutes = articles.map((article) => ({
        url: `${baseUrl}${article.link}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    }));

    return [...routes, ...articleRoutes];
}
