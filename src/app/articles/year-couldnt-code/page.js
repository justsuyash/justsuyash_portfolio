import YearCouldntCodeContent from '../../../components/articles/YearCouldntCodeContent';

export const metadata = {
    title: "The Year I Couldn't Code — and Shipped Anyway | Suyash",
    description: "Before the surveillance project and the published paper, there was a second-year book-lending app and a stubborn refusal to build something boring. The right project doesn't wait for you to be ready. It makes you ready.",
    openGraph: {
        title: "The Year I Couldn't Code — and Shipped Anyway",
        description: "A good idea is a magnet. I had the idea, almost none of the ability, and full marks at the end. This is where the pattern of picking the hard problem actually started.",
        type: 'article',
        authors: ['Suyash'],
        publishedTime: '2026-07-19',
        tags: ['Origin Story', 'Learning by Doing', 'Builder Mindset', 'Career'],
        images: [
            {
                url: '/images/article-graphics/year-couldnt-code.png',
                width: 1344,
                height: 756,
                alt: "The Year I Couldn't Code and Shipped Anyway — sketch illustration showing second-year project journey",
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "The Year I Couldn't Code — and Shipped Anyway",
        description: "The right project doesn't wait for you to be ready. It makes you ready.",
        images: ['/images/article-graphics/year-couldnt-code.png'],
    },
    alternates: {
        canonical: '/articles/year-couldnt-code',
    },
};

export default function Page() {
    return <YearCouldntCodeContent />;
}
