"use client";

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Clock, ArrowLeft, Sparkles, Star } from 'lucide-react';
import Link from 'next/link';
import { articles } from '../../data/portfolio_content';

const ArticlesPage = () => {
    // Logic to select a featured article based on the current week
    const { featuredArticle, otherArticles } = useMemo(() => {
        // Calculate current week number (epoch days / 7)
        const currentWeek = Math.floor(Date.now() / (1000 * 60 * 60 * 24 * 7));
        // Use modulo to rotate through articles
        const featuredIndex = currentWeek % articles.length;

        return {
            featuredArticle: articles[featuredIndex],
            otherArticles: articles.filter((_, idx) => idx !== featuredIndex)
        };
    }, []);

    const ArticleCard = ({ article, delay = 0, featured = false }) => (
        <motion.a
            href={article.link}
            target={article.link.startsWith('http') ? "_blank" : "_self"}
            rel={article.link.startsWith('http') ? "noopener noreferrer" : ""}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className="glass-panel"
            style={{
                padding: featured ? '48px' : '32px',
                display: 'flex',
                flexDirection: 'column',
                textDecoration: 'none',
                minHeight: featured ? '300px' : '220px',
                cursor: 'pointer',
                position: 'relative',
                background: featured ? 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(189,0,255,0.05) 100%)' : undefined,
                border: featured ? '1px solid rgba(189,0,255,0.2)' : undefined,
                gridColumn: featured ? '1 / -1' : undefined
            }}
        >
            {featured && (
                <div style={{
                    position: 'absolute',
                    top: '24px',
                    right: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#bd00ff',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    background: 'rgba(189,0,255,0.1)',
                    padding: '6px 12px',
                    borderRadius: '99px',
                    border: '1px solid rgba(189,0,255,0.2)'
                }}>
                    <Sparkles size={12} /> Featured This Week
                </div>
            )}

            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: featured ? '24px' : '16px'
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
                fontSize: featured ? '2rem' : '1.35rem',
                fontWeight: 700,
                marginBottom: '12px',
                color: '#fff',
                lineHeight: 1.3,
                maxWidth: featured ? '90%' : '100%'
            }}>{article.title}</h3>

            <p style={{
                color: 'rgba(255,255,255,0.5)',
                fontSize: featured ? '1.1rem' : '0.95rem',
                lineHeight: 1.7,
                flex: 1,
                marginBottom: '24px',
                maxWidth: featured ? '800px' : '100%'
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
    );

    return (
        <main style={{ paddingTop: '100px', paddingBottom: '100px' }}>
            <div className="container">
                <Link href="/" style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    color: 'rgba(255,255,255,0.4)', textDecoration: 'none', marginBottom: '40px',
                    fontSize: '0.9rem', fontWeight: 500
                }}>
                    <ArrowLeft size={16} /> Back to Home
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

                {/* Featured Section */}
                <div style={{ marginBottom: '48px' }}>
                    <div style={{
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        color: 'rgba(255,255,255,0.4)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        marginBottom: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                        <Star size={14} fill="currentColor" /> Featured This Week
                    </div>
                    {featuredArticle && <ArticleCard article={featuredArticle} featured={true} />}
                </div>

                {/* All Articles Grid */}
                <div>
                    <div style={{
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        color: 'rgba(255,255,255,0.4)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        marginBottom: '16px'
                    }}>
                        Recent Writing
                    </div>
                    <div className="grid-responsive" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '24px'
                    }}>
                        {otherArticles.map((article, idx) => (
                            <ArticleCard key={article.title} article={article} delay={idx * 0.1} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ArticlesPage;
