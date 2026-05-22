"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ArrowRight, ShieldCheck, TreePine } from "lucide-react";
import { cn } from "@/lib/utils";

export default function DonatePage() {
  const [type, setType] = useState<"one-time" | "monthly">("one-time");
  const [amount, setAmount] = useState<number>(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const amounts = type === "one-time" ? [500, 1000, 2000, 5000] : [200, 500, 1000, 2000];

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <main className="min-h-screen bg-ivory pt-32 pb-24 px-6 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-eco-green/10 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Storytelling Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-eco-green-dark font-medium text-sm">
            <Heart className="w-4 h-4" /> 100% of your donation goes to our missions
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
            Fund the <span className="text-eco-green">Future</span> of our Planet.
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Every rupee you donate helps us plant trees, restore lakes, and educate the next generation about environmental sustainability. Join us in rebuilding India.
          </p>
          
          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-200">
            <div className="flex flex-col gap-2">
              <span className="text-4xl font-bold text-gray-900">₹500</span>
              <span className="text-sm text-gray-500">Plants 5 saplings</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-4xl font-bold text-gray-900">₹2000</span>
              <span className="text-sm text-gray-500">Maintains 20 trees for a year</span>
            </div>
          </div>
        </motion.div>

        {/* Donation Form Interface */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="glass-card p-8 shadow-2xl relative overflow-hidden">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, x: -50 }}
                  onSubmit={handleDonate}
                  className="space-y-8"
                >
                  {/* Toggle Type */}
                  <div className="flex p-1 bg-gray-100 rounded-full relative">
                    <button
                      type="button"
                      onClick={() => setType("one-time")}
                      className={cn("flex-1 py-3 text-sm font-semibold rounded-full z-10 transition-colors", type === "one-time" ? "text-white" : "text-gray-600")}
                    >
                      One Time
                    </button>
                    <button
                      type="button"
                      onClick={() => setType("monthly")}
                      className={cn("flex-1 py-3 text-sm font-semibold rounded-full z-10 transition-colors", type === "monthly" ? "text-white" : "text-gray-600")}
                    >
                      Monthly
                    </button>
                    <motion.div
                      layoutId="toggle"
                      className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-eco-green rounded-full z-0"
                      initial={false}
                      animate={{ left: type === "one-time" ? "4px" : "50%" }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  </div>

                  {/* Amount Selection */}
                  <div className="space-y-4">
                    <label className="text-sm font-semibold text-gray-700">Select Amount</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {amounts.map((val) => (
                        <button
                          key={val}
                          type="button"
                          onClick={() => { setAmount(val); setCustomAmount(""); }}
                          className={cn(
                            "py-3 rounded-2xl font-bold transition-all border",
                            amount === val
                              ? "bg-eco-green/10 border-eco-green text-eco-green-dark shadow-sm"
                              : "bg-white/50 border-gray-200 text-gray-600 hover:border-eco-green/50"
                          )}
                        >
                          ₹{val}
                        </button>
                      ))}
                    </div>
                    
                    <div className="relative mt-4">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-gray-400">₹</span>
                      <input
                        type="number"
                        placeholder="Custom Amount"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setAmount(0); // Reset predefined amount
                        }}
                        className="w-full pl-10 pr-4 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-eco-green/50 transition-all font-bold text-gray-900 bg-white/50"
                      />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="space-y-4">
                    <input type="text" placeholder="Full Name" required className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-eco-green/50 transition-all bg-white/50" />
                    <input type="email" placeholder="Email Address" required className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-eco-green/50 transition-all bg-white/50" />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-eco-green to-eco-green-dark text-white rounded-2xl font-bold text-lg shadow-lg shadow-eco-green/30 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                  >
                    Donate ₹{customAmount || amount} <ArrowRight className="w-5 h-5" />
                  </button>

                  <p className="text-xs text-center text-gray-500 flex items-center justify-center gap-1">
                    <ShieldCheck className="w-4 h-4" /> Secure payment via Razorpay/Stripe
                  </p>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12 space-y-6"
                >
                  <div className="w-24 h-24 bg-eco-green/10 rounded-full flex items-center justify-center text-eco-green mb-4">
                    <TreePine className="w-12 h-12 animate-bounce" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Thank You!</h3>
                  <p className="text-gray-600">
                    Your donation of ₹{customAmount || amount} has been successfully processed. You've just planted hope for a greener tomorrow.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 px-6 py-2 border border-eco-green text-eco-green font-medium rounded-full hover:bg-eco-green hover:text-white transition-colors"
                  >
                    Donate Again
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
