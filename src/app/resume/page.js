"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowLeft, Mail, MapPin, Phone, Linkedin, Github, Globe, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const ResumePage = () => {
    return (
        <main className="min-h-screen pt-24 pb-20">
            <div className="container max-w-[850px] mx-auto">
                <Link href="/" className="inline-flex items-center gap-2 text-[#666] hover:text-white transition-colors mb-8 font-medium">
                    <ArrowLeft size={16} /> Back to Portfolio
                </Link>

                {/* Resume Paper */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[#0f0f13] border border-white/10 rounded-xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
                >
                    {/* Header */}
                    <header className="border-b border-white/10 pb-8 mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">SUYASH<span className="text-[#00f3ff]">.</span></h1>
                        <div className="flex flex-wrap gap-4 text-sm text-[#888] mb-6">
                            <a href="https://linkedin.com/in/justsuyash" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#0077b5] transition-colors"><Linkedin size={14} /> LinkedIn</a>
                            <a href="https://github.com/justsuyash" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors"><Github size={14} /> GitHub</a>
                            <span className="flex items-center gap-2"><MapPin size={14} /> Dallas, Texas, USA</span>
                            <span className="flex items-center gap-2"><Mail size={14} /> suyashkumarthakur@gmail.com</span>
                        </div>
                        <p className="text-lg text-[#ccc] leading-relaxed max-w-3xl">
                            <strong className="text-white">Experimentation Platform Architect</strong> specializing in causal inference and high-velocity testing infrastructure at Fortune 100 scale. Led platform re-architecture that scaled test velocity 3→8/week and enabled $150M+ in revenue decisions through variance reduction (CUPED) and Bayesian experimentation. Expert in quasi-experimental design, A/B testing at scale, and translating statistical rigor into product velocity.
                        </p>
                    </header>

                    {/* Experience */}
                    <section className="mb-10">
                        <h2 className="text-xs font-bold text-[#00f3ff] uppercase tracking-widest mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#00f3ff]"></span> Work Experience
                        </h2>

                        <div className="space-y-10">
                            {/* Bheed Studio */}
                            <div>
                                <div className="flex justify-between items-baseline mb-2">
                                    <h3 className="text-xl font-bold text-white">Bheed Studio</h3>
                                    <span className="text-sm font-mono text-[#666]">Jan 2023 – Present</span>
                                </div>
                                <div className="text-[#bd00ff] font-medium mb-3">Founder & Principal Engineer | Applied AI Research Lab</div>
                                <p className="text-[#ccc] text-sm mb-3">Technical sandbox building production-grade consumer AI products. 700+ users across QuizBeef (AI quiz app), mana-health (multi-agent health platform), Aligned (dating app).</p>
                                <ul className="space-y-2 text-sm text-[#888] list-disc pl-4">
                                    <li>Tech: LangChain, RAG, autonomous agents, context engineering.</li>
                                </ul>
                            </div>

                            {/* Albertsons */}
                            <div>
                                <div className="flex justify-between items-baseline mb-2">
                                    <h3 className="text-xl font-bold text-white">Albertsons Companies</h3>
                                    <span className="text-sm font-mono text-[#666]">Feb 2024 – Present</span>
                                </div>
                                <div className="text-[#00f3ff] font-medium mb-3">Senior Data Scientist | Architecting AI-Powered Experimentation Systems</div>
                                <ul className="space-y-2 text-sm text-[#888] list-disc pl-4">
                                    <li><strong className="text-[#ccc]">Architected an end-to-end Causal Experimentation Engine:</strong> Replaced manual workflows with a high-velocity pipeline scaling from 3 to 8+ experiments/week.</li>
                                    <li><strong className="text-[#ccc]">The Pipeline:</strong> Engineered a robust system: Test Configs (Experiment ID) → Automated Exposure Tables → 31+ Metric Aggregation → CUPED Variance Reduction → Bayesian Inference Layer.</li>
                                    <li><strong className="text-[#ccc]">Statistical Impact:</strong> Reduced standard error by 35%, compressing 28-day test windows into 12 days.</li>
                                    <li><strong className="text-[#ccc]">GenAI Integration:</strong> Deployed a GenAI Analyst Agent (SQL+RAG) and an Auto-Summary Agent, reducing post-experiment analysis from days to hours while cutting hallucinations by 60%.</li>
                                    <li><strong className="text-[#ccc]">Business Value:</strong> Validated $150M+ in annual strategic decisions across Pharmacy, Digital, and Private Brands.</li>
                                </ul>
                            </div>

                            {/* Discover */}
                            <div>
                                <div className="flex justify-between items-baseline mb-2">
                                    <h3 className="text-xl font-bold text-white">Discover Financial Services</h3>
                                    <span className="text-sm font-mono text-[#666]">Aug 2022 – Oct 2023</span>
                                </div>
                                <div className="text-white/80 font-medium mb-3">Senior Data Scientist</div>
                                <ul className="space-y-2 text-sm text-[#888] list-disc pl-4">
                                    <li>Generated <strong className="text-[#ccc]">$114M in annual loan volume</strong> by leveraging XGBoost analysis to prove employment verification added no predictive value, then executing an A/B test on low-risk segments that increased conversions by 300+ customers monthly.</li>
                                    <li>Enabled <strong className="text-[#ccc]">$1.8M in loan approvals</strong> by identifying and resolving critical iOS bugs through funnel analysis on the Automated Loan Approval platform.</li>
                                    <li>Improved customer segmentation model accuracy by 12% by integrating GCP TensorFlow and collaborating with ML engineering team.</li>
                                    <li>Reduced infrastructure costs by 12+% by migrating legacy SAS workflows to modular SQL queries.</li>
                                </ul>
                            </div>

                            {/* Kaizen */}
                            <div>
                                <div className="flex justify-between items-baseline mb-2">
                                    <h3 className="text-xl font-bold text-white">Kaizen</h3>
                                    <span className="text-sm font-mono text-[#666]">Jun 2021 – Dec 2021</span>
                                </div>
                                <div className="text-white/80 font-medium mb-3">Data Science Engineering Intern</div>
                                <ul className="space-y-2 text-sm text-[#888] list-disc pl-4">
                                    <li>Informed 3+ marketing campaigns by analyzing user clustering patterns to uncover distinct customer journey types.</li>
                                    <li>Reduced authentication false positives by 13% by building ETL pipelines and deploying an anomaly detection model on AWS SageMaker.</li>
                                    <li>Improved forecasting accuracy by 8.5% by designing a hybrid time-series model (Prophet + LSTM) for sales prediction.</li>
                                </ul>
                            </div>

                            {/* Vodafone */}
                            <div>
                                <div className="flex justify-between items-baseline mb-2">
                                    <h3 className="text-xl font-bold text-white">Vodafone</h3>
                                    <span className="text-sm font-mono text-[#666]">Jun 2016 – Feb 2019</span>
                                </div>
                                <div className="text-white/80 font-medium mb-3">Assistant Manager, Data Science</div>
                                <ul className="space-y-2 text-sm text-[#888] list-disc pl-4">
                                    <li>Increased marketing revenue by <strong className="text-[#ccc]">$11.2M</strong> and improved CTR by 28% by orchestrating email personalization using logistic regression.</li>
                                    <li>Enhanced customer lifetime value by 5% by developing Linear Regression models to optimize subscription pricing.</li>
                                    <li>Reduced Priority 2 production issues by 60+% by developing Tableau dashboards with time series forecasting alerts.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Education */}
                    <section className="mb-10 pt-8 border-t border-white/5">
                        <h2 className="text-xs font-bold text-[#00f3ff] uppercase tracking-widest mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#00f3ff]"></span> Education
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-white font-bold">The University of Texas at Dallas</h3>
                                <p className="text-sm text-[#666]">MS, Business Analytics • Jun 2022</p>
                                <p className="text-xs text-[#888] mt-2">Dean’s Scholar (Top 20%); President, Data Science Club.</p>
                            </div>
                            <div>
                                <h3 className="text-white font-bold">Pune University</h3>
                                <p className="text-sm text-[#666]">BS, Computer Science and Engineering • Jun 2016</p>
                            </div>
                        </div>
                    </section>

                    {/* Skills */}
                    <section className="pt-8 border-t border-white/5">
                        <h2 className="text-xs font-bold text-[#00f3ff] uppercase tracking-widest mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#00f3ff]"></span> Skills
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6 text-sm">
                            <div>
                                <span className="block text-[#ccc] font-medium mb-1">Programming & Data</span>
                                <span className="text-[#888]">Python, SQL, PySpark, BigQuery, Airflow, Pandas, NumPy, Scikit-learn, TensorFlow, LangChain</span>
                            </div>
                            <div>
                                <span className="block text-[#ccc] font-medium mb-1">Machine Learning & Product</span>
                                <span className="text-[#888]">A/B Testing, Bayesian Methods, Causal Inference, Uplift Modeling, Prompt Engineering</span>
                            </div>
                            <div>
                                <span className="block text-[#ccc] font-medium mb-1">Infrastructure</span>
                                <span className="text-[#888]">GCP (BigQuery, Vertex AI), AWS (S3, SageMaker), Azure, Docker, Streamlit</span>
                            </div>
                            <div>
                                <span className="block text-[#ccc] font-medium mb-1">Certifications</span>
                                <span className="text-[#888]">Google Analytics</span>
                            </div>
                        </div>
                    </section>
                </motion.div>

                <div className="mt-8 text-center">
                    <button
                        onClick={() => window.print()}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 text-white font-medium transition-colors text-sm"
                    >
                        Print to PDF
                    </button>
                </div>
            </div>
        </main>
    );
};

export default ResumePage;
