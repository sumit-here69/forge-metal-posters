"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "What are metal posters made of?",
    answer:
      "Our metal posters are printed directly onto 0.45mm premium brushed aluminum sheets. The image is infused into the metal surface using a specialized dye-sublimation process, resulting in vivid colors and incredible durability.",
  },
  {
    question: "How do I mount a metal poster on my wall?",
    answer:
      "Every metal poster comes with our magnetic mounting system included. Simply attach the magnetic strips to your wall using the provided adhesive pads (no drilling required), and your poster snaps into place magnetically. It is easy to adjust and remove without damaging your walls.",
  },
  {
    question: "What sizes are available?",
    answer:
      'We offer five sizes: A4 (8.3" x 11.7"), A3 (11.7" x 16.5"), 13x19", 18x24", and 24x36". Not all designs are available in every size. Custom sizes are available for custom orders.',
  },
  {
    question: "How long does shipping take?",
    answer:
      "We ship within 2-3 business days of order placement. Delivery times are typically 5-7 business days for domestic orders (India) and 10-15 business days for international orders. Express shipping options are available at checkout.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day hassle-free return policy. If you are not completely satisfied with your purchase, contact us within 30 days of delivery for a full refund or exchange. The poster must be in its original condition and packaging.",
  },
  {
    question: "Are metal posters waterproof?",
    answer:
      "Yes. Because the image is printed directly onto aluminum, our metal posters are completely waterproof and moisture-resistant. They are perfect for bathrooms, kitchens, or even covered outdoor spaces.",
  },
  {
    question: "Can I order a custom metal poster with my own image?",
    answer:
      "Absolutely. Visit our Custom Prints page to learn more about the process. Simply send us your high-resolution image (minimum 300 DPI), choose your preferred size, and we will create a stunning metal poster from your design. Custom orders typically take 7-10 business days.",
  },
  {
    question: "Will the colors fade over time?",
    answer:
      "No. We use UV-resistant archival inks in our dye-sublimation printing process. Your metal poster will maintain its vibrant colors for decades, even when exposed to direct sunlight. We back this with our lifetime color guarantee.",
  },
  {
    question: "How do I clean my metal poster?",
    answer:
      "Metal posters are very low maintenance. Simply wipe with a soft, damp cloth to remove dust or fingerprints. Avoid abrasive cleaners or scrubbing pads. The scratch-resistant surface ensures your poster stays looking fresh.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship to over 30 countries worldwide. International shipping rates and delivery times vary by destination. All international orders include tracking and are securely packaged to ensure your poster arrives in perfect condition.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-neutral-100">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-sm sm:text-base font-medium pr-8 group-hover:text-neutral-600 transition-colors">
          {faq.question}
        </span>
        <ChevronDown
          size={18}
          className={`text-neutral-400 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-sm text-neutral-500 leading-relaxed pb-5 pr-12">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-white">
      <section className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-400">
              Support
            </span>
            <h1
              className="text-4xl sm:text-5xl font-bold mt-3 tracking-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Frequently Asked
              <br />
              Questions
            </h1>
            <p className="text-neutral-500 mt-4">
              Everything you need to know about our metal posters.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
              />
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 p-8 bg-neutral-50 rounded-2xl text-center"
          >
            <h2
              className="text-xl font-bold"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Still have questions?
            </h2>
            <p className="text-sm text-neutral-500 mt-2">
              Our team is happy to help. Reach out and we will get back to you
              within 24 hours.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-neutral-800 transition-colors mt-6"
            >
              Contact Us
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
