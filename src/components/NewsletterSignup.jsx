"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

const NewsletterSignup = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');

        // For now, just simulate success - you can integrate with your email service later
        // Examples: Mailchimp, ConvertKit, Buttondown, Resend, etc.
        setTimeout(() => {
            setStatus('success');
            setEmail('');
        }, 1000);
    };

    if (status === 'success') {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                    background: 'linear-gradient(145deg, rgba(34, 197, 94, 0.1) 0%, rgba(34, 197, 94, 0.05) 100%)',
                    border: '1px solid rgba(34, 197, 94, 0.3)',
                    borderRadius: '16px',
                    padding: '32px',
                    textAlign: 'center',
                    marginTop: '48px',
                    marginBottom: '48px'
                }}
            >
                <CheckCircle size={48} color="#22c55e" style={{ marginBottom: '16px' }} />
                <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#22c55e',
                    marginBottom: '8px'
                }}>
                    You're in!
                </h3>
                <p style={{
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: '0.95rem'
                }}>
                    Check your inbox for a confirmation. See you soon!
                </p>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
                background: 'linear-gradient(145deg, rgba(189, 0, 255, 0.08) 0%, rgba(0, 243, 255, 0.05) 100%)',
                border: '1px solid rgba(189, 0, 255, 0.2)',
                borderRadius: '20px',
                padding: '40px',
                marginTop: '64px',
                marginBottom: '48px',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Decorative Glow */}
            <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(189, 0, 255, 0.15) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none'
            }} />

            <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                marginBottom: '20px',
                position: 'relative'
            }}>
                <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(189, 0, 255, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                }}>
                    <Sparkles size={24} color="#bd00ff" />
                </div>
                <div>
                    <h3 style={{
                        fontSize: '1.35rem',
                        fontWeight: 700,
                        color: '#fff',
                        marginBottom: '8px',
                        lineHeight: 1.3
                    }}>
                        Get More Case Studies Like This
                    </h3>
                    <p style={{
                        color: 'rgba(255,255,255,0.6)',
                        fontSize: '0.95rem',
                        lineHeight: 1.6
                    }}>
                        Deep dives into experimentation, causal inference, and AI systems.
                        <br />
                        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>
                            2 emails/month max. No spam, unsubscribe anytime.
                        </span>
                    </p>
                </div>
            </div>

            <form onSubmit={handleSubmit} style={{
                display: 'flex',
                gap: '12px',
                flexWrap: 'wrap',
                position: 'relative'
            }}>
                <div style={{
                    flex: '1 1 280px',
                    position: 'relative'
                }}>
                    <Mail
                        size={18}
                        style={{
                            position: 'absolute',
                            left: '16px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            color: 'rgba(255,255,255,0.4)'
                        }}
                    />
                    <input
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{
                            width: '100%',
                            padding: '16px 16px 16px 48px',
                            borderRadius: '12px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            background: 'rgba(0,0,0,0.3)',
                            color: '#fff',
                            fontSize: '0.95rem',
                            outline: 'none',
                            transition: 'border-color 0.3s'
                        }}
                    />
                </div>
                <button
                    type="submit"
                    disabled={status === 'loading'}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '16px 28px',
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, #bd00ff 0%, #9b00cc 100%)',
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        border: 'none',
                        cursor: status === 'loading' ? 'wait' : 'pointer',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 0 30px rgba(189, 0, 255, 0.3)',
                        opacity: status === 'loading' ? 0.7 : 1
                    }}
                >
                    {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                    {status !== 'loading' && <ArrowRight size={18} />}
                </button>
            </form>
        </motion.div>
    );
};

export default NewsletterSignup;
