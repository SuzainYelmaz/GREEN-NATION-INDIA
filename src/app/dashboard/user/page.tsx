"use client";

import { motion } from "framer-motion";
import { TreePine, Heart, Clock, Award, Leaf, TrendingUp, Activity, Download } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Trees Planted", value: "24", icon: TreePine, color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { label: "Donations", value: "₹15,000", icon: Heart, color: "text-rose-500", bg: "bg-rose-500/10" },
  { label: "Volunteer Hours", value: "48h", icon: Clock, color: "text-blue-500", bg: "bg-blue-500/10" },
  { label: "Eco Score", value: "920", icon: Leaf, color: "text-green-500", bg: "bg-green-500/10" }
];

const timeline = [
  { action: "Planted 5 trees in Urban Lake Drive", date: "2 days ago", icon: TreePine },
  { action: "Donated ₹5,000 to Mega Plantation", date: "1 week ago", icon: Heart },
  { action: "Volunteered 6 hours for Beach Cleanup", date: "3 weeks ago", icon: Clock },
];

export default function UserDashboard() {
  return (
    <main className="min-h-screen bg-[#fbfbf9] pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Welcome back, Rahul 👋</h1>
            <p className="text-gray-500 mt-1">Here is your environmental impact summary.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button className="px-6 py-2.5 bg-eco-green hover:bg-eco-green-dark text-white rounded-xl font-medium shadow-sm transition-colors flex items-center gap-2">
              <Download className="w-4 h-4" /> Download Certificate
            </button>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-gray-100 flex items-center gap-4"
            >
              <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center", stat.bg)}>
                <stat.icon className={cn("w-7 h-7", stat.color)} />
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm font-medium text-gray-500">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Carbon Offset Chart Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-gray-100"
          >
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold text-gray-900">Carbon Offset Tracker</h3>
              <div className="flex items-center gap-2 text-sm font-medium text-emerald-500 bg-emerald-50 px-3 py-1 rounded-full">
                <TrendingUp className="w-4 h-4" /> +15% this month
              </div>
            </div>
            
            <div className="relative h-[300px] w-full flex items-end justify-between px-4 pb-4 border-b border-l border-gray-100">
              {/* Fake Bar Chart */}
              {[30, 45, 25, 60, 80, 50, 95].map((height, i) => (
                <div key={i} className="w-[10%] group relative">
                  <div 
                    className="absolute bottom-0 w-full bg-gradient-to-t from-eco-green-light to-eco-green rounded-t-lg transition-all duration-500 group-hover:from-eco-green group-hover:to-eco-green-dark"
                    style={{ height: `${height}%` }}
                  />
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-400 font-medium">
                    {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'][i]}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Activity Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-gray-100"
          >
            <div className="flex items-center gap-2 mb-8">
              <Activity className="w-5 h-5 text-gray-400" />
              <h3 className="text-xl font-bold text-gray-900">Recent Activity</h3>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
              {timeline.map((item, i) => (
                <div key={i} className="relative flex items-start gap-6">
                  <div className="relative z-10 w-10 h-10 flex items-center justify-center bg-white border-2 border-eco-green rounded-full">
                    <item.icon className="w-4 h-4 text-eco-green" />
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-sm font-medium text-gray-900">{item.action}</p>
                    <p className="text-xs text-gray-500 mt-1">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="lg:col-span-3 bg-gradient-to-br from-eco-green to-eco-green-dark rounded-3xl p-8 shadow-xl text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
            <div className="absolute -right-20 -top-20 text-white/5 pointer-events-none">
              <Award className="w-96 h-96" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">Achievement Unlocked: Earth Guardian 🌍</h3>
              <p className="text-white/80 max-w-xl">
                You've reached the highest tier of volunteer status by dedicating over 40 hours this month. Your certificate of excellence is now available for download.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
