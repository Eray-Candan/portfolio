"use client";

import { Github, Twitter } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden"
    >
      {/* Background radial glow */}
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(196,30,58,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Top label */}
        <span
          className="font-mono text-[11px] tracking-[4px] text-[#C41E3A] mb-6 animate-fade-up"
          style={{ animationDelay: "0s" }}
        >
          SOFTWARE ENGINEER
        </span>

        {/* Name */}
        <h1
          className="font-sans font-black text-white leading-[0.9] tracking-[-4px] animate-fade-up"
          style={{
            fontSize: "clamp(72px, 12vw, 130px)",
            animationDelay: "0.1s",
          }}
        >
          Eray Candan
        </h1>

        {/* Decorative line */}
        <div
          className="w-20 h-[2px] bg-[#C41E3A] mt-6 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        />

        {/* Bio text */}
        <p
          className="text-lg text-[rgba(255,255,255,0.45)] max-w-[480px] leading-[1.7] mt-6 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          I build software at the intersection of AI and product. Not to experiment, to ship.
        </p>

        {/* Sub text */}
        <p
          className="text-sm text-[rgba(255,255,255,0.2)] mt-4 animate-fade-up"
          style={{ animationDelay: "0.35s" }}
        >
          20 y/o · Software Engineering · Turkiye
        </p>

        {/* Buttons row */}
        <div
          className="flex items-center gap-4 mt-8 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <Link
            href="https://github.com/Eray-Candan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2.5 border border-[rgba(255,255,255,0.15)] text-white font-mono text-[13px] transition-all duration-200 hover:border-[#C41E3A] hover:bg-[rgba(196,30,58,0.08)]"
          >
            <Github size={16} />
            GitHub
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2.5 border border-[rgba(255,255,255,0.15)] text-white font-mono text-[13px] transition-all duration-200 hover:border-[#C41E3A] hover:bg-[rgba(196,30,58,0.08)]"
          >
            <Twitter size={16} />
            Twitter
          </Link>
        </div>
      </div>
    </section>
  );
}
