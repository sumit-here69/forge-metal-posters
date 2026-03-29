"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const reasons = [
  {
    number: "01",
    title: "Brushed Aluminum",
    desc: "Printed on premium 0.45mm brushed aluminum sheets. The metallic surface adds depth and a subtle shimmer that paper simply can't match.",
  },
  {
    number: "02",
    title: "Vivid HD Colors",
    desc: "UV-printed with archival inks for colors that pop and never fade. Each poster looks stunning for years, even in direct sunlight.",
  },
  {
    number: "03",
    title: "Built to Last",
    desc: "Unlike paper posters that tear and fade, metal posters are waterproof, scratch-resistant, and virtually indestructible.",
  },
  {
    number: "04",
    title: "Easy Mounting",
    desc: "Each poster comes with a magnetic mounting system. No frames, no nails, no damage to your walls. Mount in seconds.",
  },
];

export default function WhyMetal() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden relative">
              <Image
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
                alt="Modern room with wall art on brushed aluminum"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Right - Content */}
          <div>
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-400">
              Why Choose
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold mt-2 tracking-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Why Metal?
            </h2>
            <p className="text-neutral-500 mt-4 leading-relaxed">
              Metal posters are the future of wall art. Here&apos;s what makes
              them superior to traditional prints.
            </p>

            <div className="mt-10 space-y-8">
              {reasons.map((r, i) => (
                <motion.div
                  key={r.number}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex gap-5"
                >
                  <span
                    className="text-3xl font-bold text-neutral-100 flex-shrink-0"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {r.number}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold">{r.title}</h3>
                    <p className="text-sm text-neutral-500 mt-1 leading-relaxed">
                      {r.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
