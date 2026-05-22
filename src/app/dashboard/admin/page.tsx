"use client";

import { motion } from "framer-motion";
import { Users, BarChart3, Settings, DollarSign, Target, CheckCircle2 } from "lucide-react";

const navItems = [
  { name: "Overview", icon: BarChart3, active: true },
  { name: "Campaigns", icon: Target, active: false },
  { name: "Donations", icon: DollarSign, active: false },
  { name: "Volunteers", icon: Users, active: false },
  { name: "Settings", icon: Settings, active: false },
];

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden lg:flex flex-col">
        <div className="h-20 flex items-center px-8 border-b border-gray-100">
          <span className="font-bold text-xl text-eco-green-dark">GNI Admin</span>
        </div>
        <nav className="flex-1 px-4 py-8 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.name}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                item.active 
                  ? "bg-eco-green/10 text-eco-green-dark" 
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 pt-24 lg:pt-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto space-y-8">
          
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
            <div className="flex gap-4">
              <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                Export Report
              </button>
              <button className="px-4 py-2 bg-eco-green text-white rounded-lg text-sm font-medium hover:bg-eco-green-dark transition-colors">
                Create Campaign
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Total Donations</p>
                <p className="text-3xl font-bold text-gray-900">₹24.5M</p>
              </div>
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                <DollarSign className="w-6 h-6" />
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Active Volunteers</p>
                <p className="text-3xl font-bold text-gray-900">12,450</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Live Campaigns</p>
                <p className="text-3xl font-bold text-gray-900">8</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Recent Approvals & Active Campaigns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Pending Volunteer Approvals</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div>
                      <p className="font-semibold text-gray-900">New Applicant {i}</p>
                      <p className="text-sm text-gray-500">Applied 2 hours ago</p>
                    </div>
                    <button className="text-eco-green hover:bg-eco-green/10 p-2 rounded-lg transition-colors">
                      <CheckCircle2 className="w-6 h-6" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Recent Donations</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between p-4 border-b border-gray-100 last:border-0">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-500">
                        {String.fromCharCode(64 + i)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Anonymous Donor</p>
                        <p className="text-sm text-gray-500">Urban Lake Restoration</p>
                      </div>
                    </div>
                    <div className="font-bold text-emerald-600">
                      +₹{i * 5000}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
