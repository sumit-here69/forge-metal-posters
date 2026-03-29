"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-neutral-900 text-white"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)",
                backgroundSize: "30px 30px",
              }}
            />
          </div>

          <div className="relative z-10 px-8 sm:px-16 py-16 sm:py-20 text-center">
            <span className="text-xs tracking-[0.3em] uppercase text-neutral-400">
              Limited Time Offer
            </span>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 tracking-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Buy 3, Get 1 Free
            </h2>
            <p className="text-neutral-400 mt-4 max-w-lg mx-auto text-lg">
              Transform every room. Mix and match from any collection — your
              fourth poster is on us.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link
                href="/shop"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-neutral-900 text-sm font-semibold rounded-full hover:bg-neutral-100 transition-colors"
              >
                Shop Now
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/collections"
                className="inline-flex items-center gap-2 px-8 py-4 border border-neutral-600 text-white text-sm font-medium rounded-full hover:border-white transition-colors"
              >
                Browse Collections
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
