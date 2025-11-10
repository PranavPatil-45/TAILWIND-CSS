import React from "react";
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="bg-white text-neutral-700 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-2">
            <div className="w-40 h-14 bg-neutral-100 border border-neutral-200 rounded-xl shadow-inner flex items-center justify-center select-none">
              <span className="text-sm text-neutral-400"><img src="https://kinclimg5.bluestone.com/f_webp/static/resources/themes/bluestone/images/new/bs-logo-2x.png" alt="" /></span>
            </div>
            <p className="mt-4 text-sm leading-6">Timeless pieces crafted with care. Discover fine jewellery designed to shine every day.</p>
            <div className="mt-4 flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="p-2 rounded-full border border-neutral-200 hover:border-neutral-300 hover:shadow transition">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
              </a>
              <a href="#" aria-label="Facebook" className="p-2 rounded-full border border-neutral-200 hover:border-neutral-300 hover:shadow transition">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M13.5 9H15V6.5A6.2 6.2 0 0 1 15.4 5c.2-.6.8-1 1.6-1H19v3h-1.5c-.7 0-.5.6-.5 1.5V9H19l-.5 3h-2v8h-3v-8h-2V9h2V7.4c0-1.8.8-4.4 4-4.4H19"/></svg>
              </a>
              <a href="#" aria-label="YouTube" className="p-2 rounded-full border border-neutral-200 hover:border-neutral-300 hover:shadow transition">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M23 12s0-3.4-.4-5c-.2-.8-.9-1.5-1.7-1.7C19.3 4.9 12 4.9 12 4.9s-7.3 0-8.9.4C2.3 5.6 1.6 6.3 1.4 7.1 1 8.6 1 12 1 12s0 3.4.4 4.9c.2.8.9 1.5 1.7 1.7 1.6.4 8.9.4 8.9.4s7.3 0 8.9-.4c.8-.2 1.5-.9 1.7-1.7.4-1.5.4-4.9.4-4.9zM10 15.5v-7l6 3.5-6 3.5z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-neutral-900 font-semibold tracking-wide">Shop</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                { label: "New Arrivals", href: "#" },
                { label: "Best Sellers", href: "#" },
                { label: "Necklaces", href: "#" },
                { label: "Earrings", href: "#" },
                { label: "Rings", href: "#" },
                { label: "Bracelets", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="group inline-flex items-center gap-2 hover:text-neutral-900">
                    <ChevronRightIcon className="h-4 w-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-neutral-900 font-semibold tracking-wide">Customer Care</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                { label: "Shipping & Delivery", href: "#" },
                { label: "Returns & Exchanges", href: "#" },
                { label: "Jewellery Care", href: "#" },
                { label: "Size Guide", href: "#" },
                { label: "Warranty", href: "#" },
                { label: "FAQs", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-neutral-900">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-neutral-900 font-semibold tracking-wide">Stay in touch</h3>
            <p className="mt-4 text-sm leading-6">Join our list for new launches, styling tips, and exclusive offers.</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-4">
              <label htmlFor="email" className="sr-only">Email address</label>
              <div className="flex">
                <input id="email" type="email" required placeholder="you@example.com" className="w-full rounded-l-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#C8A165] focus:border-transparent px-3 py-2 text-sm" />
                <button type="submit" className="rounded-r-xl border border-l-0 border-neutral-300 bg-[#C8A165] text-white px-4 text-sm font-medium hover:opacity-90 active:opacity-100 transition">Subscribe</button>
              </div>
              <p className="mt-2 text-xs text-neutral-500">By subscribing, you agree to our Privacy Policy.</p>
            </form>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="h-px bg-neutral-200" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-6">
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-4 justify-between">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm">
            <a href="mailto:hello@yourstore.com" className="inline-flex items-center gap-2 hover:text-neutral-900"><EnvelopeIcon className="h-4 w-4" /> hello@yourstore.com</a>
            <span className="hidden sm:block text-neutral-300">|</span>
            <a href="tel:+919999999999" className="inline-flex items-center gap-2 hover:text-neutral-900"><PhoneIcon className="h-4 w-4" /> +91 99999 99999</a>
            <span className="hidden sm:block text-neutral-300">|</span>
            <span className="inline-flex items-center gap-2"><MapPinIcon className="h-4 w-4" /> Mumbai, India</span>
          </div>
          <div className="flex items-center gap-2">
            {["Visa", "Mastercard", "UPI", "Amex"].map((p) => (
              <div key={p} className="w-14 h-8 rounded-md border border-neutral-300 bg-neutral-50 text-[10px] flex items-center justify-center" title={p}>{p}</div>
            ))}
          </div>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Your Jewellery Store. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-neutral-700">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-700">Terms of Service</a>
            <a href="#" className="hover:text-neutral-700">Refund Policy</a>
            <a href="#" className="hover:text-neutral-700">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
