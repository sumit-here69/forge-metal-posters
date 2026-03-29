"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, ArrowUpRight } from "lucide-react";
import { products } from "@/data/products";

const featuredProducts = products.slice(0, 8);

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-400">
              Fan Favorites
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold mt-2 tracking-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Best Sellers
            </h2>
          </div>
          <Link
            href="/shop"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            View All
            <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {featuredProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link href={`/product/${product.id}`} className="group block">
                {/* Product image */}
                <div className="relative aspect-[3/4] bg-neutral-200 rounded-xl overflow-hidden mb-3">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
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
                  <h3 className="text-sm font-medium mt-0.5 leading-snug group-hover:text-neutral-600 transition-colors">
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
                  {/* Size options */}
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

        {/* View all mobile */}
        <div className="mt-10 text-center sm:hidden">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-200 rounded-full text-sm font-medium hover:border-neutral-900 transition-colors"
          >
            View All Products
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
