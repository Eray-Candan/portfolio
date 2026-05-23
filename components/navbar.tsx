"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 animate-fade-up">
      <nav className="mx-auto max-w-4xl px-6 md:px-8">
        <div className="flex h-16 items-center justify-between border-b border-border/50 backdrop-blur-md bg-background/60">
          <Link 
            href="/" 
            className="font-mono text-xs tracking-wider text-muted hover:text-foreground transition-colors"
          >
            EC
          </Link>
          
          <div className="flex items-center gap-8">
            <Link 
              href="#about" 
              className="font-mono text-xs tracking-wider text-muted hover:text-foreground transition-colors"
            >
              about
            </Link>
            <Link 
              href="#building" 
              className="font-mono text-xs tracking-wider text-muted hover:text-foreground transition-colors"
            >
              building
            </Link>
            <Link 
              href="https://github.com/Eray-Candan" 
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-wider text-muted hover:text-foreground transition-colors"
            >
              github
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
