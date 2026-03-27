"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
"/4_Rollup.png",
"/9_x-banner.jpg",
"/10_Booklet-Saddle Stitch.jpg",
"/13_Print-PitchBind-1.jpg",
"/14_Brochure-2.jpg",
"/cups.webp",
"/product.webp",
"/paper.webp",
"/print-box.webp"

];

export default function FilmSlider() {
  const duplicatedImages = [...images, ...images];

  return (
    <div className="py-10 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

      <motion.div
        className="flex gap-8 w-max" 
        animate={{
          x: ["0%", "-30%"]
        }}
        transition={{
          ease: "linear",
          duration: 20, 
          delay:1,
          repeat: Infinity, 
        }}
      >
        {duplicatedImages.map((src, index) => (
          <div key={index} className="flex-shrink-0 w-[200px] h-[150px] relative  transition-all duration-300">
            <Image
              src={src}
              alt="film strip item"
              fill
              className="object-cover rounded-xl border-4 border-black/5"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}