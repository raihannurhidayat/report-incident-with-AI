"use client";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
// import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full border-b border-white/5 bg-black/60 backdrop-blur-xl z-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-3">
                <div className="h-9 w-9 rounded-xl flex items-center justify-center">
                  <svg
                    data-logo="logo"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 40 40"
                  >
                    <g id="logogram" transform="translate(0, 0) rotate(0) ">
                      <path
                        d="M24 0H16V12.0632C15.9663 14.2434 14.1885 16 12.0005 16H0V24H8.68629C10.808 24 12.8429 23.1571 14.3431 21.6569L21.6569 14.3431C23.1571 12.8429 24 10.808 24 8.68629V0Z"
                        fill="url(#paint0_linear_7697_8782)"
                      />
                      <path
                        d="M16 40H24V27.9368C24.0337 25.7566 25.8115 24 27.9995 24H40V16H31.3137C29.192 16 27.1571 16.8429 25.6569 18.3431L18.3431 25.6569C16.8429 27.1571 16 29.192 16 31.3137V40Z"
                        fill="url(#paint1_linear_7697_8782)"
                      />
                    </g>
                    <g id="logotype" transform="translate(40, 20)"></g>
                    <defs xmlns="http://www.w3.org/2000/svg">
                      <linearGradient
                        id="paint0_linear_7697_8782"
                        x1="20"
                        y1="-0.997096"
                        x2="20"
                        y2="33.7931"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#D87943" />
                        <stop offset="1" stop-color="#527575" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_7697_8782"
                        x1="20"
                        y1="-0.997096"
                        x2="20"
                        y2="33.7931"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#D87943" />
                        <stop offset="1" stop-color="#527575" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <span className="text-lg font-semibold text-white">
                  SafeReport
                </span>
              </Link>
            </div>

            {/* Main Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="/submit-report"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Submit Report
              </Link>
              <Link
                href="/track-report"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Track Report
              </Link>
              <Link
                href="/how-it-works"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                How It Works
              </Link>
              <Link
                href="/resources"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Resources
              </Link>
            </div>

            {/* Emergency Button */}
            <div className="flex items-center space-x-4">
              <Link
                href="/contact"
                className="hidden md:block text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Contact
              </Link>
              <button className="group flex h-9 items-center gap-2 rounded-full bg-red-500/10 pl-4 pr-5 text-sm font-medium text-red-500 ring-1 ring-inset ring-red-500/20 transition-all hover:bg-red-500/20">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                Emergency: 911
              </button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 text-zinc-400 hover:text-white"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
