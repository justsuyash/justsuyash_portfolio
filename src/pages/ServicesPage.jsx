import React from 'react';
import { motion } from 'framer-motion';
import {
    Code2, Compass, BrainCircuit, Coffee,
    Star, Quote, ExternalLink, Calendar, ArrowRight, Sparkles, Clock
} from 'lucide-react';

// IMPORTANT: Replace with your actual Calendly URL
const CALENDLY_URL = "https://calendly.com/justsuyash";

const services = [
    {
        icon: <Code2 size={28} />,
        title: "Technical Mentorship",
        subtitle: "For Indie Builders",
        description: "Architecture reviews, project guidance, and technical strategy for developers and designers building their own products. From MVP to scale.",
        duration: "60 min",
        gradient: "linear-gradient(135deg, #22c55e 0%, #10b981 100%)",
        color: "#22c55e",
        badge: "By Application",
        link: `${CALENDLY_URL}/technical-mentorship`,
        extraLink: null
    },
    {
        icon: <Compass size={28} />,
        title: "Career Advisory",
        subtitle: "For Professionals",
        description: "Strategic career positioning, resume review, skill roadmapping, and interview preparation. Find your niche and land roles at top companies. Also available on Topmate.",
        duration: "45 min",
        gradient: "linear-gradient(135deg, #bd00ff 0%, #8b00ff 100%)",
        color: "#bd00ff",
        badge: "Limited Slots",
        link: `${CALENDLY_URL}/career-advisory`,
        extraLink: { label: "or book on Topmate", url: "https://topmate.io/justsuyash/" }
    },
    {
        icon: <BrainCircuit size={28} />,
        title: "GenAI & Data Strategy",
        subtitle: "For Businesses",
        description: "Help your organization leverage data effectively and integrate GenAI into workflows. From audits to implementation roadmaps.",
        duration: "90 min",
        gradient: "linear-gradient(135deg, #00f3ff 0%, #00a8ff 100%)",
        color: "#00f3ff",
        badge: "Enterprise",
        link: `${CALENDLY_URL}/genai-data-strategy`,
        extraLink: null
    },
    {
        icon: <Coffee size={28} />,
        title: "Coffee Chat",
        subtitle: "Fellow Founders",
        description: "Building something interesting? Let's brainstorm. I enjoy riffing on ideas with other founders—sometimes we land on something genuinely creative.",
        duration: "20 min",
        gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
        color: "#f59e0b",
        badge: null,
        link: `${CALENDLY_URL}/coffee-chat`,
        extraLink: null
    }
];

const testimonials = [
    {
        name: "Priya M.",
        role: "Data Analyst → Senior Data Scientist",
        text: "Suyash's career advisory was instrumental in my transition. His mock interviews were realistic and I landed a role at a Fortune 500 within 6 weeks.",
        rating: 5
    },
    {
        name: "Amit S.",
        role: "Founder, AI Startup",
        text: "The technical mentorship helped us avoid costly architecture mistakes early. His GenAI integration advice saved us months of trial and error.",
        rating: 5
    },
    {
        name: "Sneha T.",
        role: "Product Designer → ML Engineer",
        text: "Clear, actionable guidance. The career roadmap gave me exactly what I needed to make a successful pivot into data science.",
        rating: 5
    }
];

