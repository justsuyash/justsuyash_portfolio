import React from 'react';
import { Target, Zap, Shield, Layout, Beaker } from 'lucide-react';

export const ventures = [
    {
        name: "ClinicOS",
        tagline: "Bheed Studios",
        description: "Advanced Clinic Management System. Optimizing clinical workflows from transcription to prescription.",
        thesis: "Doctors lose hours every day to administrative overhead and poorly designed software. ClinicOS is built to fundamentally fix this. With sub-350ms response times, real-time AI transcription, and intuitive drag-and-drop mechanics, we're returning time and focus to where it belongs: the patient.",
        stack: ["Next.js 14", "Neon Postgres", "Prisma", "WebSockets"],
        image: "/images/clinicos/prescriptionGeneration.png",
        visuals: [
            { type: 'image', src: "/images/clinicos/prescriptionGeneration.png", alt: "Prescription Workspace" },
            { type: 'image', src: "/images/clinicos/appointments.png", alt: "Patient Queue & Drag-and-Drop UI" },
            { type: 'image', src: "/images/clinicos/OverviewDashboard.png", alt: "Clinic Dashboard" },
            { type: 'image', src: "/images/clinicos/FinancialsDashboard.png", alt: "Financials Overview" },
            { type: 'image', src: "/images/clinicos/universalpatientDirectory.png", alt: "Patient Directory" },
            { type: 'image', src: "/images/clinicos/inventory.png", alt: "Inventory Management" },
            { type: 'image', src: "/images/clinicos/liveTranscription.png", alt: "Live Transcription" }
        ],
        articleLink: {
            url: "/articles/clinicos-performance",
            title: "Read the Performance Deep Dive (Sub-350ms Loads)"
        },
        link: "/ventures/clinicos",
        labCta: "View Interactive Demo",
        status: "Production",
        color: "#bfff00"
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
    },
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
    }
];
