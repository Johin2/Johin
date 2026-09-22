export default function NowSection() {
  return (
    <section className="py-10 border-b border-border bg-muted/20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
              Now · 2026
            </h2>
          </div>

          <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground block mb-1">
                Building
              </span>
              <p className="text-foreground leading-relaxed">
                <span className="font-medium text-foreground">PDFPipe</span> (developer PDF generation infrastructure),{' '}
                <span className="font-medium text-foreground">Askably</span> (autonomous AI website support and sales agent), and{' '}
                <span className="font-medium text-foreground">Havon</span>.
              </p>
            </div>

            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground block mb-1">
                Exploring
              </span>
              <p className="text-muted-foreground leading-relaxed">
                Oracle Cloud Infrastructure (OCI), isolated browser sandboxes, Multi-Vector RAG, and GraphRAG.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
