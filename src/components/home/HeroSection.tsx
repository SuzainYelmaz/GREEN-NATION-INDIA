"use client";

import FloatingParticles from "@/components/3d/FloatingParticles";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Leaf, HeartHandshake } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <FloatingParticles count={150} />
          <Environment preset="city" />
        </Canvas>
      </div>

      {/* Soft glassmorphism overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-mint/40 via-transparent to-ivory/80 pointer-events-none" />

      {/* Floating Round Logo */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none mix-blend-multiply">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-[500px] h-[500px] md:w-[700px] md:h-[700px]"
        >
          <Image 
            src="/images/GN CUT ROUND Logo 2025.png"
            alt="Green Nation Round Logo"
            fill
            className="object-contain"
            priority
            unoptimized
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-eco-green-dark text-sm font-medium"
        >
          <Leaf className="w-4 h-4" />
          <span>A movement for a greener tomorrow</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-bold tracking-tighter text-gray-900 mb-6 drop-shadow-sm"
        >
          Rebuilding India,
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-eco-green to-eco-green-dark">
            One Tree at a Time.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Join a movement creating a greener, cleaner, and sustainable future. Let&apos;s protect our environment together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/donate"
            className="w-full sm:w-auto px-8 py-4 bg-eco-green hover:bg-eco-green-dark text-white rounded-full font-semibold shadow-lg shadow-eco-green/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            Donate Now <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/volunteer"
            className="w-full sm:w-auto px-8 py-4 glass text-eco-green-dark rounded-full font-semibold hover:bg-white/60 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            Become a Volunteer <HeartHandshake className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-eco-green to-transparent" />
      </motion.div>
    </section>
  );
}
