"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowLeft, Mail, MapPin, Linkedin, Github, Briefcase, GraduationCap, Wrench, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const ResumePage = () => {
    const experiences = [
        {
            company: 'Albertsons',
            role: 'Senior Data Scientist (Principal Platform Architect)',
            period: 'Feb 2024 – Present',
            color: '#00f3ff',
            status: 'Active',
            highlights: [
                { bold: 'Enterprise Platform:', text: ' Architected enterprise experimentation infrastructure across In-Store, Pharmacy, Digital, and Private Brands, scaling testing capacity from 3 to 10+ experiments per week and supporting $200M+ in annual business decisions.' },
                { bold: 'Statistical Standardization:', text: ' Cut experiment cycle times 40%, from 28 to 12 days, by operationalizing CUPED variance reduction across cross-functional business units.' },
                { bold: 'Bayesian Evaluation Layer:', text: ' Designing a Bayesian evaluation layer (Monte Carlo simulation) on top of CUPED to enable live monitoring and early-stopping of high-impact experiments, further reducing cycle time.' },
                { bold: 'Data Democratization:', text: ' Deployed a text-to-SQL RAG agent (LangChain, Claude) over a 50TB+ enterprise dataset, making embedded PMs self-serve and reducing post-experiment turnaround from days to minutes for partner teams.' },
                { bold: 'Algorithmic Optimization:', text: ' Rebuilt the pre-split randomization algorithm from the ground up for 30x faster, balanced assignment by minimizing Mahalanobis distance, and quantified the imbalance-versus-power tradeoff so teams can see the statistical power lost at any level of covariate imbalance.' },
                { bold: 'Technical Leadership:', text: ' Designed a human-in-the-loop pipeline where junior data scientists review AI-generated queries and feed corrections back into the RAG layer, improving first-pass validation accuracy 30% and accelerating onboarding.' }
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
                { bold: 'ClinicOS:', text: ' Built an AI-powered healthcare operations SaaS live in 8 rural Indian clinics, with real-time consultation transcription, prescription generation, appointment workflows, and inventory management.' },
                { bold: 'QuizBeef:', text: ' Launched an LLM-powered learning platform (700+ users) that stores questions in Open Knowledge Format (OKF) and generates personalized lessons on the fly, using semantic parsing and FAISS vector retrieval for grounded, adaptive question generation.' },
                { bold: 'mana-health:', text: ' Architected a multi-agent wellness platform coordinating daily guidance, food analysis, and biomarker interpretation workflows (LangGraph, CrewAI, DSPy), enforcing typed outputs with PydanticAI and running LangSmith/Braintrust tracing and regression evals via a FastAPI and Next.js product surface.' }
            ]
        },
        {
            company: 'Discover Financial Services',
            role: 'Senior Data Science Analyst',
            period: 'Aug 2022 – Oct 2023',
            color: '#f59e0b',
            highlights: [
                { bold: 'Unlocked $114M in annualized volume:', text: ' Disproved a decade-old employment-verification policy using XGBoost and propensity score matching, then designed an A/B test that drove a permanent policy change.' },
                { bold: 'Recovered $1.8M in loan approvals:', text: ' Diagnosed iOS funnel defects in the Automated Loan Approval platform and partnered with Engineering and UX to restore conversion flow.' },
                { bold: 'Infrastructure Modernization:', text: ' Migrated legacy SAS workflows to GCP and BigQuery, reducing infrastructure cost 12% and improving decision speed by 10+ hours per week.' }
            ]
        },
        {
            company: 'Vodafone',
            role: 'Data Scientist',
            period: 'Jun 2016 – Feb 2019',
            color: '#ef4444',
            highlights: [
                { bold: 'Global Campaign Optimization:', text: ' Generated $11.2M in incremental revenue for Vodafone Germany\'s 45M+ user base through customer segmentation and A/B-tested email personalization, increasing click-through rate 28%, from 1.4% to 1.8%.' },
                { bold: 'Customer Lifetime Value Expansion:', text: ' Developed retention and pricing models that improved customer lifetime value 5% and informed retention-based product strategy.' },
                { bold: 'Production System Reliability:', text: ' Reduced Priority-2 production incidents 60%+ by deploying Prophet-based anomaly monitoring across core models, saving approximately 20 engineering hours per week.' }
            ]
        },
        {
            company: 'Kaizen',
            role: 'Data Science Engineering Intern',
            period: 'Jun 2021 – Dec 2021',
            color: '#22c55e',
            highlights: [
                { bold: 'Hybrid Predictive Modeling:', text: ' Improved Toyota vehicle-sales forecast accuracy 8.5% using a hybrid Prophet and LSTM model; reduced two-factor-authentication false positives 13% through an AWS SageMaker anomaly-detection pipeline.' }
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
        { category: 'GenAI & Agentic Systems', items: 'LangChain, RAG (Retrieval-Augmented Generation), Context Engineering, LLMs, Autonomous Agents, dbt, Snowflake, LangGraph, DSPy, CrewAI, PydanticAI, LangSmith, Braintrust, FastAPI' },
        { category: 'Causal Inference & Experimentation', items: 'Causal Inference, CUPED, Bayesian Methods (PyMC), Propensity Score Matching, Synthetic Controls, Heterogeneous Treatment Effects (HTE), Uplift Modeling, A/B Testing, SRM Detection' },
        { category: 'Data & Infrastructure', items: 'Python, SQL, PySpark, BigQuery, Airflow, Spark, GCP (Vertex AI), AWS (S3, SageMaker), Docker, Pandas, NumPy, Scikit-learn, TensorFlow' },
        { category: 'Visualization & Tools', items: 'Tableau, Streamlit, Git, Azure' }
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
                            <strong style={{ color: '#fff' }}>Data Scientist & AI Architect</strong> with 8+ years delivering $500M+ in validated business impact. Specializes in developing novel data science solutions—taking concepts from 0 to 1. Rapidly prototypes using emerging tech, aligns cross-functional teams, and productionizes the solution at scale.
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
                        href="/SuyashResume_2026.pdf"
                        download="SuyashResume_2026.pdf"
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
