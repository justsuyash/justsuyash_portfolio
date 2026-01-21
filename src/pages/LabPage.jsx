import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, Activity, Zap, CheckCircle2, AlertCircle } from 'lucide-react';

const LabPage = () => {
    const [input, setInput] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [result, setResult] = useState(null);

    const handleAnalyze = () => {
        if (!input.trim()) return;

        setIsProcessing(true);
        setResult(null);

        // Simulate AI Processing
        setTimeout(() => {
            setIsProcessing(false);
            setResult({
                score: 84,
                metrics: {
                    load: "High",
                    recovery: "Required",
                    impact: "Metabolic"
                },
                analysis: [
                    "Volume on legs is optimal, but spinal loading is high for Day 2.",
                    "Suggest swapping Barbell Rows for Chest-Supported Rows to reduce lower back torque.",
                    "Metabolic output suggests 30g carb reload window immediately post-session."
                ]
            });
        }, 2000);
    };

    return (
        <main style={{ paddingTop: '100px', minHeight: '100vh' }}>
            <section style={{ padding: '40px 0' }}>
                <div className="container" style={{ maxWidth: '900px' }}>

                    {/* Header */}
                    <div style={{ marginBottom: '48px' }}>
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '6px 12px',
                            background: 'rgba(255,165,0,0.1)',
                            border: '1px solid rgba(255,165,0,0.2)',
                            borderRadius: '4px',
                            color: '#fb923c',
                            fontSize: '0.75rem',
                            fontFamily: 'monospace',
                            marginBottom: '16px'
                        }}>
                            <Terminal size={12} />
                            <span>MANA_INTELLIGENCE_V0.1</span>
                        </div>
                        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '16px' }}>
                            Workout Protocol Optimizer
                        </h1>
                        <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, maxWidth: '600px' }}>
                            Paste your workout plan below. The engine will analyze volume load,
                            identify biomechanical risks, and generate recovery protocols.
                        </p>
                    </div>

                    {/* Interface Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '32px' }}>

                        {/* Input Column */}
                        <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column' }}>
                            <label style={{
                                display: 'block',
                                marginBottom: '12px',
                                fontSize: '0.85rem',
                                color: 'rgba(255,255,255,0.5)',
                                fontWeight: 600,
                                textTransform: 'uppercase'
                            }}>Input // Workout Routine</label>

                            <textarea
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Paste routine e.g.:&#10;Squats 3x5&#10;Bench Press 3x8&#10;Deadlift 1x5..."
                                style={{
                                    width: '100%',
                                    height: '300px',
                                    background: 'rgba(0,0,0,0.3)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '8px',
                                    padding: '16px',
                                    color: '#fff',
                                    fontFamily: 'monospace',
                                    fontSize: '0.9rem',
                                    resize: 'none',
                                    marginBottom: '20px',
                                    outline: 'none'
                                }}
                            />

                            <button
                                onClick={handleAnalyze}
                                disabled={isProcessing || !input.trim()}
                                style={{
                                    padding: '14px',
                                    borderRadius: '8px',
                                    background: isProcessing ? 'rgba(255,255,255,0.1)' : '#00f3ff',
                                    color: isProcessing ? 'rgba(255,255,255,0.3)' : '#000',
                                    border: 'none',
                                    fontWeight: 700,
                                    cursor: isProcessing ? 'not-allowed' : 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '10px',
                                    transition: 'all 0.2s'
                                }}
                            >
                                {isProcessing ? (
                                    <>
                                        <Cpu size={18} className="spin" /> Processing Neural Graph...
                                    </>
                                ) : (
                                    <>
                                        <Zap size={18} /> Run Analysis
                                    </>
                                )}
                            </button>
                        </div>

                        {/* Output Column */}
                        <div>
                            <AnimatePresence mode="wait">
                                {result ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="glass-panel"
                                        style={{ padding: '24px', height: '100%', border: '1px solid rgba(0, 243, 255, 0.2)' }}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                                            <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>OPTIMIZATION SCORE</span>
                                            <span style={{ fontSize: '1.5rem', fontWeight: 700, color: '#00f3ff' }}>{result.score}/100</span>
                                        </div>

                                        <div style={{ marginBottom: '24px', display: 'flex', gap: '8px' }}>
                                            {Object.entries(result.metrics).map(([key, val]) => (
                                                <div key={key} style={{
                                                    flex: 1,
                                                    background: 'rgba(255,255,255,0.05)',
                                                    padding: '12px 8px',
                                                    borderRadius: '8px',
                                                    textAlign: 'center'
                                                }}>
                                                    <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginBottom: '4px' }}>{key}</div>
                                                    <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>{val}</div>
                                                </div>
                                            ))}
                                        </div>

                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                            {result.analysis.map((item, idx) => (
                                                <div key={idx} style={{ display: 'flex', gap: '12px', fontSize: '0.85rem', lineHeight: 1.5, color: 'rgba(255,255,255,0.8)' }}>
                                                    <CheckCircle2 size={16} color="#00f3ff" style={{ flexShrink: 0, marginTop: '2px' }} />
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                ) : (
                                    <div className="glass-panel" style={{
                                        padding: '24px',
                                        height: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexDirection: 'column',
                                        gap: '16px',
                                        color: 'rgba(255,255,255,0.2)'
                                    }}>
                                        <Activity size={48} />
                                        <span style={{ fontSize: '0.9rem' }}>Awaiting Input Data...</span>
                                    </div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default LabPage;
