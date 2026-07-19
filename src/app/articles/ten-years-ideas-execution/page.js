import TenYearsIdeasExecutionContent from '../../../components/articles/TenYearsIdeasExecutionContent';

export const metadata = {
    title: 'Ten Years of Ideas and Relentless Execution | Suyash',
    description: 'How a 2015 final-year college project on smart surveillance — built on a Raspberry Pi, PIR sensors, and computer vision — became the prototype for how I still decide what\'s worth building.',
    openGraph: {
        title: 'Ten Years of Ideas and Relentless Execution',
        description: 'Be ruthless about the idea. Be relentless about the execution. Measure the impact. This is where that pattern started — a 2015 college project that accidentally predicted the edge-AI industry.',
        type: 'article',
        authors: ['Suyash'],
        publishedTime: '2026-07-19',
        tags: ['Origin Story', 'Product Thinking', 'Computer Vision', 'Career'],
        images: [
            {
                url: '/images/article-graphics/ten-years-ideas-execution.png',
                width: 1344,
                height: 896,
                alt: 'Ten Years of Ideas and Relentless Execution — sketch illustration showing the 2015 surveillance project journey',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Ten Years of Ideas and Relentless Execution',
        description: 'Be ruthless about the idea. Be relentless about the execution. Measure the impact. This is where that pattern started.',
        images: ['/images/article-graphics/ten-years-ideas-execution.png'],
    },
    alternates: {
        canonical: '/articles/ten-years-ideas-execution',
    },
};

export default function Page() {
    return <TenYearsIdeasExecutionContent />;
}
