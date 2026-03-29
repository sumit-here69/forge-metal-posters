"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-400">
              Get In Touch
            </span>
            <h1
              className="text-4xl sm:text-5xl font-bold mt-3 tracking-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Contact Us
            </h1>
            <p className="text-neutral-500 mt-4 max-w-xl">
              Have a question about our metal posters, a custom order, or need
              support? We would love to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-neutral-700 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      className="w-full px-4 py-3 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-neutral-900 transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-neutral-700 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-neutral-900 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-neutral-700 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="What is this about?"
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-neutral-900 transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-neutral-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell us how we can help..."
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-neutral-900 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-neutral-800 transition-colors"
                >
                  Send Message
                  <ArrowRight size={16} />
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-neutral-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={18} strokeWidth={1.5} className="text-neutral-700" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">Email</h3>
                    <p className="text-sm text-neutral-500 mt-1">
                      hello@slayposters.com
                    </p>
                    <p className="text-sm text-neutral-500">
                      support@slayposters.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-neutral-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={18} strokeWidth={1.5} className="text-neutral-700" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">Phone</h3>
                    <p className="text-sm text-neutral-500 mt-1">
                      +91 98765 43210
                    </p>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      Mon - Fri, 10am - 6pm IST
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-neutral-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} strokeWidth={1.5} className="text-neutral-700" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">Address</h3>
                    <p className="text-sm text-neutral-500 mt-1">
                      42, Creator Studio, Indiranagar
                      <br />
                      Bengaluru, Karnataka 560038
                      <br />
                      India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-neutral-50 rounded-2xl">
                <h3
                  className="font-semibold"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  Have questions?
                </h3>
                <p className="text-sm text-neutral-500 mt-2">
                  Check our frequently asked questions for quick answers about
                  shipping, returns, sizing, and more.
                </p>
                <Link
                  href="/faqs"
                  className="inline-flex items-center gap-1.5 text-sm font-medium mt-4 hover:text-neutral-600 transition-colors"
                >
                  Visit FAQs
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
