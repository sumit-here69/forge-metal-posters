"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { products, collections } from "@/data/products";

const categories = [
  { label: "All", slug: "all" },
  { label: "Movies", slug: "movies" },
  { label: "Cars", slug: "cars" },
  { label: "Anime", slug: "anime" },
  { label: "Music", slug: "music" },
  { label: "Sports", slug: "sports" },
  { label: "Gaming", slug: "gaming" },
];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.categorySlug === activeCategory);

  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-400">
            Browse Collection
          </span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-2 tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Shop All Metal Posters
          </h1>
          <p className="text-neutral-500 mt-4 max-w-xl mx-auto">
            Discover our full range of premium metal posters. Bold designs
            printed on brushed aluminum for a stunning, modern look.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              className={`px-4 sm:px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.slug
                  ? "bg-neutral-900 text-white"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Count */}
        <p className="text-sm text-neutral-400 mb-6">
          Showing {filteredProducts.length} product
          {filteredProducts.length !== 1 ? "s" : ""}
        </p>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
            >
              <Link href={`/product/${product.id}`} className="group block">
                {/* Image */}
                <div className="relative aspect-[3/4] bg-neutral-100 rounded-xl overflow-hidden mb-3">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                  />

                  {/* Badge */}
                  {product.badge && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-white text-[10px] font-semibold uppercase tracking-wider rounded-full shadow-sm">
                      {product.badge}
                    </span>
                  )}

                  {/* Quick add */}
                  <button className="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105">
                    <ShoppingBag size={16} strokeWidth={1.5} />
                  </button>
                </div>

                {/* Info */}
                <div>
                  <p className="text-[10px] text-neutral-400 uppercase tracking-wider">
                    {product.category}
                  </p>
                  <h3 className="text-sm font-medium mt-0.5 leading-snug group-hover:text-neutral-600 transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="text-sm font-semibold">
                      Rs. {product.price.toLocaleString()}
                    </span>
                    <span className="text-xs text-neutral-400 line-through">
                      Rs. {product.originalPrice.toLocaleString()}
                    </span>
                  </div>
                  {/* Size badges */}
                  <div className="flex gap-1.5 mt-2">
                    {product.sizes.map((size) => (
                      <span
                        key={size}
                        className="text-[10px] px-2 py-0.5 border border-neutral-200 rounded-md text-neutral-500"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
