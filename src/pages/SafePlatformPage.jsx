import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, TrendingUp, Cpu, Database, Zap, ArrowRight, Shield, Layers, Code, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';

const SafePlatformPage = () => {
    return (
        <main style={{ paddingTop: '100px', paddingBottom: '100px' }}>
            {/* Hero Section */}
            <section style={{ marginBottom: '80px' }}>
                <div className="container">
                    <Link to="/" style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        color: 'rgba(255,255,255,0.6)', textDecoration: 'none', marginBottom: '32px',
                        fontSize: '0.9rem', fontWeight: 600
                    }}>
                        <ArrowLeft size={18} /> Back to Home
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            padding: '8px 16px', borderRadius: '999px',
                            background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.2)',
                            marginBottom: '24px'
                        }}>
                            <Shield size={14} color="#22c55e" />
                            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                Enterprise Case Study
                            </span>
                        </div>

                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                            fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '24px'
                        }}>
                            From Excel Hell to <br />
                            <span className="gradient-text" style={{
                                background: 'linear-gradient(135deg, #22c55e 0%, #00f3ff 100%)',
                                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
                            }}>
                                $150M+ Autonomous Impact
                            </span>
                        </h1>

                        <p style={{
                            fontSize: '1.25rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7,
                            maxWidth: '750px', marginBottom: '48px'
                        }}>
                            At a <strong>Fortune 100 US grocery retailer</strong> serving tens of millions of households, I led the design and rollout of <strong>SAFE</strong>: a self-optimizing experimentation platform that replaced manual workflows with an automated, CUPED-enhanced causal inference engine.
                        </p>
                    </motion.div>

                    {/* Key Metrics Grid */}
                    <div className="grid-responsive" style={{
                        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px'
                    }}>
                        {[
                            { value: '3 → 8+', label: 'Experiments / Week', icon: <Zap size={24} />, color: '#00f3ff' },
                            { value: '$150M+', label: 'Attributed Revenue', icon: <TrendingUp size={24} />, color: '#22c55e' },
                            { value: '100%', label: 'Self-Serve Adoption', icon: <Cpu size={24} />, color: '#bd00ff' }
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + idx * 0.1 }}
                                className="glass-panel"
                                style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}
                            >
                                <div style={{
                                    width: '48px', height: '48px', borderRadius: '12px',
                                    background: `${stat.color}15`, border: `1px solid ${stat.color}30`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: stat.color
                                }}>
                                    {stat.icon}
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>{stat.value}</h3>
                                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', fontWeight: 500 }}>{stat.label}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Problem Section */}
            <section style={{ padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
                        <div>
                            <span style={{ color: '#f59e0b', fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.1em', display: 'block', marginBottom: '16px' }}>THE BOTTLENECK</span>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '24px' }}>Analyze, Copy, Paste, Repeat.</h2>
                            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: '24px' }}>
                                Before SAFE, highly paid engineers were stuck in a loop of manual toil. They ran SQL queries, downloaded CSVs, aggregated tables locally, and performed T-tests in Excel.
                            </p>
                            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
                                All of this was extremely time-consuming, error-prone, and visually inconsistent. Experiment velocity was capped at ~3 per week because the analysis layer was manual.
                            </p>
                        </div>
                        <div className="glass-panel" style={{ padding: '40px', background: 'rgba(255,50,50,0.05)', border: '1px solid rgba(255,50,50,0.1)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                                <Database size={32} color="#f87171" />
                                <ArrowRight size={24} color="rgba(255,255,255,0.2)" />
                                <div style={{
                                    width: '48px', height: '48px', background: '#207136', borderRadius: '4px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '24px', fontWeight: 'bold'
                                }}>X</div>
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f87171', marginBottom: '8px' }}>Manual Excel & SQL Hell</h3>
                            <ul style={{ listStyle: 'none', padding: 0, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
                                <li style={{ display: 'flex', gap: '10px' }}>❌ Manual query execution & CSV downloads</li>
                                <li style={{ display: 'flex', gap: '10px' }}>❌ Inconsistent visual formatting in Excel</li>
                                <li style={{ display: 'flex', gap: '10px' }}>❌ High variance/noise in results</li>
                                <li style={{ display: 'flex', gap: '10px' }}>❌ Unscalable for product teams</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* The SAFE Solution */}
            <section style={{ padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(34, 197, 94, 0.02)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 64px auto' }}>
                        <span style={{ color: '#22c55e', fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.1em', display: 'block', marginBottom: '16px' }}>THE ARCHITECTURE</span>
                        <h2 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '24px' }}>Enter SAFE Platform</h2>
                        <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>
                            I architected a completely automated pipeline that treats context as code.
                        </p>
                    </div>

                    <div className="grid-responsive" style={{
                        display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px'
                    }}>
                        {/* Feature 1: Automation */}
                        <div className="glass-panel" style={{ padding: '32px' }}>
                            <div style={{
                                width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 243, 255, 0.1)',
                                border: '1px solid rgba(0, 243, 255, 0.2)', color: '#00f3ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px'
                            }}>
                                <Layers size={24} />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>End-to-End Automation</h3>
                            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
                                Used remote notebook runs to trigger workflows directly from Excel-stored experiment configurations. The system automatically fetches data, overlaps queries to minimize reads, and pipes results to a dashboard.
                            </p>
                        </div>

                        {/* Feature 2: CUPED */}
                        <div className="glass-panel" style={{ padding: '32px' }}>
                            <div style={{
                                width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(189, 0, 255, 0.1)',
                                border: '1px solid rgba(189, 0, 255, 0.2)', color: '#bd00ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px'
                            }}>
                                <TrendingUp size={24} />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>CUPED Variance Reduction</h3>
                            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
                                Implemented CUPED (Controlled-Experiment Using Pre-Experiment Data) to mathematically act as a noise cancellation headphone for our metrics. This increased sensitivity and allowed faster decision making.
                            </p>
                        </div>

                        {/* Feature 3: GenAI */}
                        <div className="glass-panel" style={{ padding: '32px' }}>
                            <div style={{
                                width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(34, 197, 94, 0.1)',
                                border: '1px solid rgba(34, 197, 94, 0.2)', color: '#22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px'
                            }}>
                                <Bot size={24} />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>GenAI Integration (New)</h3>
                            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
                                Currently integrating GenAI to build a true self-serving system. Product teams can ask questions in plain English, and the system generates the relevant SQL/Analysis context automatically.
                            </p>
                        </div>

                        {/* Feature 4: Dashboard */}
                        <div className="glass-panel" style={{ padding: '32px' }}>
                            <div style={{
                                width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(245, 158, 11, 0.1)',
                                border: '1px solid rgba(245, 158, 11, 0.2)', color: '#f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px'
                            }}>
                                <Code size={24} />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>One-Stop Dashboard</h3>
                            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
                                Eliminated "copy-paste-format" work. The platform serves a clean, interactive dashboard with standardized widgets, allowing stakeholders to view results instantly without engineer intervention.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{ padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '32px' }}>Ready to Scale Your AI Architecture?</h2>
                    <Link to="/contact" style={{
                        display: 'inline-flex', alignItems: 'center', gap: '12px',
                        padding: '16px 32px', borderRadius: '12px',
                        background: 'linear-gradient(135deg, #00f3ff 0%, #00c8ff 100%)',
                        color: '#000', fontWeight: 700, fontSize: '1rem',
                        boxShadow: '0 0 30px rgba(0, 243, 255, 0.2)', textDecoration: 'none'
                    }}>
                        Get in Touch <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default SafePlatformPage;
