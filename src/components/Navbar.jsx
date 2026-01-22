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
        { name: 'Lab ⚡️', path: '/lab' },
        { name: 'Ventures', path: '/ventures' },
        { name: 'Services', path: '/services' },
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
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            top: 70,
                            background: '#08080c',
                            padding: '2rem',
                            zIndex: 40
                        }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    style={{
                                        fontSize: '1.5rem',
                                        fontWeight: 500,
                                        color: isActive(link.path) ? '#fff' : 'rgba(255,255,255,0.5)'
                                    }}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
