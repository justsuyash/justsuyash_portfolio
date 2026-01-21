import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-24 section-divider">
            <div className="container">
                <div className="swiss-grid">
                    <div>
                        <span className="mono text-[#666]">01 / PHILOSOPHY</span>
                    </div>
                    <div className="space-y-8 text-lg font-light leading-relaxed text-[#ccc]">
                        <p>
                            At <strong>Bheed Inc.</strong> (Hindi for "Crowd"), our philosophy is simple: <strong>Democratized Influence.</strong>
                        </p>
                        <p>
                            At <span className="text-white">Bheed Studio</span>, my philosophy is "Old Concepts, Leaner Design"—operating as a dedicated micro-studio to strip away complexity and maximize value.
                        </p>
                        <p>
                            From architecting predictive systems at <span className="text-white">Albertsons</span> to building the <span className="text-white">Social Protocol</span> at Aligned,
                            I use <strong>GenAI</strong> and <strong>Vector Databases</strong> to build technology that serves the crowd, not just the algorithm.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
