import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, ArrowRight, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const LitmusTestProtocolPage = () => {
    return (
        <main style={{ paddingTop: '120px', paddingBottom: '100px', backgroundColor: '#050505' }}>
            <article className="container" style={{ maxWidth: '800px' }}>
                <Link to="/" style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    color: 'rgba(255,255,255,0.4)', textDecoration: 'none', marginBottom: '48px',
                    fontSize: '0.9rem', fontWeight: 500
                }}>
                    <ArrowLeft size={16} /> Back to Home
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
                                borderRadius: '4px', fontSize: '0.75rem', color: '#00f3ff',
                                fontFamily: 'monospace', border: '1px solid rgba(0, 243, 255, 0.2)'
                            }}>
                                <Zap size={12} /> EXPERIMENTATION
                            </span>
                            <span style={{
                                display: 'inline-flex', alignItems: 'center', gap: '6px',
                                color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', fontFamily: 'monospace'
                            }}>
                                <Calendar size={12} /> MAR 2024
                            </span>
                            <span style={{
                                display: 'inline-flex', alignItems: 'center', gap: '6px',
                                color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', fontFamily: 'monospace'
                            }}>
                                <Clock size={12} /> 7 MIN READ
                            </span>
                        </div>

                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 700,
                            lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '24px',
                            fontFamily: 'system-ui, -apple-system, sans-serif'
                        }}>
                            The Litmus Test: How We Validated CUPED in 5 Days Without Engineering
                        </h1>

                        <p style={{
                            fontSize: '1.25rem', color: 'rgba(255,255,255,0.6)',
                            lineHeight: 1.7, fontFamily: 'Georgia, serif'
                        }}>
                            We had a choice: Spend 8 weeks building a complex statistical engine that <em>might</em> save us money, or find a way to prove it works before writing a single line of production code.
                        </p>
                    </header>

                    <div className="article-content" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', lineHeight: 1.8, fontFamily: 'Georgia, serif' }}>

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>The Core Tension</h3>
                        <p style={{ marginBottom: '32px' }}>
                            CUPED (Controlled-experiment Using Pre-experiment Data) is the "Active Noise Cancellation" of statistics. It promises to shave weeks off experiment runtimes by mathematically removing noise.
                        </p>
                        <p style={{ marginBottom: '32px' }}>
                            But there's a catch: <strong>It only works if your pre-experiment data correlates strongly with your post-experiment metrics.</strong> If it doesn't, you just built a very expensive calculator that does nothing.
                        </p>
                        <p style={{ marginBottom: '32px' }}>
                            For our platform, the stakes were high:
                        </p>
                        <ul style={{ marginBottom: '40px', fontSize: '1rem', background: 'rgba(255,255,255,0.03)', padding: '24px', borderRadius: '8px' }}>
                            <li style={{ marginBottom: '12px' }}><strong>The Cost:</strong> 6-8 weeks of Data Engineering time to rewrite query pipelines.</li>
                            <li style={{ marginBottom: '12px' }}><strong>The Risk:</strong> If correlations were weak (e.g., on low-intent pages), we'd burn 2 months for 0% gain.</li>
                            <li style={{ marginBottom: '0' }}><strong>The Standard Approach:</strong> "Build it and see." (We rejected this).</li>
                        </ul>

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '24px', fontFamily: 'system-ui, sans-serif' }}>The Solution: Simulation &gt; Speculation</h3>
                        <p style={{ marginBottom: '32px' }}>
                            We inverted the workflow. Instead of treating Power Calculation as a static planning step, we turned it into a dynamic simulation environment—a "Litmus Test."
                        </p>
                        <p style={{ marginBottom: '32px' }}>
                            By implementing the CUPED logic within a lightweight notebook <em>before</em> the experiment launched, we could perform a simple check:
                        </p>
                        <div style={{
                            padding: '24px',
                            borderLeft: '4px solid #00f3ff',
                            background: 'linear-gradient(90deg, rgba(0, 243, 255, 0.05) 0%, transparent 100%)',
                            marginBottom: '48px'
                        }}>
                            <p style={{ margin: 0, fontStyle: 'italic', color: '#fff', fontSize: '1.2rem' }}>
                                "If the simulation shows &lt;5% variance reduction on historical data, we don't build it. If it shows &gt;30%, we have a mandate."
                            </p>
                        </div>

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '24px', fontFamily: 'system-ui, sans-serif' }}>Visualizing the Math: CUPED as "Audio Mixing"</h3>
                        <p style={{ marginBottom: '32px' }}>
                            The most intuitive way to understand this isn't through formulas, but waves.
                        </p>

                        {/* Professional SVG Waveform Visualization */}
                        <div style={{
                            background: '#0a0a0a',
                            borderRadius: '12px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            marginBottom: '48px',
                            overflow: 'hidden'
                        }}>
                            <div style={{ padding: '24px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <h4 style={{ margin: 0, fontSize: '0.9rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: 'system-ui' }}>
                                    Signal Superposition
                                </h4>
                            </div>
                            <div style={{ padding: '40px 24px', position: 'relative', height: '240px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <svg width="100%" height="100%" viewBox="0 0 800 200" style={{ overflow: 'visible' }}>
                                    {/* Definitions for Gradients/Filters */}
                                    <defs>
                                        <linearGradient id="gradMetric" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="rgba(239, 68, 68, 0)" />
                                            <stop offset="50%" stopColor="rgba(239, 68, 68, 0.8)" />
                                            <stop offset="100%" stopColor="rgba(239, 68, 68, 0)" />
                                        </linearGradient>
                                        <linearGradient id="gradCovariate" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="rgba(0, 243, 255, 0)" />
                                            <stop offset="50%" stopColor="rgba(0, 243, 255, 0.5)" />
                                            <stop offset="100%" stopColor="rgba(0, 243, 255, 0)" />
                                        </linearGradient>
                                    </defs>

                                    {/* Grid Lines */}
                                    <line x1="0" y1="100" x2="800" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4" />

                                    {/* Metric Wave (Red) - Noisy */}
                                    <path
                                        d="M0,100 Q100,20 200,100 T400,100 T600,100 T800,100"
                                        fill="none"
                                        stroke="url(#gradMetric)"
                                        strokeWidth="4"
                                        style={{ mixBlendMode: 'screen' }}
                                    >
                                        <animate attributeName="d"
                                            dur="10s"
                                            repeatCount="indefinite"
                                            values="
                                            M0,100 Q100,20 200,100 T400,100 T600,100 T800,100;
                                            M0,100 Q100,180 200,100 T400,100 T600,100 T800,100;
                                            M0,100 Q100,20 200,100 T400,100 T600,100 T800,100"
                                        />
                                    </path>
                                    <text x="50" y="40" fill="#ef4444" fontSize="12" fontFamily="monospace">Raw Metric (Noisy)</text>

                                    {/* Covariate Wave (Cyan) - Correlated */}
                                    <path
                                        d="M0,100 Q100,30 200,100 T400,100 T600,100 T800,100"
                                        fill="none"
                                        stroke="url(#gradCovariate)"
                                        strokeWidth="4"
                                        strokeDasharray="4 2"
                                        style={{ mixBlendMode: 'screen', opacity: 0.6 }}
                                    >
                                        <animate attributeName="d"
                                            dur="10s"
                                            repeatCount="indefinite"
                                            values="
                                            M0,100 Q100,30 200,100 T400,100 T600,100 T800,100;
                                            M0,100 Q100,170 200,100 T400,100 T600,100 T800,100;
                                            M0,100 Q100,30 200,100 T400,100 T600,100 T800,100"
                                        />
                                    </path>
                                    <text x="50" y="60" fill="#00f3ff" fontSize="12" fontFamily="monospace">Pre-Exp History</text>

                                    {/* Result Wave (Green) - Flat */}
                                    <line x1="0" y1="100" x2="800" y2="100" stroke="#22c55e" strokeWidth="3" />
                                    <text x="650" y="90" fill="#22c55e" fontSize="12" fontFamily="monospace" fontWeight="bold">Adjusted Signal (Clean)</text>
                                </svg>
                            </div>
                            <div style={{ padding: '24px', background: 'rgba(255,255,255,0.02)', fontSize: '0.9rem', color: '#aaa', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                <p style={{ margin: 0 }}>
                                    <strong>How it works:</strong> The red line is the user's spending (highly variable). The cyan dashed line is their <em>previous</em> spending. Because they match so closely, we can mathmatically subtract the cyan from the red. The result (green) is a flat line—meaning zero variance. Any blip in the green line is now purely due to our experiment.
                                </p>
                            </div>
                        </div>

                        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '24px', borderRadius: '8px', marginBottom: '12px', textAlign: 'center', fontFamily: 'monospace', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' }}>
                            Y_adjusted = Y - θ(X - μ_X)
                        </div>
                        <div style={{ marginBottom: '32px', textAlign: 'center' }}>
                            <span style={{ display: 'inline-block', padding: '6px 12px', borderRadius: '20px', background: '#222', color: '#bbb', fontSize: '0.85rem', border: '1px solid #333' }}>
                                ⬇ In Plain English ⬇
                            </span>
                        </div>
                        <p style={{ marginBottom: '48px', padding: '0 16px', fontStyle: 'italic', textAlign: 'center', color: 'rgba(255,255,255,0.7)' }}>
                            "Take what a user just did (Y), and subtract what we <strong>expected</strong> them to do based on history (X). The remainder is the true effect of your test."
                        </p>


                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '24px', fontFamily: 'system-ui, sans-serif' }}>The Decision Engine</h3>
                        <p style={{ marginBottom: '32px' }}>
                            We didn't just validate CUPED once; we built a router. This decision tree now runs automatically before every test launch.
                        </p>

                        {/* Refired Decision Tree */}
                        <div style={{
                            marginBottom: '64px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '24px',
                            fontFamily: 'system-ui, sans-serif'
                        }}>
                            {/* Step 1 */}
                            <div style={{ textAlign: 'center', position: 'relative' }}>
                                <div style={{ border: '1px solid rgba(255,255,255,0.2)', padding: '12px 24px', borderRadius: '50px', display: 'inline-block', fontSize: '0.9rem', color: '#fff', background: '#000' }}>
                                    New Experiment Request
                                </div>
                                <div style={{ height: '24px', width: '1px', background: 'rgba(255,255,255,0.2)', margin: '0 auto' }}></div>
                            </div>

                            {/* Node 1 */}
                            <div style={{
                                background: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                padding: '24px',
                                borderRadius: '16px',
                                width: '100%',
                                maxWidth: '500px',
                                position: 'relative'
                            }}>
                                <h4 style={{ margin: '0 0 16px 0', fontSize: '1.1rem', color: '#fff', textAlign: 'center' }}>
                                    Is Variance Reduction &gt; 5%?
                                </h4>
                                <div style={{ display: 'flex', gap: '16px' }}>
                                    <div style={{ flex: 1, padding: '16px', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '8px', border: '1px solid rgba(239, 68, 68, 0.2)', textAlign: 'center' }}>
                                        <div style={{ color: '#ef4444', fontWeight: 700, marginBottom: '8px' }}>NO</div>
                                        <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>Use Standard Stats</div>
                                    </div>
                                    <div style={{ flex: 1, padding: '16px', background: 'rgba(34, 197, 94, 0.1)', borderRadius: '8px', border: '1px solid rgba(34, 197, 94, 0.2)', textAlign: 'center' }}>
                                        <div style={{ color: '#22c55e', fontWeight: 700, marginBottom: '8px' }}>YES</div>
                                        <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>Check Data Depth</div>
                                    </div>
                                </div>
                            </div>

                            <div style={{ height: '24px', width: '1px', background: 'rgba(255,255,255,0.2)', margin: '0 auto' }}></div>

                            {/* Node 2 */}
                            <div style={{
                                background: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                padding: '24px',
                                borderRadius: '16px',
                                width: '100%',
                                maxWidth: '500px',
                                position: 'relative'
                            }}>
                                <h4 style={{ margin: '0 0 16px 0', fontSize: '1.1rem', color: '#fff', textAlign: 'center' }}>
                                    Is User History &gt; 90 Days?
                                </h4>
                                <div style={{ display: 'flex', gap: '16px' }}>
                                    <div style={{ flex: 1, padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
                                        <div style={{ color: '#aaa', fontWeight: 700, marginBottom: '8px' }}>NO</div>
                                        <div style={{ fontSize: '0.85rem', color: '#fff' }}>Basic CUPED</div>
                                    </div>
                                    <div style={{ flex: 1, padding: '16px', background: 'rgba(0, 243, 255, 0.1)', borderRadius: '8px', border: '1px solid rgba(0, 243, 255, 0.2)', textAlign: 'center' }}>
                                        <div style={{ color: '#00f3ff', fontWeight: 700, marginBottom: '8px' }}>YES</div>
                                        <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.9)' }}>Time-Weighted CUPED</div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '32px', fontFamily: 'system-ui, sans-serif' }}>The ROI</h3>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '48px' }}>
                            <div style={{ background: '#111', padding: '32px', borderRadius: '16px', border: '1px solid #222' }}>
                                <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Time to Value</div>
                                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>5 Days</div>
                                <div style={{ color: '#22c55e', fontSize: '0.9rem' }}>vs 8 weeks projected</div>
                            </div>

                            <div style={{ background: '#111', padding: '32px', borderRadius: '16px', border: '1px solid #222' }}>
                                <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Compute Savings</div>
                                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>30%</div>
                                <div style={{ color: '#aaa', fontSize: '0.9rem' }}>reduction in query costs</div>
                            </div>

                            <div style={{ background: '#111', padding: '32px', borderRadius: '16px', border: '1px solid #222' }}>
                                <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Metric Sensitivity</div>
                                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>+40%</div>
                                <div style={{ color: '#aaa', fontSize: '0.9rem' }}>gained on checkout tests</div>
                            </div>
                        </div>

                        <Link to="/articles/experimentation-architecture" style={{
                            display: 'flex', alignItems: 'center', gap: '16px',
                            background: 'rgba(255,255,255,0.05)', padding: '24px',
                            borderRadius: '8px', textDecoration: 'none',
                            border: '1px solid rgba(255,255,255,0.1)',
                            marginTop: '64px', transition: 'border-color 0.2s'
                        }}>
                            <div style={{ flex: 1 }}>
                                <span style={{
                                    display: 'block', fontSize: '0.875rem',
                                    color: '#bd00ff', marginBottom: '8px', fontFamily: 'monospace'
                                }}>
                                    READ THE ARCHITECTURE
                                </span>
                                <h4 style={{
                                    fontSize: '1.25rem', fontWeight: 600,
                                    color: '#fff', margin: 0
                                }}>
                                    From Sequential To Parallel: Scaling Experimentation Inference
                                </h4>
                            </div>
                            <ArrowRight color="rgba(255,255,255,0.6)" />
                        </Link>

                    </div>
                </motion.div>
            </article>
        </main>
    );
};

export default LitmusTestProtocolPage;
