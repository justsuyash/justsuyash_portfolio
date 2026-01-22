import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Tag, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const DecisionTreesPage = () => {
    return (
        <main style={{ paddingTop: '120px', paddingBottom: '100px', backgroundColor: '#050505' }}>
            <article className="container" style={{ maxWidth: '800px' }}>
                <Link to="/articles" style={{
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
                                <Tag size={12} /> PRODUCT DATA SCIENCE
                            </span>
                            <span style={{
                                display: 'inline-flex', alignItems: 'center', gap: '6px',
                                color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', fontFamily: 'monospace'
                            }}>
                                <Calendar size={12} /> DEC 2021
                            </span>
                            <span style={{
                                display: 'inline-flex', alignItems: 'center', gap: '6px',
                                color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', fontFamily: 'monospace'
                            }}>
                                <Clock size={12} /> 5 MIN READ
                            </span>
                        </div>

                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 700,
                            lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '24px',
                            fontFamily: 'system-ui, -apple-system, sans-serif'
                        }}>
                            Interpretability IS Functionality: Reducing Authentication Friction by 13%
                        </h1>

                        During my short stint as an intern data scientist consulting for one of the fastest growing startups (#44) in the USA, we faced the classic identity dilemma: How do you stop account takeovers without treating every loyal customer like a criminal?
                    </p>
                </header>

                <div className="article-content" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', lineHeight: 1.8, fontFamily: 'Georgia, serif' }}>

                    <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>The Business Problem: The "Friction vs. Fraud" Trade-off</h3>
                    <p style={{ marginBottom: '32px' }}>
                        Our legacy authentication system was a blunt instrument. It operated on static, binary rules (e.g., <code>If IP != Last IP → Force 2FA</code>). This resulted in a high False Positive Rate (FPR), where legitimate users—especially travelers or those with dynamic IPs—were constantly nagged by 2FA challenges. This friction was a direct driver of user churn.
                    </p>
                    <p style={{ marginBottom: '40px' }}>
                        We needed a model that could surgically distinguish between "Latent Risk" and "New Context," allowing us to only spend our "friction budget" where it was actually needed.
                    </p>

                    <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>The Architecture: Moving to Surgical Segmentation</h3>
                    <p style={{ marginBottom: '32px' }}>
                        We replaced the static rule engine with a dynamic risk scoring system. While deep learning was considered for its predictive power, we ultimately chose <strong>Decision Trees</strong> for three strategic reasons critical to Product Data Science:
                    </p>
                    <ol style={{ paddingLeft: '20px', marginBottom: '40px', color: '#fff' }}>
                        <li style={{ marginBottom: '12px' }}><strong>Auditability:</strong> In security, "Black Box" decisions are liabilities. We needed to explain to Customer Support exactly <em>why</em> a VIP user was blocked.</li>
                        <li style={{ marginBottom: '12px' }}><strong>Inference Speed:</strong> We needed sub-millisecond scoring during the login handshake without the overhead of heavy model serving infrastructure.</li>
                        <li><strong>Policy Generation:</strong> We didn't just need a probability; we needed clear cut-offs to define business logic.</li>
                    </ol>

                    <div style={{
                        background: '#0a0a0a', padding: '32px', borderRadius: '8px',
                        border: '1px solid rgba(255,255,255,0.1)', marginBottom: '40px',
                        overflowX: 'auto'
                    }}>
                        <h4 style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', fontFamily: 'monospace', marginBottom: '16px' }}>LEGACY STATE (Static Logic)</h4>
                        <pre style={{ margin: 0, fontFamily: 'monospace', fontSize: '0.85rem', color: '#ef4444', lineHeight: 1.4 }}>
                            {`User Login 
    ⬇
Static Rule Check 
    ⬇
GENERIC 2FA CHALLENGE
(Result: High friction for safe users, predictable patterns for fraudsters)`}
                        </pre>

                        <div style={{ height: '32px' }}></div>

                        <h4 style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', fontFamily: 'monospace', marginBottom: '16px' }}>NEW STATE (Tree-Derived Logic)</h4>
                        <pre style={{ margin: 0, fontFamily: 'monospace', fontSize: '0.85rem', color: '#22c55e', lineHeight: 1.4 }}>
                            {`User Login 
    ⬇
Feature Engineering (Device Trust, Time-of-Day, Velocity)
    ⬇
Decision Tree Classifier
    ⬇
GRANULAR SEGMENTATION
(Result: "Passive Auth" (No 2FA) for 90% of sessions)`}
                        </pre>
                    </div>

                    <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>Why "Old School" Won: Trees as Segmenters</h3>
                    <p style={{ marginBottom: '32px' }}>
                        The superpower of the Decision Tree in this context wasn't just classification—it was <strong>hyper-segmentation</strong>.
                    </p>
                    <p style={{ marginBottom: '32px' }}>
                        A logistic regression would have forced us to determine a single global probability threshold (e.g., Score &gt; 0.7). This is often insufficient for global products. We found that risk factors like "Time of Day" were highly predictive for specific geos but irrelevant for others.
                    </p>
                    <p style={{ marginBottom: '40px' }}>
                        A regression struggles to "turn off" a variable for a specific subset of users without complex interaction terms. A tree, however, naturally isolates these sub-populations. It allowed us to automatically carve out "Safe Zones"—hyper-rectangles of logic where we could confidently suppress 2FA.
                    </p>

                    <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>The Hidden Value: Data-Driven Definitions</h3>
                    <p style={{ marginBottom: '32px' }}>
                        The most underrated utility of this approach was using the model to settle business debates. Product and Engineering often argued over definitions: <em>What is a "Trusted Device"? Is it 3 successful logins? 5?</em>
                    </p>
                    <p style={{ marginBottom: '40px' }}>
                        Instead of guessing, we let the tree dictate the policy. We ran a tree predicting <code>Future_Fraud_Event</code>. The first split (e.g., <code>Successful_Logins >= 4</code>) gave us a mathematically justified threshold. We replaced "gut feel" rules with data-derived breakpoints.
                    </p>

                    <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>Impact & Optimization</h3>
                    <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
                        <li style={{ marginBottom: '12px', display: 'flex', gap: '12px' }}>
                            <span style={{ color: '#22c55e' }}>➜</span> <span><strong>13% Reduction in 2FA Challenges:</strong> We successfully identified low-risk segments that were previously flagged by static rules.</span>
                        </li>
                        <li style={{ marginBottom: '12px', display: 'flex', gap: '12px' }}>
                            <span style={{ color: '#22c55e' }}>➜</span> <span><strong>Zero Increase in Fraud:</strong> The reduction in friction did not compromise security.</span>
                        </li>
                    </ul>

                    <div style={{ padding: '32px', background: 'rgba(189, 0, 255, 0.05)', borderRadius: '12px', border: '1px solid rgba(189, 0, 255, 0.1)' }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#bd00ff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>Going Deeper: RuleFit</h3>
                        <p style={{ marginBottom: '16px', fontSize: '1rem', color: 'rgba(255,255,255,0.8)' }}>
                            To maximize performance without losing interpretability, we eventually upgraded to <strong>RuleFit</strong>. This allowed us to:
                        </p>
                        <ul style={{ paddingLeft: '20px', marginBottom: '16px', fontSize: '1rem', color: 'rgba(255,255,255,0.8)' }}>
                            <li>Use a Random Forest to generate thousands of candidate rules (non-linear feature interactions).</li>
                            <li>Use Lasso Regression to select only the sparse set of rules that actually mattered.</li>
                        </ul>
                        <p style={{ marginBottom: '0', fontSize: '1rem', color: 'rgba(255,255,255,0.8)' }}>
                            This gave us the accuracy of an ensemble method while retaining the "If-Then" auditability required for a security product.
                        </p>
                    </div>

                </div>
            </motion.div>
        </article>
        </main >
    );
};

export default DecisionTreesPage;
