import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import NgoHeader from "@/components/layout/NgoHeader";
import PremiumFooter from "@/components/layout/PremiumFooter";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Green Nation India | Working to protect The Green Planet",
  description: "Join a movement creating a greener, cleaner, and sustainable future across India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col antialiased selection:bg-eco-green/30 selection:text-eco-green-dark">
        <SmoothScrollProvider>
          <NgoHeader />
          <div className="flex-1 pt-24">
            {children}
          </div>
          <PremiumFooter />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
