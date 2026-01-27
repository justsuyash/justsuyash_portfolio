"use client";

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Clock, Sparkles, Download, Star, Github, Linkedin, Briefcase } from 'lucide-react';
import Link from 'next/link';
import { articles } from '../data/portfolio_content';

const HomePage = () => {
    // Logic to select a featured article based on the current week
    const { featuredArticle, recentArticles } = useMemo(() => {
        // Calculate current week number (epoch days / 7)
        const currentWeek = Math.floor(Date.now() / (1000 * 60 * 60 * 24 * 7));
        const featuredIndex = currentWeek % articles.length;

        const featured = articles[featuredIndex];
        // Get next 4 articles, wrapping around if needed, but simplest is just filter out featured and take first 4
        // To keep it stable, let's just filter out the featured one and take the top 4 remaining.
        const others = articles.filter((_, idx) => idx !== featuredIndex).slice(0, 4);

        return {
            featuredArticle: featured,
            recentArticles: others
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
                padding: featured ? '40px' : '28px',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                textDecoration: 'none',
                minHeight: featured ? '280px' : '180px',
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
                    <Star size={12} fill="currentColor" /> Featured
                </div>
            )}

            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: featured ? '20px' : '12px'
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
                fontSize: featured ? '1.8rem' : '1.15rem',
                fontWeight: 700,
                marginBottom: '10px',
                color: '#fff',
                lineHeight: 1.3,
                maxWidth: featured ? '90%' : '100%'
            }}>{article.title}</h3>

            <p style={{
                color: 'rgba(255,255,255,0.5)',
                fontSize: featured ? '1.05rem' : '0.9rem',
                lineHeight: 1.7,
                flex: 1,
                marginBottom: '16px',
                maxWidth: featured ? '800px' : '100%'
            }}>{article.description}</p>

            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 'auto'
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
                    color: featured ? '#bd00ff' : '#00f3ff',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                }}>Read <ArrowRight size={14} /></span>
            </div>
        </motion.a>
    );

    return (
        <main>
            {/* Hero Section with Photo */}
            <section style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                paddingTop: '80px'
            }}>
                {/* Background Glows */}
                <div style={{
                    position: 'absolute',
                    top: '20%',
                    left: '10%',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(189, 0, 255, 0.15) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(80px)',
                    pointerEvents: 'none'
                }} />
                <div style={{
                    position: 'absolute',
                    bottom: '10%',
                    right: '5%',
                    width: '500px',
                    height: '500px',
                    background: 'radial-gradient(circle, rgba(0, 243, 255, 0.12) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(80px)',
                    pointerEvents: 'none'
                }} />

                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <div className="hero-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '4rem',
                        alignItems: 'center'
                    }}>
                        {/* Photo Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="hero-photo" style={{
                                position: 'relative',
                                maxWidth: '420px'
                            }}>
                                {/* Photo Container with Glow */}
                                <div style={{
                                    position: 'relative',
                                    aspectRatio: '3/4',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    boxShadow: '0 0 60px rgba(0, 243, 255, 0.1), 0 25px 50px -12px rgba(0,0,0,0.5)'
                                }}>
                                    <img
                                        src="/assets/suyash.jpg"
                                        alt="Suyash"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }}
                                    />
                                    {/* Gradient Overlay */}
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'linear-gradient(to top, rgba(8,8,12,0.8) 0%, transparent 40%)'
                                    }} />
                                </div>

                                {/* Floating Badge */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.6 }}
                                    style={{
                                        position: 'absolute',
                                        bottom: '24px',
                                        left: '24px',
                                        right: '24px',
                                        padding: '16px 20px',
                                        background: 'rgba(20, 20, 25, 0.9)',
                                        backdropFilter: 'blur(16px)',
                                        borderRadius: '12px',
                                        border: '1px solid rgba(255,255,255,0.1)'
                                    }}
                                >
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px'
                                    }}>
                                        <div style={{
                                            width: '10px',
                                            height: '10px',
                                            borderRadius: '50%',
                                            background: '#22c55e',
                                            boxShadow: '0 0 12px #22c55e'
                                        }} />
                                        <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>
                                            Open to opportunities
                                        </span>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Text Side */}
                        <motion.div
                            className="hero-text"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '8px 16px',
                                borderRadius: '999px',
                                background: 'rgba(189, 0, 255, 0.1)',
                                border: '1px solid rgba(189, 0, 255, 0.2)',
                                marginBottom: '24px'
                            }}>
                                <Sparkles size={14} color="#bd00ff" />
                                <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#bd00ff', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
                                    Senior Data Scientist | Platform Architect
                                </span>
                            </div>

                            <h1 style={{
                                fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
                                fontWeight: 700,
                                lineHeight: 1.1,
                                letterSpacing: '-0.03em',
                                marginBottom: '20px'
                            }}>
                                $150+ Million Impact Through
                                <br />
                                <span style={{
                                    background: 'linear-gradient(135deg, #00f3ff 0%, #bd00ff 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}>
                                    Experimentation & AI
                                </span>
                            </h1>

                            <p style={{
                                fontSize: '1.1rem',
                                color: 'rgba(255,255,255,0.6)',
                                lineHeight: 1.7,
                                marginBottom: '24px',
                                maxWidth: '650px'
                            }}>
                                <strong>Architecting AI-powered causal systems</strong> at the intersection of Experimentation, Causal Inference, and GenAI.
                            </p>

                            <div style={{ marginBottom: '32px' }}>
                                <Link href="/ventures" style={{ color: '#bd00ff', textDecoration: 'underline', textUnderlineOffset: '3px', fontWeight: 600 }}>
                                    Explore my Applied Labs →
                                </Link>
                            </div>

                            <div className="hero-cta" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                                <Link
                                    href="/resume"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        padding: '16px 28px',
                                        borderRadius: '12px',
                                        background: 'linear-gradient(135deg, #00f3ff 0%, #00c8ff 100%)',
                                        color: '#000',
                                        fontWeight: 700,
                                        fontSize: '0.95rem',
                                        transition: 'all 0.3s ease',
                                        boxShadow: '0 0 30px rgba(0, 243, 255, 0.3)',
                                        textDecoration: 'none'
                                    }}
                                >
                                    View Resume <ArrowRight size={18} />
                                </Link>
                                <a
                                    href="/portfolio_resume.pdf"
                                    target="_blank"
                                    download="portfolio_resume.pdf"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        padding: '16px 28px',
                                        borderRadius: '12px',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        color: '#fff',
                                        fontWeight: 600,
                                        fontSize: '0.95rem',
                                        transition: 'all 0.3s ease',
                                        textDecoration: 'none'
                                    }}
                                >
                                    Download PDF <Download size={18} />
                                </a>
                                <Link
                                    href="/contact"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        padding: '16px 28px',
                                        borderRadius: '12px',
                                        background: 'transparent',
                                        border: '1px solid rgba(255,255,255,0.15)',
                                        color: '#fff',
                                        fontWeight: 600,
                                        fontSize: '0.95rem',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    Get in Touch
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section >

            {/* Signature Outcomes Section */}
            < section style={{ padding: '60px 0', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            marginBottom: '24px'
                        }}>
                            <span style={{
                                color: '#00f3ff',
                                fontSize: '0.7rem',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em'
                            }}>✦ Signature Outcomes</span>
                        </div>

                        <div className="grid-responsive" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 1fr)',
                            gap: '20px'
                        }}>
                            {[
                                { metric: '3→8+', label: 'experiments/week via Experimentation Engine', color: '#00f3ff' },
                                { metric: '$150M+', label: 'measurable business impact', color: '#bd00ff' },
                                { metric: '7+', label: 'years at Fortune 500 companies', color: '#22c55e' },
                                { metric: 'Solo', label: 'full-stack product engineering', color: '#f59e0b' }
                            ].map((item, idx) => (
                                <div key={idx} style={{
                                    padding: '20px',
                                    borderRadius: '12px',
                                    background: 'rgba(255,255,255,0.02)',
                                    border: '1px solid rgba(255,255,255,0.05)'
                                }}>
                                    <div style={{
                                        fontSize: '1.75rem',
                                        fontWeight: 700,
                                        color: item.color,
                                        marginBottom: '8px'
                                    }}>{item.metric}</div>
                                    <div style={{
                                        fontSize: '0.85rem',
                                        color: 'rgba(255,255,255,0.5)',
                                        lineHeight: 1.4
                                    }}>{item.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section >

            {/* Current Work Section */}
            < section style={{ padding: '120px 0' }} className="section-divider" >
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ marginBottom: '48px' }}
                    >
                        <span style={{
                            color: '#00f3ff',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            marginBottom: '12px',
                            display: 'block'
                        }}>Currently</span>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: 700,
                            letterSpacing: '-0.02em'
                        }}>What I'm Working On</h2>
                    </motion.div>

                    <div className="grid-responsive" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '24px'
                    }}>
                        {/* Albertsons Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass-panel"
                            style={{ padding: '32px' }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '4px' }}>Albertsons Companies</h3>
                                    <p style={{ color: '#00f3ff', fontWeight: 600, fontSize: '0.9rem' }}>Senior Data Scientist | Architecting AI-Powered Experimentation Systems</p>
                                </div>
                                <span style={{
                                    padding: '4px 10px',
                                    borderRadius: '6px',
                                    background: 'rgba(34, 197, 94, 0.15)',
                                    color: '#22c55e',
                                    fontSize: '0.65rem',
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em'
                                }}>Active</span>
                            </div>
                            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
                                Built end-to-end experimentation platform driving $150M+ in validated business decisions. Engineered two GenAI automation agents reducing analysis time from days to hours.
                            </p>
                        </motion.div>

                        {/* Bheed Studio Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="glass-panel"
                            style={{ padding: '32px' }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '4px' }}>Bheed Studio</h3>
                                    <p style={{ color: '#00f3ff', fontWeight: 600, fontSize: '0.9rem' }}>Founder & Principal Engineer | Applied AI Research Lab</p>
                                </div>
                                <span style={{
                                    padding: '4px 10px',
                                    borderRadius: '6px',
                                    background: 'rgba(189, 0, 255, 0.15)',
                                    color: '#bd00ff',
                                    fontSize: '0.65rem',
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em'
                                }}>Building</span>
                            </div>
                            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '16px' }}>
                                Technical sandbox building production-grade consumer AI products. 700+ users across QuizBeef, mana-health, and Aligned.
                            </p>
                            <Link href="/ventures" style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                fontSize: '0.875rem',
                                fontWeight: 600,
                                color: '#fff',
                                transition: 'color 0.3s'
                            }}>
                                Explore the Lab <ArrowRight size={14} />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section >

            {/* How I Think Section */}
            <section id="how-i-think" style={{ padding: '120px 0' }} className="section-divider" >
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ marginBottom: '48px' }}
                    >
                        <span style={{
                            color: '#00f3ff',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            marginBottom: '12px',
                            display: 'block'
                        }}>From the Blog</span>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: 700,
                            letterSpacing: '-0.02em'
                        }}>How I Think</h2>
                    </motion.div>


                    {/* Featured Article */}
                    <div style={{ marginBottom: '32px' }}>
                        {featuredArticle && <ArticleCard article={featuredArticle} featured={true} />}
                    </div>

                    <div className="grid-responsive" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '20px'
                    }}>
                        {recentArticles.map((article, idx) => (
                            <ArticleCard key={article.title} article={article} delay={idx * 0.08} />
                        ))}
                    </div>

                    <div style={{ marginTop: '32px', textAlign: 'right' }}>
                        <Link href="/articles" style={{
                            display: 'inline-flex', alignItems: 'center', gap: '6px',
                            color: '#bd00ff', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none'
                        }}>
                            Check out more <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Technical Roadmap & Contact Section */}
            <section style={{ padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '32px' }}>
                        Explore My Technical Roadmap
                    </h2>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '32px',
                        flexWrap: 'wrap',
                        marginBottom: '40px'
                    }}>
                        <a href="https://github.com/justsuyash" target="_blank" rel="noopener noreferrer" style={{ color: '#ccc', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 500, fontSize: '1.1rem' }}>
                            <Github size={24} fill="#fff" color="#fff" /> GitHub
                        </a>
                        <a href="https://linkedin.com/in/justsuyash" target="_blank" rel="noopener noreferrer" style={{ color: '#ccc', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 500, fontSize: '1.1rem' }}>
                            <Linkedin size={24} fill="#0077b5" color="#0077b5" strokeWidth={0} /> LinkedIn
                        </a>
                        <Link href="/" style={{ color: '#ccc', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 500, fontSize: '1.1rem' }}>
                            <Sparkles size={24} color="#bd00ff" /> Portfolio
                        </Link>
                    </div>

                    <Link
                        href="/resume"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '12px 24px',
                            borderRadius: '8px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            color: '#fff',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            transition: 'all 0.3s ease',
                            textDecoration: 'none'
                        }}
                    >
                        View Technical CV <ArrowRight size={16} />
                    </Link>
                </div>
            </section>
        </main >
    );
};

export default HomePage;
