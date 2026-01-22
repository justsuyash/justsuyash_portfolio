import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Tag, Clock } from 'lucide-react';
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
                            Eliminating 8+ hours/week of manual SQL toil by building an internal LLM agent that turns product questions into verified experiment analysis.
                        </p>
                    </header>

                    <div className="article-content" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', lineHeight: 1.8, fontFamily: 'Georgia, serif' }}>

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>Context</h3>
                        <p style={{ marginBottom: '32px' }}>
                            Scaling an experimentation platform isn't just about infrastructure—it's about <strong>people throughput</strong>. As we scaled to 8+ experiments a week, the Data Science team became the bottleneck for post-experiment analysis.
                        </p>

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>The Problem</h3>
                        <p style={{ marginBottom: '32px' }}>
                            Data Scientists were spending <strong>8+ hours per week</strong> on repetitive tasks:
                            <ul style={{ marginTop: '12px' }}>
                                <li>Writing boilerplate SQL for standard metric sets.</li>
                                <li>Running manual QA checks (e.g., sample ratio mismatch).</li>
                                <li>Summarizing results into narratives for Product Managers.</li>
                            </ul>
                            Non-technical PMs couldn't run their own analyses, creating a dependency loop.
                        </p>

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>The Solution</h3>
                        <p style={{ marginBottom: '24px' }}>
                            I built an internal agent utilizing <strong>Gemini API + LangChain</strong> to act as an "Experimentation Copilot".
                        </p>

                        <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#00f3ff', marginBottom: '12px', fontFamily: 'system-ui, sans-serif' }}>Technical Approach</h4>
                        <ol style={{ marginBottom: '32px', paddingLeft: '20px' }}>
                            <li style={{ marginBottom: '8px' }}><strong>Metadata Parsing:</strong> The agent reads the experiment config (JSON) to understand start dates, variant IDs, and primary metrics.</li>
                            <li style={{ marginBottom: '8px' }}><strong>SQL Generation:</strong> Uses Jinja2 templates populated by the LLM to generate verified BigQuery SQL.</li>
                            <li style={{ marginBottom: '8px' }}><strong>Auto-QA:</strong> Runs the query and checks for common errors (SRM, zero data) before showing results.</li>
                            <li><strong>Narrative Draft:</strong> Interprets the resulting p-values and lifts to write a draft summary in Markdown.</li>
                        </ol>

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>Results</h3>
                        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
                            <li style={{ marginBottom: '12px', display: 'flex', gap: '12px' }}>
                                <span style={{ color: '#22c55e' }}>➜</span> <span><strong>Toil Reduction:</strong> Eliminated 8+ hours/week of manual work per DS.</span>
                            </li>
                            <li style={{ marginBottom: '12px', display: 'flex', gap: '12px' }}>
                                <span style={{ color: '#22c55e' }}>➜</span> <span><strong>Onboarding:</strong> Reduced new hire onboarding time from 2 weeks to 3 days (agent explains the code).</span>
                            </li>
                            <li style={{ marginBottom: '12px', display: 'flex', gap: '12px' }}>
                                <span style={{ color: '#22c55e' }}>➜</span> <span><strong>Self-Serve:</strong> Non-technical PMs can now upload a config and get a preliminary analysis draft independently.</span>
                            </li>
                        </ul>

                        <div style={{ padding: '24px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', marginBottom: '40px' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>Technologies</h3>
                            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', fontFamily: 'monospace', fontSize: '0.9rem', color: '#bd00ff' }}>
                                <span>LangChain</span> <span>•</span> <span>Gemini API</span> <span>•</span> <span>Python</span> <span>•</span> <span>SQL</span> <span>•</span> <span>BigQuery</span>
                            </div>
                        </div>

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>Lessons</h3>
                        <ol style={{ paddingLeft: '20px', marginBottom: '40px' }}>
                            <li style={{ marginBottom: '12px' }}><strong>GenAI as Middleware.</strong> The most valuable use of LLMs here wasn't "chatting"—it was acting as the glue between our metadata service and our data warehouse.</li>
                            <li style={{ marginBottom: '12px' }}><strong>Guardrails are mandatory.</strong> We don't let the LLM execute arbitrary SQL. It fills validated templates.</li>
                            <li><strong>Democratization speeds up experts too.</strong> Tools built for "non-technical users" often end up being power-tools for experts to move faster.</li>
                        </ol>

                    </div>
                </motion.div>
            </article>
        </main>
    );
};

export default GenAiCopilotPage;
