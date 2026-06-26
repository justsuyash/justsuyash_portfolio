"use client";

import React from 'react';
import Link from 'next/link';

/**
 * ArticleAuthorBio
 * Rich author card added at the bottom of every article.
 * Surfaces the full identity of Suyash — builder, writer, photographer,
 * martial artist, mace instructor, and yoga teacher.
 */
const ArticleAuthorBio = () => {
    return (
        <div style={{
            marginTop: '72px',
            paddingTop: '40px',
            borderTop: '1px solid rgba(255,255,255,0.08)',
        }}>
            {/* Divider label */}
            <p style={{
                fontSize: '0.7rem',
                fontFamily: 'monospace',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.25)',
                marginBottom: '28px',
            }}>
                About the author
            </p>

            <div style={{
                display: 'flex',
                gap: '24px',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
            }}>
                {/* Avatar / Initials */}
                <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #bd00ff 0%, #00f3ff 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    color: '#000',
                    flexShrink: 0,
                    fontFamily: 'system-ui, sans-serif',
                    letterSpacing: '-0.02em',
                }}>
                    S
                </div>

                {/* Text block */}
                <div style={{ flex: 1, minWidth: '240px' }}>
                    <p style={{
                        fontWeight: 700,
                        fontSize: '1.05rem',
                        color: '#fff',
                        marginBottom: '4px',
                        fontFamily: 'system-ui, -apple-system, sans-serif',
                    }}>
                        Suyash
                    </p>

                    {/* Identity tags */}
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '8px',
                        marginBottom: '16px',
                    }}>
                        {[
                            { label: 'Builder', color: '#bfff00' },
                            { label: 'Writer', color: '#00f3ff' },
                            { label: 'Photographer', color: '#bd00ff' },
                            { label: 'Working a Bag', color: '#ff6b35' },
                            { label: 'Mace Instructor', color: '#ffcc00' },
                            { label: 'Yoga Teacher', color: '#22c55e' },
                        ].map(({ label, color }) => (
                            <span key={label} style={{
                                fontSize: '0.7rem',
                                fontFamily: 'monospace',
                                letterSpacing: '0.04em',
                                padding: '3px 10px',
                                borderRadius: '4px',
                                background: `${color}15`,
                                color: color,
                                border: `1px solid ${color}30`,
                            }}>
                                {label}
                            </span>
                        ))}
                    </div>

                    {/* Bio paragraph */}
                    <p style={{
                        fontSize: '0.95rem',
                        color: 'rgba(255,255,255,0.6)',
                        lineHeight: 1.75,
                        fontFamily: 'Georgia, serif',
                        marginBottom: '24px',
                        maxWidth: '580px',
                    }}>
                        I build software that solves real problems — currently{' '}
                        <Link href="/ventures/clinicos" style={{ color: '#bfff00', textDecoration: 'none', borderBottom: '1px solid #bfff0060' }}>
                            ClinicOS
                        </Link>
                        , a clinic management system I designed sitting in my brother's clinic, watching him work.
                        When I'm not writing code, I'm behind a camera shooting landscapes,
                        working a bag, swinging a steel mace, or on a yoga mat.
                        The through-line across all of it: discipline, craft, and an obsession with doing things right.
                    </p>

                    {/* Social links */}
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                        <a
                            href="https://x.com/justsuyash"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '8px 16px',
                                background: 'rgba(255,255,255,0.06)',
                                border: '1px solid rgba(255,255,255,0.12)',
                                borderRadius: '6px',
                                color: '#fff',
                                textDecoration: 'none',
                                fontSize: '0.85rem',
                                fontFamily: 'system-ui, sans-serif',
                                fontWeight: 500,
                                transition: 'background 0.2s, border-color 0.2s',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                            }}
                        >
                            {/* X / Twitter icon */}
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                            Follow on X
                        </a>

                        <a
                            href="https://www.instagram.com/justsuyash/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '8px 16px',
                                background: 'rgba(189,0,255,0.08)',
                                border: '1px solid rgba(189,0,255,0.2)',
                                borderRadius: '6px',
                                color: '#bd00ff',
                                textDecoration: 'none',
                                fontSize: '0.85rem',
                                fontFamily: 'system-ui, sans-serif',
                                fontWeight: 500,
                                transition: 'background 0.2s, border-color 0.2s',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = 'rgba(189,0,255,0.15)';
                                e.currentTarget.style.borderColor = 'rgba(189,0,255,0.4)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = 'rgba(189,0,255,0.08)';
                                e.currentTarget.style.borderColor = 'rgba(189,0,255,0.2)';
                            }}
                        >
                            {/* Instagram icon */}
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                            Photography & Life
                        </a>

                        <a
                            href="https://justsuyash.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '8px 16px',
                                background: 'rgba(191,255,0,0.06)',
                                border: '1px solid rgba(191,255,0,0.2)',
                                borderRadius: '6px',
                                color: '#bfff00',
                                textDecoration: 'none',
                                fontSize: '0.85rem',
                                fontFamily: 'system-ui, sans-serif',
                                fontWeight: 500,
                                transition: 'background 0.2s, border-color 0.2s',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = 'rgba(191,255,0,0.12)';
                                e.currentTarget.style.borderColor = 'rgba(191,255,0,0.4)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = 'rgba(191,255,0,0.06)';
                                e.currentTarget.style.borderColor = 'rgba(191,255,0,0.2)';
                            }}
                        >
                            All my work →
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleAuthorBio;
