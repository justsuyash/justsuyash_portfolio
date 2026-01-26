import React from 'react';

const Experience = () => {
    const roles = [
        {
            company: "Bheed Studio",
            title: "Founder & Principal Engineer | Applied AI Research Lab",
            date: "Jan 2023 — Present",
            location: "Dallas, TX (Remote)",
            description: "Technical sandbox building production-grade consumer AI products. 700+ users across QuizBeef (AI quiz app), mana-health (multi-agent health platform), Aligned (dating app).",
            details: [
                "Tech: LangChain, RAG, autonomous agents, context engineering"
            ]
        },
        {
            company: "Albertsons Companies",
            title: "Senior Data Scientist | Architecting AI-Powered Experimentation Systems",
            date: "Feb 2024 — Present",
            location: "Plano, TX",
            description: "Built end-to-end experimentation platform driving $150M+ in validated business decisions. Engineered two GenAI automation agents reducing analysis time from days to hours. Scaled testing velocity 3→8 experiments/week.",
            details: [
                "Tech: Spark, CUPED (35% error reduction), Bayesian, LangChain, Gemini"
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
