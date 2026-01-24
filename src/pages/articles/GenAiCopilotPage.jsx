import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Tag, Clock, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const GenAiCopilotPage = () => {
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
                                <Tag size={12} /> AI SYSTEMS
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
                                <Clock size={12} /> 5 MIN READ
                            </span>
                        </div>

                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 700,
                            lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '24px',
                            fontFamily: 'system-ui, -apple-system, sans-serif'
                        }}>
                            GenAI Experimentation Copilot
                        </h1>

                        <p style={{
                            fontSize: '1.25rem', color: 'rgba(255,255,255,0.6)',
                            lineHeight: 1.7, fontFamily: 'Georgia, serif'
                        }}>
                            Resolving the "Translation Gap" between business intent and executable statistical analysis.
                        </p>
                    </header>

                    <div className="article-content" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', lineHeight: 1.8, fontFamily: 'Georgia, serif' }}>

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>The Context: Scaling Beyond Human Throughput</h3>
                        <p style={{ marginBottom: '32px' }}>
                            Scaling an experimentation platform is rarely an infrastructure problem; it is an organizational one. As our velocity increased to 8+ experiments per week, the Data Science team became a critical bottleneck. We weren't constrained by compute; we were constrained by the manual overhead of post-experiment analysis.
                        </p>

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>The Problem: Ambiguity as a Blocker</h3>
                        <p style={{ marginBottom: '32px' }}>
                            Stakeholders operate in the language of markets, not matrix algebra. They don't ask for "p-values on a chi-square test"; they ask linguistically complex questions:
                        </p>
                        <div style={{ padding: '24px', background: 'rgba(255,255,255,0.05)', borderLeft: '3px solid #bd00ff', marginBottom: '32px', fontStyle: 'italic', color: 'rgba(255,255,255,0.9)' }}>
                            "How did the 'Healthy Living' offer perform for high-frequency shoppers in the Western Region?"
                        </div>
                        <p style={{ marginBottom: '32px' }}>
                            Translating this business intent into SQL and Python is a high-friction, error-prone process. While we had a robust, deterministic <strong>"Stats Engine"</strong> to handle the mathematics, we lacked a semantic layer that could reliably map specific business vernacular (segments, banners, regions) into the rigid syntax required by our code base.
                        </p>

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>The Solution: LLMs as the Semantic Layer</h3>
                        <p style={{ marginBottom: '24px' }}>
                            I designed an internal agent using <strong>Gemini API + LangChain</strong> to serve as the "Experimentation Copilot." Rather than replacing the analyst, this tool acts as a translation interface.
                        </p>

                        <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#00f3ff', marginBottom: '12px', fontFamily: 'system-ui, sans-serif' }}>Technical Architecture</h4>
                        <ul style={{ marginBottom: '32px', paddingLeft: '20px' }}>
                            <li style={{ marginBottom: '12px' }}><strong>Semantic Parsing:</strong> The LLM functions as a reasoning engine, decomposing natural language requests (e.g., "Western Region," "Churn Risk Segment") into standardized configuration parameters.</li>
                            <li style={{ marginBottom: '12px' }}><strong>Controlled Generation (Jinja2):</strong> Instead of allowing the LLM to write freeform code (which introduces risk), the agent populates a validated Jinja2 template. This ensures 100% syntax compliance while maintaining flexibility.</li>
                            <li><strong>Deterministic Execution:</strong> The "hallucination-free" template is passed to our existing Stats Engine, ensuring that while the <em>interface</em> is probabilistic, the <em>math</em> remains deterministic and auditable.</li>
                        </ul>

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>Strategic Impact</h3>
                        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
                            <li style={{ marginBottom: '12px', display: 'flex', gap: '12px' }}>
                                <span style={{ color: '#22c55e' }}>➜</span> <span><strong>High-Leverage Work:</strong> Eliminated 8+ hours of weekly "toil" per DS, allowing senior contributors to focus on causal inference and methodology rather than SQL fetching.</span>
                            </li>
                            <li style={{ marginBottom: '12px', display: 'flex', gap: '12px' }}>
                                <span style={{ color: '#22c55e' }}>➜</span> <span><strong>Accelerated Onboarding:</strong> New hires previously spent two weeks learning our internal library syntax. The Copilot now explains the code as it generates it, reducing time-to-productivity to 3 days.</span>
                            </li>
                            <li style={{ marginBottom: '12px', display: 'flex', gap: '12px' }}>
                                <span style={{ color: '#22c55e' }}>➜</span> <span><strong>True Self-Serve:</strong> Non-technical Product Managers can now define parameters in plain English and receive a preliminary analysis draft, effectively democratizing access to data insights.</span>
                            </li>
                        </ul>

                        <div style={{ padding: '24px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', marginBottom: '40px' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>Technologies</h3>
                            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', fontFamily: 'monospace', fontSize: '0.9rem', color: '#bd00ff' }}>
                                <span>LangChain</span> <span>•</span> <span>Gemini API</span> <span>•</span> <span>Python</span> <span>•</span> <span>SQL</span> <span>•</span> <span>BigQuery</span>
                            </div>
                        </div>

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>Core Lessons</h3>
                        <ul style={{ paddingLeft: '20px', marginBottom: '40px' }}>
                            <li style={{ marginBottom: '12px' }}><strong>The Probabilistic Interface:</strong> The most powerful pattern for GenAI in analytics is not "generating insights," but "configuring engines." We use the LLM to handle the messy ambiguity of human language, then hand off to traditional code for the rigorous execution.</li>
                            <li><strong>Tools as Documentation:</strong> By embedding the repository's best practices into the agent's system prompt, the tool effectively becomes a living, interactive documentation layer for the team.</li>
                        </ul>

                        {/* Credits Section */}
                        <div style={{
                            marginTop: '64px',
                            paddingTop: '32px',
                            borderTop: '1px solid rgba(255,255,255,0.1)',
                            fontSize: '0.9rem',
                            color: 'rgba(255,255,255,0.5)'
                        }}>
                            <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px', color: '#fff' }}>References & Credits</h4>
                            <p style={{ marginBottom: '12px' }}>
                                Inspired by the talk:
                            </p>
                            <a href="https://www.youtube.com/watch?v=OZ4BUW4TmsI" target="_blank" rel="noopener noreferrer" style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                color: '#bd00ff',
                                textDecoration: 'none',
                                background: 'rgba(189,0,255,0.1)',
                                padding: '8px 16px',
                                borderRadius: '6px',
                                border: '1px solid rgba(189,0,255,0.2)',
                                transition: 'all 0.2s'
                            }}>
                                <ExternalLink size={14} /> Watch the Video Implementation
                            </a>
                        </div>

                    </div>
                </motion.div>
            </article>
        </main>
    );
};

export default GenAiCopilotPage;
