"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Info, TreeDeciduous, Calendar, BookOpen, HeartHandshake, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/#about", icon: Info },
  { name: "Campaigns", href: "/campaigns", icon: TreeDeciduous },
  { name: "Events", href: "/events", icon: Calendar },
  { name: "Blog", href: "/blog", icon: BookOpen },
  { name: "Volunteer", href: "/volunteer", icon: HeartHandshake },
];

export default function FloatingNavbar() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay to allow the hero animation to start first
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-2xl"
        >
          <nav className="glass rounded-full px-4 py-3 flex items-center justify-between shadow-2xl">
            {/* Logo for mobile, hidden on desktop */}
            <Link href="/" className="md:hidden p-2 flex items-center justify-center">
              <div className="relative w-8 h-8">
                <Image src="/images/GN CUT LOGO 2025 Square.png" alt="GNI Logo" fill className="object-contain" unoptimized />
              </div>
            </Link>

            {/* Desktop / Tablet Links & Logo */}
            <div className="hidden md:flex items-center gap-1 w-full justify-between">
              <Link href="/" className="flex-shrink-0 relative w-10 h-10 ml-2">
                <Image src="/images/GN CUT LOGO 2025 Square.png" alt="GNI Logo" fill className="object-contain" unoptimized />
              </Link>
              <ul className="flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        "relative px-4 py-2 text-sm font-medium transition-colors rounded-full overflow-hidden group block",
                        isActive ? "text-eco-green-dark" : "text-gray-600 hover:text-eco-green"
                      )}
                    >
                      <span className="relative z-10">{item.name}</span>
                      {isActive && (
                        <motion.div
                          layoutId="navbar-indicator"
                          className="absolute inset-0 bg-eco-green/10 rounded-full z-0"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
              </ul>
            </div>

            {/* Mobile Links */}
            <ul className="flex md:hidden items-center justify-around w-full">
               {navItems.slice(0, 5).map((item) => {
                 const isActive = pathname === item.href;
                 return (
                   <li key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex flex-col items-center justify-center p-2 rounded-xl transition-colors",
                        isActive ? "text-eco-green-dark" : "text-gray-500 hover:text-eco-green"
                      )}
                    >
                      <item.icon className="w-5 h-5 mb-1" />
                      <span className="text-[10px] font-medium">{item.name}</span>
                    </Link>
                   </li>
                 )
               })}
            </ul>

            {/* CTA Button */}
            <Link
              href="/donate"
              className="hidden md:flex items-center justify-center px-6 py-2.5 ml-2 bg-gradient-to-r from-eco-green to-eco-green-dark text-white rounded-full font-semibold text-sm shadow-lg shadow-eco-green/30 hover:shadow-xl hover:shadow-eco-green/40 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              Donate
            </Link>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
