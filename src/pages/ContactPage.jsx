import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, Sparkles } from 'lucide-react';

const FORM_ENDPOINT = "https://formspree.io/f/xjggdzzj";

const ContactPage = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);

        try {
            const response = await fetch(FORM_ENDPOINT, {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                alert("Message sent! I'll be in touch shortly.");
                form.reset();
            } else {
                alert("Oops! There was a problem sending your message. Please try again.");
            }
        } catch (error) {
            alert("Error connecting to the server. Please check your connection.");
        }
    };

    return (
        <main style={{ paddingTop: '100px' }}>
            <section style={{
                padding: '80px 0',
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(0, 243, 255, 0.1) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(100px)',
                    pointerEvents: 'none'
                }} />

                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            style={{ textAlign: 'center', marginBottom: '64px' }}
                        >
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '8px 16px',
                                borderRadius: '999px',
                                background: 'rgba(0, 243, 255, 0.1)',
                                border: '1px solid rgba(0, 243, 255, 0.2)',
                                marginBottom: '24px'
                            }}>
                                <Sparkles size={14} color="#00f3ff" />
                                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#00f3ff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                    Get In Touch
                                </span>
                            </div>

                            <h1 style={{
                                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                fontWeight: 700,
                                letterSpacing: '-0.03em',
                                marginBottom: '20px'
                            }}>
                                Let's Build Something
                            </h1>
                            <p style={{
                                fontSize: '1.25rem',
                                color: 'rgba(255,255,255,0.5)',
                                maxWidth: '500px',
                                margin: '0 auto'
                            }}>
                                Open to discussing data strategy, venture collaborations, or consulting opportunities.
                            </p>
                        </motion.div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
                            {/* Contact Methods */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
                            >
                                {[
                                    { icon: <Mail size={24} />, label: 'Email', value: 'contact@justsuyash.com', href: 'mailto:contact@justsuyash.com', color: '#00f3ff' },
                                    { icon: <Linkedin size={24} />, label: 'LinkedIn', value: '/in/justsuyash', href: 'https://www.linkedin.com/in/justsuyash/', color: '#0077b5' },
                                    { icon: <Github size={24} />, label: 'GitHub', value: '@justsuyash', href: 'https://github.com/justsuyash', color: '#8b949e' }
                                ].map((item, idx) => (
                                    <a
                                        key={idx}
                                        href={item.href}
                                        target="_blank"
                                        className="glass-panel"
                                        style={{
                                            padding: '24px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '20px',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <div style={{
                                            width: '52px',
                                            height: '52px',
                                            borderRadius: '12px',
                                            background: `${item.color}15`,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: item.color
                                        }}>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>{item.label}</p>
                                            <span style={{ fontSize: '1.1rem', fontWeight: 600, color: '#fff' }}>{item.value}</span>
                                        </div>
                                    </a>
                                ))}
                            </motion.div>

                            {/* Contact Form */}
                            <motion.form
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="glass-panel"
                                style={{ padding: '32px' }}
                                onSubmit={handleSubmit}
                            >
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            required
                                            style={{
                                                width: '100%',
                                                padding: '14px 18px',
                                                background: 'rgba(255,255,255,0.05)',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                borderRadius: '10px',
                                                color: '#fff',
                                                fontSize: '0.95rem',
                                                outline: 'none',
                                                transition: 'border-color 0.3s'
                                            }}
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            required
                                            style={{
                                                width: '100%',
                                                padding: '14px 18px',
                                                background: 'rgba(255,255,255,0.05)',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                borderRadius: '10px',
                                                color: '#fff',
                                                fontSize: '0.95rem',
                                                outline: 'none',
                                                transition: 'border-color 0.3s'
                                            }}
                                        />
                                    </div>
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        style={{
                                            width: '100%',
                                            padding: '14px 18px',
                                            background: 'rgba(255,255,255,0.05)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            borderRadius: '10px',
                                            color: '#fff',
                                            fontSize: '0.95rem',
                                            outline: 'none',
                                            transition: 'border-color 0.3s'
                                        }}
                                    />
                                    <textarea
                                        name="message"
                                        rows="5"
                                        placeholder="Your message..."
                                        required
                                        style={{
                                            width: '100%',
                                            padding: '14px 18px',
                                            background: 'rgba(255,255,255,0.05)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            borderRadius: '10px',
                                            color: '#fff',
                                            fontSize: '0.95rem',
                                            resize: 'none',
                                            outline: 'none',
                                            transition: 'border-color 0.3s'
                                        }}
                                    />

                                    <button
                                        type="submit"
                                        style={{
                                            width: '100%',
                                            padding: '16px',
                                            background: 'linear-gradient(135deg, #00f3ff 0%, #00c8ff 100%)',
                                            color: '#000',
                                            fontWeight: 700,
                                            fontSize: '0.95rem',
                                            borderRadius: '10px',
                                            border: 'none',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '10px',
                                            boxShadow: '0 0 30px rgba(0, 243, 255, 0.3)',
                                            transition: 'all 0.3s'
                                        }}
                                    >
                                        <Send size={18} /> Send Message
                                    </button>
                                </div>
                            </motion.form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ContactPage;
