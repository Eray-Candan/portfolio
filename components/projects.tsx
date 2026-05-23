export function Projects() {
  return (
    <section id="building" className="mx-auto max-w-4xl py-16 md:py-24">
      {/* Section label */}
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-12 animate-fade-up-delay-4">
        Building
      </p>
      
      <div className="grid gap-6 animate-fade-up-delay-5">
        {/* Project Card 1 - AevisLab */}
        <a
          href="https://aevislab.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group glass-card rounded-2xl p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-white transition-colors">
                  AevisLab
                </h3>
                <span className="font-mono text-[10px] text-muted-foreground tracking-wider">
                  2025
                </span>
              </div>
              <p className="text-muted text-sm md:text-base">
                AI-native software studio, building from zero
              </p>
            </div>
            <div className="flex items-center gap-2 text-muted group-hover:text-foreground transition-colors">
              <span className="font-mono text-xs">aevislab.com</span>
              <ArrowUpRightIcon className="w-4 h-4" />
            </div>
          </div>
        </a>
        
        {/* Project Card 2 - Coming Soon */}
        <div className="glass-card rounded-2xl p-6 md:p-8 opacity-60">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                More coming
              </h3>
              <p className="text-muted text-sm md:text-base">
                Currently building in public
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 animate-pulse" />
                in progress
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}
