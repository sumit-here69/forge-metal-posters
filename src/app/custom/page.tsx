"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Upload, Maximize, Printer, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Upload Image",
    description:
      "Send us your high-resolution image. We accept JPG, PNG, and TIFF files up to 100MB.",
  },
  {
    icon: Maximize,
    step: "02",
    title: "Choose Size",
    description:
      "Pick from our range of sizes. We will optimize your image for the best possible print quality.",
  },
  {
    icon: Printer,
    step: "03",
    title: "We Print",
    description:
      "We print your design on premium brushed aluminum and ship it to your doorstep within 5-7 business days.",
  },
];

const sizes = [
  {
    name: "A4",
    dimensions: '8.3" x 11.7"',
    price: 1499,
    popular: false,
  },
  {
    name: "A3",
    dimensions: '11.7" x 16.5"',
    price: 1999,
    popular: true,
  },
  {
    name: '13x19"',
    dimensions: '13" x 19"',
    price: 2499,
    popular: false,
  },
  {
    name: '18x24"',
    dimensions: '18" x 24"',
    price: 3499,
    popular: false,
  },
  {
    name: '24x36"',
    dimensions: '24" x 36"',
    price: 4999,
    popular: false,
  },
];

export default function CustomPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-400">
              Custom Prints
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-3 tracking-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Design Your Own
              <br />
              Metal Poster
            </h1>
            <p className="text-neutral-500 mt-6 text-lg leading-relaxed">
              Turn your photos, artwork, or designs into a stunning brushed
              aluminum print. Same premium quality as our collection pieces,
              with your personal touch.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-400">
              How It Works
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mt-3 tracking-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              3 Simple Steps
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-neutral-900 rounded-2xl flex items-center justify-center mx-auto">
                    <Icon size={28} strokeWidth={1.5} className="text-white" />
                  </div>
                  <span className="text-xs font-medium text-neutral-400 tracking-wider mt-6 block">
                    Step {step.step}
                  </span>
                  <h3
                    className="text-xl font-semibold mt-2"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-500 mt-3 leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sizes & Pricing */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-400">
              Pricing
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mt-3 tracking-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Choose Your Size
            </h2>
            <p className="text-neutral-500 mt-4">
              All sizes include free magnetic mounting system.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {sizes.map((size, i) => (
              <motion.div
                key={size.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`relative border rounded-2xl p-6 text-center transition-all hover:border-neutral-900 ${
                  size.popular
                    ? "border-neutral-900 bg-neutral-900 text-white"
                    : "border-neutral-200"
                }`}
              >
                {size.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-white text-neutral-900 text-[10px] font-semibold uppercase tracking-wider rounded-full border border-neutral-200">
                    Most Popular
                  </span>
                )}
                <h3
                  className="text-2xl font-bold"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {size.name}
                </h3>
                <p
                  className={`text-xs mt-1 ${
                    size.popular ? "text-neutral-400" : "text-neutral-400"
                  }`}
                >
                  {size.dimensions}
                </p>
                <p className="text-2xl font-bold mt-4">
                  Rs. {size.price.toLocaleString()}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Ready to Create?
            </h2>
            <p className="text-neutral-500 mt-4 leading-relaxed">
              Get in touch with your image and preferred size. We will handle
              the rest and deliver a stunning metal poster to your door.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-neutral-800 transition-colors"
              >
                Start Your Order
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/faqs"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-neutral-200 text-sm font-medium rounded-full hover:border-neutral-900 transition-colors"
              >
                Read FAQs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
