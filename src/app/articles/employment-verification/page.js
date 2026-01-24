import EmploymentVerificationContent from '../../../components/articles/EmploymentVerificationContent';

export const metadata = {
    title: 'The $114M Friction Fix: Employment Verification Optimization | Suyash',
    description: 'How causal inference and surgical A/B testing removed friction for high-quality borrowers, unlocking $114M in annualized volume.',
    openGraph: {
        title: 'The $114M Friction Fix: Employment Verification Optimization',
        description: 'Case Study: Using causal inference to challenge core risk assumptions and improve loan origination conversion.',
        type: 'article',
        authors: ['Suyash'],
        publishedTime: '2023-08-01',
    },
    alternates: {
        canonical: '/articles/employment-verification',
    }
};

export default function Page() {
    return <EmploymentVerificationContent />;
}
