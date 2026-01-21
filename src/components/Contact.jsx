import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="pt-24 pb-12 section-divider">
            <div className="container">
                <div className="swiss-grid">
                    <div>
                        <span className="mono text-[#666]">04 / CONTACT</span>
                    </div>
                    <div>
                        <p className="text-2xl md:text-4xl text-white font-medium mb-12 leading-tight">
                            Open to discussing data strategy,<br />
                            new ventures, or consulting.
                        </p>

                        <div className="flex flex-col gap-6 items-start">
                            <a href="mailto:contact@justsuyash.com" className="text-lg text-[#ccc] hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">
                                contact@justsuyash.com
                            </a>
                            <div className="flex gap-8">
                                <a href="https://www.linkedin.com/in/justsuyash/" target="_blank" className="mono text-sm text-[#666] hover:text-white transition-colors">
                                    LINKEDIN
                                </a>
                                <a href="https://github.com/justsuyash" target="_blank" className="mono text-sm text-[#666] hover:text-white transition-colors">
                                    GITHUB
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
