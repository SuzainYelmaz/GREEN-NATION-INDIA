"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const posters = [
  {
    src: "/images/gallery/GN Color Handbill.jpg",
    alt: "Say No To Plastic Awareness Poster"
  },
  {
    src: "/images/gallery/GN AVK4.jpg",
    alt: "Green Nation Save Earth Poster"
  }
];

export default function AwarenessSection() {
  return (
    <section className="py-32 relative bg-mint/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4"
          >
            Spreading <span className="text-eco-green">Awareness</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Our grassroots campaigns and awareness drives aimed at educating communities about plastic pollution and environmental conservation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-items-center">
          {posters.map((poster, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative w-full max-w-lg aspect-[4/3] rounded-3xl overflow-hidden glass-card shadow-xl group"
            >
              <Image 
                src={poster.src}
                alt={poster.alt}
                fill
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                unoptimized
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
