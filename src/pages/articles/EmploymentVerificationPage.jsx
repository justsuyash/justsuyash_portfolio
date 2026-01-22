import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Tag, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const EmploymentVerificationPage = () => {
    return (
        <main style={{ paddingTop: '120px', paddingBottom: '100px', backgroundColor: '#050505' }}>
            <article className="container" style={{ maxWidth: '800px' }}>
                <Link to="/articles" style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    color: 'rgba(255,255,255,0.4)', textDecoration: 'none', marginBottom: '48px',
                    fontSize: '0.9rem', fontWeight: 500
                }}>
                    <ArrowLeft size={16} /> Back to Articles
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <header style={{ marginBottom: '64px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '40px' }}>
                        <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', flexWrap: 'wrap' }}>
                            <span style={{
                                display: 'inline-flex', alignItems: 'center', gap: '6px',
                                padding: '4px 12px', background: 'rgba(255,255,255,0.05)',
                                borderRadius: '4px', fontSize: '0.75rem', color: '#bd00ff',
                                fontFamily: 'monospace', border: '1px solid rgba(189, 0, 255, 0.2)'
                            }}>
                                <Tag size={12} /> PRODUCT SCIENCE
                            </span>
                            <span style={{
                                display: 'inline-flex', alignItems: 'center', gap: '6px',
                                color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', fontFamily: 'monospace'
                            }}>
                                <Calendar size={12} /> AUG 2023
                            </span>
                            <span style={{
                                display: 'inline-flex', alignItems: 'center', gap: '6px',
                                color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', fontFamily: 'monospace'
                            }}>
                                <Clock size={12} /> 6 MIN READ
                            </span>
                        </div>

                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 700,
                            lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '24px',
                            fontFamily: 'system-ui, -apple-system, sans-serif'
                        }}>
                            The $114M Friction Fix: Employment Verification Optimization
                        </h1>

                        <p style={{
                            fontSize: '1.25rem', color: 'rgba(255,255,255,0.6)',
                            lineHeight: 1.7, fontFamily: 'Georgia, serif'
                        }}>
                            How causal inference and surgical A/B testing challenged a core risk assumption, removing friction for high-quality borrowers and unlocking $114M in annualized volume.
                        </p>
                    </header>

                    <div className="article-content" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', lineHeight: 1.8, fontFamily: 'Georgia, serif' }}>

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>Context</h3>
                        <p style={{ marginBottom: '32px' }}>
                            At a major financial product company, the loan origination flow is a balance between <strong>risk mitigation</strong> and <strong>conversion</strong>. Every extra step added to verify a borrower reduces fraud risk but also increases drop-off.
                        </p>

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>The Problem</h3>
                        <p style={{ marginBottom: '32px' }}>
                            The bank assumed that <strong>Employment Verification (EV)</strong>—requiring users to upload paystubs or connect payroll providers—was a necessary evil to reduce default risk.
                            <br /><br />
                            <strong>Reality:</strong> The EV step was causing massive drop-offs in the funnel. We suspected that for many high-quality applicants (High FICO), this friction was unnecessary and costing us millions in lost loans.
                        </p>

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>The Solution</h3>

                        <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#00f3ff', marginBottom: '12px', fontFamily: 'system-ui, sans-serif' }}>Part 1: Causal Discovery</h4>
                        <p style={{ marginBottom: '24px' }}>
                            Before suggesting we remove a risk control, I needed proof. I applied <strong>causal inference techniques</strong> (using XGBoost feature importance and correlation analysis) on historical loan performance data.
                            <br /><br />
                            The finding was stark: For applicants with <strong>FICO &gt; 720</strong>, the Employment Verification status had <strong>zero correlation</strong> with default rates (p &gt; 0.05). The signal was noise.
                        </p>

                        <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#00f3ff', marginBottom: '12px', fontFamily: 'system-ui, sans-serif' }}>Part 2: Stratified Randomization Test</h4>
                        <p style={{ marginBottom: '32px' }}>
                            We couldn't just turn it off globally (too risky). I designed a <strong>stratified randomization A/B test</strong>. We isolated the "High FICO / Low Risk" segment and split them:
                            <ul style={{ marginTop: '16px' }}>
                                <li><strong>Control:</strong> Standard flow (EV Required)</li>
                                <li><strong>Treatment:</strong> Frictionless flow (EV Skipped)</li>
                            </ul>
                            Used presplit methodology to ensure statistical power with a 30% smaller sample size to minimize risk exposure during the test.
                        </p>

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>Results</h3>
                        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
                            <li style={{ marginBottom: '12px', display: 'flex', gap: '12px' }}>
                                <span style={{ color: '#22c55e' }}>➜</span> <span><strong>Conversion:</strong> Treatment group saw a massive lift, capturing <strong>300+ additional customers monthly</strong>.</span>
                            </li>
                            <li style={{ marginBottom: '12px', display: 'flex', gap: '12px' }}>
                                <span style={{ color: '#22c55e' }}>➜</span> <span><strong>Risk:</strong> No statistically significant increase in early payment defaults (EPD) in the treatment group.</span>
                            </li>
                            <li style={{ marginBottom: '12px', display: 'flex', gap: '12px' }}>
                                <span style={{ color: '#22c55e' }}>➜</span> <span><strong>Impact:</strong> $50M in realized loan volume during rollout, with a <strong>$114M annualized projection</strong>.</span>
                            </li>
                        </ul>

                        <div style={{ padding: '24px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', marginBottom: '40px' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>Technologies</h3>
                            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', fontFamily: 'monospace', fontSize: '0.9rem', color: '#bd00ff' }}>
                                <span>Python</span> <span>•</span> <span>XGBoost</span> <span>•</span> <span>Causal Inference</span> <span>•</span> <span>A/B Testing</span> <span>•</span> <span>SQL</span>
                            </div>
                        </div>

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>Lessons</h3>
                        <ol style={{ paddingLeft: '20px', marginBottom: '40px' }}>
                            <li style={{ marginBottom: '12px' }}><strong>Rigorous testing challenges "obvious" assumptions.</strong> "More verification = Less risk" seems intuitive, but data proved it wrong for specific segments.</li>
                            <li style={{ marginBottom: '12px' }}><strong>Stratified randomization is surgical.</strong> It allowed us to innovate in a high-risk environment without exposing the entire portfolio.</li>
                            <li><strong>Translate statistics into operations.</strong> The XGBoost insight wasn't just a chart; it became a decision tree rule that automatically routed users.</li>
                        </ol>

                    </div>
                </motion.div>
            </article>
        </main>
    );
};

export default EmploymentVerificationPage;
