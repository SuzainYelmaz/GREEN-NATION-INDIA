"use client";

import { motion } from "framer-motion";
import { Leaf, Heart, Users, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function VolunteerPage() {
  return (
    <main className="min-h-screen bg-ivory pt-32 pb-24 px-6 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-eco-green/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 text-eco-green-dark text-sm font-medium">
            <Heart className="w-4 h-4" /> Join Our Community
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6">
            Become a <span className="text-eco-green">Volunteer</span>
          </h1>
          <p className="text-xl text-gray-600">
            We are looking for passionate individuals ready to get their hands dirty for a cleaner planet.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-8 md:p-12 shadow-2xl shadow-eco-green/10"
        >
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-2xl glass border-gray-200 focus:outline-none focus:ring-2 focus:ring-eco-green/50 transition-all bg-white/50"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-2xl glass border-gray-200 focus:outline-none focus:ring-2 focus:ring-eco-green/50 transition-all bg-white/50"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Areas of Interest</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Tree Plantation", "Lake Cleanup", "Awareness", "Fundraising"].map((interest) => (
                  <label key={interest} className="flex items-center gap-2 p-4 rounded-xl glass cursor-pointer hover:bg-white/80 transition-colors border border-transparent hover:border-eco-green/20">
                    <input type="checkbox" className="text-eco-green focus:ring-eco-green rounded" />
                    <span className="text-sm font-medium text-gray-700">{interest}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Why do you want to join?</label>
              <textarea 
                rows={4}
                className="w-full px-4 py-3 rounded-2xl glass border-gray-200 focus:outline-none focus:ring-2 focus:ring-eco-green/50 transition-all bg-white/50 resize-none"
                placeholder="Share your passion..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-eco-green to-eco-green-dark text-white rounded-2xl font-bold text-lg shadow-lg shadow-eco-green/30 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
            >
              Submit Application <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </motion.div>
      </div>
    </main>
  );
}
