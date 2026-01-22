import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Tag, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExperimentationArchitecturePage = () => {
    return (
        <main style={{ paddingTop: '120px', paddingBottom: '100px', backgroundColor: '#050505' }}>
            <article className="container" style={{ maxWidth: '800px' }}>
                <Link to="/" style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    color: 'rgba(255,255,255,0.4)', textDecoration: 'none', marginBottom: '48px',
                    fontSize: '0.9rem', fontFamily: 'monospace'
                }}>
                    <ArrowLeft size={16} /> /index
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
                                <Tag size={12} /> ARCHITECTURE
                            </span>
                            <span style={{
                                display: 'inline-flex', alignItems: 'center', gap: '6px',
                                color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', fontFamily: 'monospace'
                            }}>
                                <Calendar size={12} /> JAN 2024
                            </span>
                            <span style={{
                                display: 'inline-flex', alignItems: 'center', gap: '6px',
                                color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', fontFamily: 'monospace'
                            }}>
                                <Clock size={12} /> 8 MIN READ
                            </span>
                        </div>

                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 700,
                            lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '24px',
                            fontFamily: 'system-ui, -apple-system, sans-serif'
                        }}>
                            From Sequential To Parallel: Scaling Experimentation Inference
                        </h1>

                        <p style={{
                            fontSize: '1.25rem', color: 'rgba(255,255,255,0.6)',
                            lineHeight: 1.7, fontFamily: 'Georgia, serif'
                        }}>
                            A technical retrospective on re-architecting a data pipeline to reduce runtime by 75% and unlock $150M+ in revenue attribution through variance reduction.
                        </p>
                    </header>

                    <div className="article-content" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', lineHeight: 1.8, fontFamily: 'Georgia, serif' }}>

                        <p style={{ marginBottom: '32px' }}>
                            In large-scale retail experimentation, the bottleneck often shifts from <em>data collection</em> to <em>inference latency</em>. When you have tens of millions of users and dozens of concurrent experiments, naively querying transaction logs for every metric creates a massive compute debt.
                        </p>

                        <p style={{ marginBottom: '40px' }}>
                            The initial state of the system was a classic case of organic growth leading to technical debt. The analysis pipeline was running 15+ sequential queries to compute everything from revenue to basket penetration.
                        </p>

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '24px', fontFamily: 'system-ui, sans-serif', marginTop: '60px' }}>
                            The Architectural Bottleneck
                        </h3>

                        <div style={{
                            background: '#0a0a0a', padding: '32px', borderRadius: '8px',
                            border: '1px solid rgba(255,255,255,0.1)', marginBottom: '40px',
                            overflowX: 'auto'
                        }}>
                            <pre style={{ margin: 0, fontFamily: 'monospace', fontSize: '0.85rem', color: '#ef4444', lineHeight: 1.4 }}>
                                {`LEGACY ARCHITECTURE (Sequential)
Runtime: ~15 mins / experiment

[ Transactions Query ] 
        ⬇
[  Engagement Query  ] 
        ⬇
[     Margin Query   ] 
        ⬇
[      ... x12       ]
        ⬇
[   Hypothesis Test  ]

🔴 O(N) Table Scans matches metric count
🔴 High I/O overhead
🔴 Redundant "Combined_Txn" reads`}
                            </pre>
                        </div>

                        <p style={{ marginBottom: '32px' }}>
                            This sequential pattern meant that as we added more interesting metrics (e.g., Gas Rewards, Digital Coupons), the runtime grew linearly. It was unscalable.
                        </p>

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '24px', fontFamily: 'system-ui, sans-serif', marginTop: '60px' }}>
                            The Parallel Bundle Optimization
                        </h3>

                        <p style={{ marginBottom: '32px' }}>
                            We re-architected the system to treat metrics not as individual queries, but as <strong>bundles</strong> based on their source of truth. By grouping all transaction-based metrics into a single pass and parallelizing independent streams, we achieved O(1) table scans per source.
                        </p>

                        <div style={{
                            background: '#0a0a0a', padding: '32px', borderRadius: '8px',
                            border: '1px solid rgba(255,255,255,0.1)', marginBottom: '40px',
                            overflowX: 'auto'
                        }}>
                            <pre style={{ margin: 0, fontFamily: 'monospace', fontSize: '0.85rem', color: '#22c55e', lineHeight: 1.4 }}>
                                {`OPTIMIZED ARCHITECTURE (Parallel Bundles)
Runtime: ~4 mins / experiment

[ Txn Bundle ]    [ Eng Bundle ]    [ Other ]
(Rev, Mrgn, ...)  (Visits, ...)     (Gas, ...)
      │                 │               │
      └─────────┬───────┴───────────────┘
                ▼
      [   Unified Merge   ]
                ▼
      [  CUPED Variance-  ]
      [     Reduction     ]
                ▼
      [   Dashboard output ]

🟢 Single pass per massive table
🟢 Parallel execution
🟢 Pre-computation of standard deviations`}
                            </pre>
                        </div>

                        <p style={{ marginBottom: '40px' }}>
                            This approach didn't just save cloud costs; it fundamentally changed the culture. When results take 4 minutes instead of 20 (or hours of manual Excel work), engineers check them more often. Velocity increased from 3 to 8+ experiments per week.
                        </p>

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '24px', fontFamily: 'system-ui, sans-serif', marginTop: '60px' }}>
                            Impact: The $150M+ Unlock
                        </h3>

                        <p style={{ marginBottom: '32px' }}>
                            Speed is value. By reducing variance with CUPED (Controlled-Experiment Using Pre-Experiment Data), we essentially "turned down the noise" in our metrics. Lower variance means lower Minimum Detectable Effect (MDE), which means we could detect smaller wins that were previously invisible.
                        </p>

                        <p>
                            That sensitivity, combined with higher velocity, allowed us to confidently ship changes that contributed over <strong>$150M+ in attributed revenue</strong>. The system evolved from a bottleneck into a strategic asset.
                        </p>

                    </div>
                </motion.div>
            </article>
        </main>
    );
};

export default ExperimentationArchitecturePage;
