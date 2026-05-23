"use client";

import Link from "next/link";

function GithubIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

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
            <GithubIcon />
            GitHub
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2.5 border border-[rgba(255,255,255,0.15)] text-white font-mono text-[13px] transition-all duration-200 hover:border-[#C41E3A] hover:bg-[rgba(196,30,58,0.08)]"
          >
            <TwitterIcon />
            Twitter
          </Link>
        </div>
      </div>
    </section>
  );
}
