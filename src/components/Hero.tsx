"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-neutral-50">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <span className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-neutral-500 mb-6">
                Premium Metal Art
              </span>
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Art That
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-900">
                  Commands
                </span>
                <br />
                Attention.
              </h1>
              <p className="mt-6 text-lg text-neutral-500 leading-relaxed max-w-md">
                Premium posters printed on brushed aluminum. Vivid colors,
                razor-sharp detail, built to last a lifetime.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                href="/shop"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-neutral-800 transition-all duration-300"
              >
                Shop Collection
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/custom"
                className="inline-flex items-center gap-2 px-8 py-4 border border-neutral-300 text-neutral-700 text-sm font-medium rounded-full hover:border-neutral-900 hover:text-neutral-900 transition-all duration-300"
              >
                Custom Prints
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-12 flex gap-10"
            >
              <div>
                <p
                  className="text-3xl font-bold"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  50K+
                </p>
                <p className="text-xs text-neutral-500 mt-1 tracking-wide">
                  Happy Customers
                </p>
              </div>
              <div>
                <p
                  className="text-3xl font-bold"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  4.9/5
                </p>
                <p className="text-xs text-neutral-500 mt-1 tracking-wide">
                  Average Rating
                </p>
              </div>
              <div>
                <p
                  className="text-3xl font-bold"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  500+
                </p>
                <p className="text-xs text-neutral-500 mt-1 tracking-wide">
                  Unique Designs
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right - Hero visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-lg mx-auto">
              {/* Main hero image - modern room with wall art */}
              <div className="absolute inset-0 rounded-2xl shadow-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80"
                  alt="Modern room interior with metal wall art"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Floating accent cards */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-4 top-12 bg-white rounded-xl shadow-lg p-4 w-36 z-10"
              >
                <div className="w-full aspect-square bg-neutral-100 rounded-lg mb-2 relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&q=80"
                    alt="Car Collection"
                    fill
                    className="object-cover"
                    sizes="144px"
                  />
                </div>
                <p className="text-[10px] font-medium">Car Collection</p>
                <p className="text-[10px] text-neutral-400">30+ Designs</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-4 bottom-20 bg-white rounded-xl shadow-lg p-4 w-40 z-10"
              >
                <div className="flex gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-3 h-3 text-amber-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[10px] text-neutral-600 leading-relaxed">
                  &ldquo;Insane quality! The metallic finish is
                  incredible.&rdquo;
                </p>
                <p className="text-[10px] font-medium mt-1">— Arjun M.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
