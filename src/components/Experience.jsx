import React from 'react';

const Experience = () => {
    const roles = [
        {
            company: "Bheed Studio",
            title: "Founder & Principal Product Scientist",
            date: "Jan 2024 — Present",
            location: "Dallas, TX (Remote)",
            description: "A Product Intelligence & Venture Lab. Building a portfolio of 'Zero-Bloat' applications by combining rigorous market sentiment analysis with autonomous GenAI architectures.",
            details: [
                "\"Signal-Only\" Design: I analyze user sentiment on mass-market apps to isolate high-retention features, then rebuild them without the \"engagement traps\".",
                "Autonomous Execution: Architecting a proprietary \"5-Mind\" GenAI workflow to handle full-stack development, marketing, and legal ops with a headcount of one."
            ]
        },
        {
            company: "Albertsons Companies",
            title: "Data Scientist",
            date: "2023 — Present",
            location: "Plano, TX",
            description: "Leading predictive modeling and customer insight initiatives. Architecting scalable data pipelines for retail analytics."
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
