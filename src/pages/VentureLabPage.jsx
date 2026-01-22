import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink, Target, Zap, Shield, Layout, Beaker, FileText } from 'lucide-react';

const ventures = [
    {
        name: "Mana",
        tagline: "Health Intelligence",
        description: "Correlation engine for biological data. Mana unifies unstructured voice journaling with biometric APIs.",
        thesis: "Biological data is currently siloed. Your ring tracks sleep, your phone tracks movement, but nothing tracks *context*. Mana is the correlation layer. It uses local LLMs to parse voice journals ('I feel stressed') and maps them against physiological spikes (HRV drops), revealing the hidden variables driving human performance.",
        stack: ["React Native", "Whisper", "RAG", "Pinecone"],
        image: "/assets/mana.png",
        visuals: [
            { type: 'icon', icon: <Zap size={32} />, label: "Biometric Sync" },
            { type: 'icon', icon: <Beaker size={32} />, label: "Context Engine" }
        ],
        link: "/lab",
        labCta: "Launch Alpha Protocol",
        status: "Alpha Live",
        color: "#22c55e"
    },
    {
        name: "Aligned",
        tagline: "Social Protocol",
        description: "Hybrid Protocol combining traditional algorithms with astrological signals.",
        thesis: "We identified a massive data arbitrage: 'What's your sign?' was the highest-frequency query in dating apps. Aligned formalizes this into a Hybrid Protocol, but goes further: It acts as an autonomous Concierge. The engine learns dietary preferences to book restaurants, calculates optimal meeting points based on real-time user proximity, and detects 'interaction fatigue' to suggest high-energy date contexts when users need a change.",
        stack: ["Python", "Astro-Algo", "GenAI", "React"],
        image: "/assets/aligned.png",
        visuals: [
            { type: 'icon', icon: <Target size={32} />, label: "Astro Hash" },
            { type: 'icon', icon: <Layout size={32} />, label: "Logistics Engine" },
            { type: 'icon', icon: <Zap size={32} />, label: "Auto-Date" }
        ],
        link: "#",
        labCta: "View Match Logic",
        status: "Beta",
        color: "#f59e0b"
    },
    {
        name: "Quiz Beef",
        tagline: "Knowledge Protocol",
        description: "Gamified active recall engine transforming static content into competitive protocols.",
        thesis: "Education has a 'Retention Gap'. Passive consumption (reading/watching) leads to <10% retention. Active Recall leads to 80%. Quiz Beef transforms any static content into a competitive sport. By making knowledge retrieval high-stakes and social, we hack the dopamine loop to force mastery. It's not just a study tool; it's a knowledge protocol.",
        stack: ["Pinecone", "FastAPI", "React", "OpenAI"],
        image: "/assets/quizbeef.png",
        visuals: [
            { type: 'icon', icon: <Shield size={32} />, label: "Recall Engine" },
            { type: 'icon', icon: <Zap size={32} />, label: "Ranked Mode" }
        ],
        link: "#",
        labCta: "Test Recall Engine",
        status: "Live",
        color: "#00f3ff"
    }
];

const objectives = [
    {
        icon: <Target size={28} />,
        title: "Signal-Only Design",
        description: "Analyze user sentiment on mass-market apps to isolate high-retention features. Rebuild them without engagement traps.",
        gradient: "linear-gradient(135deg, #00f3ff 0%, #00a8ff 100%)"
    },
    {
        icon: <Zap size={28} />,
        title: "Autonomous Execution",
        description: "Architecting a proprietary '5-Mind' GenAI workflow to handle full-stack development, marketing, and legal ops.",
        gradient: "linear-gradient(135deg, #bd00ff 0%, #8b00ff 100%)"
    },
    {
        icon: <Shield size={28} />,
        title: "Old Concepts, Leaner Design",
        description: "Revisiting timeless needs with the precision of a micro-studio. By eliminating bureaucratic bloat, we ship products that are faster, simpler, and respect the user.",
        gradient: "linear-gradient(135deg, #22c55e 0%, #10b981 100%)"
    }
];

