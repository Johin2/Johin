const experiences = [
  {
    period: 'Apr 2025 - Aug 2026',
    role: 'AI Developer',
    company: 'Glassbox Ventures',
    location: 'Mumbai, IN',
    current: false,
    summary:
      'Led end-to-end development of full-stack data platforms and production AI systems for enterprise retail and hospitality clients.',
    achievements: [
      'Architected and shipped production AI platforms serving 60+ retail stores and 14+ restaurant locations.',
      'Reduced a 2-3 hour daily manual reconciliation workflow to 5 minutes, reducing error rates from 4% to <0.1%.',
      'Integrated Claude, Qdrant vector search, and XGBoost predictive demand forecasting across live client interfaces.',
      'Generated ~₹4.6L in enterprise project revenue on the automated reconciliation engine.',
    ],
    stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'Claude', 'Qdrant', 'XGBoost'],
  },
  {
    period: 'May 2024 - Apr 2025',
    role: 'Software Developer Intern',
    company: 'Augle AI',
    location: 'Remote',
    current: false,
    summary:
      'Engineered an end-to-end retrieval-augmented product chatbot with automated web scraping and vector retrieval.',
    achievements: [
      'Scraped, parsed, and normalized 2,000+ heterogeneous product records using Scrapy spiders for LLM indexing.',
      'Engineered prompt chains and PromptLayer telemetry traces to eliminate ungrounded hallucinations.',
      'Delivered a responsive React.js frontend interface with real-time product question-answering.',
    ],
    stack: ['LangChain', 'OpenAI API', 'Scrapy', 'PromptLayer', 'React'],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 sm:py-32 border-b border-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-12 sm:pb-16 border-b border-border gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              <span>03</span>
              <span>/</span>
              <span>Experience</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
              Engineering Work History
            </h2>
          </div>
          <p className="text-sm text-muted-foreground font-mono max-w-sm sm:text-right">
            Roles shipping production software, API infrastructure, and ML systems.
          </p>
        </div>

        {/* Roles List */}
        <div className="space-y-12 sm:space-y-16 pt-12">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-12 border-b border-border last:border-b-0"
            >
              {/* Timeline & Company column */}
              <div className="lg:col-span-4 space-y-2">
                <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                  <span>{exp.period}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                <div className="font-mono text-sm text-muted-foreground">
                  <span>{exp.company}</span>
                  <span className="mx-1.5">·</span>
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Details & Achievements */}
              <div className="lg:col-span-8 space-y-4">
                <p className="text-sm sm:text-base text-foreground/90 leading-relaxed font-sans">
                  {exp.summary}
                </p>

                <ul className="space-y-2.5 pt-2">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                      <span className="font-mono text-xs text-foreground mt-1 select-none">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-4">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded border border-border bg-muted/40 font-mono text-[11px] text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
