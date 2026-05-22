"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Target } from "lucide-react";

const campaigns = [
  {
    id: 1,
    title: "Mega Tree Plantation Drive",
    category: "Afforestation",
    image: "/images/gallery/WP_20150903_10_56_13_Pro.jpg",
    raised: 450000,
    goal: 500000,
    participants: 1200,
  },
  {
    id: 2,
    title: "Urban Lake Restoration",
    category: "Water Conservation",
    image: "/images/gallery/Aqua_N15_20150301_150323.jpg",
    raised: 200000,
    goal: 300000,
    participants: 450,
  },
  {
    id: 3,
    title: "Eco-Awareness in Schools",
    category: "Education",
    image: "/images/gallery/DSCN0687.JPG",
    raised: 80000,
    goal: 100000,
    participants: 3000,
  }
];

export default function CampaignsPreview() {
  return (
    <section className="py-32 relative bg-ivory">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
              Featured Campaigns
            </h2>
            <p className="text-gray-600 text-lg">
              Discover our ongoing initiatives and see how your contribution makes a direct impact on the ground.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href="/campaigns"
              className="group flex items-center gap-2 px-6 py-3 bg-white text-eco-green-dark rounded-full font-semibold border border-eco-green/20 hover:bg-eco-green hover:text-white transition-all shadow-sm"
            >
              View All Campaigns
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign, idx) => {
            const progress = (campaign.raised / campaign.goal) * 100;

            return (
              <motion.div
                key={campaign.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group glass-card overflow-hidden flex flex-col relative"
              >
                {/* Image container */}
                <div className="relative h-64 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <Image 
                    src={campaign.image} 
                    alt={campaign.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    unoptimized
                  />
                  <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-white/80 backdrop-blur-md rounded-full text-xs font-bold text-eco-green-dark uppercase tracking-wider">
                    {campaign.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col relative bg-white/40">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-2">
                    {campaign.title}
                  </h3>

                  {/* Progress bar */}
                  <div className="mt-auto space-y-2">
                    <div className="flex justify-between text-sm font-semibold text-gray-700 mb-1">
                      <span>₹{(campaign.raised / 1000).toFixed(0)}k raised</span>
                      <span className="text-eco-green">₹{(campaign.goal / 1000).toFixed(0)}k goal</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-eco-green-light to-eco-green rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem] animate-[progress_1s_linear_infinite]" />
                      </motion.div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-200/50">
                    <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                      <Users className="w-4 h-4 text-eco-green" />
                      {campaign.participants} Supporters
                    </div>
                    <Link
                      href={`/campaigns/${campaign.id}`}
                      className="w-10 h-10 rounded-full bg-eco-green/10 flex items-center justify-center text-eco-green group-hover:bg-eco-green group-hover:text-white transition-colors"
                    >
                      <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
