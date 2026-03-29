"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Arjun M.",
    location: "Mumbai",
    rating: 5,
    text: "The metallic finish is absolutely insane. Got the Shelby Mustang for my gaming room and it looks incredible under LED lights. Way better than paper posters.",
    product: "1966 Shelby Mustang GT350",
  },
  {
    name: "Priya S.",
    location: "Bangalore",
    rating: 5,
    text: "Ordered 4 anime posters and the quality blew my mind. The colors are so vivid on aluminum. Already planning my next order!",
    product: "Attack on Titan Collection",
  },
  {
    name: "Rahul K.",
    location: "Delhi",
    rating: 5,
    text: "Perfect gift for my brother. The magnetic mount system is genius - took 30 seconds to put up. No damage to walls. Highly recommend.",
    product: "Dark Knight Trilogy",
  },
  {
    name: "Sneha R.",
    location: "Pune",
    rating: 5,
    text: "Smooth from start to finish. Checkout was easy, delivery was fast, and the posters look premium. The brushed aluminum adds so much depth.",
    product: "Interstellar Collection",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-amber-400 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-sm text-neutral-500 mb-2">4.9 / 5</p>
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Loved by Thousands
          </h2>
          <p className="text-neutral-500 mt-3 max-w-md mx-auto">
            See why our customers keep coming back for more.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-neutral-100"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(t.rating)].map((_, j) => (
                  <svg
                    key={j}
                    className="w-3.5 h-3.5 text-amber-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-neutral-600 leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Product */}
              <p className="text-[10px] text-neutral-400 mt-3 uppercase tracking-wider">
                {t.product}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-neutral-100">
                <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center">
                  <span className="text-xs font-semibold text-neutral-500">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-[10px] text-neutral-400">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
