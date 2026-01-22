import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Clock, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

// Articles/News Feed data - Update with your actual articles
const articles = [
    {
        title: "We Built a RAG Pipeline That Actually Works in Healthcare",
        description: "Most RAG tutorials skip the hard parts. Here's how we handled HIPAA, chunking medical records, and the retrieval failures nobody talks about.",
        publication: "Bheed Studio",
        date: "Jan 2024",
        link: "#",
        tag: "Deep Dive",
        readTime: "8 min"
    },
    {
        title: "Why We Deleted 80% of Our Features",
        description: "The counterintuitive decision that 3x'd our engagement. Signal-only design isn't minimalism—it's focus.",
        publication: "Bheed Studio",
        date: "Dec 2023",
        link: "#",
        tag: "Product",
        readTime: "5 min"
    },
    {
        title: "Astrology × Machine Learning: Building Aligned",
        description: "Yes, we built an AI dating app using birth charts. Here's the technical deep-dive (and why it actually works).",
        publication: "Technical",
        date: "Nov 2023",
        link: "#",
        tag: "Build Log",
        readTime: "12 min"
    },
    {
        title: "Statistical Methods That Actually Matter for A/B Tests",
        description: "Forget p-values. Here's the Bayesian approach we use at Albertsons for experiments that ship faster.",
        publication: "LinkedIn",
        date: "Oct 2023",
        link: "https://www.linkedin.com/in/justsuyash/",
        tag: "Tutorial",
        readTime: "6 min"
    }
];


const HomePage = () => {
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
                                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#bd00ff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                    Senior Data Scientist · AI Systems Architect
                                </span>
                            </div>

                            <h1 style={{
                                fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
                                fontWeight: 700,
                                lineHeight: 1.1,
                                letterSpacing: '-0.03em',
                                marginBottom: '20px'
                            }}>
                                Driving Growth{' '}
                                <span style={{
                                    background: 'linear-gradient(135deg, #00f3ff 0%, #bd00ff 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}>
                                    & Building
                                </span>
                                <br />
                                World Class Products
                            </h1>

                            <p style={{
                                fontSize: '1.1rem',
                                color: 'rgba(255,255,255,0.6)',
                                lineHeight: 1.7,
                                marginBottom: '32px',
                                maxWidth: '560px'
                            }}>
                                I build products to understand users deeply—then apply that insight to scale{' '}
                                <strong style={{ color: '#00f3ff' }}>AI systems</strong> at Fortune 500 companies.{' '}
                                <Link to="/ventures" style={{ color: '#bd00ff', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Explore my Applied Labs →</Link>
                            </p>

                            <div className="hero-cta" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                                <a
                                    href="/SuyashResume-Brainworks.pdf"
                                    target="_blank"
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
                                </a>
                                <Link
                                    to="/contact"
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
            </section>

            {/* Signature Outcomes Section */}
            <section style={{ padding: '60px 0', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
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
                                { metric: '3→8+', label: 'experiments/week via SAFE Platform', color: '#00f3ff' },
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
            </section>

            {/* Current Work Section */}
            <section style={{ padding: '120px 0' }} className="section-divider">
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
                                    <p style={{ color: '#00f3ff', fontWeight: 600, fontSize: '0.9rem' }}>Data Scientist</p>
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
                                Leading predictive modeling and customer insight initiatives for one of America's largest food retailers.
                                Architecting scalable data pipelines for enterprise analytics.
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
                                    <p style={{ color: '#00f3ff', fontWeight: 600, fontSize: '0.9rem' }}>Founder & Principal Product Scientist</p>
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
                                A Product Intelligence & Venture Lab building "Zero-Bloat" applications using autonomous GenAI architectures.
                            </p>
                            <Link to="/ventures" style={{
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
            </section>

            {/* How I Think Section */}
            <section id="how-i-think" style={{ padding: '120px 0' }} className="section-divider">
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

                    <div className="grid-responsive" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '20px'
                    }}>
                        {articles.map((article, idx) => (
                            <motion.a
                                key={idx}
                                href={article.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.08 }}
                                className="glass-panel"
                                style={{
                                    padding: '28px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    cursor: 'pointer',
                                    textDecoration: 'none',
                                    minHeight: '180px'
                                }}
                            >
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    marginBottom: '12px'
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
                                    <ExternalLink size={16} style={{ color: 'rgba(255,255,255,0.25)' }} />
                                </div>

                                <h3 style={{
                                    fontSize: '1.15rem',
                                    fontWeight: 700,
                                    marginBottom: '10px',
                                    color: '#fff',
                                    lineHeight: 1.4
                                }}>{article.title}</h3>

                                <p style={{
                                    color: 'rgba(255,255,255,0.5)',
                                    fontSize: '0.9rem',
                                    lineHeight: 1.7,
                                    flex: 1,
                                    marginBottom: '16px'
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
                                            <Clock size={12} /> {article.readTime} read
                                        </span>
                                        <span>·</span>
                                        <span>{article.date}</span>
                                    </div>
                                    <span style={{
                                        fontSize: '0.85rem',
                                        fontWeight: 600,
                                        color: '#00f3ff',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '4px'
                                    }}>Read <ArrowRight size={14} /></span>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {/* Lab Funnel */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ marginTop: '60px' }}
                    >
                        <Link to="/lab" style={{ textDecoration: 'none' }}>
                            <div className="glass-panel" style={{
                                padding: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                background: 'linear-gradient(90deg, rgba(8,8,12,0.8) 0%, rgba(34, 197, 94, 0.05) 100%)',
                                border: '1px solid rgba(34, 197, 94, 0.2)',
                                cursor: 'pointer'
                            }}>
                                <div>
                                    <div style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        marginBottom: '12px',
                                        color: '#22c55e',
                                        fontFamily: 'monospace',
                                        fontSize: '0.8rem'
                                    }}>
                                        <div style={{ width: '8px', height: '8px', background: '#22c55e', borderRadius: '50%' }} />
                                        SYSTEM_STATUS: ONLINE
                                    </div>
                                    <h3 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>
                                        Run the Protocols vs Read them.
                                    </h3>
                                    <p style={{ color: 'rgba(255,255,255,0.6)' }}>
                                        Test the Mana Intelligence Engine with your own data in the live lab.
                                    </p>
                                </div>
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '12px',
                                    background: 'rgba(34, 197, 94, 0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '1px solid rgba(34, 197, 94, 0.2)'
                                }}>
                                    <ArrowRight size={24} color="#22c55e" />
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default HomePage;
