import React from 'react';

const Experience = () => {
    const roles = [
        {
            company: "Bheed Studio",
            title: "Principal Engineer & Product Builder | Applied AI Research Lab",
            date: "Jan 2024 — Present",
            location: "Dallas, TX (Remote)",
            description: "A Product Intelligence & Venture Lab. Building a portfolio of 'Zero-Bloat' applications by combining rigorous market sentiment analysis with autonomous GenAI architectures.",
            details: [
                "Technical Sandbox: Building production-grade consumer AI products to validate agentic architectures before enterprise deployment.",
                "QuizBeef: AI-powered quiz application with LLM-generated Q&A from PDFs; scaled to 700+ users.",
                "mana-health: Multi-agent wellness platform orchestrating specialized agents (physio, nutrition) to process biometric and workout data.",
                "Aligned: Astrology-based dating app integrating compatibility matching algorithms.",
                "Tech Stack: Python, TypeScript, LangChain, RAG, Autonomous Agents, Vector Databases."
            ]
        },
        {
            company: "Albertsons Companies",
            title: "Senior Data Scientist | Platform Architect",
            date: "2023 — Present",
            location: "Plano, TX",
            description: "Leading predictive modeling and customer insight initiatives. Architecting scalable data pipelines for retail analytics.",
            details: [
                "Architected an end-to-end Causal Experimentation Engine: Replaced manual workflows with a high-velocity pipeline scaling from 3 to 8+ experiments/week.",
                "The Pipeline: Engineered a robust system: Test Configs (Experiment ID) → Automated Exposure Tables → 31+ Metric Aggregation → CUPED Variance Reduction → Bayesian Inference Layer.",
                "Statistical Impact: Reduced standard error by 35%, compressing 28-day test windows into 12 days.",
                "GenAI Integration: Deployed a GenAI Analyst Agent (SQL+RAG) and an Auto-Summary Agent, reducing post-experiment analysis from days to hours while cutting hallucinations by 60%.",
                "Business Value: Validated $150M+ in annual strategic decisions across Pharmacy, Digital, and Private Brands."
            ]
        },
        {
            company: "Empyra",
            title: "Data Analyst",
            date: "2021 — 2023",
            location: "St. Louis, MO",
            description: "Automated reporting workflows and built real-time dashboards. Recognized for optimizing internal data processes."
        },
        {
            company: "Kaizen",
            title: "Data Science Intern",
            date: "2021",
            location: "Remote",
            description: "Supply chain optimization models. Applied ML to reduce logistical inefficiencies."
        }
    ];

    return (
        <section id="experience" className="py-24 section-divider">
            <div className="container">
                <div className="swiss-grid">
                    <div>
                        <span className="mono text-[#666]">02 / HISTORY</span>
                    </div>
                    <div>
                        <div className="space-y-16">
                            {roles.map((role, i) => (
                                <div key={i} className="group">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                                        <div className="flex items-baseline gap-3">
                                            <h3 className="text-xl text-white font-medium">{role.company}</h3>
                                            {role.company === "Bheed Studio" && <span className="px-2 py-0.5 rounded text-[10px] bg-white text-black font-bold uppercase">Current</span>}
                                        </div>
                                        <span className="mono text-[#666] text-sm">{role.date}</span>
                                    </div>
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="text-[#888] font-medium">{role.title}</div>
                                    </div>

                                    <p className="text-[#ccc] leading-relaxed max-w-2xl mb-4">
                                        {role.description}
                                    </p>

                                    {role.details && (
                                        <ul className="space-y-3 mt-4 text-[#888] text-sm leading-relaxed max-w-2xl border-l border-[#333] pl-4">
                                            {role.details.map((d, idx) => (
                                                <li key={idx}>{d}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
