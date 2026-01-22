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

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>Context</h3>
                        <p style={{ marginBottom: '32px' }}>
                            Fortune 100 retailer, tens of millions of shoppers, dozens of concurrent experiments. The challenge was to scale from 3 to 8+ tests/week while maintaining statistical rigor.
                        </p>

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>The Problem</h3>
                        <p style={{ marginBottom: '32px' }}>
                            Legacy system: 15+ sequential queries per experiment = ~15 min runtime. As metrics increased, latency scaled linearly toward 25-30 minutes.
                            <br /><br />
                            <strong>Bottleneck:</strong> Business needed 8+ concurrent experiments per week = impossible at 15 min/test.
                        </p>

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
🔴 High I/O overhead & Redundant reads`}
                            </pre>
                        </div>

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>The Solution</h3>

                        <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#00f3ff', marginBottom: '12px', fontFamily: 'system-ui, sans-serif' }}>Part 1: Parallel Metric Bundles</h4>
                        <p style={{ marginBottom: '24px' }}>
                            We re-architected the system to treat metrics not as individual queries, but as <strong>bundles</strong> based on their source. By grouping all transaction-based metrics into a single pass and parallelizing independent streams, we reduced runtime to ~4 minutes (75% reduction).
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
🟢 Parallel execution & Pre-computation`}
                            </pre>
                        </div>

                        <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#00f3ff', marginBottom: '12px', fontFamily: 'system-ui, sans-serif' }}>Part 2: CUPED Variance Reduction</h4>
                        <p style={{ marginBottom: '32px' }}>
                            Implemented CUPED (Controlled-Experiment Using Pre-Experiment Data) using pre-experiment user behavior as covariates to reduce noise. This resulted in a <strong>30% lower Minimum Detectable Effect (MDE)</strong>, allowing us to shorten test duration from 6-8 weeks to 3-4 weeks.
                        </p>

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>Results</h3>
                        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
                            <li style={{ marginBottom: '12px', display: 'flex', gap: '12px' }}>
                                <span style={{ color: '#22c55e' }}>➜</span> <span><strong>Inference Time:</strong> Reduced from 15 min to 4 min.</span>
                            </li>
                            <li style={{ marginBottom: '12px', display: 'flex', gap: '12px' }}>
                                <span style={{ color: '#22c55e' }}>➜</span> <span><strong>Velocity:</strong> Scaled from 3 to 8+ tests/week.</span>
                            </li>
                            <li style={{ marginBottom: '12px', display: 'flex', gap: '12px' }}>
                                <span style={{ color: '#22c55e' }}>➜</span> <span><strong>Sensitivity:</strong> Can detect 0.5% lifts (vs 1.5% before).</span>
                            </li>
                            <li style={{ marginBottom: '12px', display: 'flex', gap: '12px' }}>
                                <span style={{ color: '#22c55e' }}>➜</span> <span><strong>Impact:</strong> $150M+ in attributed revenue enabled by velocity + sensitivity.</span>
                            </li>
                        </ul>

                        <div style={{ padding: '24px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', marginBottom: '40px' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>Technologies</h3>
                            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', fontFamily: 'monospace', fontSize: '0.9rem', color: '#bd00ff' }}>
                                <span>Python</span> <span>•</span> <span>PySpark</span> <span>•</span> <span>GCP BigQuery</span> <span>•</span> <span>Bayesian Statistics</span> <span>•</span> <span>CUPED</span>
                            </div>
                        </div>

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>Lessons</h3>
                        <ol style={{ paddingLeft: '20px', marginBottom: '40px' }}>
                            <li style={{ marginBottom: '12px' }}><strong>O(1) table scans force good architecture.</strong> Constraints drive better design than unlimited compute.</li>
                            <li style={{ marginBottom: '12px' }}><strong>Variance reduction compounds with velocity.</strong> Lower noise means faster tests, which means more tests, which means more learning.</li>
                            <li><strong>Infrastructure quality enables organizational velocity.</strong> You can't change culture if the tools are slow.</li>
                        </ol>

                    </div>
                </motion.div>
            </article>
        </main>
    );
};

export default ExperimentationArchitecturePage;
