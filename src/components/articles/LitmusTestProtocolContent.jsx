"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, ArrowRight, Zap } from 'lucide-react';
import Link from 'next/link';
import NewsletterSignup from '../NewsletterSignup';

const LitmusTestProtocolContent = () => {
    return (
        <main style={{ paddingTop: '120px', paddingBottom: '100px', backgroundColor: '#050505' }}>
            <article className="container" style={{ maxWidth: '800px' }}>
                <Link href="/" style={{
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
                            The Litmus Test: How I Validated CUPED in 5 Days (Approved by Industry Leaders)
                        </h1>

                        <p style={{
                            fontSize: '1.25rem', color: 'rgba(255,255,255,0.6)',
                            lineHeight: 1.7, fontFamily: 'Georgia, serif'
                        }}>
                            I had a theory about how to save my company weeks of wasted engineering time, but I needed to know if it would hold up against the industry's best.
                        </p>
                    </header>

                    <div className="article-content" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', lineHeight: 1.8, fontFamily: 'Georgia, serif' }}>

                        <p style={{ marginBottom: '32px' }}>
                            So, I bought a ticket to the <a href="https://ide.mit.edu/events/2025-conference-on-digital-experimentation-mit/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'underline', textDecorationColor: '#00f3ff' }}>MIT Conference on Digital Experimentation (Code) 2025</a> in Boston. My goal was simple: find the smartest product leaders and data scientists from companies like <strong>DataDog, OpenAI, Wayfair, and Meta</strong>, and ask them to tear my protocol apart.
                        </p>
                        <p style={{ marginBottom: '32px' }}>
                            I didn't want to just "build and see." I wanted to know how the giants validate complex statistical engines before writing a single line of production code.
                        </p>
                        <p style={{ marginBottom: '32px' }}>
                            After connecting with presenters and validating the approach with peers who manage some of the world's largest <Link href="/articles/experimentation-architecture" style={{ color: '#fff', textDecoration: 'underline', textDecorationColor: '#00f3ff' }}>experimentation platforms</Link>, I confirmed that my method—what I call the "Litmus Test"—wasn't just a hack. It was a necessary filter.
                        </p>
                        <p style={{ marginBottom: '48px' }}>
                            Here is the exact protocol I discussed with them, and how it saved us 8 weeks of work.
                        </p>

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>The Core Tension</h3>
                        <p style={{ marginBottom: '32px' }}>
                            We had a choice: Spend 8 weeks building a complex statistical engine that <em>might</em> save us money, or find a way to prove it works first.
                        </p>
                        <p style={{ marginBottom: '32px' }}>
                            <a href="https://exp-platform.com/Documents/2013-CUPED.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'underline', textDecorationColor: '#00f3ff' }}>CUPED (Controlled-experiment Using Pre-experiment Data)</a> is essentially the "Active Noise Cancellation" of statistics. It promises to shave weeks off experiment runtimes by mathematically removing noise.
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
                            We inverted the workflow. Instead of treating Power Calculation as a static planning step, we turned it into a dynamic simulation environment.
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

                                    {/* Metric Wave (Red) - Noisy & High Amplitude */}
                                    <path
                                        d="M0,100 Q100,0 200,100 T400,100 T600,100 T800,100"
                                        fill="none"
                                        stroke="url(#gradMetric)"
                                        strokeWidth="4"
                                        style={{ mixBlendMode: 'screen', filter: 'drop-shadow(0 0 8px rgba(239,68,68,0.5))' }}
                                    >
                                        <animate attributeName="d"
                                            dur="8s"
                                            repeatCount="indefinite"
                                            values="
                                            M0,100 Q100,0 200,100 T400,100 T600,100 T800,100;
                                            M0,100 Q100,200 200,100 T400,100 T600,100 T800,100;
                                            M0,100 Q100,0 200,100 T400,100 T600,100 T800,100"
                                        />
                                    </path>
                                    <text x="50" y="30" fill="#ef4444" fontSize="12" fontFamily="monospace" fontWeight="bold">Raw Metric (Noisy)</text>

                                    {/* Covariate Wave (Cyan) - Correlated but visibly distinct */}
                                    <path
                                        d="M0,100 Q100,30 200,100 T400,100 T600,100 T800,100"
                                        fill="none"
                                        stroke="url(#gradCovariate)"
                                        strokeWidth="3"
                                        strokeDasharray="6 4"
                                        style={{ mixBlendMode: 'screen', opacity: 0.8 }}
                                    >
                                        <animate attributeName="d"
                                            dur="8s"
                                            repeatCount="indefinite"
                                            values="
                                            M0,100 Q100,30 200,100 T400,100 T600,100 T800,100;
                                            M0,100 Q100,170 200,100 T400,100 T600,100 T800,100;
                                            M0,100 Q100,30 200,100 T400,100 T600,100 T800,100"
                                        />
                                    </path>
                                    <text x="50" y="50" fill="#00f3ff" fontSize="12" fontFamily="monospace">Pre-Exp History</text>

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

                        <div style={{ marginBottom: '64px' }}>
                            <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>
                                The Visual Misconception: Height vs. Width
                            </h4>
                            <p style={{ marginBottom: '16px' }}>
                                We often think a "taller" peak means a stronger effect, but in probability distributions, <strong>height is just a side effect of width</strong>.
                            </p>
                            <p style={{ marginBottom: '16px' }}>
                                Because the total area under the curve must always equal 1 (100% probability), when you squeeze the variance (make the curve skinnier), the peak is forced to grow taller to compensate.
                            </p>
                            <p>
                                CUPED doesn't inherently boost the signal; it <strong>compresses the scatter</strong>. That makes it easier to see that the distributions are different, which tells us if the lift is real.
                            </p>
                        </div>

                        {/* Bell Curve Visualization */}
                        <div style={{
                            background: '#0a0a0a',
                            borderRadius: '12px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            marginBottom: '64px',
                            overflow: 'hidden'
                        }}>
                            <div style={{ padding: '24px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <h4 style={{ margin: 0, fontSize: '0.9rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: 'system-ui' }}>
                                    Variance Reduction Visualized
                                </h4>
                            </div>
                            <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
                                {/* Before */}
                                <div>
                                    <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginBottom: '8px', fontFamily: 'monospace' }}>BEFORE CUPED (High Variance)</div>
                                    <svg width="100%" height="120" viewBox="0 0 600 120" style={{ overflow: 'visible' }}>
                                        {/* Axes */}
                                        <line x1="0" y1="120" x2="600" y2="120" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

                                        {/* Wide Bell Curve */}
                                        <path
                                            d="M50,120 Q150,120 200,80 Q300,0 400,80 Q450,120 550,120"
                                            fill="rgba(239, 68, 68, 0.1)"
                                            stroke="#ef4444"
                                            strokeWidth="2"
                                        />

                                        {/* Overlapping Curve (Control) */}
                                        <path
                                            d="M70,120 Q170,120 220,85 Q320,10 420,85 Q470,120 570,120"
                                            fill="none"
                                            stroke="rgba(255, 255, 255, 0.3)"
                                            strokeWidth="2"
                                            strokeDasharray="4 4"
                                        />

                                        <text x="300" y="145" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="10">Wide Scatter = Hard to separate</text>
                                    </svg>
                                </div>

                                {/* After */}
                                <div>
                                    <div style={{ fontSize: '0.8rem', color: '#22c55e', marginBottom: '8px', fontFamily: 'monospace' }}>AFTER CUPED (Low Variance)</div>
                                    <svg width="100%" height="120" viewBox="0 0 600 120" style={{ overflow: 'visible' }}>
                                        {/* Axes */}
                                        <line x1="0" y1="120" x2="600" y2="120" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

                                        {/* Narrow, Tall Bell Curve */}
                                        <path
                                            d="M150,120 Q220,120 250,60 Q300,-60 350,60 Q380,120 450,120"
                                            fill="rgba(34, 197, 94, 0.1)"
                                            stroke="#22c55e"
                                            strokeWidth="2"
                                        />

                                        {/* Control Curve (Shifted) */}
                                        <path
                                            d="M170,120 Q240,120 270,60 Q320,-50 370,60 Q400,120 470,120"
                                            fill="none"
                                            stroke="rgba(255, 255, 255, 0.3)"
                                            strokeWidth="2"
                                            strokeDasharray="4 4"
                                        />

                                        <text x="300" y="145" textAnchor="middle" fill="#22c55e" fontSize="10">Compressed Scatter = Clear Separation</text>

                                        {/* Annotation Line */}
                                        <line x1="300" y1="0" x2="320" y2="10" stroke="#fff" strokeWidth="1" />
                                    </svg>
                                </div>
                            </div>
                        </div>


                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '24px', fontFamily: 'system-ui, sans-serif' }}>The Decision Engine</h3>
                        <p style={{ marginBottom: '32px' }}>
                            We didn't just validate CUPED once; we built <strong>CUPED Profiles</strong>. This decision tree now runs automatically before every test launch to determine if the "Litmus Test" passes.
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

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '32px' }}>
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

                        <p style={{
                            color: 'rgba(255,255,255,0.8)',
                            fontSize: '1.2rem',
                            fontStyle: 'italic',
                            marginBottom: '48px',
                            borderLeft: '4px solid #bd00ff',
                            paddingLeft: '24px'
                        }}>
                            "This was the story I shared at MIT. It wasn't about the complexity of the math, but the audacity to simulate it first."
                        </p>

                        {/* MIT CODE Validation Callout */}
                        <div style={{
                            background: 'linear-gradient(145deg, rgba(0, 243, 255, 0.08) 0%, rgba(189, 0, 255, 0.05) 100%)',
                            border: '1px solid rgba(0, 243, 255, 0.2)',
                            borderRadius: '16px',
                            padding: '32px',
                            marginBottom: '48px',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: '-50px',
                                right: '-50px',
                                width: '150px',
                                height: '150px',
                                background: 'radial-gradient(circle, rgba(0, 243, 255, 0.15) 0%, transparent 70%)',
                                borderRadius: '50%',
                                pointerEvents: 'none'
                            }} />
                            <h4 style={{
                                fontSize: '1.1rem',
                                fontWeight: 700,
                                color: '#00f3ff',
                                marginBottom: '12px',
                                fontFamily: 'system-ui, sans-serif'
                            }}>
                                ✦ Validated at MIT CODE 2025
                            </h4>
                            <p style={{
                                color: 'rgba(255,255,255,0.7)',
                                fontSize: '1rem',
                                lineHeight: 1.7,
                                marginBottom: '20px',
                                fontFamily: 'Georgia, serif'
                            }}>
                                This methodology was presented at the{' '}
                                <a
                                    href="https://ide.mit.edu/events/2025-conference-on-digital-experimentation-mit/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: '#00f3ff', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                                >
                                    MIT Conference on Digital Experimentation 2025
                                </a>
                                {' '}in Boston. I got the chance to meet Product Leaders and highly experienced Data Scientists from companies like <strong>DataDog, OpenAI, Wayfair, and Meta</strong>, and connected with presenters working on similar validation ideas. There was so much to learn.
                            </p>
                            <Link
                                href="/articles/mit-code-experience"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    color: '#bd00ff',
                                    fontWeight: 600,
                                    fontSize: '0.95rem',
                                    textDecoration: 'none'
                                }}
                            >
                                Read about my full MIT CODE experience →
                            </Link>
                        </div>

                        {/* Newsletter Signup */}
                        <NewsletterSignup />

                        <Link href="/articles/experimentation-architecture" style={{
                            display: 'flex', alignItems: 'center', gap: '16px',
                            background: 'rgba(255,255,255,0.05)', padding: '24px',
                            borderRadius: '8px', textDecoration: 'none',
                            border: '1px solid rgba(255,255,255,0.1)',
                            marginTop: '32px', transition: 'border-color 0.2s'
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

export default LitmusTestProtocolContent;
