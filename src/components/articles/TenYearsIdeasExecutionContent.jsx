"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Tag, Clock } from 'lucide-react';
import Link from 'next/link';
import ArticleAuthorBio from '../ArticleAuthorBio';

const TenYearsIdeasExecutionContent = () => {
    return (
        <main style={{ paddingTop: '120px', paddingBottom: '100px', backgroundColor: '#050505' }}>
            <article className="container" style={{ maxWidth: '800px' }}>
                <Link href="/articles" style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    color: 'rgba(255,255,255,0.4)', textDecoration: 'none', marginBottom: '48px',
                    fontSize: '0.9rem', fontWeight: 500
                }}>
                    <ArrowLeft size={16} /> Back to Articles
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <header style={{ marginBottom: '64px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '40px' }}>
                        <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', flexWrap: 'wrap' }}>
                            <span style={{
                                display: 'inline-flex', alignItems: 'center', gap: '6px',
                                padding: '4px 12px', background: 'rgba(255,255,255,0.05)',
                                borderRadius: '4px', fontSize: '0.75rem', color: '#bd00ff',
                                fontFamily: 'monospace', border: '1px solid rgba(189, 0, 255, 0.2)'
                            }}>
                                <Tag size={12} /> ORIGIN STORY
                            </span>
                            <span style={{
                                display: 'inline-flex', alignItems: 'center', gap: '6px',
                                color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', fontFamily: 'monospace'
                            }}>
                                <Calendar size={12} /> JUL 2026
                            </span>
                            <span style={{
                                display: 'inline-flex', alignItems: 'center', gap: '6px',
                                color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', fontFamily: 'monospace'
                            }}>
                                <Clock size={12} /> 7 MIN READ
                            </span>
                        </div>

                        <h1 style={{
                            fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: 700,
                            lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '24px',
                            fontFamily: 'system-ui, -apple-system, sans-serif'
                        }}>
                            Ten Years of Ideas and Relentless Execution
                        </h1>
                        <p style={{
                            fontSize: '1.25rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6,
                            fontFamily: 'system-ui, sans-serif', marginTop: '16px'
                        }}>
                            How a 2015 final-year college project on smart surveillance taught me the only loop that actually compounds: be ruthless about the idea, then relentless about the execution.
                        </p>
                    </header>

                    <div style={{ margin: '0 0 48px 0', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <img src="/images/article-graphics/ten-years-ideas-execution.png" alt="Ten Years of Ideas and Relentless Execution — sketch illustration" style={{ width: '100%', display: 'block' }} />
                    </div>

                    <div className="article-content" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', lineHeight: 1.8, fontFamily: 'Georgia, serif' }}>

                        <p style={{ marginBottom: '32px' }}>
                            There&apos;s a popular line that ideas are cheap and only execution matters. It sounds wise until you actually build something and realize the hardest part was never the wiring or the code — it was knowing what was worth wiring in the first place. For the last ten years, my career has basically been one long experiment in that direction: tinker with all the ideas, find the one that resonates and is numerically defensible, then execute it relentlessly. This story is where that pattern started.
                        </p>

                        <hr style={{ borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: 'none', margin: '48px 0' }} />

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>2015. Final-Year Project Season.</h3>

                        <p style={{ marginBottom: '32px' }}>
                            Everyone around me was building safe, template-friendly projects — the kind of apps that tick the rubric, get demoed once, and die on a USB drive. Data science and machine learning were just starting to show up on our radar. A couple of seniors had played with it, but most of my batch was ignoring it. I decided I wasn&apos;t going to submit anything unless it felt genuinely interesting.
                        </p>

                        <p style={{ marginBottom: '32px' }}>
                            People told me I was overthinking it. I&apos;d be late. My grades might take a hit. The unwritten rule of the college-project game was simple: pick something fast, build something adequate, move on. I chose to break that rule. If I couldn&apos;t find a good idea, I&apos;d rather sit in the discomfort and wait than rush out something forgettable. That wasn&apos;t rebellion for its own sake. It was a bet that choosing the right problem mattered as much as — and probably more than — how elegantly I solved it.
                        </p>

                        <p style={{ marginBottom: '32px' }}>
                            For a while, that bet looked bad. I had half a dozen half-projects on my laptop: half-baked apps, small hacks, ideas that sounded clever and died in implementation. None of them felt worth betting my final-year project on. Then I got pulled deeper into machine learning and computer vision. The idea that a model could look at an image and tell you what was in it was fascinating on its own — but I didn&apos;t want to stop at &ldquo;this is cool.&rdquo; I wanted it to collide with something real.
                        </p>

                        <hr style={{ borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: 'none', margin: '48px 0' }} />

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>The CCTV Cameras I&apos;d Ignored for Years</h3>

                        <p style={{ marginBottom: '32px' }}>
                            One day I was walking across campus and finally noticed something I&apos;d effectively ignored for years: the CCTV cameras. They were always on. Every corridor, every gate, every lobby, recording 24/7, whether or not anything actually happened. At night, those cameras were still burning through electricity and storage to capture hours of empty footage. Security got their &ldquo;coverage,&rdquo; but most of that coverage was just expensive silence.
                        </p>

                        <p style={{ marginBottom: '32px' }}>
                            That observation was the real idea: the problem wasn&apos;t that the cameras were bad; the problem was that they were <strong>dumb</strong>. They couldn&apos;t decide when to care. So why not make the system think before it records?
                        </p>

                        <hr style={{ borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: 'none', margin: '48px 0' }} />

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>Building a Brain Between &ldquo;Motion&rdquo; and &ldquo;Record&rdquo;</h3>

                        <p style={{ marginBottom: '24px' }}>
                            Straightforward execution wasn&apos;t going to be enough. My teammates — Aakash Dave, Pranav Sinha, Suraj Pramod Patil — and I designed what we started calling a <em>sporadic surveillance system</em> for high-clearance zones. Instead of cameras running constantly, we built a layered decision pipeline:
                        </p>

                        {[
                            {
                                step: '01',
                                title: 'Sensors First',
                                color: '#00f3ff',
                                body: 'PIR, IR, and thermal sensors sit in series, each tied to a camera. Their only job is to wake the system up when something changes.'
                            },
                            {
                                step: '02',
                                title: 'Vision Second',
                                color: '#00f3ff',
                                body: "When a sensor fires, the camera turns on and checks the frame difference to see whether there's actually something there."
                            },
                            {
                                step: '03',
                                title: 'Identity and Intent',
                                color: '#bd00ff',
                                body: 'If a human is detected, the system checks basic authorization and cross-references against a wanted-persons database.'
                            },
                            {
                                step: '04',
                                title: 'Escalation When Needed',
                                color: '#bd00ff',
                                body: 'If anything looks suspicious, we hand off to a PTZ camera for closer inspection and relay the feed across the network so other cameras and systems can react intelligently.'
                            },
                            {
                                step: '05',
                                title: "Silence When It's Nothing",
                                color: '#bfff00',
                                body: "If it's a stray cat, a swinging door, or a shadow, the system stands down and goes back to sleep."
                            },
                        ].map(({ step, title, color, body }) => (
                            <div key={step} style={{
                                display: 'flex', gap: '20px', marginBottom: '24px',
                                padding: '20px 24px', borderRadius: '8px',
                                background: 'rgba(255,255,255,0.02)',
                                border: '1px solid rgba(255,255,255,0.06)'
                            }}>
                                <span style={{
                                    fontFamily: 'monospace', fontSize: '0.75rem',
                                    color, fontWeight: 700, minWidth: '28px', paddingTop: '2px'
                                }}>{step}</span>
                                <div>
                                    <strong style={{ color: '#fff', fontFamily: 'system-ui, sans-serif', display: 'block', marginBottom: '6px' }}>{title}</strong>
                                    <span style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Georgia, serif', fontSize: '1rem' }}>{body}</span>
                                </div>
                            </div>
                        ))}

                        <p style={{ marginBottom: '32px', marginTop: '8px' }}>
                            All of that ran on a Raspberry Pi with image-processing software, connected to a central server. Same physical cameras, same campus, but now there was a brain between &ldquo;motion&rdquo; and &ldquo;record.&rdquo;
                        </p>

                        <hr style={{ borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: 'none', margin: '48px 0' }} />

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '24px', fontFamily: 'system-ui, sans-serif' }}>The Numbers Made It Obvious</h3>

                        <div style={{ overflowX: 'auto', marginBottom: '40px' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem', fontFamily: 'system-ui, sans-serif' }}>
                                <thead>
                                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                                        <th style={{ padding: '12px 8px', color: '#fff' }}>Metric</th>
                                        <th style={{ padding: '12px 8px', color: '#fff' }}>Before</th>
                                        <th style={{ padding: '12px 8px', color: '#fff' }}>After</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                        <td style={{ padding: '12px 8px' }}>Storage usage</td>
                                        <td style={{ padding: '12px 8px', color: '#ef4444' }}>Continuous — every second stored</td>
                                        <td style={{ padding: '12px 8px', color: '#22c55e' }}>↓ ~85% (event-based only)</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                        <td style={{ padding: '12px 8px' }}>Night-time power consumption</td>
                                        <td style={{ padding: '12px 8px', color: '#ef4444' }}>Cameras burning 24/7</td>
                                        <td style={{ padding: '12px 8px', color: '#22c55e' }}>↓ ~80%</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '12px 8px' }}>Security operating cost</td>
                                        <td style={{ padding: '12px 8px', color: '#ef4444' }}>Baseline</td>
                                        <td style={{ padding: '12px 8px', color: '#22c55e' }}>↓ ~80% — zero camera replacements</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p style={{ marginBottom: '32px' }}>
                            For a student project, that&apos;s not just a nice demo. That&apos;s a material improvement in how a real system runs.
                        </p>

                        <hr style={{ borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: 'none', margin: '48px 0' }} />

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>The Serendipitous Part</h3>

                        <p style={{ marginBottom: '32px' }}>
                            We weren&apos;t chasing publication. We didn&apos;t build the project thinking, <em>this is going to be a paper</em>. We built it because the idea felt right and the impact was obvious. My professor saw the system, got properly excited, and pushed to get it published. That&apos;s how it ended up as <strong>&ldquo;Security and Sporadic Surveillance System at High Clearance Zone Using Sensor Activated Camera&rdquo;</strong> in Volume 2, Issue 6 (2016) of the Imperial Journal of Interdisciplinary Research.
                        </p>

                        <p style={{ marginBottom: '32px', fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>
                            My reaction was very sophisticated and academic: <em>damn bro, we published a paper.</em>
                        </p>

                        <p style={{ marginBottom: '32px' }}>
                            Looking back now, this whole thing feels less like a one-off college story and more like the prototype for how I still work. In 2015, edge-based, event-triggered vision wasn&apos;t a buzzword. Today, cameras that only &ldquo;wake up&rdquo; and reason when something&apos;s happening are embedded in everything from smart doorbells to industrial safety systems. As an undergrad with a Raspberry Pi and a handful of sensors, I accidentally built a rough version of a cornerstone of many successful businesses — and that in itself is the reward.
                        </p>

                        <hr style={{ borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: 'none', margin: '48px 0' }} />

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>Where the Ideas vs. Execution Debate Falls Apart</h3>

                        <p style={{ marginBottom: '32px' }}>
                            People don&apos;t usually fail because they&apos;re incapable of executing. They fail because they execute the first idea that shows up. They wire up projects that were never worth wiring. Saying no to a dozen safe, acceptable final-year ideas and holding out for the one that actually deserved the effort cost me time and a bit of comfort, but it taught me a pattern I still use:
                        </p>

                        <div style={{
                            padding: '32px', background: 'rgba(191, 255, 0, 0.03)',
                            borderRadius: '8px', borderLeft: '4px solid #bfff00', marginBottom: '40px'
                        }}>
                            <ol style={{ margin: 0, paddingLeft: '20px', fontFamily: 'system-ui, sans-serif' }}>
                                <li style={{ marginBottom: '16px' }}><strong>Be ruthless about the idea.</strong></li>
                                <li style={{ marginBottom: '16px' }}><strong>Be relentless about the execution once you&apos;ve found it.</strong></li>
                                <li><strong>Measure the impact so you know it wasn&apos;t just shiny.</strong></li>
                            </ol>
                        </div>

                        <p style={{ marginBottom: '32px' }}>
                            Ten years later, whether I&apos;m shipping something like <Link href="/ventures/clinicos" style={{ color: '#bfff00', textDecoration: 'underline', textUnderlineOffset: '4px' }}>ClinicOS</Link> or building experimentation systems in large companies, that loop keeps repeating. I&apos;m not interested in being &ldquo;the idea guy&rdquo; or &ldquo;the execution guy.&rdquo; I&apos;m interested in stacking the right idea with the right execution and watching the impact compound.
                        </p>

                        <ArticleAuthorBio />
                    </div>
                </motion.div>
            </article>
        </main>
    );
};

export default TenYearsIdeasExecutionContent;
