import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';

const ArticlesPage = () => {
    return (
        <main style={{ paddingTop: '100px', paddingBottom: '100px' }}>
            <div className="container">
                <Link to="/" style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    color: 'rgba(255,255,255,0.4)', textDecoration: 'none', marginBottom: '40px',
                    fontSize: '0.9rem', fontFamily: 'monospace'
                }}>
                    <ArrowLeft size={16} /> /index
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: '64px', maxWidth: '800px' }}
                >
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700,
                        lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '24px'
                    }}>
                        Writing & <br />
                        <span style={{
                            background: 'linear-gradient(135deg, #00f3ff 0%, #bd00ff 100%)',
                            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
                        }}>
                            Technical Thought
                        </span>
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: '600px' }}>
                        Deep dives into system architecture, experimentation, and product engineering.
                    </p>
                </motion.div>

                <div className="grid-responsive" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '24px'
                }}>
                    {articles.map((article, idx) => (
                        <motion.a
                            key={idx}
                            href={article.link}
                            target={article.link.startsWith('http') ? "_blank" : "_self"}
                            rel={article.link.startsWith('http') ? "noopener noreferrer" : ""}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-panel"
                            style={{
                                padding: '32px',
                                display: 'flex',
                                flexDirection: 'column',
                                textDecoration: 'none',
                                minHeight: '220px',
                                cursor: 'pointer'
                            }}
                        >
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginBottom: '16px'
                            }}>
                                <span style={{
                                    padding: '4px 10px',
                                    borderRadius: '6px',
                                    background: 'rgba(0, 243, 255, 0.1)',
                                    border: '1px solid rgba(0, 243, 255, 0.2)',
                                    color: '#00f3ff',
                                    fontSize: '0.65rem',
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em'
                                }}>{article.tag}</span>
                                {article.link.startsWith('http') && <ExternalLink size={16} style={{ color: 'rgba(255,255,255,0.25)' }} />}
                            </div>

                            <h3 style={{
                                fontSize: '1.35rem',
                                fontWeight: 700,
                                marginBottom: '12px',
                                color: '#fff',
                                lineHeight: 1.4
                            }}>{article.title}</h3>

                            <p style={{
                                color: 'rgba(255,255,255,0.5)',
                                fontSize: '0.95rem',
                                lineHeight: 1.7,
                                flex: 1,
                                marginBottom: '24px'
                            }}>{article.description}</p>

                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginTop: 'auto',
                                borderTop: '1px solid rgba(255,255,255,0.05)',
                                paddingTop: '20px'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    fontSize: '0.8rem',
                                    color: 'rgba(255,255,255,0.35)'
                                }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        <Clock size={12} /> {article.readTime}
                                    </span>
                                    <span>·</span>
                                    <span>{article.date}</span>
                                </div>
                                <span style={{
                                    fontSize: '0.85rem',
                                    fontWeight: 600,
                                    color: '#fff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '4px'
                                }}>Read <ArrowRight size={14} /></span>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default ArticlesPage;
