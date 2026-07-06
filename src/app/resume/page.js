"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowLeft, Mail, MapPin, Linkedin, Github, Briefcase, GraduationCap, Wrench, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const ResumePage = () => {
    const experiences = [
        {
            company: 'Albertsons',
            role: 'Data Scientist IV — Principal Platform Architect',
            period: 'Feb 2024 – Present',
            color: '#00f3ff',
            status: 'Active',
            highlights: [
                { bold: 'Enterprise Platform Adoption:', text: ' Democratized causal data science by pioneering an enterprise-wide experimentation infrastructure across 4 distinct business units (In-Store, Pharmacy, Digital, and Private Brands); scaled cross-functional testing capacity from 3 to 8+ concurrent experiments/week, driving $150M+ in decentralized annual business decisions.' },
                { bold: 'Statistical Standardization:', text: ' Operationalized an automated distributed Spark and CUPED variance reduction pipeline enterprise-wide to achieve a 35% error reduction; compressed experimental cycle times by 40% (from 28 to 12 days) for all cross-functional product and analytics teams.' },
                { bold: 'Data Democratization:', text: ' Designed and deployed a custom GenAI Analyst Agent (SQL+RAG via LangChain and Gemini) over a 50TB+ enterprise dataset; empowered non-technical stakeholders to translate natural language queries into verified SQL, reducing post-experiment analysis latency from days to hours.' },
                { bold: 'Operational Velocity & Scaling:', text: ' Built an Auto-Summary Agent in partnership with business leadership to autonomously capture experiment telemetry and benchmark results; unlocked 240–400 hours/week of collective organizational bandwidth by automating executive stakeholder reporting loops.' },
                { bold: 'Algorithmic Optimization:', text: ' Redesigned the core assignment algorithm from the ground up to deliver 100% reliable, 30x faster randomization by minimizing Mahalanobis distance as the loss function.' }
            ]
        },
        {
            company: 'Applied AI Research Lab',
            role: 'Principal Engineer & Product Architect',
            period: 'Jan 2023 – Present',
            color: '#bd00ff',
            status: 'Building',
            description: 'Founded an applied AI research and development lab to proactively build and stress-test emerging technologies and extract proven architectures to de-risk enterprise deployments.',
            highlights: [
                { bold: 'ClinicOS (SaaS Deployment):', text: ' Engineered an AI-powered healthcare management SaaS platform currently live in 8 clinics across rural India; conducted structured workflow mapping with physicians to implement real-time consultation transcription, automated prescription generation, and automated inventory pipelines.' },
                { bold: 'QuizBeef (RAG Production):', text: ' Architected an AI-native document comprehension platform scaling to 700+ users; synthesized learning science literature to deploy LLM semantic parsing and FAISS-powered vector retrieval for adaptive multi-source question generation.' },
                { bold: 'mana-health (Agentic Systems):', text: ' Developed an advanced multi-agent biometric orchestration platform implementing Critic-Reflexion loops; enabled autonomous agent self-correction and output verification across specialized physiotherapy and nutrition nodes.' }
            ]
        },
        {
            company: 'Discover Financial Services',
            role: 'Senior Data Science Analyst',
            period: 'Aug 2022 – Oct 2023',
            color: '#f59e0b',
            highlights: [
                { bold: 'Overturned decade-old risk policy:', text: ' Used XGBoost + Propensity Score Matching to prove employment verification had zero predictive value for high-FICO borrowers (R² < 0.01), then designed a surgical A/B test that unlocked $114M annualized volume and 300+ incremental customers/month through friction reduction.' },
                { bold: 'Enabled $1.8M in loan approvals:', text: ' Identified and resolved critical iOS bugs through funnel analysis on the Automated Loan Approval platform, collaborating with engineering and UI/UX teams to restore conversion flow.' },
                'Infrastructure Modernization: Migrated legacy SAS workflows to GCP BigQuery, reducing infrastructure costs by 12% and improving decision speed by 10+ hours/week.'
            ]
        },
        {
            company: 'Vodafone',
            role: 'Assistant Manager, Data Science',
            period: 'Jun 2016 – Feb 2019',
            color: '#ef4444',
            highlights: [
                { bold: 'Global Campaign Optimization:', text: ' Orchestrated data-driven email personalization strategies for a 45M+ user base in Vodafone Germany; designed an advanced predictive logistic regression and A/B testing framework that expanded CTR by 28% (from 1.4% to 1.8%) and generated $11.2M in incremental revenue.' },
                { bold: 'Customer Lifetime Value Expansion:', text: ' Developed complex linear regression models to predict multi-tier retention curves across varying subscription price points; strategically redirected marketing spend to optimize customer lifetime value (CLV) by 5%.' }
            ],
            subRole: 'Senior Executive, Data Science',
            subHighlights: [
                { bold: 'Enterprise Metrics Governance:', text: ' Partnered with executive product leadership to instrument 15+ custom performance metrics; engineered automated SQL pipelines feeding core Tableau dashboards to stabilize long-term feature evaluation and model health tracking.' },
                { bold: 'Production System Reliability:', text: ' Engineered an automated time-series anomaly detection system (Prophet) to monitor model error rates across core infrastructure; reduced Priority-2 production incidents by 60%+ and reclaimed ~20 hours/week of core engineering bandwidth.' }
            ]
        },
        {
            company: 'Kaizen',
            role: 'Data Science Engineering Intern',
            period: 'Jun 2021 – Dec 2021',
            color: '#22c55e',
            highlights: [
                { bold: 'Hybrid Predictive Modeling:', text: ' Outperformed the existing production baseline by improving forecasting accuracy by 8.5% for Toyota vehicle sales; architected a hybrid time-series model combining Prophet and LSTM deep learning networks to isolate complex residual seasonality.' },
                { bold: 'Security Risk Mitigation:', text: ' Mitigated authentication friction by constructing an automated anomaly detection pipeline on AWS SageMaker; engineered a dynamic risk-based thresholding system that slashed 2FA false positives by 13% without degrading user sign-up flows.' }
            ]
        }
    ];

    const education = [
        {
            school: 'The University of Texas at Dallas',
            degree: 'MS, Business Analytics',
            year: 'Jan 2021 – Jun 2022',
            note: "Dean's Scholar; President, Data Science Club — led workshops and speaker series. Top Student Mentor for Data Science track: answered 800+ questions and coached 70+ students."
        },
        {
            school: 'Pune University',
            degree: 'BS, Computer Science and Engineering',
            year: 'Jun 2016'
        }
    ];

    const skills = [
        { category: 'GenAI & Agentic Systems', items: 'LangChain, RAG (Retrieval-Augmented Generation), Context Engineering, LLMs, Prompt Engineering, Autonomous Agents, SQL+RAG, dbt, Snowflake' },
        { category: 'Causal Inference & Experimentation', items: 'Causal Inference, CUPED, Bayesian Methods (PyMC), Propensity Score Matching, Synthetic Controls, Heterogeneous Treatment Effects (HTE), Uplift Modeling, A/B Testing, SRM Detection' },
        { category: 'Data & Infrastructure', items: 'Python, SQL, PySpark, BigQuery, Airflow, Spark, GCP (Vertex AI), AWS (S3, SageMaker), Docker, Pandas, NumPy, Scikit-learn, TensorFlow' },
        { category: 'Visualization & Tools', items: 'Tableau, Streamlit, Git, Azure' },
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
                            <strong style={{ color: '#fff' }}>Data Scientist & AI Architect</strong> with 8+ years delivering $250M+ in validated business impact. Specializing in developing novel data science solutions—taking concepts from 0 to 1. Rapidly prototype using emerging tech, align cross-functional teams, and productionalize solutions at scale.
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

                                    {exp.subRole && (
                                        <div style={{ marginTop: '20px' }}>
                                            <p style={{
                                                color: exp.color,
                                                fontWeight: 600,
                                                fontSize: '0.9rem',
                                                marginBottom: '10px',
                                                opacity: 0.8
                                            }}>{exp.subRole}</p>
                                            <ul style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: '10px',
                                                paddingLeft: '16px'
                                            }}>
                                                {exp.subHighlights.map((highlight, hIdx) => (
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
                                        </div>
                                    )}
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
                        href="/Resume_Suyash_DataScience2026.pdf"
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
