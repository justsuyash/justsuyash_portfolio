import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ventures = [
    {
        name: "Mana",
        tagline: "Health Intelligence",
        description: "Unstructured voice journaling meeting physiological data. RAG pipelines correlating mindset with biometrics.",
        stack: ["React Native", "Whisper", "RAG"],
        image: "/assets/mana.png"
    },
    {
        name: "Aligned",
        tagline: "Social Protocol",
        description: "Astrology-backed compatibility engine. Replacing gamified swiping with high-intent, algorithmic matching.",
        stack: ["Python", "Astro-Algo", "GenAI"],
        image: "/assets/aligned.png"
    },
    {
        name: "Quiz Beef",
        tagline: "EdTech Engine",
        description: "Active recall engine converting static PDFs into competitive quizzes using Vector Databases.",
        stack: ["Pinecone", "FastAPI", "React"],
        image: "/assets/quizbeef.png"
    }
];

const technicalWorks = [
    { title: "Credit Risk Engine", link: "https://github.com/justsuyash" },
    { title: "Airline Time-Series", link: "https://github.com/justsuyash" },
    { title: "OLIST Ecommerce Analysis", link: "https://github.com/justsuyash" }
];

const Projects = () => {
    return (
        <section id="ventures" className="py-32 section-divider relative">
            <div className="container relative z-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <span className="text-cyan-400 text-sm font-bold tracking-widest uppercase mb-2 block">Venture Lab</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Active Ventures</h2>
                    </div>
                    <p className="text-gray-400 max-w-md text-sm md:text-base">
                        Building a portfolio of "Zero-Bloat" applications.
                        Combining market signal with autonomous GenAI architectures.
                    </p>
                </div>

                {/* Ventures Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-32">
                    {ventures.map((v, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="glass-panel group flex flex-col h-full overflow-hidden"
                        >
                            <div className="aspect-[4/3] overflow-hidden relative bg-gray-900 border-b border-white/5">
                                <img
                                    src={v.image}
                                    alt={v.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#08080c] via-transparent to-transparent opacity-60" />
                            </div>

                            <div className="p-6 flex flex-col flex-1">
                                <div className="mb-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{v.name}</h3>
                                        <ArrowRight className="text-gray-600 group-hover:text-cyan-400 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" size={20} />
                                    </div>
                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{v.tagline}</span>
                                </div>

                                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                                    {v.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {v.stack.map(tech => (
                                        <span key={tech} className="px-2 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] text-gray-400 font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Technical Deep Dives (Secondary) */}
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl font-bold text-white mb-2">Technical Case Studies</h3>
                        <p className="text-gray-500 text-sm">Open source contributions & data analysis.</p>
                    </div>

                    <div className="grid md:grid-cols-1 gap-4">
                        {technicalWorks.map((work, idx) => (
                            <a href={work.link} target="_blank" key={idx} className="glass-panel p-6 flex items-center justify-between group hover:bg-white/5">
                                <span className="text-lg text-gray-300 font-medium group-hover:text-white transition-colors">{work.title}</span>
                                <ExternalLink size={18} className="text-gray-600 group-hover:text-white transition-colors" />
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Projects;
