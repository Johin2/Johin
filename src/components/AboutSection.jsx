import portrait from '../assets/johin-profile.jpeg';

const certs = [
  { name: 'Azure AI Fundamentals', issuer: 'Microsoft' },
  { name: 'Azure Data Fundamentals', issuer: 'Microsoft' },
  { name: 'CNNs with TensorFlow', issuer: 'Microsoft' },
  { name: 'How Google does Machine Learning', issuer: 'Google · Coursera' },
  { name: 'Git & GitHub Workflow', issuer: 'Google' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-32 border-b border-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-12 sm:pb-16 border-b border-border gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              <span>05</span>
              <span>/</span>
              <span>About</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
              Background &amp; Credentials
            </h2>
          </div>
          <p className="text-sm text-muted-foreground font-mono max-w-sm sm:text-right">
            Engineering philosophy, education, and technical certifications.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 items-start">
          {/* Left Column: Portrait & Quick Stats */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-lg border border-border overflow-hidden bg-card shadow-sm max-w-xs sm:max-w-none">
              <img
                src={portrait}
                alt="Johin Johny, AI and Software Engineer based in Mumbai"
                className="w-full aspect-[4/5] object-cover rounded-t-md grayscale contrast-[1.08] hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
              <div className="p-3.5 border-t border-border bg-card font-mono text-xs flex items-center justify-between text-muted-foreground">
                <span className="font-medium text-foreground">Johin Johny</span>
                <span>Mumbai, IN</span>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="p-4 rounded-lg border border-border bg-card space-y-3 font-mono text-xs">
              <div className="flex justify-between border-b border-border/60 pb-2">
                <span className="text-muted-foreground">Primary Focus</span>
                <span className="font-medium text-foreground">AI Systems &amp; APIs</span>
              </div>
              <div className="flex justify-between border-b border-border/60 pb-2">
                <span className="text-muted-foreground">Location</span>
                <span className="font-medium text-foreground">Mumbai (IST)</span>
              </div>
              <div className="flex justify-between border-b border-border/60 pb-2">
                <span className="text-muted-foreground">Degree CGPA</span>
                <span className="font-medium text-foreground">9.3 / 10</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">arXiv Publication</span>
                <span className="font-medium text-foreground">Sole Author (2026)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Formal Training */}
          <div className="lg:col-span-8 space-y-12">
            {/* Direct Engineering Narrative */}
            <div className="space-y-5 text-base sm:text-lg text-foreground/90 leading-relaxed font-sans">
              <p>
                I am an AI engineer and software builder based in Mumbai. I spend my time
                designing, building, and deploying software systems across the stack: from
                low-latency LLM agent loops and multi-tenant RAG retrieval to high-throughput
                developer APIs and operational dashboards.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base">
                Rather than treating AI as isolated prompt demos, I focus on what makes AI systems
                dependable in production: deterministic schema validation, queue-backed background
                rendering, token-efficient self-correction loops, and high-performance relational databases.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base">
                Previously, I was an AI Developer at <strong className="text-foreground font-semibold">Glassbox Ventures</strong> (Apr 2025 - Aug 2026),
                shipping commercial platforms across retail reconciliation, restaurant analytics, and luxury fashion commerce.
                Independently, I build developer tools like <strong className="text-foreground font-semibold">PDFPipe</strong>,
                privacy-first software like <strong className="text-foreground font-semibold">ToolBox</strong>,
                and publish empirical research on LLM self-repair.
              </p>
            </div>

            {/* Education & Academic Rigor */}
            <div className="pt-8 border-t border-border space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                Formal Education
              </h3>

              <div className="p-5 rounded-lg border border-border bg-card space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h4 className="text-base font-bold text-foreground">
                    Bachelor of Science in Artificial Intelligence &amp; Machine Learning
                  </h4>
                  <span className="font-mono text-xs font-semibold text-foreground px-2 py-0.5 rounded bg-muted/60 border border-border inline-block self-start sm:self-auto">
                    9.3 CGPA
                  </span>
                </div>
                <div className="font-mono text-xs text-muted-foreground">
                  Nagindas Khandwala College · University of Mumbai · 2022 - 2025
                </div>
                <p className="text-xs text-muted-foreground pt-1 leading-relaxed">
                  <strong className="text-foreground font-medium">Core Coursework:</strong> Machine Learning, Operating Systems, Database Management Systems, Artificial Neural Networks, Statistics &amp; Probability, Data Visualization.
                </p>
              </div>
            </div>

            {/* Industry Certifications */}
            <div className="pt-6 border-t border-border space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                Technical Certifications
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certs.map((c) => (
                  <div
                    key={c.name}
                    className="p-3 rounded border border-border bg-muted/20 flex items-center justify-between font-mono text-xs"
                  >
                    <span className="text-foreground font-medium">{c.name}</span>
                    <span className="text-[10px] text-muted-foreground">{c.issuer}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
