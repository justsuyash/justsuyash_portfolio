"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Tag, Clock } from 'lucide-react';
import Link from 'next/link';
import ArticleAuthorBio from '../ArticleAuthorBio';

const YearCouldntCodeContent = () => {
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
                                <Clock size={12} /> 6 MIN READ
                            </span>
                        </div>

                        <h1 style={{
                            fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: 700,
                            lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '24px',
                            fontFamily: 'system-ui, -apple-system, sans-serif'
                        }}>
                            The Year I Couldn&apos;t Code — and Shipped Anyway
                        </h1>
                        <p style={{
                            fontSize: '1.25rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6,
                            fontFamily: 'system-ui, sans-serif', marginTop: '16px'
                        }}>
                            Before the surveillance project. Before the published paper. A second-year book-lending app, a stubborn refusal to build something boring, and the lesson that the right project doesn&apos;t wait for you to be ready — it makes you ready.
                        </p>
                    </header>

                    <div style={{ margin: '0 0 48px 0', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <img src="/images/article-graphics/year-couldnt-code.jpg" alt="From Toy Puzzles to a Shipped Product — sketch illustration" style={{ width: '100%', display: 'block' }} />
                    </div>

                    <div className="article-content" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', lineHeight: 1.8, fontFamily: 'Georgia, serif' }}>

                        <p style={{ marginBottom: '32px' }}>
                            Before the surveillance project. Before the published paper. Before I called myself anything close to an engineer, there was a second-year project and a simple, stubborn refusal to build something boring.
                        </p>

                        <hr style={{ borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: 'none', margin: '48px 0' }} />

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>Project Season, Round One</h3>

                        <p style={{ marginBottom: '32px' }}>
                            It was my second year. Project season, round one. And just like it would happen later, everyone around me reached for the safe options. A bus booking system. An attendance tracker. The same handful of templates that get rebuilt every semester, demoed once, and forgotten. Solid enough to pass, interesting to no one — including the people building them.
                        </p>

                        <p style={{ marginBottom: '32px' }}>
                            I didn&apos;t want that. I wanted to build a little library — an app where people could lend and borrow digital books, PDFs and e-books, from each other. It wasn&apos;t flashy. It wasn&apos;t going to win a hackathon. But it was a real thing that real people could actually use, and that was enough to make it worth my time. That&apos;s the same filter I&apos;d apply later with the cameras, just with lower stakes and a lot less skill.
                        </p>

                        <hr style={{ borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: 'none', margin: '48px 0' }} />

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>The Part I Don&apos;t Usually Lead With</h3>

                        <p style={{ marginBottom: '32px' }}>
                            Because here&apos;s the part I don&apos;t usually lead with: <strong>I couldn&apos;t really build anything.</strong> Sure, I could solve small coding puzzles — write a for loop, work through a textbook problem — but I had never written an actual script, let alone built a real app. Puzzles and products are two different worlds, and I was standing firmly on the wrong side of that line. I had the idea and the conviction and almost none of the ability to ship it. On paper, that should have been a reason to pick something easier. Instead, it became the whole point.
                        </p>

                        <p style={{ marginBottom: '32px' }}>
                            So I did two things. First, I pulled in friends who could code to help me build it — which taught me early that a good idea is a magnet; people will lend you their skills if the thing is worth building. Second, and more importantly, I refused to just be the &ldquo;idea guy&rdquo; while everyone else typed. I started actually learning. Line by line, bug by bug, borrowed function by borrowed function.
                        </p>

                        <hr style={{ borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: 'none', margin: '48px 0' }} />

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>The Project as a Crash Course</h3>

                        <p style={{ marginBottom: '32px' }}>
                            The project became my crash course. Every feature I wanted forced me to learn the thing that made it possible. I wasn&apos;t studying to pass an exam; I was studying because the app in front of me refused to work until I understood it. That&apos;s a completely different kind of motivation, and it moves you fast.
                        </p>

                        <p style={{ marginBottom: '32px' }}>
                            By the time the project wrapped, I wasn&apos;t the guy who&apos;d never written a script anymore. I&apos;d gone from solving toy puzzles to actually building and shipping software — and somewhere in that grind, I&apos;d climbed to a CodeChef Level 2 coder. Not world-class, not overnight genius — but a real, measurable jump from &ldquo;can&apos;t build&rdquo; to &ldquo;can,&rdquo; driven entirely by refusing to build something I didn&apos;t care about.
                        </p>

                        <div style={{
                            padding: '32px', background: 'rgba(191, 255, 0, 0.03)',
                            borderRadius: '8px', borderLeft: '4px solid #bfff00', marginBottom: '40px'
                        }}>
                            <p style={{ margin: 0, fontFamily: 'system-ui, sans-serif', color: 'rgba(255,255,255,0.85)' }}>
                                And the project itself landed: <strong style={{ color: '#fff' }}>full marks.</strong>
                            </p>
                        </div>

                        <hr style={{ borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: 'none', margin: '48px 0' }} />

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>The Idea Pulled the Skill Out of Me</h3>

                        <p style={{ marginBottom: '32px' }}>
                            Looking back, that&apos;s the lesson I actually want to keep from this one. The idea didn&apos;t just get executed — it <em>pulled the skill out of me.</em> I didn&apos;t learn to code and then build the app. I committed to the app, and it dragged the coding ability into existence because I had no choice. <strong>The right project doesn&apos;t wait for you to be ready. It makes you ready.</strong>
                        </p>

                        <p style={{ marginBottom: '32px' }}>
                            I&apos;ll be honest about one thing: digital book lending and sharing later turned into a real, sizeable business. At the time, I couldn&apos;t see why people would pay for something built around freely floating PDFs, so I never chased it beyond the classroom. I was wrong about that — but that&apos;s a lesson for another day. The return on that project was never supposed to be a company. The return was that I walked out of it a builder.
                        </p>

                        <hr style={{ borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: 'none', margin: '48px 0' }} />

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>Where the Pattern Really Starts</h3>

                        <p style={{ marginBottom: '32px' }}>
                            That exact ability is what later let me pick up machine learning and computer vision and build the <Link href="/articles/ten-years-ideas-execution" style={{ color: '#bfff00', textDecoration: 'underline', textUnderlineOffset: '4px' }}>surveillance system that got published</Link>. None of that happens without the book app teaching me how to build in the first place.
                        </p>

                        <p style={{ marginBottom: '32px' }}>
                            So this is where the pattern really starts. Not &ldquo;I had good ideas.&rdquo; Everyone has ideas. It&apos;s that I kept picking the idea I actually cared about over the safe one — and every single time, that choice forced me to level up to meet it. Second year, it made me a builder. Final year, it made me a <Link href="/articles/ten-years-ideas-execution" style={{ color: '#bfff00', textDecoration: 'underline', textUnderlineOffset: '4px' }}>published researcher</Link>. Ten years on, it&apos;s still the only method I trust.
                        </p>

                        <ArticleAuthorBio />
                    </div>
                </motion.div>
            </article>
        </main>
    );
};

export default YearCouldntCodeContent;
