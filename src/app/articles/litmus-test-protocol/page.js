import LitmusTestProtocolContent from '../../../components/articles/LitmusTestProtocolContent';

export const metadata = {
    title: 'The Litmus Test: Validating CUPED in 5 Days | Suyash',
    description: 'How we validated CUPED in 5 days without engineering. A deep dive into validation strategies for experimentation platforms.',
    openGraph: {
        title: 'The Litmus Test: Validating CUPED in 5 Days',
        description: 'We had a choice: Spend 8 weeks building a complex statistical engine, or find a way to prove it works first. Here is how we did it.',
        type: 'article',
        authors: ['Suyash'],
        publishedTime: '2024-03-01',
    }
};

export default function Page() {
    return <LitmusTestProtocolContent />;
}
