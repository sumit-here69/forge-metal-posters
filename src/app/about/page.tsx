"use client";

import { motion } from "framer-motion";
import {
  Gem,
  Hammer,
  Heart,
  Leaf,
  Users,
  Palette,
  Star,
} from "lucide-react";

const values = [
  {
    icon: Gem,
    title: "Quality",
    description:
      "Every poster is printed on 0.45mm premium brushed aluminum with UV-resistant archival inks that last a lifetime.",
  },
  {
    icon: Hammer,
    title: "Craftsmanship",
    description:
      "From color calibration to finishing, each piece goes through rigorous quality checks before it leaves our facility.",
  },
  {
    icon: Heart,
    title: "Customer First",
    description:
      "Your satisfaction drives everything we do. From design selection to after-sales support, we are here for you.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Our aluminum is 100% recyclable, our inks are eco-friendly, and our packaging is made from recycled materials.",
  },
];

const stats = [
  { value: "50K+", label: "Happy Customers" },
  { value: "500+", label: "Unique Designs" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "30+", label: "Countries Shipped" },
];

export default function AboutPage() {
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
              About Us
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-3 tracking-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Our Story
            </h1>
            <p className="text-neutral-600 mt-6 text-lg leading-relaxed">
              SLAY was born from a simple belief: wall art should be as bold and
              lasting as the memories it represents. We are a premium metal
              poster brand dedicated to transforming your favorite moments from
              movies, anime, cars, music, sports, and gaming into stunning
              brushed aluminum prints that command attention and stand the test
              of time.
            </p>
            <p className="text-neutral-500 mt-4 leading-relaxed">
              What started as a passion project in 2020 has grown into a
              community of over 50,000 collectors worldwide. Every piece we
              create is a fusion of art and engineering, designed to bring
              gallery-quality craftsmanship into everyday spaces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Metal */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-400">
              The Difference
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mt-3 tracking-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Why Metal?
            </h2>
            <p className="text-neutral-500 mt-6 leading-relaxed">
              Unlike paper prints that fade, curl, and tear, metal posters are
              printed directly onto brushed aluminum. The result is a vivid,
              high-definition image with a unique metallic sheen that brings
              colors to life. They are waterproof, scratch-resistant, and
              UV-protected, meaning your poster will look as vibrant in 20 years
              as it does today.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center mx-auto">
                  <Palette size={20} className="text-white" />
                </div>
                <p className="text-sm font-medium mt-3">Vivid Colors</p>
                <p className="text-xs text-neutral-400 mt-1">
                  HD color reproduction
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center mx-auto">
                  <Star size={20} className="text-white" />
                </div>
                <p className="text-sm font-medium mt-3">Durable</p>
                <p className="text-xs text-neutral-400 mt-1">
                  Waterproof & scratch-resistant
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center mx-auto">
                  <Users size={20} className="text-white" />
                </div>
                <p className="text-sm font-medium mt-3">Easy Mount</p>
                <p className="text-xs text-neutral-400 mt-1">
                  Magnetic system included
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
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
              What We Stand For
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mt-3 tracking-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Our Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="w-14 h-14 bg-neutral-100 rounded-2xl flex items-center justify-center mx-auto">
                    <Icon size={24} strokeWidth={1.5} className="text-neutral-700" />
                  </div>
                  <h3
                    className="text-lg font-semibold mt-4"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-sm text-neutral-500 mt-2 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <p
                  className="text-3xl sm:text-4xl font-bold text-white"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {stat.value}
                </p>
                <p className="text-neutral-400 text-sm mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
