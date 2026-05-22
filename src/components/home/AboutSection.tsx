"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);

  return (
    <section ref={containerRef} id="about" className="py-32 relative overflow-hidden bg-mint/20">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Text Content */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-24 h-24 md:w-32 md:h-32 mb-8">
                <Image src="/images/GN CUT LOGO 2025 Square.png" alt="GNI Square Logo" fill className="object-contain" unoptimized />
              </div>
              <h2 className="text-sm uppercase tracking-[0.2em] text-eco-green font-semibold mb-4">Our Story</h2>
              <h3 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900 leading-[1.1]">
                Rooted in <br/>
                <span className="text-eco-green-dark">Nature&apos;s Wisdom.</span>
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-lg text-gray-600 leading-relaxed"
            >
              <p>
                Founded in 2004 by MD TARIQ NAKAASH, Greenation India has grown from a local initiative into a nationwide movement. Our mission is simple: to rebuild the natural world and protect our environment for future generations.
              </p>
              <p>
                We focus on water conservation, tree planting, and renewable energy to combat climate change and protect our forests and oceans.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 border-t border-eco-green/20"
            >
              <div className="flex items-center gap-12">
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">2010</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">Founded</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">100+</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">Communities</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Visual Content / Images */}
          <div className="relative h-[600px] lg:h-[800px] w-full hidden md:block">
            {/* Primary large image */}
            <motion.div 
              style={{ y: y1 }}
              className="absolute top-0 right-0 w-[80%] h-[70%] rounded-[2rem] overflow-hidden shadow-2xl glass-card"
            >
              <Image 
                src="/images/gallery/20150808_125011.jpg" 
                alt="Tree plantation" 
                fill 
                className="object-cover"
                unoptimized
              />
            </motion.div>

            {/* Secondary smaller floating image */}
            <motion.div 
              style={{ y: y2 }}
              className="absolute bottom-10 left-0 w-[55%] h-[45%] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white z-10"
            >
              <Image 
                src="/images/gallery/DSCN0628.JPG" 
                alt="Volunteers" 
                fill 
                className="object-cover"
                unoptimized
              />
            </motion.div>

            {/* Decorative element */}
            <motion.div
              style={{ scale }}
              className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-tr from-eco-green to-mint rounded-full blur-3xl opacity-60 -z-10"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