const VentureLabPage = () => {
    const [selectedVenture, setSelectedVenture] = useState(null);
    const [activeTab, setActiveTab] = useState('thesis');

    return (
        <main style={{ paddingTop: '100px', minHeight: '100vh', paddingBottom: '80px' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ marginBottom: '80px', maxWidth: '800px' }}
                >
                    <span style={{
                        color: typeof objectives[1].gradient === 'string' ? '#bd00ff' : '#00f3ff', // Fallback color
                        fontSize: '0.875rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        marginBottom: '16px',
                        display: 'block'
                    }}>APPLIED RESEARCH LAB</span>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: 700,
                        letterSpacing: '-0.02em',
                        marginBottom: '24px',
                        lineHeight: 1.1
                    }}>
                        Where I Sharpen <span className="gradient-text">Product Intuition</span>.
                    </h1>
                    <p style={{
                        fontSize: '1.1rem',
                        color: 'rgba(255,255,255,0.6)',
                        lineHeight: 1.7,
                        maxWidth: '600px'
                    }}>
                        Building products teaches me how users think. I apply these insights to architect AI systems that drive revenue at enterprise scale. These experiments span education, health, social, and finance, serving as a live testing ground for the learning systems I architect.
                    </p>
                </motion.div>

                {/* Main Content Area - Swaps between Grid and Detail */}
                <AnimatePresence mode="wait">
                    {!selectedVenture ? (
                        <motion.div
                            key="grid"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '120px' }}
                        >
                            {ventures.map((venture, index) => (
                                <motion.div
                                    key={index}
                                    layoutId={`card-${venture.name}`} // Shared layout ID for smooth morph
                                    onClick={() => {
                                        setSelectedVenture(venture);
                                        setActiveTab('thesis');
                                    }}
                                    className="glass-panel"
                                    whileHover={{ y: -5, borderColor: venture.color + '60' }}
                                    style={{
                                        padding: '32px',
                                        cursor: 'pointer',
                                        borderLeft: `2px solid ${venture.color}`
                                    }}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                                        <div style={{
                                            width: '48px', height: '48px', borderRadius: '12px',
                                            background: venture.color + '10', border: `1px solid ${venture.color}20`,
                                            display: 'flex', alignItems: 'center', justifyContent: 'center', color: venture.color
                                        }}>
                                            <Zap size={24} />
                                        </div>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedVenture(venture);
                                                setActiveTab('lab');
                                            }}
                                            style={{
                                                fontSize: '0.75rem', fontWeight: 700,
                                                color: venture.color, border: `1px solid ${venture.color}40`,
                                                background: venture.color + '10',
                                                padding: '6px 12px', borderRadius: '99px',
                                                cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px'
                                            }}
                                        >
                                            <Beaker size={14} /> Test Feature
                                        </button>
                                    </div>

                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '8px' }}>{venture.name}</h3>
                                    <p style={{ color: venture.color, fontSize: '0.875rem', fontWeight: 600, marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                        {venture.tagline}
                                    </p>
                                    <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, fontSize: '0.95rem', marginBottom: '24px' }}>
                                        {venture.description}
                                    </p>

                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', fontWeight: 600, color: '#fff' }}>
                                        View Case Study <ArrowRight size={16} />
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="detail"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            style={{ marginBottom: '80px' }}
                        >
                            {/* Navigation Header */}
                            <button
                                onClick={() => setSelectedVenture(null)}
                                style={{
                                    background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)',
                                    cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px',
                                    marginBottom: '32px', fontSize: '0.9rem', fontWeight: 600
                                }}
                            >
                                <ArrowLeft size={18} /> Back to Protocols
                            </button>

                            <motion.div
                                layoutId={`card-${selectedVenture.name}`}
                                className="glass-panel"
                                style={{
                                    borderTop: `4px solid ${selectedVenture.color}`, // Accent top
                                    padding: '0',
                                    overflow: 'hidden'
                                }}
                            >
                                {/* Header Area */}
                                <div style={{
                                    padding: '40px',
                                    background: `linear-gradient(180deg, ${selectedVenture.color}05 0%, transparent 100%)`,
                                    borderBottom: '1px solid rgba(255,255,255,0.05)'
                                }}>
                                    <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '8px' }}>{selectedVenture.name}</h2>
                                    <div style={{ color: selectedVenture.color, fontSize: '1rem', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '24px' }}>
                                        {selectedVenture.tagline}
                                    </div>

                                    {/* Tabs */}
                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        {['thesis', 'visuals', 'lab'].map((tab) => (
                                            <button
                                                key={tab}
                                                onClick={() => setActiveTab(tab)}
                                                style={{
                                                    padding: '10px 20px',
                                                    borderRadius: '8px',
                                                    background: activeTab === tab ? selectedVenture.color : 'rgba(255,255,255,0.05)',
                                                    color: activeTab === tab ? '#000' : 'rgba(255,255,255,0.6)',
                                                    border: 'none',
                                                    fontWeight: 700,
                                                    textTransform: 'uppercase',
                                                    fontSize: '0.75rem',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.2s',
                                                    display: 'flex', alignItems: 'center', gap: '8px'
                                                }}
                                            >
                                                {tab === 'thesis' && <FileText size={14} />}
                                                {tab === 'visuals' && <Layout size={14} />}
                                                {tab === 'lab' && <Beaker size={14} />}
                                                {tab}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Content Body */}
                                <div style={{ padding: '40px', minHeight: '300px' }}>
                                    <AnimatePresence mode="wait">
                                        {activeTab === 'thesis' && (
                                            <motion.div
                                                key="thesis"
                                                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                                            >
                                                <h4 style={{ fontSize: '1.25rem', marginBottom: '24px', fontWeight: 600 }}>The Core Thesis</h4>
                                                <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.9)', marginBottom: '40px', maxWidth: '800px' }}>
                                                    {selectedVenture.thesis}
                                                </p>

                                                <div style={{ padding: '24px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>
                                                    <h4 style={{ fontSize: '0.8rem', marginBottom: '16px', fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>Engineering Stack</h4>
                                                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                                                        {selectedVenture.stack.map(tech => (
                                                            <span key={tech} style={{
                                                                padding: '8px 16px', borderRadius: '6px',
                                                                background: '#000', border: '1px solid rgba(255,255,255,0.1)',
                                                                fontSize: '0.9rem', color: '#fff', fontWeight: 500
                                                            }}>
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}

                                        {activeTab === 'visuals' && (
                                            <motion.div
                                                key="visuals"
                                                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                                                style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', paddingTop: '20px' }}
                                            >
                                                {selectedVenture.visuals.map((vis, i) => (
                                                    <div key={i} style={{
                                                        flex: '1 1 200px',
                                                        padding: '32px',
                                                        background: 'rgba(255,255,255,0.02)',
                                                        borderRadius: '16px',
                                                        border: '1px solid rgba(255,255,255,0.05)',
                                                        textAlign: 'center'
                                                    }}>
                                                        <div style={{ marginBottom: '16px', color: selectedVenture.color }}>
                                                            {vis.icon}
                                                        </div>
                                                        <div style={{ fontSize: '1rem', fontWeight: 600 }}>{vis.label}</div>
                                                    </div>
                                                ))}
                                            </motion.div>
                                        )}

                                        {activeTab === 'lab' && (
                                            <motion.div
                                                key="lab"
                                                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                                                style={{ textAlign: 'center', paddingTop: '40px', paddingBottom: '20px' }}
                                            >
                                                <div style={{
                                                    width: '80px', height: '80px', background: selectedVenture.color + '20',
                                                    borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                    margin: '0 auto 24px auto'
                                                }}>
                                                    <Beaker size={40} color={selectedVenture.color} />
                                                </div>
                                                <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '16px' }}>Interactive Lab</h3>
                                                <p style={{ maxWidth: '400px', margin: '0 auto 32px auto', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                                                    Try out a feature from our product. Access the live Alpha environment to test the {selectedVenture.name} engine logic with your own data.
                                                </p>
                                                <a
                                                    href={selectedVenture.link}
                                                    style={{
                                                        display: 'inline-flex', alignItems: 'center', gap: '10px',
                                                        background: selectedVenture.color, color: '#000',
                                                        padding: '16px 32px', borderRadius: '12px', fontWeight: 700,
                                                        fontSize: '1.1rem', textDecoration: 'none',
                                                        boxShadow: `0 10px 30px ${selectedVenture.color}40`
                                                    }}
                                                >
                                                    {selectedVenture.labCta} <ExternalLink size={20} />
                                                </a>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Objectives Section */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginTop: '80px' }}>
                    {objectives.map((obj, i) => (
                        <div key={i}>
                            <div style={{
                                width: '48px', height: '48px', borderRadius: '12px',
                                background: obj.gradient, display: 'flex', alignItems: 'center',
                                justifyContent: 'center', marginBottom: '24px', color: '#000'
                            }}>
                                {obj.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px' }}>{obj.title}</h3>
                            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{obj.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main >
    );
};

export default VentureLabPage;
