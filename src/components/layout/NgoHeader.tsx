"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Mail, Phone, Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/#about" },
  { name: "Campaigns", href: "/campaigns" },
  { name: "Gallery", href: "/gallery" },
  { name: "Events", href: "/events" },
  { name: "Blog", href: "/blog" },
];

export default function NgoHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col w-full transition-all duration-300">
      
      {/* Top Bar (Contact & Social) - Hides on scroll */}
      <div 
        className={cn(
          "bg-eco-green-dark text-white/90 text-xs sm:text-sm transition-all duration-300 overflow-hidden",
          isScrolled ? "h-0 opacity-0" : "h-10 opacity-100"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="mailto:greenationindia@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">greenationindia@gmail.com</span>
            </a>
            <a href="tel:+910000000000" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">+91 98765 43210</span>
            </a>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-3">
              <a href="#" className="hover:text-white"><Globe className="w-4 h-4" /></a>
              {/* Other social icons would go here */}
            </div>
            <Link href="/volunteer" className="font-semibold text-white hover:text-mint transition-colors">
              Become a Volunteer
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div 
        className={cn(
          "w-full transition-all duration-300",
          isScrolled 
            ? "bg-white/80 backdrop-blur-lg shadow-md py-3" 
            : "bg-white py-4 shadow-sm"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 md:w-14 md:h-14 overflow-hidden rounded-md transition-transform group-hover:scale-105">
              <Image 
                src="/images/GN CUT LOGO 2025 Square.png" 
                alt="Green Nation Logo" 
                fill 
                className="object-contain" 
                unoptimized
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 leading-none">
                Green Nation
              </span>
              <span className="text-xs font-semibold text-eco-green uppercase tracking-widest mt-1">
                India
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        "text-sm font-bold uppercase tracking-wide transition-colors relative group py-2",
                        isActive ? "text-eco-green" : "text-gray-700 hover:text-eco-green"
                      )}
                    >
                      {item.name}
                      <span className={cn(
                        "absolute bottom-0 left-0 w-full h-0.5 bg-eco-green transition-transform origin-left",
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      )} />
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Donate CTA */}
            <Link
              href="/donate"
              className="px-8 py-3 bg-eco-green hover:bg-eco-green-dark text-white rounded-full font-bold uppercase tracking-wide shadow-lg shadow-eco-green/30 transition-all hover:-translate-y-0.5 flex items-center gap-2"
            >
              Donate Now <ArrowRight className="w-4 h-4" />
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-gray-600 hover:text-eco-green transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-bold text-gray-800 hover:text-eco-green transition-colors border-b border-gray-50 pb-4"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/donate"
                className="mt-4 py-4 w-full bg-eco-green text-white text-center rounded-xl font-bold uppercase tracking-wide shadow-md"
              >
                Donate Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
