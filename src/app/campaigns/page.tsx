"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Target, Search } from "lucide-react";

const allCampaigns = [
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
  },
  {
    id: 4,
    title: "Beach Cleanup Sunday",
    category: "Waste Management",
    image: "/images/gallery/DSC_0096.JPG",
    raised: 15000,
    goal: 50000,
    participants: 800,
  },
  {
    id: 5,
    title: "Green City Marathon",
    category: "Awareness",
    image: "/images/gallery/DSCN0579.JPG",
    raised: 150000,
    goal: 200000,
    participants: 5000,
  },
  {
    id: 6,
    title: "Sapling Distribution",
    category: "Afforestation",
    image: "/images/gallery/20150808_130541.jpg",
    raised: 60000,
    goal: 100000,
    participants: 400,
  }
];

export default function CampaignsPage() {
  return (
    <main className="min-h-screen bg-mint/5 pt-32 pb-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6">
            Our <span className="text-eco-green">Campaigns</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Explore our active initiatives and join hands to make a real difference in our environment.
          </p>
          
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search campaigns..." 
              className="w-full pl-12 pr-4 py-4 rounded-full glass border border-gray-200 focus:outline-none focus:ring-2 focus:ring-eco-green/50 transition-all shadow-sm"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCampaigns.map((campaign, idx) => {
            const progress = (campaign.raised / campaign.goal) * 100;

            return (
              <motion.div
                key={campaign.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
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
                      href={`/donate`}
                      className="px-4 py-2 rounded-full bg-eco-green/10 text-eco-green font-semibold group-hover:bg-eco-green group-hover:text-white transition-colors"
                    >
                      Support
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
