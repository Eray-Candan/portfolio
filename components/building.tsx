"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Building() {
  return (
    <section id="building" className="px-6 pb-32 pt-16">
      <div className="max-w-3xl mx-auto">
        {/* Section label */}
        <span className="font-mono text-[11px] tracking-[4px] text-[#C41E3A] mb-10 block">
          BUILDING
        </span>

        <div className="flex flex-col gap-4">
          {/* AevisLab card */}
          <Link
            href="https://aevislab.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.07)] border-t-2 border-t-[#C41E3A] p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(196,30,58,0.12)]"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-white font-bold text-base">AevisLab</h3>
                <p className="text-[13px] text-[rgba(255,255,255,0.45)] mt-1">
                  AI-native software studio — building from zero
                </p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="font-mono text-[12px] text-[rgba(255,255,255,0.2)]">2025</span>
                <span className="flex items-center gap-1 text-[13px] text-[rgba(255,255,255,0.45)] group-hover:text-[#C41E3A] transition-colors duration-200">
                  aevislab.com
                  <ArrowUpRight size={14} />
                </span>
              </div>
            </div>
          </Link>

          {/* More coming card */}
          <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.07)] p-6 opacity-80">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-[rgba(255,255,255,0.6)] font-semibold text-base">More coming</h3>
                <p className="text-[13px] text-[rgba(255,255,255,0.2)] mt-1">
                  Currently building in public
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse-green" />
                <span className="font-mono text-[11px] text-green-500">open to work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
