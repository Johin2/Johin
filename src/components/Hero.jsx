export default function Hero() {
  return (
    <section id="top" className="pt-32 sm:pt-40 pb-16 sm:pb-24 border-b border-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Status pill */}
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-border bg-muted/40 font-mono text-[11px] text-muted-foreground mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Available for select engineering engagements · Mumbai, IN</span>
        </div>

        {/* Heading */}
        <div className="max-w-3xl space-y-4">
          <div className="space-y-1">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Johin Johny
            </p>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-foreground leading-[1.08]">
              AI Engineer &amp; Software Builder
            </h1>
          </div>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed pt-2">
            I build AI products, developer tools, and software that solve real problems.
            Focused on production systems, robust retrieval pipelines, and full-stack software that works.
          </p>
        </div>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center gap-3 pt-2">
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-foreground text-background font-medium text-sm hover:opacity-90 transition-opacity"
          >
            <span>View selected work</span>
            <span className="text-xs">↓</span>
          </a>

          <a
            href="https://github.com/Johin2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-border bg-card text-foreground font-medium text-sm hover:bg-muted/70 transition-colors"
          >
            <span>GitHub</span>
            <span className="text-muted-foreground text-xs">↗</span>
          </a>

          <a
            href="https://arxiv.org/abs/2604.10508"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2.5 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>arXiv:2604.10508</span>
            <span>↗</span>
          </a>
        </div>

        {/* Quick technical proof-points / metadata strip */}
        <div className="mt-14 pt-8 border-t border-border grid grid-cols-2 sm:grid-cols-4 gap-6 font-mono text-xs">
          <div>
            <div className="text-muted-foreground uppercase text-[10px] tracking-wider">Experience</div>
            <div className="font-medium text-foreground mt-1">Ex-Glassbox Ventures</div>
            <div className="text-muted-foreground text-[11px]">AI Developer (2025 - 2026)</div>
          </div>
          <div>
            <div className="text-muted-foreground uppercase text-[10px] tracking-wider">Focus</div>
            <div className="font-medium text-foreground mt-1">LLM Systems &amp; RAG</div>
            <div className="text-muted-foreground text-[11px]">Cloud Infrastructure</div>
          </div>
          <div>
            <div className="text-muted-foreground uppercase text-[10px] tracking-wider">Research</div>
            <div className="font-medium text-foreground mt-1">Sole Author, arXiv</div>
            <div className="text-muted-foreground text-[11px]">LLM Self-Repair</div>
          </div>
          <div>
            <div className="text-muted-foreground uppercase text-[10px] tracking-wider">Education</div>
            <div className="font-medium text-foreground mt-1">BSc AI &amp; ML (9.3 CGPA)</div>
            <div className="text-muted-foreground text-[11px]">Mumbai University</div>
          </div>
        </div>
      </div>
    </section>
  );
}
