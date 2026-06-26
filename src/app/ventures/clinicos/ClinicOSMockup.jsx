"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowLeft, ArrowRight, MapPin, Search } from 'lucide-react';

export default function ClinicOSMockup() {
    const [step, setStep] = useState(1);
    
    // State for the interactive form
    const [engine, setEngine] = useState('sarvam_hindi');
    const [displayName, setDisplayName] = useState('');
    const [clinicName, setClinicName] = useState('');
    const [mapsLink, setMapsLink] = useState('');

    const nextStep = () => setStep(s => Math.min(s + 1, 3));
    const prevStep = () => setStep(s => Math.max(s - 1, 1));

    return (
        <div className="w-full max-w-2xl mx-auto rounded-3xl p-[1px] bg-gradient-to-b from-white/10 to-transparent shadow-2xl">
            <div className="bg-[#111110] rounded-[23px] overflow-hidden">
                {/* Mockup Header */}
                <div className="p-8 pb-4">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center text-[#bfff00] text-xs font-bold tracking-wider">
                            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M22 12h-4l-3 9L9 3l-3 9H2" />
                            </svg>
                            CLINICOS ONBOARDING
                        </div>
                        <div className="flex gap-1.5">
                            {[1, 2, 3].map(i => (
                                <div 
                                    key={i} 
                                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                                        i === step ? 'bg-[#bfff00] w-4' : 
                                        i < step ? 'bg-[#bfff00]/50' : 'bg-white/10'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>

                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                <h2 className="text-3xl font-bold text-white mb-2">Choose your transcription engine</h2>
                                <p className="text-[#a1a1aa] text-sm mb-8">Select the provider and language optimized for your clinical workflow.</p>
                                
                                <div className="text-xs font-bold tracking-wider text-white/40 mb-4">SARVAM AI</div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                    {[
                                        { id: 'sarvam_hindi', lang: 'Hindi', version: 'Saarika v2', desc: 'Higher accuracy for pure Hindi and local pronunciation. Good fallback when Deepgram Hindi fails.' },
                                        { id: 'sarvam_marathi', lang: 'Marathi', version: 'Saarika v2', desc: 'Optimized for Marathi medical vocabulary and speech patterns.' },
                                        { id: 'sarvam_tamil', lang: 'Tamil', version: 'Saarika v2', desc: 'Useful for Tamil consults where mixing english is minimal.' },
                                        { id: 'sarvam_telugu', lang: 'Telugu', version: 'Saarika v2', desc: 'Optimized for Telugu speech and clinical contexts.' }
                                    ].map(opt => (
                                        <div 
                                            key={opt.id}
                                            onClick={() => setEngine(opt.id)}
                                            className={`cursor-pointer rounded-xl p-4 border transition-colors ${
                                                engine === opt.id 
                                                ? 'bg-[#1a1a1a] border-[#bfff00]/50 shadow-[0_0_15px_rgba(191,255,0,0.1)]' 
                                                : 'bg-transparent border-white/5 hover:border-white/20'
                                            }`}
                                        >
                                            <div className="flex justify-between items-start mb-2">
                                                <div className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-[#ff6b00]/10 text-[#ff6b00]">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] mr-1.5"></span>
                                                    SARVAM
                                                </div>
                                                {engine === opt.id && (
                                                    <div className="w-4 h-4 rounded-full bg-[#bfff00]/20 flex items-center justify-center">
                                                        <Check size={10} className="text-[#bfff00]" />
                                                    </div>
                                                )}
                                            </div>
                                            <h3 className="font-bold text-white text-sm">{opt.lang}</h3>
                                            <p className="text-[10px] text-[#a1a1aa] mb-2">{opt.version}</p>
                                            <p className="text-xs text-[#71717a] leading-relaxed">{opt.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                <h2 className="text-3xl font-bold text-white mb-2">What do your patients call you?</h2>
                                <p className="text-[#a1a1aa] text-sm mb-8 leading-relaxed">
                                    This name will appear on prescriptions, patient instructions, and WhatsApp<br/>notification updates.
                                </p>
                                
                                <div className="text-[10px] font-bold tracking-wider text-white/40 mb-2 uppercase">DISPLAY NAME</div>
                                <div className="flex rounded-lg overflow-hidden border border-white/10 focus-within:border-[#bfff00]/50 transition-colors bg-[#0a0a0a]">
                                    <div className="bg-[#1a1a1a] px-4 py-3 text-[#bfff00] font-medium text-sm flex items-center border-r border-white/10">
                                        Dr.
                                    </div>
                                    <input 
                                        type="text" 
                                        value={displayName}
                                        onChange={e => setDisplayName(e.target.value)}
                                        placeholder="Suyash"
                                        className="flex-1 bg-transparent px-4 py-3 text-white text-sm outline-none placeholder:text-[#52525b]"
                                        autoFocus
                                    />
                                </div>
                                <p className="text-[10px] text-[#52525b] mt-3 mb-24">You can change this later in Settings.</p>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                <h2 className="text-3xl font-bold text-white mb-2">Tell us about your clinic</h2>
                                <p className="text-[#a1a1aa] text-sm mb-8 leading-relaxed">
                                    We use the clinic name and location to send instructions, details, and navigation<br/>links to your patients.
                                </p>
                                
                                <div className="space-y-6 mb-12">
                                    <div>
                                        <div className="text-[10px] font-bold tracking-wider text-white/40 mb-2 uppercase">CLINIC NAME</div>
                                        <div className="relative flex items-center">
                                            <div className="absolute left-4 text-[#71717a]">
                                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m16-11v11M9 21v-5a2 2 0 012-2h2a2 2 0 012 2v5" />
                                                </svg>
                                            </div>
                                            <input 
                                                type="text" 
                                                value={clinicName}
                                                onChange={e => setClinicName(e.target.value)}
                                                placeholder="Suyash's Clinic"
                                                className="w-full bg-[#0a0a0a] border border-white/10 focus:border-[#bfff00]/50 transition-colors rounded-lg pl-11 pr-4 py-3 text-sm text-white outline-none"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="text-[10px] font-bold tracking-wider text-white/40 mb-2 uppercase">GOOGLE MAPS LINK (LOCATION)</div>
                                        <div className="flex gap-2">
                                            <div className="relative flex-1 flex items-center">
                                                <div className="absolute left-4 text-[#71717a]">
                                                    <MapPin size={16} />
                                                </div>
                                                <input 
                                                    type="text" 
                                                    value={mapsLink}
                                                    onChange={e => setMapsLink(e.target.value)}
                                                    placeholder="https://maps.app.goo.gl/..."
                                                    className="w-full bg-[#0a0a0a] border border-white/10 focus:border-[#bfff00]/50 transition-colors rounded-lg pl-11 pr-4 py-3 text-sm text-white outline-none"
                                                />
                                            </div>
                                            <button className="px-4 py-3 rounded-lg border border-[#bfff00]/20 text-[#bfff00] bg-[#bfff00]/5 hover:bg-[#bfff00]/10 transition-colors flex items-center text-sm font-medium">
                                                <Search size={14} className="mr-2" />
                                                Resolve
                                            </button>
                                        </div>
                                        <p className="text-[10px] text-[#52525b] mt-2">Paste a link from Google Maps to auto-resolve the clinic address and coordinates.</p>
                                    </div>

                                    <div className="rounded-lg border border-[#bfff00]/30 bg-[#bfff00]/5 p-4 flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 rounded-full bg-[#bfff00]/20 flex items-center justify-center mr-3 text-[#bfff00]">
                                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <circle cx="12" cy="12" r="10" />
                                                    <circle cx="12" cy="12" r="3" />
                                                </svg>
                                            </div>
                                            <div>
                                                <div className="text-[#bfff00] text-sm font-medium">Device Location</div>
                                                <div className="text-[#a1a1aa] text-[10px]">Auto-detected from your device</div>
                                            </div>
                                        </div>
                                        <div className="text-[#bfff00] text-xs font-mono">24.786899, 84.992537</div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Footer Controls */}
                <div className="p-8 pt-4 border-t border-white/5 flex justify-between items-center bg-[#0a0a0a]/50">
                    <button 
                        onClick={prevStep}
                        className={`inline-flex items-center text-sm font-medium transition-colors ${
                            step === 1 ? 'text-transparent pointer-events-none' : 'text-[#a1a1aa] hover:text-white'
                        }`}
                    >
                        <ArrowLeft size={16} className="mr-2" />
                        Back
                    </button>

                    <button 
                        onClick={step === 3 ? () => setStep(1) : nextStep}
                        className="inline-flex items-center bg-[#bfff00] hover:bg-[#a6e600] text-black text-sm font-bold px-6 py-3 rounded-md transition-colors"
                    >
                        {step === 3 ? 'Complete Setup' : 'Continue'}
                        {step !== 3 && <ArrowRight size={16} className="ml-2" />}
                    </button>
                </div>
            </div>
        </div>
    );
}
