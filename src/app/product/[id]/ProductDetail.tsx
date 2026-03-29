"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Star, Minus, Plus, ChevronRight } from "lucide-react";
import type { Product } from "@/data/products";

interface ProductDetailProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetail({
  product,
  relatedProducts,
}: ProductDetailProps) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <section className="py-8 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-neutral-400 mb-8">
          <Link href="/" className="hover:text-neutral-900 transition-colors">
            Home
          </Link>
          <ChevronRight size={14} />
          <Link
            href="/shop"
            className="hover:text-neutral-900 transition-colors"
          >
            Shop
          </Link>
          <ChevronRight size={14} />
          <span className="text-neutral-600 truncate max-w-[200px]">
            {product.name}
          </span>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left: Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Main Image */}
            <div className="relative aspect-[3/4] bg-neutral-100 rounded-2xl overflow-hidden mb-4">
              <Image
                src={product.images[activeImage]}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {product.badge && (
                <span className="absolute top-4 left-4 px-3 py-1.5 bg-white text-[10px] font-semibold uppercase tracking-wider rounded-full shadow-sm">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-3 gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`relative aspect-square rounded-xl overflow-hidden transition-all duration-200 ${
                    activeImage === i
                      ? "ring-2 ring-neutral-900 ring-offset-2"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} view ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 33vw, 16vw"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right: Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col"
          >
            {/* Category */}
            <p className="text-xs text-neutral-400 uppercase tracking-[0.2em] mb-2">
              {product.category}
            </p>

            {/* Name */}
            <h1
              className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={
                      i < Math.round(product.rating)
                        ? "fill-amber-400 text-amber-400"
                        : "text-neutral-200"
                    }
                  />
                ))}
              </div>
              <span className="text-sm text-neutral-500">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mt-5">
              <span className="text-2xl font-bold">
                Rs. {product.price.toLocaleString()}
              </span>
              <span className="text-lg text-neutral-400 line-through">
                Rs. {product.originalPrice.toLocaleString()}
              </span>
              <span className="px-2 py-0.5 bg-green-50 text-green-700 text-xs font-semibold rounded-md">
                {discount}% OFF
              </span>
            </div>
            <p className="text-xs text-neutral-400 mt-1">
              Inclusive of all taxes
            </p>

            {/* Divider */}
            <div className="border-t border-neutral-100 my-6" />

            {/* Size Selector */}
            <div>
              <p className="text-sm font-medium mb-3">
                Size:{" "}
                <span className="text-neutral-500 font-normal">
                  {selectedSize}
                </span>
              </p>
              <div className="flex gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedSize === size
                        ? "bg-neutral-900 text-white"
                        : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-sm font-medium mb-3">Quantity</p>
              <div className="inline-flex items-center border border-neutral-200 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-neutral-500 hover:text-neutral-900 transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 h-10 flex items-center justify-center text-sm font-medium border-x border-neutral-200">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-neutral-500 hover:text-neutral-900 transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button className="mt-8 w-full py-4 bg-neutral-900 text-white rounded-xl font-medium text-sm flex items-center justify-center gap-2 hover:bg-neutral-800 transition-colors active:scale-[0.98]">
              <ShoppingBag size={18} strokeWidth={1.5} />
              Add to Cart - Rs.{" "}
              {(product.price * quantity).toLocaleString()}
            </button>

            {/* Divider */}
            <div className="border-t border-neutral-100 my-6" />

            {/* Description */}
            <div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Product Details */}
            <div className="mt-6">
              <p className="text-sm font-medium mb-3">Product Details</p>
              <ul className="space-y-2">
                {product.details.map((detail, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-neutral-500"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 mt-1.5 shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 sm:mt-28">
            <div className="mb-10">
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-400">
                More to Explore
              </span>
              <h2
                className="text-3xl sm:text-4xl font-bold mt-2 tracking-tight"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                You May Also Like
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((rp, i) => (
                <motion.div
                  key={rp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Link href={`/product/${rp.id}`} className="group block">
                    <div className="relative aspect-[3/4] bg-neutral-100 rounded-xl overflow-hidden mb-3">
                      <Image
                        src={rp.image}
                        alt={rp.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                      {rp.badge && (
                        <span className="absolute top-3 left-3 px-2.5 py-1 bg-white text-[10px] font-semibold uppercase tracking-wider rounded-full shadow-sm">
                          {rp.badge}
                        </span>
                      )}
                      <button className="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105">
                        <ShoppingBag size={16} strokeWidth={1.5} />
                      </button>
                    </div>
                    <div>
                      <p className="text-[10px] text-neutral-400 uppercase tracking-wider">
                        {rp.category}
                      </p>
                      <h3 className="text-sm font-medium mt-0.5 leading-snug group-hover:text-neutral-600 transition-colors line-clamp-2">
                        {rp.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1.5">
                        <span className="text-sm font-semibold">
                          Rs. {rp.price.toLocaleString()}
                        </span>
                        <span className="text-xs text-neutral-400 line-through">
                          Rs. {rp.originalPrice.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex gap-1.5 mt-2">
                        {rp.sizes.map((size) => (
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
        )}
      </div>
    </section>
  );
}
