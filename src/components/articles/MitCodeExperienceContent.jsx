"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, ArrowRight, Zap, MapPin, Users, Lightbulb, Mic } from 'lucide-react';
import Link from 'next/link';

const MitCodeExperienceContent = () => {
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
                                borderRadius: '4px', fontSize: '0.75rem', color: '#bd00ff',
                                fontFamily: 'monospace', border: '1px solid rgba(189, 0, 255, 0.2)'
                            }}>
                                <Zap size={12} /> THOUGHT LEADERSHIP
                            </span>
                            <span style={{
                                display: 'inline-flex', alignItems: 'center', gap: '6px',
                                color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', fontFamily: 'monospace'
                            }}>
                                <Calendar size={12} /> NOV 2024
                            </span>
                            <span style={{
                                display: 'inline-flex', alignItems: 'center', gap: '6px',
                                color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', fontFamily: 'monospace'
                            }}>
                                <Clock size={12} /> 6 MIN READ
                            </span>
                        </div>

                        <h1 style={{
                            fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700,
                            lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '24px',
                            fontFamily: 'system-ui, -apple-system, sans-serif'
                        }}>
                            MIT CODE 2025: Validating Intuition &amp; The Future of Experimentation
                        </h1>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#333', overflow: 'hidden' }}>
                                {/* Placeholder for avatar or use a generic icon if image not available */}
                                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(45deg, #00f3ff, #bd00ff)' }}>
                                    <span style={{ fontWeight: 'bold', color: '#fff', fontSize: '0.9rem' }}>ST</span>
                                </div>
                            </div>
                            <div>
                                <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.95rem' }}>Suyash Kumar Thakur</div>
                                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>Data Scientist @ Albertsons Companies</div>
                            </div>
                        </div>

                        <p style={{
                            fontSize: '1.25rem', color: 'rgba(255,255,255,0.6)',
                            lineHeight: 1.7, fontFamily: 'Georgia, serif'
                        }}>
                            Last November, I swapped the Dallas warmth for the intellectual chill of Cambridge, Massachusetts. I headed to MIT CODE 2025, not just to listen, but to stress-test my own reality.
                        </p>
                    </header>

                    <div className="article-content" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', lineHeight: 1.8, fontFamily: 'Georgia, serif' }}>

                        <p style={{ marginBottom: '32px' }}>
                            I headed to <a href="https://ide.mit.edu/events/2025-conference-on-digital-experimentation-mit-codemit/" target="_blank" rel="noopener noreferrer" style={linkStyle}>MIT CODE 2025</a> (Conference on Digital Experimentation), not just to listen, but to stress-test my own reality.
                        </p>

                        <p style={{ marginBottom: '32px' }}>
                            As a Data Scientist at <a href="https://www.safeway.com/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Safeway</a> (part of <a href="https://www.albertsonscompanies.com/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Albertsons Companies</a>), I often work at the intersection of theory and messy, real-world application. I walked into MIT with hypotheses about my work and a few "radical" ideas I was trying to push through.
                        </p>

                        <p style={{ marginBottom: '48px' }}>
                            I walked out with those ideas validated, a notebook full of industry secrets, and the confidence to execute immediately. Here is my complete experience.
                        </p>

                        <h2 style={h2Style}>✅ The "Aha!" Moment: Validating 2 Key Ideas</h2>
                        <p style={{ marginBottom: '32px' }}>
                            The biggest win of the conference wasn&apos;t a lecture—it was the confirmation that I was on the right track. I had been wrestling with two major technical initiatives at Albertsons, and through hallway conversations and session takeaways, I found the "permission" I needed to move forward.
                        </p>

                        <div style={cardStyle}>
                            <h3 style={h3Style}>1. Fixing Flawed Randomization</h3>
                            <p style={{ marginBottom: '16px' }}>
                                I had long suspected our legacy "pre-split" randomization method—where engineers deterministically assigned users based on a sorted list—was flawed. It felt like a silent killer of data integrity.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '12px', display: 'flex', gap: '12px' }}>
                                    <span style={{ color: '#00f3ff' }}>✦</span>
                                    <span><strong>The Validation:</strong> Networking with experts confirmed that without true randomization, our downstream metrics were compromised.</span>
                                </li>
                                <li style={{ display: 'flex', gap: '12px' }}>
                                    <span style={{ color: '#00f3ff' }}>✦</span>
                                    <span><strong>The Result:</strong> Empowered by this consensus, I returned to work and successfully corrected this method, replacing it with a robust, randomized assignment process.</span>
                                </li>
                            </ul>
                        </div>

                        <div style={cardStyle}>
                            <h3 style={h3Style}>2. Implementing CUPED for Variance Reduction</h3>
                            <p style={{ marginBottom: '16px' }}>
                                I was also pushing to implement <Link href="/articles/litmus-test-protocol" style={{ color: '#fff', textDecoration: 'underline', textDecorationColor: '#bd00ff' }}>CUPED</Link> (Controlled-Experiment Using Pre-Experiment Data) to speed up our tests.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '12px', display: 'flex', gap: '12px' }}>
                                    <span style={{ color: '#bd00ff' }}>✦</span>
                                    <span><strong>The Validation:</strong> Seeing data scientists from tech giants discuss their reliance on similar variance reduction techniques gave me the ammunition I needed.</span>
                                </li>
                                <li style={{ display: 'flex', gap: '12px' }}>
                                    <span style={{ color: '#bd00ff' }}>✦</span>
                                    <span><strong>The Result:</strong> I didn&apos;t just propose it; I was able to directly complete the implementation of CUPED (or "Cupid" as we jokingly call it in the hallway tracks) into our pipeline. This has been a game-changer for our experiment velocity.</span>
                                </li>
                            </ul>
                        </div>

                        <h2 style={h2Style}>🧠 What I Learned: The "Productivity Paradox" &amp; Market Mechanics</h2>
                        <p style={{ marginBottom: '32px' }}>
                            Beyond my own projects, the sessions were a goldmine of forward-thinking concepts.
                        </p>

                        <h3 style={subHeaderStyle}>The Productivity Paradox</h3>
                        <p style={{ marginBottom: '24px' }}>
                            There was a fascinating discussion during the Fireside Chat about why AI helps us code faster but doesn&apos;t necessarily make us <em>feel</em> more productive.
                        </p>
                        <blockquote style={quoteStyle}>
                            <strong>Lane 1 vs. Lane 2:</strong> We are currently in "Lane 1" (task automation). The real breakthrough will be "Lane 2"&mdash;redesigning entire workflows. The bottleneck has shifted from "doing" to "sense-making".
                        </blockquote>

                        <h3 style={subHeaderStyle}>Interference in Marketplaces</h3>
                        <p style={{ marginBottom: '32px' }}>
                            <a href="https://profiles.stanford.edu/ramesh-johari" target="_blank" rel="noopener noreferrer" style={linkStyle}>Ramesh Johari</a> from <a href="https://www.stanford.edu/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Stanford</a> gave a plenary talk that changed how I view two-sided markets. He explained that "interference"&mdash;where one user&apos;s treatment affects another&mdash;is a massive source of bias.
                        </p>
                        <p style={{ marginBottom: '32px', paddingLeft: '20px', borderLeft: '3px solid #00f3ff' }}>
                            <strong>The Fix:</strong> His advice was practical: <strong>Randomize on the short side of the market</strong> (the supply-constrained side) to minimize this bias.
                        </p>

                        <h3 style={subHeaderStyle}>Welfare &gt; P-Values</h3>
                        <p style={{ marginBottom: '48px' }}>
                            <a href="https://www.linkedin.com/in/timsodejono" target="_blank" rel="noopener noreferrer" style={linkStyle}>Tim Sodejono</a> presented a framework that hit home: "Welfare Maximization." Instead of obsessing over p-values (p &lt; 0.05), we should focus on the economic return of an intervention minus its costs. It&apos;s a compound decision problem, not just a statistics test.
                        </p>

                        <h2 style={h2Style}>🎤 Fun Facts & The Human Touch</h2>
                        <p style={{ marginBottom: '32px' }}>
                            It wasn&apos;t all algorithms and p-values. The human side of MIT CODE was just as impactful.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '48px' }}>
                            <div style={factCardStyle}>
                                <div style={iconContainerStyle}><Mic size={20} color="#fff" /></div>
                                <h4 style={factTitleStyle}>My "AI" Sidekick</h4>
                                <p style={factTextStyle}>
                                    I walked around with my <strong>Plot AI</strong> device, recording [permitted] conversations to generate transcripts/summaries. Great conversation starter that kept me present.
                                </p>
                            </div>
                            <div style={factCardStyle}>
                                <div style={iconContainerStyle}><Users size={20} color="#fff" /></div>
                                <h4 style={factTitleStyle}>Networking with Giants</h4>
                                <p style={factTextStyle}>
                                    Incredible informal chats with <strong>Minal</strong> (Amazon Web Lab) and <strong>Chetan</strong> (founder of a platform acquired by Datadog).
                                </p>
                            </div>
                            <div style={factCardStyle}>
                                <div style={iconContainerStyle}><Lightbulb size={20} color="#fff" /></div>
                                <h4 style={factTitleStyle}>The "Low-Tech" Realization</h4>
                                <p style={factTextStyle}>
                                    I called Albertsons "low tech", but they validated that getting <em>foundations</em> right (randomization, power) is infinitely more valuable than fancy garbage-producing platforms.
                                </p>
                            </div>
                        </div>

                        <h2 style={h2Style}>🚀 The Bottom Line</h2>
                        <p style={{ marginBottom: '32px', fontSize: '1.2rem' }}>
                            MIT CODE 2025 was a reminder that you don&apos;t need a massive tech stack to do world-class data science. You need curiosity, rigor, and the courage to question the "standard" way of doing things.
                        </p>
                        <p style={{ marginBottom: '48px' }}>
                            I came back to Dallas not just with "learnings," but with <strong>completed upgrades</strong> to our experimentation stack. Randomization is fixed. CUPED is live. And I&apos;m just getting started.
                        </p>

                        <div style={{ padding: '32px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <p style={{ margin: 0, fontStyle: 'italic', color: 'rgba(255,255,255,0.7)' }}>
                                Curious about Data Science, Yoga, or Lifestyle Design? Connect with me on <a href="https://www.linkedin.com/in/suyash-thakur/" target="_blank" rel="noopener noreferrer" style={linkStyle}>LinkedIn</a> or explore more here at <Link href="/" style={linkStyle}>JustSuyash.com</Link>.
                            </p>
                        </div>


                        <Link href="/articles/litmus-test-protocol" style={{
                            display: 'flex', alignItems: 'center', gap: '16px',
                            background: 'rgba(255,255,255,0.05)', padding: '24px',
                            borderRadius: '8px', textDecoration: 'none',
                            border: '1px solid rgba(255,255,255,0.1)',
                            marginTop: '64px', transition: 'border-color 0.2s'
                        }}>
                            <div style={{ flex: 1 }}>
                                <span style={{
                                    display: 'block', fontSize: '0.875rem',
                                    color: '#00f3ff', marginBottom: '8px', fontFamily: 'monospace'
                                }}>
                                    READ THE PROTOCOL
                                </span>
                                <h4 style={{
                                    fontSize: '1.25rem', fontWeight: 600,
                                    color: '#fff', margin: 0
                                }}>
                                    The Litmus Test: How We Validated CUPED in 5 Days Without Engineering
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

// Styles
const h2Style = {
    fontSize: '2rem', fontWeight: 700, color: '#fff',
    marginTop: '64px', marginBottom: '32px', fontFamily: 'system-ui, sans-serif',
    letterSpacing: '-0.01em'
};

const h3Style = {
    fontSize: '1.3rem', fontWeight: 600, color: '#fff',
    marginBottom: '12px', fontFamily: 'system-ui, sans-serif'
};

const subHeaderStyle = {
    fontSize: '1.4rem', fontWeight: 600, color: '#fff',
    marginBottom: '16px', marginTop: '40px', fontFamily: 'system-ui, sans-serif'
};

const linkStyle = {
    color: '#fff', textDecoration: 'underline',
    textDecorationColor: 'rgba(255,255,255,0.4)',
    textUnderlineOffset: '3px',
    transition: 'text-decoration-color 0.2s'
};

const cardStyle = {
    background: 'rgba(255,255,255,0.03)',
    borderRadius: '12px',
    padding: '32px',
    marginBottom: '24px',
    border: '1px solid rgba(255,255,255,0.05)'
};

const quoteStyle = {
    borderLeft: '4px solid #bd00ff',
    margin: '0 0 32px 0',
    padding: '24px',
    background: 'linear-gradient(90deg, rgba(189, 0, 255, 0.05) 0%, transparent 100%)',
    color: 'rgba(255,255,255,0.9)',
    fontStyle: 'italic'
};

const factCardStyle = {
    background: '#111',
    padding: '24px',
    borderRadius: '12px',
    border: '1px solid #222'
};

const iconContainerStyle = {
    marginBottom: '16px',
    display: 'inline-flex',
    padding: '10px',
    background: 'rgba(255,255,255,0.05)',
    borderRadius: '8px'
};

const factTitleStyle = {
    fontSize: '1.1rem',
    fontWeight: 700,
    color: '#fff',
    marginBottom: '12px',
    fontFamily: 'system-ui'
};

const factTextStyle = {
    fontSize: '0.95rem',
    color: 'rgba(255,255,255,0.6)',
    lineHeight: 1.6,
    margin: 0
};

export default MitCodeExperienceContent;
