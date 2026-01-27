import Link from 'next/link';
import { ArrowLeft, Clock } from 'lucide-react';

export const metadata = {
    title: 'My MIT CODE 2025 Experience | Suyash',
    description: 'Presenting CUPED validation methodology at MIT Conference on Digital Experimentation 2025.',
};

export default function MITCodeExperiencePage() {
    return (
        <main style={{ paddingTop: '120px', paddingBottom: '100px', backgroundColor: '#050505', minHeight: '100vh' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <Link href="/" style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    color: 'rgba(255,255,255,0.4)', textDecoration: 'none', marginBottom: '48px',
                    fontSize: '0.9rem', fontWeight: 500
                }}>
                    <ArrowLeft size={16} /> Back to Home
                </Link>

                <div style={{
                    background: 'linear-gradient(145deg, rgba(189, 0, 255, 0.08) 0%, rgba(0, 243, 255, 0.05) 100%)',
                    border: '1px solid rgba(189, 0, 255, 0.2)',
                    borderRadius: '20px',
                    padding: '64px 48px',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {/* Decorative Glow */}
                    <div style={{
                        position: 'absolute',
                        top: '-100px',
                        right: '-100px',
                        width: '300px',
                        height: '300px',
                        background: 'radial-gradient(circle, rgba(189, 0, 255, 0.15) 0%, transparent 70%)',
                        borderRadius: '50%',
                        pointerEvents: 'none'
                    }} />

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        marginBottom: '24px'
                    }}>
                        <Clock size={20} color="#bd00ff" />
                        <span style={{
                            fontSize: '0.85rem',
                            fontWeight: 700,
                            color: '#bd00ff',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em'
                        }}>Coming Soon</span>
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        fontWeight: 700,
                        color: '#fff',
                        marginBottom: '24px',
                        lineHeight: 1.2
                    }}>
                        My MIT CODE 2025 Experience
                    </h1>

                    <p style={{
                        fontSize: '1.1rem',
                        color: 'rgba(255,255,255,0.6)',
                        lineHeight: 1.7,
                        maxWidth: '600px',
                        margin: '0 auto 32px'
                    }}>
                        A deep dive into presenting CUPED validation methodology at the MIT Conference on Digital Experimentation, networking with leading researchers, and key takeaways from the experimentation community.
                    </p>

                    <a
                        href="https://ide.mit.edu/events/2025-conference-on-digital-experimentation-mit/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '12px 24px',
                            borderRadius: '8px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            color: '#00f3ff',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            textDecoration: 'none'
                        }}
                    >
                        Learn about MIT CODE 2025 →
                    </a>
                </div>
            </div>
        </main>
    );
}
