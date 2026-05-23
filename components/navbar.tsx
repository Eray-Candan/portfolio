"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(8,8,8,0.85)] backdrop-blur-md border-b border-[rgba(255,255,255,0.05)]">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-mono text-sm text-[rgba(255,255,255,0.3)]">EC</span>
        <div className="flex items-center gap-8">
          <Link
            href="#about"
            className="text-xs text-[rgba(255,255,255,0.45)] hover:text-white transition-colors duration-200"
          >
            about
          </Link>
          <Link
            href="#building"
            className="text-xs text-[rgba(255,255,255,0.45)] hover:text-white transition-colors duration-200"
          >
            building
          </Link>
          <Link
            href="https://github.com/Eray-Candan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[rgba(255,255,255,0.45)] hover:text-white transition-colors duration-200"
          >
            github
          </Link>
        </div>
      </div>
    </nav>
  );
}
