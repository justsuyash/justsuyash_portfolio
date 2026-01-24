import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Applied Labs ⚡️', path: '/ventures' },
        { name: 'Collaborate', path: '/collaborate' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 50,
            transition: 'all 0.3s ease',
            padding: scrolled ? '1rem 0' : '1.5rem 0',
            background: scrolled ? 'rgba(8, 8, 12, 0.95)' : 'transparent',
            backdropFilter: scrolled ? 'blur(16px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Link to="/" style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    color: '#fff'
                }}>
                    SUYASH<span style={{ color: '#00f3ff' }}>.</span>
                </Link>

                {/* Desktop Menu */}
                <div className="nav-desktop" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2.5rem'
                }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            style={{
                                fontSize: '0.875rem',
                                fontWeight: 500,
                                color: isActive(link.path) ? '#fff' : 'rgba(255,255,255,0.5)',
                                transition: 'all 0.3s ease',
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px'
                            }}
                            onMouseEnter={(e) => e.target.style.color = '#fff'}
                            onMouseLeave={(e) => e.target.style.color = isActive(link.path) ? '#fff' : 'rgba(255,255,255,0.5)'}
                        >
                            {link.name}

                            {isActive(link.path) && (
                                <motion.span
                                    layoutId="activeTab"
                                    style={{
                                        position: 'absolute',
                                        bottom: -8,
                                        left: 0,
                                        right: 0,
                                        height: 2,
                                        background: 'linear-gradient(90deg, #00f3ff, #bd00ff)',
                                        borderRadius: 4
                                    }}
                                />
                            )}
                        </Link>
                    ))}
                    <a
                        href="/SuyashResume-Brainworks.pdf"
                        target="_blank"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.5rem 1rem',
                            borderRadius: '8px',
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            fontSize: '0.875rem',
                            fontWeight: 500,
                            color: '#fff',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                            e.currentTarget.style.borderColor = 'rgba(0,243,255,0.3)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                        }}
                    >
                        Resume <ArrowUpRight size={14} />
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="nav-mobile-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    style={{
                        display: 'none',
                        color: '#fff',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer'
                    }}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            background: 'linear-gradient(180deg, #08080c 0%, #0a0a12 50%, #08080c 100%)',
                            zIndex: 999,
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        {/* Menu Header */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '1.5rem 2rem',
                            borderBottom: '1px solid rgba(255,255,255,0.05)'
                        }}>
                            <Link to="/" onClick={() => setIsOpen(false)} style={{
                                fontSize: '1.25rem',
                                fontWeight: 700,
                                color: '#fff'
                            }}>
                                SUYASH<span style={{ color: '#00f3ff' }}>.</span>
                            </Link>
                            <button
                                onClick={() => setIsOpen(false)}
                                style={{
                                    color: '#fff',
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '8px',
                                    padding: '8px',
                                    cursor: 'pointer'
                                }}
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Gradient Glow */}
                        <div style={{
                            position: 'absolute',
                            top: '30%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '300px',
                            height: '300px',
                            background: 'radial-gradient(circle, rgba(0, 243, 255, 0.08) 0%, transparent 70%)',
                            borderRadius: '50%',
                            filter: 'blur(60px)',
                            pointerEvents: 'none'
                        }} />

                        {/* Nav Links */}
                        <div style={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            padding: '2rem'
                        }}>
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.08 }}
                                >
                                    <Link
                                        to={link.path}
                                        style={{
                                            display: 'block',
                                            fontSize: '2rem',
                                            fontWeight: 600,
                                            color: isActive(link.path) ? '#fff' : 'rgba(255,255,255,0.4)',
                                            padding: '12px 0',
                                            borderBottom: '1px solid rgba(255,255,255,0.05)',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                        {isActive(link.path) && (
                                            <span style={{
                                                display: 'inline-block',
                                                width: '8px',
                                                height: '8px',
                                                borderRadius: '50%',
                                                background: 'linear-gradient(135deg, #00f3ff, #bd00ff)',
                                                marginLeft: '12px',
                                                boxShadow: '0 0 10px rgba(0, 243, 255, 0.5)'
                                            }} />
                                        )}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* Footer CTA */}
                        <div style={{ padding: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                            <a
                                href="/SuyashResume-Brainworks.pdf"
                                target="_blank"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '10px',
                                    width: '100%',
                                    padding: '16px',
                                    borderRadius: '12px',
                                    background: 'linear-gradient(135deg, #bd00ff 0%, #8b00ff 100%)',
                                    color: '#fff',
                                    fontWeight: 700,
                                    fontSize: '1rem',
                                    textDecoration: 'none',
                                    boxShadow: '0 0 30px rgba(189, 0, 255, 0.3)'
                                }}
                            >
                                Download Resume <ArrowUpRight size={18} />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
