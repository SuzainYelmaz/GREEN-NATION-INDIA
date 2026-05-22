"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/images/gallery/20150808_125011.jpg",
  "/images/gallery/20150808_125310.jpg",
  "/images/gallery/20150808_130541.jpg",
  "/images/gallery/Aqua_N15_20150301_140110.jpg",
  "/images/gallery/DSCN0579.JPG",
  "/images/gallery/DSCN0628.JPG",
  "/images/gallery/DSCN0659.JPG",
  "/images/gallery/DSCN0687.JPG",
  "/images/gallery/WP_20150808_12_51_48_Pro.jpg",
  "/images/gallery/WP_20150903_10_56_13_Pro.jpg",
  "/images/gallery/WP_20160111_11_46_32_Pro.jpg",
  "/images/gallery/GN 044.jpg"
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-mint/10 pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6">
            Our <span className="text-eco-green">Impact</span> in Pictures
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A cinematic journey through our environmental campaigns and the incredible volunteers who make it happen.
          </p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.2 }}
              className="relative rounded-3xl overflow-hidden group glass-card break-inside-avoid shadow-xl shadow-eco-green/5"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <p className="text-white font-medium drop-shadow-md">Environmental Action</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
