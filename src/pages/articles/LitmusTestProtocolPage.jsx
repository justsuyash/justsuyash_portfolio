import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Tag, Clock, ArrowRight, GitBranch, Zap, Shield } from 'lucide-react';
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
                            lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '24px',
                            fontFamily: 'system-ui, -apple-system, sans-serif'
                        }}>
                            The "Litmus Test" Protocol: De-Risking Advanced Statistics
                        </h1>

                        <p style={{
                            fontSize: '1.25rem', color: 'rgba(255,255,255,0.6)',
                            lineHeight: 1.7, fontFamily: 'Georgia, serif'
                        }}>
                            Why we validated CUPED in a Power Calculator before touching the Production Engine.
                        </p>
                    </header>

                    <div className="article-content" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', lineHeight: 1.8, fontFamily: 'Georgia, serif' }}>


                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>The Core Insight</h3>
                        <p style={{ marginBottom: '32px' }}>
                            CUPED (Controlled-experiment Using Pre-experiment Data) is a powerful variance reduction technique—<em>when the pre-experiment data correlates strongly with your post-experiment metrics.</em>
                        </p>
                        <p style={{ marginBottom: '32px' }}>
                            The problem: You don't know if it will work for your data until you try it. And the standard approach is to integrate it into production first, then measure the results.
                        </p>
                        <p style={{ marginBottom: '32px' }}>
                            For a Fortune 100 experimentation platform processing 8+ concurrent tests per week, this "build first, validate later" approach carries hidden costs:
                        </p>
                        <ul style={{ marginBottom: '32px' }}>
                            <li style={{ marginBottom: '12px' }}><strong>6-8 weeks</strong> of engineering effort to rewrite query pipelines.</li>
                            <li style={{ marginBottom: '12px' }}><strong>Ongoing compute overhead</strong> for every test, even if CUPED adds no value.</li>
                            <li style={{ marginBottom: '12px' }}><strong>Opportunity cost</strong> of engineering time that could go toward proven high-ROI work.</li>
                        </ul>

                        <div style={{
                            padding: '24px', borderLeft: '4px solid #00f3ff',
                            background: 'rgba(0, 243, 255, 0.05)', marginBottom: '40px'
                        }}>
                            <p style={{ marginBottom: '16px', fontWeight: 600, color: '#00f3ff' }}>The Question:</p>
                            <p style={{ margin: 0, fontStyle: 'italic' }}>
                                How do we validate a statistical approach <em>before</em> committing engineering resources?
                            </p>
                        </div>

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>The Solution: The Power Calc "Litmus Test"</h3>
                        <p style={{ marginBottom: '32px' }}>
                            We inverted the workflow. Instead of treating Power Calculation as a static planning step, we turned it into a dynamic simulation environment.
                        </p>
                        <p style={{ marginBottom: '32px' }}>
                            By implementing the entire CUPED logic within the Power Calc notebook, we created a low-cost "Litmus Test."
                        </p>
                        <ul style={{ marginBottom: '40px' }}>
                            <li style={{ marginBottom: '16px' }}><strong>The Check:</strong> Before every experiment, we run the Power Calc. It fetches the actual pre-experiment history of the target population.</li>
                            <li style={{ marginBottom: '16px' }}><strong>The Gate:</strong> If the notebook shows &lt;5% variance reduction, we simply don't use CUPED for that test. We save the compute cost and complexity.</li>
                            <li style={{ marginBottom: '16px' }}><strong>The Win:</strong> If it shows &gt;30% reduction, we have mathematical proof that the engineering investment for this specific test is worth it.</li>
                        </ul>
                        <p style={{ marginBottom: '48px', fontWeight: 600 }}>
                            This transforms Power Calc from a "guess" into a "guarantee."
                        </p>

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>The Intuitive Mental Model: CUPED as "Superposition"</h3>
                        <p style={{ marginBottom: '32px' }}>
                            Mathematically, CUPED (Controlled-Experiment Using Pre-Experiment Data) uses the correlation between pre- and post-experiment metrics to reduce variance.
                            <br /><br />
                            Visually, however, the best way to understand it is Superposition—or more commonly, Active Noise Cancellation.
                        </p>
                        <p style={{ marginBottom: '32px' }}>
                            Imagine your metric (Revenue) as a waveform. It has peaks and valleys caused by natural user variation (some users are just big spenders). This is "Noise."
                        </p>

                        {/* Visual Diagram: Noise Cancellation */}
                        <div style={{
                            background: '#0a0a0a', padding: '40px', borderRadius: '12px',
                            border: '1px solid rgba(255,255,255,0.1)', marginBottom: '40px'
                        }}>
                            <h4 style={{ fontSize: '0.9rem', color: '#888', textTransform: 'uppercase', marginBottom: '24px', letterSpacing: '1px' }}>Diagram: The Noise Cancellation Effect</h4>

                            {/* Waveform 1: Signal */}
                            <div style={{ marginBottom: '24px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#fff', marginBottom: '8px' }}>
                                    <span>Signal (Test Spend)</span>
                                    <span style={{ color: '#ef4444' }}>High Variance</span>
                                </div>
                                <div style={{ height: '40px', display: 'flex', alignItems: 'flex-end', gap: '2px' }}>
                                    {[20, 45, 80, 50, 25, 60, 90, 40, 30, 70, 45, 20].map((h, i) => (
                                        <div key={i} style={{ width: '100%', height: `${h}%`, background: '#ef4444', opacity: 0.7, borderRadius: '2px 2px 0 0' }} />
                                    ))}
                                </div>
                            </div>

                            {/* Waveform 2: Covariate */}
                            <div style={{ marginBottom: '24px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#fff', marginBottom: '8px' }}>
                                    <span>Covariate (Pre-Test Spend)</span>
                                    <span style={{ color: '#ef4444' }}>Similar "Noise"</span>
                                </div>
                                <div style={{ height: '40px', display: 'flex', alignItems: 'flex-end', gap: '2px', borderBottom: '1px solid #333' }}>
                                    {[18, 42, 78, 48, 22, 58, 88, 38, 28, 68, 42, 18].map((h, i) => (
                                        <div key={i} style={{ width: '100%', height: `${h}%`, background: '#ef4444', opacity: 0.4, borderRadius: '2px 2px 0 0' }} />
                                    ))}
                                </div>
                            </div>

                            {/* Waveform 3: CUPED Result */}
                            <div style={{ marginBottom: '12px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#fff', marginBottom: '8px' }}>
                                    <span>CUPED Result (Signal - Covariate)</span>
                                    <span style={{ color: '#22c55e' }}>Zero Noise</span>
                                </div>
                                <div style={{ height: '40px', display: 'flex', alignItems: 'center', gap: '2px', position: 'relative' }}>
                                    <div style={{ position: 'absolute', width: '100%', height: '1px', background: 'rgba(255,255,255,0.1)' }} />
                                    {[2, 3, 2, 2, 3, 2, 2, 2, 2, 2, 3, 2].map((h, i) => (
                                        <div key={i} style={{ width: '100%', height: `4px`, background: '#22c55e', borderRadius: '2px' }} />
                                    ))}
                                </div>
                            </div>
                            <p style={{ margin: 0, fontSize: '0.8rem', color: '#666', fontStyle: 'italic', marginTop: '16px' }}>
                                CUPED acts like Noise Canceling Headphones. It uses the pre-existing 'noise' of user habits to cancel out variance, leaving only the experimental signal.
                            </p>
                        </div>

                        <p style={{ marginBottom: '32px' }}>
                            <strong>The Signal (Y):</strong> This is the user's behavior during the experiment. It's noisy.
                            <br />
                            <strong>The Covariate (X):</strong> This is the user's behavior before the experiment. Because behavior is sticky, this wave looks very similar to the Signal.
                            <br />
                            <strong>The Superposition (Subtraction):</strong> CUPED effectively "flips" the Covariate wave and superimposes it onto the Signal.
                        </p>

                        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '24px', borderRadius: '8px', marginBottom: '24px', textAlign: 'center', fontFamily: 'monospace' }}>
                            $$Y_{adjusted} = Y - \theta(X - \mu_X)$$
                        </div>
                        <div style={{ marginBottom: '32px', padding: '16px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                <li style={{ marginBottom: '8px' }}><strong>Y</strong> = Post-experiment metric (e.g., Revenue during test)</li>
                                <li style={{ marginBottom: '8px' }}><strong>X</strong> = Pre-experiment metric (e.g., Revenue before test)</li>
                                <li style={{ marginBottom: '8px' }}><strong>μ_X</strong> = Mean of pre-experiment metric across population</li>
                                <li><strong>θ</strong> = Optimal coefficient (chosen to minimize variance)</li>
                            </ul>
                        </div>

                        <p style={{ marginBottom: '32px' }}>
                            Where the Covariate "zigs," we know the Signal will likely "zig." By subtracting the expected movement, we flatten the wave. The "peaks" (high variance) cancel out, leaving only the new information generated by the experiment.
                        </p>
                        <p style={{ marginBottom: '40px' }}>
                            <strong>Why this matters:</strong> We proved via our Litmus Test that for high-intent pages (Checkout), the waves match perfectly (high correlation), leading to massive noise cancellation. For low-intent pages (Homepage), the waves are out of sync, meaning Basic CUPED fails.
                        </p>


                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>The "Meta-Optimization": Automated Flavor Selection</h3>
                        <p style={{ marginBottom: '32px' }}>
                            Because our "Litmus Test" notebook ran hundreds of simulations across different segments (using the segmentation_powercal notebook ), we didn't just validate CUPED; we generated a dataset.
                        </p>
                        <p style={{ marginBottom: '24px' }}>
                            We logged the performance of three different CUPED "Flavors" for every run:
                        </p>
                        <ul style={{ marginBottom: '32px' }}>
                            <li><strong>Basic:</strong> (Pre-Exp Revenue)</li>
                            <li><strong>Multi-Covariate:</strong> (Pre-Exp Revenue + Order Count)</li>
                            <li><strong>Time-Weighted:</strong> (Recent behavior weighted heavier)</li>
                        </ul>
                        <p style={{ marginBottom: '40px' }}>
                            We fed this data into a Decision Tree to automate the engineering strategy.
                        </p>

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>The Decision Tree Router</h3>
                        <p style={{ marginBottom: '32px' }}>
                            Instead of forcing one expensive model on all experiments, we use the "Litmus" results to route traffic.
                        </p>

                        {/* Decision Logic Table */}
                        <div style={{ overflowX: 'auto', marginBottom: '40px' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', textAlign: 'left' }}>
                                <thead>
                                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
                                        <th style={{ padding: '16px', color: '#888' }}>Condition</th>
                                        <th style={{ padding: '16px', color: '#22c55e' }}>YES</th>
                                        <th style={{ padding: '16px', color: '#ef4444' }}>NO</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                        <td style={{ padding: '16px', color: '#fff' }}><strong>Is Variance Reduction &gt; 5%?</strong><br /><span style={{ fontSize: '0.8em', color: '#666' }}>e.g. Revenue (Volatile) vs CVR (Stable)</span></td>
                                        <td style={{ padding: '16px', color: 'rgba(255,255,255,0.8)' }}>Proceed to Node 2</td>
                                        <td style={{ padding: '16px', color: 'rgba(255,255,255,0.8)' }}><strong>Stop.</strong> Use Standard Stats<br /><span style={{ fontSize: '0.8em', color: '#666' }}>(Save Compute)</span></td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                        <td style={{ padding: '16px', color: '#fff' }}><strong>Is User History Deep?</strong><br /><span style={{ fontSize: '0.8em', color: '#666' }}>&gt; 3 months of data</span></td>
                                        <td style={{ padding: '16px', color: '#00f3ff', fontWeight: 600 }}>Use Time-Weighted CUPED</td>
                                        <td style={{ padding: '16px', color: 'rgba(255,255,255,0.8)' }}>Proceed to Node 3</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '16px', color: '#fff' }}><strong>Is there a Secondary Correlate?</strong><br /><span style={{ fontSize: '0.8em', color: '#666' }}>e.g. Add-to-Cart</span></td>
                                        <td style={{ padding: '16px', color: '#bd00ff', fontWeight: 600 }}>Use Multi-Covariate CUPED</td>
                                        <td style={{ padding: '16px', color: '#fff', fontWeight: 600 }}>Use Basic CUPED</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Visual Diagram: Decision Tree Router */}
                        <div style={{
                            background: '#0a0a0a', padding: '40px', borderRadius: '12px',
                            border: '1px solid rgba(255,255,255,0.1)', marginBottom: '40px',
                            fontFamily: 'monospace', fontSize: '0.85rem'
                        }}>
                            <h4 style={{ fontSize: '0.9rem', color: '#888', textTransform: 'uppercase', marginBottom: '24px', letterSpacing: '1px', fontFamily: 'system-ui' }}>Diagram: The "Litmus" Decision Architecture</h4>

                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                                {/* Start */}
                                <div style={{ border: '1px solid #fff', padding: '8px 16px', borderRadius: '6px' }}>New Experiment Request</div>
                                <div style={{ color: '#666' }}>↓</div>
                                <div style={{ border: '1px dashed #fff', padding: '8px 16px', borderRadius: '6px' }}>Query Power Calc Logs</div>
                                <div style={{ color: '#666' }}>↓</div>

                                {/* Node 1 */}
                                <div style={{ background: '#1a1a1a', padding: '12px', borderRadius: '8px', border: '1px solid #333', textAlign: 'center', width: '100%', maxWidth: '400px' }}>
                                    <div style={{ color: '#bd00ff', marginBottom: '4px' }}>Is Variance Reduction &gt; 5%?</div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px' }}>
                                        <div style={{ textAlign: 'center' }}>
                                            <span style={{ color: '#ef4444', fontSize: '0.7rem' }}>NO</span>
                                            <div style={{ marginTop: '8px', border: '1px solid #333', padding: '6px', borderRadius: '4px', background: '#000' }}>
                                                Stats: Standard Frequentist<br />
                                                <span style={{ color: '#666' }}>(Save Compute)</span>
                                            </div>
                                        </div>
                                        <div style={{ textAlign: 'center' }}>
                                            <span style={{ color: '#22c55e', fontSize: '0.7rem' }}>YES</span>
                                            <div style={{ fontSize: '0.7rem', marginTop: '8px', color: '#888' }}> Check Best Flavor</div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ color: '#22c55e' }}>↓</div>

                                {/* Node 2 */}
                                <div style={{ background: '#1a1a1a', padding: '12px', borderRadius: '8px', border: '1px solid #333', textAlign: 'center', width: '100%', maxWidth: '400px' }}>
                                    <div style={{ color: '#00f3ff', marginBottom: '4px' }}>Deep User History? (&gt;3mo)</div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px' }}>
                                        <div style={{ textAlign: 'center', width: '45%' }}>
                                            <span style={{ color: '#22c55e', fontSize: '0.7rem' }}>YES</span>
                                            <div style={{ marginTop: '8px', border: '1px solid #00f3ff', padding: '6px', borderRadius: '4px', background: '#000', color: '#00f3ff' }}>
                                                Time-Weighted CUPED<br />
                                                <span style={{ color: 'rgba(0, 243, 255, 0.5)' }}>(Advanced Pipeline)</span>
                                            </div>
                                        </div>
                                        <div style={{ textAlign: 'center', width: '45%' }}>
                                            <span style={{ color: '#ef4444', fontSize: '0.7rem' }}>NO</span>
                                            <div style={{ marginTop: '8px', border: '1px solid #333', padding: '6px', borderRadius: '4px', background: '#000' }}>
                                                Basic / Multi-Covariate<br />
                                                <span style={{ color: '#666' }}>(Simple SQL)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '24px', fontFamily: 'system-ui, sans-serif' }}>Results: Engineering ROI</h3>
                        <p style={{ marginBottom: '24px' }}>
                            By using the Power Calculator as a "Litmus Test," we achieved:
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '48px' }}>
                            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '24px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <h4 style={{ color: '#00f3ff', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}><Clock size={16} /> Time Savings</h4>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    <li>Reduced feature validation cycles from <strong>8 weeks → 2 days</strong>.</li>
                                    <li>Avoided monts of speculative engineering on low-ROI segments.</li>
                                </ul>
                            </div>

                            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '24px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <h4 style={{ color: '#bd00ff', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}><Zap size={16} /> Statistical Gains</h4>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    <li><strong>Homepage Tests:</strong> 15% variance reduction (Time-Weighted required).</li>
                                    <li><strong>Checkout Tests:</strong> 40% variance reduction (Basic was sufficient).</li>
                                </ul>
                            </div>

                            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '24px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <h4 style={{ color: '#22c55e', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}><Shield size={16} /> Cost Efficiency</h4>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    <li><strong>30% Compute Reduction</strong> by routing low-value tests away from expensive pipelines.</li>
                                    <li>80% of infrastructure investment went to high-ROI segments only.</li>
                                </ul>
                            </div>
                        </div>

                        <div style={{
                            padding: '32px', background: 'rgba(34, 197, 94, 0.05)',
                            borderRadius: '8px', borderLeft: '4px solid #22c55e', marginBottom: '40px'
                        }}>
                            <p style={{ margin: 0, fontStyle: 'italic', fontSize: '1.1rem' }}>
                                "We didn't just reduce variance; we reduced wasted engineering effort. The Litmus Test transformed Power Calculation from a planning formality into a strategic decision gate."
                            </p>
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