const ServicesPage = () => {
    return (
        <main style={{ paddingTop: '100px' }}>
            {/* Hero Section */}
            <section style={{ padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
                <div style={{
                    position: 'absolute',
                    top: '-20%',
                    right: '10%',
                    width: '600px',
                    height: '400px',
                    background: 'radial-gradient(circle, rgba(189, 0, 255, 0.12) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(100px)',
                    pointerEvents: 'none'
                }} />
                <div style={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '5%',
                    width: '500px',
                    height: '400px',
                    background: 'radial-gradient(circle, rgba(0, 243, 255, 0.1) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(100px)',
                    pointerEvents: 'none'
                }} />

                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        style={{ maxWidth: '800px' }}
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
                            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#bd00ff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                Advisory Services
                            </span>
                        </div>

                        <h1 style={{
                            fontSize: 'clamp(3rem, 6vw, 4.5rem)',
                            fontWeight: 700,
                            letterSpacing: '-0.03em',
                            lineHeight: 1.1,
                            marginBottom: '24px'
                        }}>
                            Strategic Guidance for{' '}
                            <span style={{
                                background: 'linear-gradient(135deg, #00f3ff 0%, #bd00ff 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>Builders & Businesses</span>
                        </h1>
                        <p style={{
                            fontSize: '1.35rem',
                            color: 'rgba(255,255,255,0.6)',
                            lineHeight: 1.7,
                            maxWidth: '600px'
                        }}>
                            5+ years helping data professionals and companies navigate complex decisions.
                            From career pivots to enterprise AI strategy.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid - 2x2 Layout */}
            <section style={{ padding: '60px 0' }} className="section-divider">
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '28px'
                    }}>
                        {services.map((service, idx) => (
                            <motion.a
                                key={idx}
                                href={service.link}
                                target="_blank"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass-panel"
                                style={{
                                    padding: '40px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    cursor: 'pointer',
                                    textDecoration: 'none',
                                    position: 'relative'
                                }}
                            >
                                {service.badge && (
                                    <span style={{
                                        position: 'absolute',
                                        top: '20px',
                                        right: '20px',
                                        padding: '5px 12px',
                                        borderRadius: '6px',
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        fontSize: '0.65rem',
                                        fontWeight: 700,
                                        color: 'rgba(255,255,255,0.5)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em'
                                    }}>
                                        {service.badge}
                                    </span>
                                )}

                                <div style={{
                                    width: '64px',
                                    height: '64px',
                                    borderRadius: '16px',
                                    background: service.gradient,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '24px',
                                    boxShadow: `0 15px 35px ${service.color}30`
                                }}>
                                    <span style={{ color: '#fff' }}>{service.icon}</span>
                                </div>

                                <div style={{ marginBottom: '16px' }}>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>
                                        {service.title}
                                    </h3>
                                    <span style={{
                                        fontSize: '0.8rem',
                                        fontWeight: 600,
                                        color: service.color,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.06em'
                                    }}>{service.subtitle}</span>
                                </div>

                                <p style={{
                                    color: 'rgba(255,255,255,0.5)',
                                    fontSize: '1rem',
                                    lineHeight: 1.8,
                                    flex: 1,
                                    marginBottom: '28px'
                                }}>
                                    {service.description}
                                </p>

                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                                        <span style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            fontSize: '0.9rem',
                                            fontWeight: 600,
                                            color: '#fff'
                                        }}>
                                            Book on Calendly <ArrowRight size={16} />
                                        </span>
                                        {service.extraLink && (
                                            <a
                                                href={service.extraLink.url}
                                                target="_blank"
                                                onClick={(e) => e.stopPropagation()}
                                                style={{
                                                    fontSize: '0.8rem',
                                                    color: 'rgba(255,255,255,0.4)',
                                                    textDecoration: 'underline',
                                                    textUnderlineOffset: '2px'
                                                }}
                                            >
                                                {service.extraLink.label}
                                            </a>
                                        )}
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                        fontSize: '0.85rem',
                                        color: 'rgba(255,255,255,0.4)'
                                    }}>
                                        <Clock size={14} /> {service.duration}
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section style={{ padding: '80px 0' }} className="section-divider">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ marginBottom: '48px', textAlign: 'center' }}
                    >
                        <span style={{
                            color: '#00f3ff',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            marginBottom: '12px',
                            display: 'block'
                        }}>Results</span>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                            fontWeight: 700,
                            letterSpacing: '-0.02em'
                        }}>Client Outcomes</h2>
                    </motion.div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '24px'
                    }}>
                        {testimonials.map((testimonial, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.08 }}
                                className="glass-panel"
                                style={{ padding: '32px' }}
                            >
                                <Quote size={28} style={{ color: 'rgba(0, 243, 255, 0.3)', marginBottom: '16px' }} />
                                <p style={{
                                    color: 'rgba(255,255,255,0.8)',
                                    fontSize: '0.95rem',
                                    lineHeight: 1.8,
                                    marginBottom: '24px',
                                    fontStyle: 'italic'
                                }}>
                                    "{testimonial.text}"
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <div>
                                        <p style={{ fontWeight: 700, color: '#fff', marginBottom: '4px', fontSize: '0.95rem' }}>{testimonial.name}</p>
                                        <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>{testimonial.role}</p>
                                    </div>
                                    <div style={{ display: 'flex', gap: '3px' }}>
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} size={14} style={{ color: '#f59e0b', fill: '#f59e0b' }} />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{ padding: '80px 0' }} className="section-divider">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-panel"
                        style={{
                            padding: '64px',
                            textAlign: 'center',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '400px',
                            height: '400px',
                            background: 'radial-gradient(circle, rgba(0, 243, 255, 0.1) 0%, transparent 70%)',
                            borderRadius: '50%',
                            filter: 'blur(60px)',
                            pointerEvents: 'none'
                        }} />

                        <div style={{ position: 'relative', zIndex: 10 }}>
                            <Calendar size={48} style={{ color: '#00f3ff', marginBottom: '24px' }} />
                            <h2 style={{
                                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                                fontWeight: 700,
                                letterSpacing: '-0.02em',
                                marginBottom: '16px'
                            }}>Ready to Get Started?</h2>
                            <p style={{
                                fontSize: '1.1rem',
                                color: 'rgba(255,255,255,0.5)',
                                marginBottom: '32px',
                                maxWidth: '500px',
                                margin: '0 auto 32px'
                            }}>
                                Book a session that fits your needs. Limited availability each month.
                            </p>
                            <a
                                href={CALENDLY_URL}
                                target="_blank"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    padding: '18px 36px',
                                    borderRadius: '12px',
                                    background: 'linear-gradient(135deg, #00f3ff 0%, #00c8ff 100%)',
                                    color: '#000',
                                    fontWeight: 700,
                                    fontSize: '1rem',
                                    boxShadow: '0 0 40px rgba(0, 243, 255, 0.35)',
                                    textDecoration: 'none'
                                }}
                            >
                                View Availability on Calendly <ExternalLink size={18} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default ServicesPage;
