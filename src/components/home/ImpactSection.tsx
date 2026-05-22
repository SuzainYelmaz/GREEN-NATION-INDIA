"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, TreePine, Droplets, MapPin, Globe2 } from "lucide-react";
import { cn } from "@/lib/utils";

function CountUp({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      // Easing function (easeOutQuart)
      const easeProgress = 1 - Math.pow(1 - percentage, 4);
      
      setCount(Math.floor(end * easeProgress));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { label: "Trees Planted", value: 150000, suffix: "+", icon: TreePine, color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { label: "Volunteers", value: 25000, suffix: "+", icon: Users, color: "text-blue-500", bg: "bg-blue-500/10" },
  { label: "Water Saved (L)", value: 500000, suffix: "+", icon: Droplets, color: "text-cyan-500", bg: "bg-cyan-500/10" },
  { label: "Cities Reached", value: 45, suffix: "", icon: MapPin, color: "text-rose-500", bg: "bg-rose-500/10" },
  { label: "Active Campaigns", value: 120, suffix: "+", icon: Globe2, color: "text-purple-500", bg: "bg-purple-500/10" },
];

export default function ImpactSection() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-ivory">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-eco-green/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Our Environmental <span className="text-eco-green">Impact</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Numbers that tell the story of our dedication to healing the planet. Every action counts towards a sustainable future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-8 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full bg-white/40 blur-2xl group-hover:bg-eco-green/10 transition-colors duration-500" />
              
              <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6", stat.bg)}>
                <stat.icon className={cn("w-7 h-7", stat.color)} />
              </div>
              
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}

          {/* Special Join Us Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass-card p-8 bg-gradient-to-br from-eco-green to-eco-green-dark flex flex-col justify-center items-center text-center text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Be Part of the Change</h3>
              <p className="text-eco-green-light mb-6">Your contribution helps us plant more trees and save our planet.</p>
              <button className="px-6 py-3 bg-white text-eco-green-dark rounded-full font-bold hover:scale-105 transition-transform shadow-xl">
                Donate Now
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
