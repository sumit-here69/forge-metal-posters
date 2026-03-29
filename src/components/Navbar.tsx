"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Shop All", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "Custom Prints", href: "/custom" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-neutral-900 text-white overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap py-2 text-xs tracking-widest uppercase">
          <span className="mx-8">Free Shipping on Orders Above Rs. 999</span>
          <span className="mx-8">Buy 3 Get 1 Free</span>
          <span className="mx-8">Premium Metal Posters</span>
          <span className="mx-8">100% Satisfaction Guaranteed</span>
          <span className="mx-8">Free Shipping on Orders Above Rs. 999</span>
          <span className="mx-8">Buy 3 Get 1 Free</span>
          <span className="mx-8">Premium Metal Posters</span>
          <span className="mx-8">100% Satisfaction Guaranteed</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <span
                className="text-2xl font-bold italic tracking-[0.2em] uppercase"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Slay
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors duration-200 tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <button
                className="p-2 hover:bg-neutral-50 rounded-full transition-colors"
                aria-label="Search"
              >
                <Search size={18} strokeWidth={1.5} />
              </button>
              <button
                className="p-2 hover:bg-neutral-50 rounded-full transition-colors hidden sm:block"
                aria-label="Account"
              >
                <User size={18} strokeWidth={1.5} />
              </button>
              <button
                className="p-2 hover:bg-neutral-50 rounded-full transition-colors relative"
                aria-label="Cart"
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                <span className="absolute -top-0.5 -right-0.5 bg-neutral-900 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  0
                </span>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden p-2 hover:bg-neutral-50 rounded-full transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Menu"
              >
                {mobileOpen ? (
                  <X size={20} strokeWidth={1.5} />
                ) : (
                  <Menu size={20} strokeWidth={1.5} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-neutral-100 bg-white">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-base font-medium text-neutral-700 hover:text-neutral-900 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
