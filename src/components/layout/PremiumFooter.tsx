import Link from "next/link";
import { Globe, Mail, MessageSquare, Phone, ArrowRight, Leaf } from "lucide-react";
import Image from "next/image";

export default function PremiumFooter() {
  return (
    <footer className="relative mt-20 md:mt-32 pt-16 md:pt-20 pb-20 overflow-hidden bg-mint/30">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-eco-green/20 to-transparent" />
      
      {/* Background large decorative leaf */}
      <div className="absolute -bottom-40 -right-40 text-eco-green/5 pointer-events-none">
        <Leaf className="w-96 h-96" />
        <div className="w-96 h-96" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand & Statement */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="relative w-10 h-10">
                <Image src="/images/GN CUT LOGO 2025 Square.png" alt="GNI Logo" fill className="object-contain" unoptimized />
              </div>
              <span className="text-2xl font-bold tracking-tight text-gray-900">Green Nation</span>
            </div>
            <p className="text-gray-500 leading-relaxed text-sm mb-4">
              Working to protect The Green Planet. We are a passionate movement dedicated to environmental sustainability, climate action, and creating a greener future for generations to come.
            </p>
            <p className="text-gray-900 font-semibold mb-6">
              Founded in 2004 by MD TARIQ NAKAASH
            </p>
            <div className="flex items-center gap-4 pt-2">
              <SocialLink href="#" icon={Globe} />
              <SocialLink href="#" icon={Mail} />
              <SocialLink href="#" icon={MessageSquare} />
              <SocialLink href="#" icon={Phone} />
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-semibold text-gray-900">Explore</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><FooterLink href="/about">Our Story</FooterLink></li>
              <li><FooterLink href="/campaigns">Campaigns</FooterLink></li>
              <li><FooterLink href="/events">Events</FooterLink></li>
              <li><FooterLink href="/blog">Eco Blog</FooterLink></li>
              <li><FooterLink href="/gallery">Gallery</FooterLink></li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-semibold text-gray-900">Get Involved</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><FooterLink href="/volunteer">Volunteer</FooterLink></li>
              <li><FooterLink href="/donate">Donate</FooterLink></li>
              <li><FooterLink href="/partner">Partner with us</FooterLink></li>
              <li><FooterLink href="/contact">Contact</FooterLink></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="font-semibold text-gray-900">Join the Movement</h4>
            <p className="text-sm text-gray-600">
              Subscribe to our newsletter for environmental updates and campaign alerts.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-2xl glass border-gray-200 focus:outline-none focus:ring-2 focus:ring-eco-green/50 text-sm transition-all"
              />
              <button
                type="submit"
                className="px-4 py-3 bg-eco-green hover:bg-eco-green-dark text-white rounded-2xl transition-colors shadow-md shadow-eco-green/20"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
            
            <div className="pt-6 border-t border-eco-green/10">
              <p className="text-sm italic text-gray-500">
                &quot;The best time to plant a tree was 20 years ago. The second best time is now.&quot;
              </p>
            </div>
          </div>

        </div>

        <div className="mt-12 md:mt-20 pt-8 border-t border-eco-green/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Green Nation India. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <Link href="/privacy" className="hover:text-eco-green transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-eco-green transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon: Icon }: { href: string; icon: React.ElementType<{ className?: string }> }) {
  return (
    <Link
      href={href}
      className="w-10 h-10 rounded-full glass flex items-center justify-center text-eco-green-dark hover:bg-eco-green hover:text-white transition-all duration-300"
    >
      <Icon className="w-4 h-4" />
    </Link>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="hover:text-eco-green transition-colors relative group inline-block">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-px bg-eco-green transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}
