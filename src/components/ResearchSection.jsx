export default function ResearchSection() {
  return (
    <section id="research" className="py-20 sm:py-32 border-b border-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-12 sm:pb-16 border-b border-border gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              <span>02</span>
              <span>/</span>
              <span>Research &amp; Publications</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
              Empirical AI Research
            </h2>
          </div>
          <p className="text-sm text-muted-foreground font-mono max-w-sm sm:text-right">
            Peer-verifiable benchmarks on code generation, self-correction, and token efficiency.
          </p>
        </div>

        {/* Paper Presentation Card */}
        <div className="mt-12 rounded-lg border border-border bg-card p-6 sm:p-10 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-border">
            <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">arXiv:2604.10508</span>
              <span>·</span>
              <span>Computer Science (cs.AI / cs.SE)</span>
              <span>·</span>
              <span>2026</span>
            </div>
            <span className="font-mono text-xs px-2.5 py-0.5 rounded border border-border bg-muted/50 text-foreground font-medium">
              Sole Author
            </span>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground leading-snug">
              How Many Tries Does It Take? Iterative Self-Repair in LLM Code Generation Across Model Scales and Benchmarks
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed max-w-4xl">
              Evaluated iterative self-repair across seven state-of-the-art language models
              (Llama 3.1/3.3/4, Qwen3 32B, Gemini 2.5 Flash/Pro) on HumanEval and MBPP code synthesis benchmarks.
            </p>
          </div>

          {/* Key findings strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-md border border-border bg-muted/20 font-mono text-xs">
            <div>
              <span className="text-[10px] uppercase text-muted-foreground block">Pass Rate Gain</span>
              <span className="text-sm font-semibold text-foreground mt-0.5 block">+4.9 to +30.0 pp</span>
              <span className="text-[11px] text-muted-foreground">Across all tested scales</span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-muted-foreground block">Peak Accuracy</span>
              <span className="text-sm font-semibold text-foreground mt-0.5 block">96.3% on HumanEval</span>
              <span className="text-[11px] text-muted-foreground">Achieved with Gemini 2.5 Flash</span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-muted-foreground block">Token Efficiency</span>
              <span className="text-sm font-semibold text-foreground mt-0.5 block">Up to 54% Token Savings</span>
              <span className="text-[11px] text-muted-foreground">vs. Independent resampling</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border font-mono text-xs">
            <span className="text-muted-foreground">
              Conducted with strict test-suite execution harness and deterministic evaluation.
            </span>
            <div className="flex items-center gap-3">
              <a
                href="https://arxiv.org/abs/2604.10508"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-border bg-background text-foreground hover:bg-muted/70 transition-colors"
              >
                <span>Read on arXiv</span>
                <span className="text-[10px]">↗</span>
              </a>
              <a
                href="https://github.com/Johin2/iterative-code-repair"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-border bg-foreground text-background hover:opacity-90 transition-opacity"
              >
                <span>Reproduce (GitHub)</span>
                <span className="text-[10px]">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
