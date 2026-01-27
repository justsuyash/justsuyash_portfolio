"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowLeft, Mail, MapPin, Linkedin, Github, Briefcase, GraduationCap, Wrench, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const ResumePage = () => {
    const experiences = [
        {
            company: 'Albertsons Companies',
            role: 'Senior Data Scientist | Architecting AI-Powered Experimentation Systems',
            period: 'Feb 2024 – Present',
            color: '#00f3ff',
            status: 'Active',
            highlights: [
                { bold: 'Architected an end-to-end Causal Experimentation Engine:', text: ' Replaced manual workflows with a high-velocity pipeline scaling from 3 to 8+ experiments/week.' },
                { bold: 'The Pipeline:', text: ' Engineered a robust system: Test Configs (Experiment ID) → Automated Exposure Tables → 31+ Metric Aggregation → CUPED Variance Reduction → Bayesian Inference Layer.' },
                { bold: 'Statistical Impact:', text: ' Reduced standard error by 35%, compressing 28-day test windows into 12 days.' },
                { bold: 'GenAI Integration:', text: ' Deployed a GenAI Analyst Agent (SQL+RAG) and an Auto-Summary Agent, reducing post-experiment analysis from days to hours while cutting hallucinations by 60%.' },
                { bold: 'Business Value:', text: ' Validated $150M+ in annual strategic decisions across Pharmacy, Digital, and Private Brands.' }
            ]
        },
        {
            company: 'Applied AI Research Lab',
            role: 'Principal Engineer & Product Builder',
            period: 'Jan 2023 – Present',
            color: '#bd00ff',
            status: 'Building',
            description: 'Founded an applied research lab to validate emerging Agentic and RAG architectures before enterprise deployment.',
            highlights: [
                { bold: 'QuizBeef (700+ Users):', text: ' Architected an AI quiz app utilizing LLM semantic parsing and FAISS vector retrieval for document comprehension; insights informed Albertsons\' GenAI Copilot patterns.' },
                { bold: 'mana-health:', text: ' Developed a multi-agent health platform orchestrating specialized agents (physio, nutritionist) to process biometric and workout data.' },
                { bold: 'Aligned:', text: ' Built a dating app integrating astrology compatibility after market analysis revealed an underserved segment; demonstrates product-market fit analysis and consumer behavior insights.' }
            ]
        },
        {
            company: 'Discover Financial Services',
            role: 'Senior Data Scientist',
            period: 'Aug 2022 – Oct 2023',
            color: '#f59e0b',
            highlights: [
                { bold: '$114M in annual loan volume', text: ' by leveraging XGBoost analysis to prove employment verification added no predictive value, then executing an A/B test on low-risk segments that increased conversions by 300+ customers monthly.' },
                { bold: '$1.8M in loan approvals', text: ' by identifying and resolving critical iOS bugs through funnel analysis on the Automated Loan Approval platform.' },
                'Improved customer segmentation model accuracy by 12% by integrating GCP TensorFlow and collaborating with ML engineering team.',
                'Reduced infrastructure costs by 12+% by migrating legacy SAS workflows to modular SQL queries.'
            ]
        },
        {
            company: 'Kaizen',
            role: 'Data Science Engineering Intern',
            period: 'Jun 2021 – Dec 2021',
            color: '#22c55e',
            highlights: [
                'Informed 3+ marketing campaigns by analyzing user clustering patterns to uncover distinct customer journey types.',
                'Reduced authentication false positives by 13% by building ETL pipelines and deploying an anomaly detection model on AWS SageMaker.',
                'Improved forecasting accuracy by 8.5% by designing a hybrid time-series model (Prophet + LSTM) for sales prediction.'
            ]
        },
        {
            company: 'Vodafone',
            role: 'Assistant Manager, Data Science',
            period: 'Jun 2016 – Feb 2019',
            color: '#ef4444',
            highlights: [
                { bold: '$11.2M marketing revenue increase', text: ' and improved CTR by 28% by orchestrating email personalization using logistic regression.' },
                'Enhanced customer lifetime value by 5% by developing Linear Regression models to optimize subscription pricing.',
                'Reduced Priority 2 production issues by 60+% by developing Tableau dashboards with time series forecasting alerts.'
            ]
        }
    ];

    const education = [
        {
            school: 'The University of Texas at Dallas',
            degree: 'MS, Business Analytics',
            year: 'Jun 2022',
            note: "Dean's Scholar (Top 20%); President, Data Science Club."
        },
        {
            school: 'Pune University',
            degree: 'BS, Computer Science and Engineering',
            year: 'Jun 2016'
        }
    ];

    const skills = [
        { category: 'Programming & Data', items: 'Python, SQL, PySpark, BigQuery, Airflow, Pandas, NumPy, Scikit-learn, TensorFlow, LangChain' },
        { category: 'Machine Learning & Product', items: 'A/B Testing, Bayesian Methods, Causal Inference, Uplift Modeling, Prompt Engineering' },
        { category: 'Infrastructure', items: 'GCP (BigQuery, Vertex AI), AWS (S3, SageMaker), Azure, Docker, Streamlit' },
        { category: 'Certifications', items: 'Google Analytics' }
    ];

    return (
        <main style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '80px' }}>
            <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
                {/* Back Link */}
                <Link
                    href="/"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: 'rgba(255,255,255,0.5)',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        marginBottom: '32px',
                        textDecoration: 'none',
                        transition: 'color 0.3s'
                    }}
                >
                    <ArrowLeft size={16} /> Back to Portfolio
                </Link>

                {/* Resume Container */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{
                        background: 'rgba(15, 15, 20, 0.8)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '20px',
                        padding: '48px',
                        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    {/* Decorative Glow */}
                    <div style={{
                        position: 'absolute',
                        top: '-100px',
                        right: '-100px',
                        width: '300px',
                        height: '300px',
                        background: 'radial-gradient(circle, rgba(0,243,255,0.1) 0%, transparent 70%)',
                        borderRadius: '50%',
                        pointerEvents: 'none'
                    }} />

                    {/* Header Section */}
                    <header style={{
                        borderBottom: '1px solid rgba(255,255,255,0.1)',
                        paddingBottom: '32px',
                        marginBottom: '40px',
                        position: 'relative'
                    }}>
                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                            fontWeight: 700,
                            letterSpacing: '-0.03em',
                            marginBottom: '16px'
                        }}>
                            SUYASH<span style={{ color: '#00f3ff' }}>.</span>
                        </h1>

                        {/* Contact Info */}
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '20px',
                            fontSize: '0.85rem',
                            color: 'rgba(255,255,255,0.5)',
                            marginBottom: '24px'
                        }}>
                            <a
                                href="https://linkedin.com/in/justsuyash"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    color: 'rgba(255,255,255,0.5)',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s'
                                }}
                            >
                                <Linkedin size={14} /> LinkedIn
                            </a>
                            <a
                                href="https://github.com/justsuyash"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    color: 'rgba(255,255,255,0.5)',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s'
                                }}
                            >
                                <Github size={14} /> GitHub
                            </a>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <MapPin size={14} /> Dallas, Texas, USA
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <Mail size={14} /> suyashkumarthakur@gmail.com
                            </span>
                        </div>

                        {/* Summary */}
                        <p style={{
                            fontSize: '1.1rem',
                            color: 'rgba(255,255,255,0.7)',
                            lineHeight: 1.8,
                            maxWidth: '800px'
                        }}>
                            <strong style={{ color: '#fff' }}>Experimentation Platform Architect</strong> specializing in causal inference and high-velocity testing infrastructure at Fortune 100 scale. Led platform re-architecture that scaled test velocity 3→8/week and enabled $150M+ in revenue decisions through variance reduction (CUPED) and Bayesian experimentation.
                        </p>
                    </header>

                    {/* Work Experience */}
                    <section style={{ marginBottom: '48px' }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            marginBottom: '28px'
                        }}>
                            <Briefcase size={16} color="#00f3ff" />
                            <h2 style={{
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                color: '#00f3ff',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em'
                            }}>Work Experience</h2>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
                            {experiences.map((exp, idx) => (
                                <motion.div
                                    key={exp.company}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    style={{
                                        paddingLeft: '20px',
                                        borderLeft: `2px solid ${exp.color}30`
                                    }}
                                >
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'flex-start',
                                        marginBottom: '8px',
                                        flexWrap: 'wrap',
                                        gap: '12px'
                                    }}>
                                        <h3 style={{
                                            fontSize: '1.25rem',
                                            fontWeight: 700,
                                            color: '#fff'
                                        }}>{exp.company}</h3>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            {exp.status && (
                                                <span style={{
                                                    padding: '4px 10px',
                                                    borderRadius: '6px',
                                                    background: `${exp.color}15`,
                                                    color: exp.color,
                                                    fontSize: '0.65rem',
                                                    fontWeight: 700,
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.05em'
                                                }}>{exp.status}</span>
                                            )}
                                            <span style={{
                                                fontSize: '0.85rem',
                                                fontFamily: 'monospace',
                                                color: 'rgba(255,255,255,0.4)'
                                            }}>{exp.period}</span>
                                        </div>
                                    </div>

                                    <p style={{
                                        color: exp.color,
                                        fontWeight: 600,
                                        fontSize: '0.95rem',
                                        marginBottom: '12px'
                                    }}>{exp.role}</p>

                                    {exp.description && (
                                        <p style={{
                                            color: 'rgba(255,255,255,0.6)',
                                            fontSize: '0.9rem',
                                            marginBottom: '12px',
                                            lineHeight: 1.7
                                        }}>{exp.description}</p>
                                    )}

                                    <ul style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '10px',
                                        paddingLeft: '16px'
                                    }}>
                                        {exp.highlights.map((highlight, hIdx) => (
                                            <li key={hIdx} style={{
                                                color: 'rgba(255,255,255,0.5)',
                                                fontSize: '0.88rem',
                                                lineHeight: 1.6,
                                                listStyle: 'disc'
                                            }}>
                                                {typeof highlight === 'object' ? (
                                                    <>
                                                        <strong style={{ color: 'rgba(255,255,255,0.8)' }}>{highlight.bold}</strong>
                                                        {highlight.text}
                                                    </>
                                                ) : highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Education */}
                    <section style={{
                        marginBottom: '48px',
                        paddingTop: '32px',
                        borderTop: '1px solid rgba(255,255,255,0.05)'
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            marginBottom: '24px'
                        }}>
                            <GraduationCap size={16} color="#00f3ff" />
                            <h2 style={{
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                color: '#00f3ff',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em'
                            }}>Education</h2>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '24px'
                        }}>
                            {education.map((edu, idx) => (
                                <div key={idx} style={{
                                    padding: '20px',
                                    background: 'rgba(255,255,255,0.02)',
                                    borderRadius: '12px',
                                    border: '1px solid rgba(255,255,255,0.05)'
                                }}>
                                    <h3 style={{
                                        fontSize: '1rem',
                                        fontWeight: 700,
                                        color: '#fff',
                                        marginBottom: '4px'
                                    }}>{edu.school}</h3>
                                    <p style={{
                                        fontSize: '0.85rem',
                                        color: 'rgba(255,255,255,0.5)',
                                        marginBottom: '8px'
                                    }}>{edu.degree} • {edu.year}</p>
                                    {edu.note && (
                                        <p style={{
                                            fontSize: '0.8rem',
                                            color: 'rgba(255,255,255,0.4)',
                                            fontStyle: 'italic'
                                        }}>{edu.note}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Skills */}
                    <section style={{
                        paddingTop: '32px',
                        borderTop: '1px solid rgba(255,255,255,0.05)'
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            marginBottom: '24px'
                        }}>
                            <Wrench size={16} color="#00f3ff" />
                            <h2 style={{
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                color: '#00f3ff',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em'
                            }}>Skills & Technologies</h2>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                            gap: '20px'
                        }}>
                            {skills.map((skill, idx) => (
                                <div key={idx} style={{
                                    padding: '16px',
                                    background: 'rgba(255,255,255,0.02)',
                                    borderRadius: '10px',
                                    border: '1px solid rgba(255,255,255,0.05)'
                                }}>
                                    <h4 style={{
                                        fontSize: '0.85rem',
                                        fontWeight: 600,
                                        color: 'rgba(255,255,255,0.8)',
                                        marginBottom: '8px'
                                    }}>{skill.category}</h4>
                                    <p style={{
                                        fontSize: '0.8rem',
                                        color: 'rgba(255,255,255,0.5)',
                                        lineHeight: 1.6
                                    }}>{skill.items}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </motion.div>

                {/* Download Button */}
                <div style={{ marginTop: '32px', textAlign: 'center' }}>
                    <a
                        href="/portfolio_resume.pdf"
                        download="Suyash_Resume.pdf"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '16px 32px',
                            borderRadius: '12px',
                            background: 'linear-gradient(135deg, #00f3ff 0%, #00c8ff 100%)',
                            color: '#000',
                            fontWeight: 700,
                            fontSize: '0.95rem',
                            textDecoration: 'none',
                            boxShadow: '0 0 30px rgba(0, 243, 255, 0.3)',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <Download size={18} /> Download Resume PDF
                    </a>
                </div>
            </div>
        </main>
    );
};

export default ResumePage;
