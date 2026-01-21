import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">

            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300 mb-8 backdrop-blur-sm">
                        <span>FOUNDER @ BHEED STUDIO</span>
                        <span className="w-1 h-1 rounded-full bg-cyan-400 glow-cyan" />
                        <span>PRODUCT DATA SCIENTIST @ ALBERTSONS</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
                        Building <span className="text-gradient">Zero-Bloat</span><br />
                        Product Intelligence.
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                        A private venture lab analyzing <strong>market signals</strong> to build autonomous, high-retention systems.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="#ventures" className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-all hover:scale-105 active:scale-95">
                            View Venture Portfolio
                        </a>
                        <a href="#experience" className="px-8 py-4 rounded-full border border-white/10 text-white hover:bg-white/5 transition-all backdrop-blur-sm">
                            View Professional History
                        </a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-600 animate-bounce"
            >
                <ArrowDown size={24} />
            </motion.div>
        </section>
    );
};

export default Hero;
