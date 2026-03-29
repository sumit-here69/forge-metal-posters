"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import {
  collections,
  getCollectionBySlug,
  getProductsByCategory,
} from "@/data/products";
import { useParams } from "next/navigation";

export default function CollectionPage() {
  const params = useParams();
  const slug = params.slug as string;
  const collection = getCollectionBySlug(slug);
  const products = collection
    ? getProductsByCategory(collection.slug)
    : [];

  if (!collection) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1
            className="text-3xl font-bold"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Collection Not Found
          </h1>
          <Link
            href="/collections"
            className="mt-4 inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Collections
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Collection Header */}
      <div className="relative h-[40vh] sm:h-[50vh] overflow-hidden">
        <Image
          src={collection.image}
          alt={collection.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/collections"
                className="inline-flex items-center gap-1.5 text-white/70 text-sm hover:text-white transition-colors mb-4"
              >
                <ArrowLeft size={14} />
                All Collections
              </Link>
              <h1
                className="text-4xl sm:text-5xl font-bold text-white tracking-tight"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {collection.name}
              </h1>
              <p className="text-white/70 mt-3 max-w-xl text-sm sm:text-base">
                {collection.description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-sm text-neutral-500 mb-8">
          {products.length} product{products.length !== 1 && "s"} found
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link
                href={`/product/${product.id}`}
                className="group block"
              >
                {/* Image */}
                <div className="relative aspect-[3/4] bg-neutral-100 rounded-xl overflow-hidden mb-3">
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

        {products.length === 0 && (
          <div className="text-center py-20 text-neutral-400">
            <p>No products found in this collection yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
