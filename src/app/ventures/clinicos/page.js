import React from 'react';
import ClinicOSMockup from './ClinicOSMockup';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
    title: "ClinicOS | Bheed Studios",
    description: "Advanced Clinic Management System. Optimizing clinical workflows from transcription to prescription. A Bheed Studios product.",
    openGraph: {
        title: "ClinicOS | Bheed Studios",
        description: "Advanced Clinic Management System. Optimizing clinical workflows from transcription to prescription.",
        images: [{ url: '/images/clinicos/prescriptionGeneration.png', width: 1200, height: 630, alt: 'ClinicOS' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: "ClinicOS | Bheed Studios",
        description: "Advanced Clinic Management System. Optimizing clinical workflows from transcription to prescription.",
        images: ['/images/clinicos/prescriptionGeneration.png'],
    }
};

export default function ClinicOSPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-[#ededed] font-sans">
            <div className="max-w-[1200px] mx-auto px-6 py-24">
                
                {/* Back Navigation */}
                <div className="mb-12">
                    <Link href="/ventures" className="inline-flex items-center text-[#a1a1aa] hover:text-[#ededed] transition-colors text-sm font-medium">
                        <ArrowLeft size={16} className="mr-2" />
                        Back to Ventures
                    </Link>
                </div>

                {/* Header Section */}
                <div className="mb-20 max-w-2xl">
                    <div className="inline-flex items-center px-3 py-1 rounded-full border border-[#bfff00]/20 bg-[#bfff00]/10 text-[#bfff00] text-xs font-mono mb-6">
                        BHEED STUDIOS
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                        ClinicOS
                    </h1>
                    <p className="text-[#a1a1aa] text-xl leading-relaxed mb-8">
                        The advanced clinic management system designed for speed. We've optimized clinical workflows from AI transcription to prescription generation, giving doctors back their time.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {['Next.js 14', 'Neon Postgres', 'Prisma', 'WebSockets', 'Tailwind CSS'].map(tag => (
                            <span key={tag} className="px-3 py-1 rounded-md bg-[#1a1a1a] text-xs font-mono text-[#a1a1aa]">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Interactive Mockup Section */}
                <div className="mb-32">
                    <div className="mb-8 flex items-center justify-between">
                        <h2 className="text-2xl font-bold">Interactive Onboarding Experience</h2>
                        <span className="text-sm text-[#a1a1aa] font-mono">Try the demo ↓</span>
                    </div>
                    
                    {/* The Client Component Mockup */}
                    <ClinicOSMockup />
                </div>

                {/* Gallery Section */}
                <div className="mb-32">
                    <h2 className="text-2xl font-bold mb-12">System Overview</h2>
                    
                    <div className="space-y-24">
                        <div className="group">
                            <h3 className="text-[#bfff00] font-mono text-sm mb-4">01 // THE CLINIC WORKSPACE</h3>
                            <div className="rounded-xl overflow-hidden border border-white/5 bg-[#0a0a0a]">
                                <img src="/images/clinicos/prescriptionGeneration.png" alt="Prescription Generation Workspace" className="w-full opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </div>

                        <div className="group">
                            <h3 className="text-[#bfff00] font-mono text-sm mb-4">02 // PATIENT QUEUE & DRAG-AND-DROP UI</h3>
                            <div className="rounded-xl overflow-hidden border border-white/5 bg-[#0a0a0a]">
                                <img src="/images/clinicos/appointments.png" alt="Appointments and Drag Drop UI" className="w-full opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </div>

                        <div className="group">
                            <h3 className="text-[#bfff00] font-mono text-sm mb-4">03 // CLINIC DASHBOARD</h3>
                            <div className="rounded-xl overflow-hidden border border-white/5 bg-[#0a0a0a]">
                                <img src="/images/clinicos/OverviewDashboard.png" alt="Overview Dashboard" className="w-full opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Deep Dive Cross-Link */}
                <div className="rounded-2xl border border-[#bfff00]/20 bg-[#bfff00]/5 p-8 md:p-12 text-center">
                    <h3 className="text-2xl font-bold mb-4">Want the technical deep dive?</h3>
                    <p className="text-[#a1a1aa] max-w-xl mx-auto mb-8">
                        Read how I cut page load times by 14×—from TCP handshakes to optimistic UI—to make ClinicOS one of the fastest healthcare platforms.
                    </p>
                    <Link href="/articles/clinicos-performance" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#bfff00] text-black font-semibold hover:bg-[#a6e600] transition-colors">
                        Read the Case Study
                    </Link>
                </div>

            </div>
        </main>
    );
}
