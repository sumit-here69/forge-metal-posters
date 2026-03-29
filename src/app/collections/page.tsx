"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { collections } from "@/data/products";

export default function CollectionsPage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-400">
            Browse
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold mt-2 tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Our Collections
          </h1>
          <p className="text-neutral-500 mt-4 max-w-xl">
            Explore our curated collections of premium metal posters. From
            movies to motorsport, find the perfect piece for your space.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {collections.map((collection, i) => (
            <motion.div
              key={collection.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={`/collections/${collection.slug}`}
                className="group block relative overflow-hidden rounded-2xl aspect-[3/4] sm:aspect-square"
              >
                {/* Background Image */}
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
                  <h2
                    className="text-white text-xl sm:text-2xl font-bold tracking-tight"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {collection.name}
                  </h2>
                  <p className="text-white/60 text-sm mt-1">
                    {collection.count}+ Designs
                  </p>
                </div>

                {/* Hover arrow */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
