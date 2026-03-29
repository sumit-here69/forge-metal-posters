"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-neutral-950">
      {/* Full-bleed background image — a room setup with metal posters */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&q=80"
          alt="Modern room with metal posters on the wall"
          fill
          className="object-cover opacity-40"
          priority
          sizes="100vw"
        />
        {/* Gradient overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[92vh] py-16">
          {/* Left — Text content */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <span className="inline-block text-[10px] font-medium tracking-[0.4em] uppercase text-neutral-400 mb-5 border border-neutral-700 px-3 py-1.5 rounded-full">
                Premium Metal Posters
              </span>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight text-white"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Your Walls.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500">
                  Your Rules.
                </span>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-neutral-400 leading-relaxed max-w-md">
                Bold art printed on brushed aluminum. Vivid colors, razor-sharp
                detail, built to last forever. Not paper — metal.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                href="/shop"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-white text-neutral-900 text-sm font-semibold rounded-full hover:bg-neutral-100 transition-all duration-300"
              >
                Shop Collection
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/custom"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-neutral-600 text-white text-sm font-medium rounded-full hover:border-white transition-all duration-300"
              >
                Custom Prints
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-12 flex gap-8 sm:gap-10"
            >
              {[
                { value: "50K+", label: "Happy Customers" },
                { value: "4.9/5", label: "Average Rating" },
                { value: "500+", label: "Unique Designs" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    className="text-2xl sm:text-3xl font-bold text-white"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-[10px] sm:text-xs text-neutral-500 mt-1 tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Metal poster showcase */}
          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              {/* Main featured poster — large, edge-pushing */}
              <div className="relative ml-auto w-full lg:w-[115%] lg:-mr-[15%]">
                {/* Ambient glow behind poster */}
                <div className="absolute -inset-8 bg-gradient-to-br from-white/5 via-transparent to-white/5 rounded-3xl blur-2xl" />

                {/* Primary poster */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.5)] border border-white/10">
                  <Image
                    src="https://images.unsplash.com/photo-1504215680853-026ed2a45def?w=1200&q=80"
                    alt="Audi S5 Sportback metal poster — sunset edition"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />
                  {/* Metallic sheen overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none" />

                  {/* Product info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-[10px] text-white/50 uppercase tracking-[0.2em]">
                          Bestseller
                        </p>
                        <p
                          className="text-white text-sm sm:text-base font-semibold mt-1"
                          style={{ fontFamily: "var(--font-space-grotesk)" }}
                        >
                          Audi S5 Sportback | Sunset Edition
                        </p>
                        <p className="text-white/60 text-xs mt-0.5">
                          8 Panel Split Wall Set
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-white/40 text-xs line-through">
                          Rs. 2,499
                        </p>
                        <p className="text-white text-base font-bold">
                          Rs. 1,499
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Secondary poster cards — stacked behind/beside */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-6 -left-4 sm:-left-8 w-32 sm:w-40 z-20"
                >
                  <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10 aspect-[3/4] relative">
                    <Image
                      src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&q=80"
                      alt="Mercedes-AMG GT R metal poster"
                      fill
                      className="object-cover"
                      sizes="160px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <p className="text-white text-[9px] font-medium truncate">
                        Mercedes-AMG GT R
                      </p>
                      <p className="text-white/50 text-[8px]">Rs. 1,499</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 right-8 sm:right-16 w-28 sm:w-36 z-20"
                >
                  <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10 aspect-[3/4] relative">
                    <Image
                      src="https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&q=80"
                      alt="Spider-Man dark portrait metal poster"
                      fill
                      className="object-cover"
                      sizes="144px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <p className="text-white text-[9px] font-medium truncate">
                        Spider-Man Dark Portrait
                      </p>
                      <p className="text-white/50 text-[8px]">Rs. 999</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating review card */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-12 -right-2 sm:right-4 bg-white/10 backdrop-blur-xl rounded-xl p-3.5 w-44 z-20 border border-white/10"
                >
                  <div className="flex gap-0.5 mb-1.5">
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
                  <p className="text-[10px] text-white/80 leading-relaxed">
                    &ldquo;The metallic finish is insane. Way better than paper
                    posters.&rdquo;
                  </p>
                  <p className="text-[10px] font-medium text-white/50 mt-1.5">
                    — Arjun M.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-20" />
    </section>
  );
}
