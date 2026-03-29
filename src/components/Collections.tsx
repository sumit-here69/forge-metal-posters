"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { collections } from "@/data/products";

export default function Collections() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-400">
              Explore
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold mt-2 tracking-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Collections
            </h2>
          </div>
          <Link
            href="/collections"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            View All
            <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {collections.map((col, i) => (
            <motion.div
              key={col.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={`/collections/${col.slug}`}
                className={`group block relative overflow-hidden rounded-2xl ${
                  i === 0 || i === 5 ? "aspect-[2/1.2]" : "aspect-square"
                }`}
              >
                {/* Background image */}
                <Image
                  src={col.image}
                  alt={col.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />

                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3
                    className="text-white text-xl sm:text-2xl font-bold tracking-tight"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {col.name}
                  </h3>
                  <p className="text-white/60 text-sm mt-1">
                    {col.count}+ Designs
                  </p>
                </div>

                {/* Hover arrow */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight size={14} className="text-white" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
