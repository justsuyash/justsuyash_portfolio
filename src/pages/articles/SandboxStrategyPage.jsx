import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Tag, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SandboxStrategyPage = () => {
    return (
        <main style={{ paddingTop: '120px', paddingBottom: '100px', backgroundColor: '#050505' }}>
            <article className="container" style={{ maxWidth: '800px' }}>
                <Link to="/" style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    color: 'rgba(255,255,255,0.4)', textDecoration: 'none', marginBottom: '48px',
                    fontSize: '0.9rem', fontWeight: 500
                }}>
                    <ArrowLeft size={16} /> Back to Home
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
                                <Tag size={12} /> STRATEGY
                            </span>
                            <span style={{
                                display: 'inline-flex', alignItems: 'center', gap: '6px',
                                color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', fontFamily: 'monospace'
                            }}>
                                <Calendar size={12} /> FEB 2024
                            </span>
                            <span style={{
                                display: 'inline-flex', alignItems: 'center', gap: '6px',
                                color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', fontFamily: 'monospace'
                            }}>
                                <Clock size={12} /> 6 MIN READ
                            </span>
                        </div>

                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 700,
                            lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '24px',
                            fontFamily: 'system-ui, -apple-system, sans-serif'
                        }}>
                            The "Sandbox" Strategy: How I Turned a Jupyter Notebook into an Enterprise App
                        </h1>

                        <p style={{
                            fontSize: '1.25rem', color: 'rgba(255,255,255,0.6)',
                            lineHeight: 1.7, fontFamily: 'Georgia, serif'
                        }}>
                            Or: Why you should scale your prototype before you build your platform.
                        </p>
                    </header>

                    <div className="article-content" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', lineHeight: 1.8, fontFamily: 'Georgia, serif' }}>

                        <p style={{ marginBottom: '32px' }}>
                            We often talk about "Enterprise Architecture" as the end goal—slick UIs, microservices, and dedicated engineering teams. But in the messy middle, when the business demands velocity <em>now</em> but the platform isn't ready, you have to get creative.
                        </p>
                        <p style={{ marginBottom: '32px' }}>
                            At a Fortune 100 retailer, I faced a bottleneck. We needed to scale from 3 experiments a week to 8+, but our "infrastructure" was a manual grind of downloading Excel files, color-coding cells, and running sequential queries.
                        </p>
                        <p style={{ marginBottom: '32px' }}>
                            We didn't have time to wait for a full-stack engineering overhaul. So, I built a bridge. I turned a simple Jupyter Notebook into a scalable, automated experimentation engine.
                        </p>
                        <p style={{ marginBottom: '32px' }}>
                            Here is how I architected the "Hack," and why it became the blueprint for our eventual enterprise solution.
                        </p>

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>The Problem: The "Analyst Loop"</h3>
                        <p style={{ marginBottom: '32px' }}>
                            The standard workflow for Data Scientists is often unscalable:
                        </p>
                        <ol style={{ paddingLeft: '20px', marginBottom: '32px' }}>
                            <li style={{ marginBottom: '12px' }}>Open a notebook.</li>
                            <li style={{ marginBottom: '12px' }}>Change a few variables (Dates, Variant IDs).</li>
                            <li style={{ marginBottom: '12px' }}>Run all cells.</li>
                            <li style={{ marginBottom: '12px' }}>Stare at the screen for 15 minutes.</li>
                            <li style={{ marginBottom: '12px' }}>Copy-paste results into Excel.</li>
                            <li style={{ marginBottom: '12px' }}>Repeat.</li>
                        </ol>
                        <p style={{ marginBottom: '32px' }}>
                            This is fine for ad-hoc analysis. It is fatal for production velocity.
                        </p>

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>The Solution: The "Notebook-as-App" Pattern</h3>
                        <p style={{ marginBottom: '32px' }}>
                            To break this loop without building a whole new software stack, I leveraged the existing Databricks/Jupyter environment but treated the notebook as a backend application, not a scratchpad.
                        </p>

                        <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#00f3ff', marginBottom: '12px', fontFamily: 'system-ui, sans-serif' }}>1. The Interface: HTML & Widgets</h4>
                        <p style={{ marginBottom: '32px' }}>
                            I stopped asking stakeholders to "read code." Instead, I used <code>displayHTML</code> and <code>dbutils.widgets</code> to create a clean, app-like interface directly in the notebook.
                            <br /><br />
                            <strong>Visual Feedback:</strong> Instead of raw error logs, I built HTML warnings (e.g., <span style={{ color: '#ef4444' }}> WARNING: Experiment ID does not exist </span>) that would trigger dynamically if inputs were invalid.
                            <br /><br />
                            <strong>Config, Not Code:</strong> We abstracted the complexity behind dropdowns and text inputs.
                        </p>

                        <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#00f3ff', marginBottom: '12px', fontFamily: 'system-ui, sans-serif' }}>2. The Engine: Batch Automation via Excel</h4>
                        <p style={{ marginBottom: '32px' }}>
                            Doing this for one experiment is easy. Doing it for dozens is hard. I realized we didn't need a UI for input; we needed a bulk loader.
                            <br /><br />
                            <strong>The Config File:</strong> I built an Excel template where we could define the parameters for every running experiment (Test IDs, Start Dates, Metrics).
                            <br /><br />
                            <strong>The "Cloner" Script:</strong> I wrote a driver script that read this Excel file. For every row (experiment) in the file, it spun up a copy of the master notebook, injected the specific parameters, and executed it in parallel.
                        </p>

                        <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#00f3ff', marginBottom: '12px', fontFamily: 'system-ui, sans-serif' }}>3. Decoupled Storage</h4>
                        <p style={{ marginBottom: '32px' }}>
                            Previously, the "result" of a notebook was the notebook itself. If you closed the tab, you lost the view. I changed the architecture to write results immediately to a decoupled SQL table (<code>db_work.POWER_OUTPUT_RESULTS</code>). The notebook became a stateless compute engine. The results were persistent.
                            <br /><br />
                            <strong>The Win:</strong> This allowed us to build dashboards (Tableau/Looker) on top of that results table. The stakeholders stopped opening notebooks entirely and just checked the dashboard.
                        </p>

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>The "Sandbox" Advantage</h3>
                        <p style={{ marginBottom: '32px' }}>
                            This approach did more than just save time—it became a de-risked testing ground for our future platform.
                        </p>
                        <p style={{ marginBottom: '32px' }}>
                            Because we were still in a notebook environment (Python/SQL), I had total flexibility. If I wanted to test a new statistical method—like CUPED for variance reduction or a Bayesian framework for faster decision-making—I didn't have to file a JIRA ticket with engineering. I just imported the library and updated the master notebook.
                        </p>
                        <p style={{ marginBottom: '32px' }}>
                            We successfully tested and validated these advanced statistical methods in the "Sandbox" first. By the time we were ready to build the official enterprise application, we weren't guessing at the requirements. We had a working prototype that had already processed millions of dollars in revenue attribution.
                        </p>

                        <div style={{
                            padding: '32px', background: 'rgba(34, 197, 94, 0.05)',
                            borderRadius: '8px', borderLeft: '4px solid #22c55e', marginBottom: '40px'
                        }}>
                            <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#22c55e', margin: '0 0 16px 0', fontFamily: 'system-ui, sans-serif' }}>Key Takeaway</h4>
                            <p style={{ margin: 0, fontStyle: 'italic' }}>
                                Scaling isn't always about moving away from notebooks; sometimes it's about making your notebooks smarter.
                                <br /><br />
                                By treating my notebook as a scalable application—complete with UI, batch processing, and decoupled storage—I bought us the time and insights needed to build the real thing effectively. We proved the value before we wrote the spec.
                            </p>
                        </div>

                        <Link to="/articles/experimentation-architecture" style={{
                            display: 'flex', alignItems: 'center', gap: '16px',
                            background: 'rgba(255,255,255,0.05)', padding: '24px',
                            borderRadius: '8px', textDecoration: 'none',
                            border: '1px solid rgba(255,255,255,0.1)',
                            marginTop: '64px', transition: 'border-color 0.2s'
                        }}>
                            <div style={{ flex: 1 }}>
                                <span style={{
                                    display: 'block', fontSize: '0.875rem',
                                    color: '#bd00ff', marginBottom: '8px', fontFamily: 'monospace'
                                }}>
                                    READ THE TECHNICAL ARCHITECTURE
                                </span>
                                <h4 style={{
                                    fontSize: '1.25rem', fontWeight: 600,
                                    color: '#fff', margin: 0
                                }}>
                                    From Sequential To Parallel: Scaling Experimentation Inference
                                </h4>
                            </div>
                            <ArrowRight color="rgba(255,255,255,0.6)" />
                        </Link>

                    </div>
                </motion.div>
            </article>
        </main>
    );
};

export default SandboxStrategyPage;
