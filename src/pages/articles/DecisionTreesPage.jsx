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
                                <Tag size={12} /> ALGORITHMS
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
                                <Clock size={12} /> 7 MIN READ
                            </span>
                        </div>

                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 700,
                            lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '24px',
                            fontFamily: 'system-ui, -apple-system, sans-serif'
                        }}>
                            Why do they keep asking about Decision Trees?
                        </h1>

                        <p style={{
                            fontSize: '1.25rem', color: 'rgba(255,255,255,0.6)',
                            lineHeight: 1.7, fontFamily: 'Georgia, serif'
                        }}>
                            It's not just a textbook question. How we decreased 2FA friction by 13% using the most interpretible model in the arsenal.
                        </p>
                    </header>

                    <div className="article-content" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', lineHeight: 1.8, fontFamily: 'Georgia, serif' }}>

                        <p style={{ marginBottom: '32px' }}>
                            If you've interviewed for a Data Science role, you've answered the Decision Tree question. <em>"How do they handle non-linearity? How do they differ from regression?"</em>
                        </p>
                        <p style={{ marginBottom: '40px' }}>
                            It's easy to dismiss them as "old school" compared to Deep Learning, but in my time at <strong>Kaizen</strong>, I learned why they are the bread and butter of Product Data Science: <strong>Interpretability IS functionality.</strong>
                        </p>

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>The Real-World Problem: Friction vs. Fraud</h3>
                        <p style={{ marginBottom: '32px' }}>
                            We were building a fraud detection system for authentication. The stakes were high:
                            <ul style={{ marginTop: '16px' }}>
                                <li><strong>Miss a threat?</strong> Account takeover.</li>
                                <li><strong>Flag a safe user?</strong> You force them through 2FA/MFA, annoying them and potentially causing churn.</li>
                            </ul>
                            We needed to reduce "False Positives" (annoying safe users) without letting bad actors in.
                        </p>

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>The Architecture Change</h3>

                        <div style={{
                            background: '#0a0a0a', padding: '32px', borderRadius: '8px',
                            border: '1px solid rgba(255,255,255,0.1)', marginBottom: '40px',
                            overflowX: 'auto'
                        }}>
                            <h4 style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', fontFamily: 'monospace', marginBottom: '16px' }}>OLD ARCHITECTURE (Rules / Black Box)</h4>
                            <pre style={{ margin: 0, fontFamily: 'monospace', fontSize: '0.85rem', color: '#ef4444', lineHeight: 1.4 }}>
                                {`[ User Login ] 
      ⬇
[ Static Rule Check ] ---> (If IP != Last IP)
      ⬇
[ FORCE 2FA ALL ] 
      ⬇
🔴 High Friction for travelers
🔴 Generic "False Positives"`}
                            </pre>

                            <div style={{ height: '32px' }}></div>

                            <h4 style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', fontFamily: 'monospace', marginBottom: '16px' }}>NEW ARCHITECTURE (Decision Tree Logic)</h4>
                            <pre style={{ margin: 0, fontFamily: 'monospace', fontSize: '0.85rem', color: '#22c55e', lineHeight: 1.4 }}>
                                {`[ User Login ] 
      ⬇
[ Feature Engineering ] (Time of day, Device Trust, etc.)
      ⬇
[ Decision Tree Classifier ]
      │
      ├── [ Leaf A: Safe ] -----> [ ALLOW (No 2FA) ] 🟢
      │
      └── [ Leaf B: Risk ] -----> [ CHALLENGE (2FA) ] 🟡`}
                            </pre>
                        </div>

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>Why Trees Won</h3>
                        <p style={{ marginBottom: '24px' }}>
                            Unlike a regression, which tries to fit a smooth line, trees naturally find <strong>non-linear segments</strong>.
                        </p>
                        <p style={{ marginBottom: '32px' }}>
                            For example, we found that <em>Time of Day</em> matters, but only for certain countries. A regression might struggle to "turn off" the Time variable for US users while keeping it for others without complex interaction terms. A tree just splits.
                        </p>

                        <div style={{
                            background: '#0a0a0a', padding: '32px', borderRadius: '8px',
                            border: '1px solid rgba(255,255,255,0.1)', marginBottom: '40px',
                            overflowX: 'auto',
                            fontFamily: 'monospace'
                        }}>
                            <pre style={{ color: '#fff', lineHeight: 1.5 }}>
                                {`       [ Purchases &lt;= 3.5? ]
          /           \\
    [ YES ]           [ NO ]
    (52% of users)    (48% of users)
      |                 |
 [ Purchases &lt;= 0.5? ] [ Country = France? ]
    /      \\             /        \\
[Leaf 1]  [Leaf 2]   [Leaf 3]    [Leaf 4]
(Pure)    (Mix)      (Risk)      (Safe)
`}
                            </pre>
                            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', marginTop: '16px' }}>
                                <em>*Visualization of how trees carve out "hyper-rectangles" of logic.</em>
                            </p>
                        </div>

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>Metric Building</h3>
                        <p style={{ marginBottom: '32px' }}>
                            The most underrated use of trees is <strong>generating definitions</strong>. In Product Science, we often need to define a "Power User." Is it 5 purchases? 10?
                        </p>
                        <p style={{ marginBottom: '32px' }}>
                            Instead of guessing, we run a tree predicting <em>Retention</em>. The first split (e.g., <code>Purchases > 3.5</code>) gives us a mathematically justified threshold. We used this to define our "Risk Segments" for the 2FA rollout, reducing false positives by 13% because we weren't just guessing—we were following the data's natural breakpoints.
                        </p>

                    </div>
                </motion.div>
            </article>
        </main>
    );
};

export default DecisionTreesPage;
