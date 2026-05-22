"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote: "Being a part of Green Nation India has changed my perspective on life. Planting trees every weekend gives me a sense of purpose I've never felt before.",
    author: "Rahul Sharma",
    role: "Volunteer",
    image: "/images/gallery/DSCN0579.JPG"
  },
  {
    quote: "Their dedication to restoring urban ecosystems is unmatched. We've seen a 40% increase in local biodiversity since their lake restoration project began.",
    author: "Dr. Anita Desai",
    role: "Environmentalist",
    image: "/images/gallery/DSCN0659.JPG"
  },
  {
    quote: "Our corporate partnership with GNI allowed us to offset our carbon footprint efficiently while engaging our employees in meaningful groundwork.",
    author: "Vikram Mehta",
    role: "Corporate Partner",
    image: "/images/gallery/DSCN0703.JPG"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 relative bg-mint/10 overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-eco-green-light/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4"
          >
            Voices of <span className="text-eco-green">Change</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Hear from the people who make our mission possible every single day.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="glass-card p-8 relative flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="absolute top-6 right-6 text-eco-green/10 group-hover:text-eco-green/20 transition-colors">
                <Quote className="w-16 h-16" />
              </div>
              
              <div className="relative w-24 h-24 mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg z-10">
                <Image 
                  src={item.image}
                  alt={item.author}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              <p className="text-gray-600 italic mb-8 relative z-10 text-lg leading-relaxed">
                "{item.quote}"
              </p>

              <div className="mt-auto">
                <h4 className="font-bold text-gray-900 text-lg">{item.author}</h4>
                <p className="text-eco-green font-medium text-sm uppercase tracking-wider">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
