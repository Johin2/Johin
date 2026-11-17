const experiences = [
  {
    period: '2026 - Present',
    role: 'Co-founder & CEO',
    company: 'Havon AI',
    location: 'Mumbai, IN',
    current: true,
    summary:
      'Co-founded Havon AI with Ankur Ashit Ghosh and Shervin Sam to build AI for Indian languages, from the tokenizer up.',
    achievements: [
      'Published two papers on arXiv (Nov 2026): The Indic Token Tax in 2026, measuring how much more Indian languages cost on public tokenizers (Hindi 1.57x and Odia 5.01x the tokens of English on GPT-4o), and a multi-word tokenizer that needs fewer tokens than GPT-4o on all 25 languages of India and 6.1% fewer on English.',
      'Training a 1B-parameter Hindi, Marathi and English language model from scratch on our own tokenizer, on spot cloud TPUs with automatic checkpoint-and-resume.',
      'Building a Hindi and Marathi search embedding model, trained with distillation and contamination-checked training data.',
      'Built and run the products ToolBox (177 browser-first developer tools), PDFPipe (programmatic PDF generation) and Askably (a website answering agent with cited sources).',
    ],
    stack: ['JAX', 'PyTorch', 'Cloud TPU', 'Hugging Face', 'Next.js', 'FastAPI'],
  },
  {
    period: 'May 2025 - Aug 2026',
    role: 'AI Developer',
    company: 'Glassbox Ventures',
    location: 'Mumbai, IN',
    current: false,
    summary:
      'Led end-to-end development of full-stack data platforms and production AI systems for enterprise retail and hospitality clients.',
    achievements: [
      'GBHunt: deployed a market-intelligence platform used daily by the business-development team that scrapes and LLM-classifies market signals (40,000+ records), with an 11-stage AI agent lifecycle drafting briefs, pitch decks and proposals behind human review gates.',
      'Ainaa (ainaa.ai): engineered a luxury AI fashion e-commerce platform with a conversational stylist (Claude Agent SDK, SSE streaming, long-term memory, MCP tools) and semantic plus visual search using Qwen-3 embeddings, FashionCLIP and cross-encoder reranking.',
      'The Souled Store: architected a payment reconciliation platform for 48+ retail stores, automating 40,000+ orders a month and cutting a 2-3 hour daily workflow to 5 minutes, with error rates down from 4% to <0.1%; generated ~₹2.4L in project revenue.',
      "McDonald's (CPRL): built expansion whitespace intelligence for the North and East India franchisee, scraping 3,600+ competitor outlets across 8 brands, scoring areas with a Huff demand model calibrated by LightGBM, and adding a Gemini agent with 11 database tools.",
      'The Kranti Cookbook: shipped a production RAG app with two-stage retrieval over a 199-recipe vector index, lifting Recall@1 from 88% to 97% at 0.984 MRR.',
    ],
    stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'Claude Agent SDK', 'Qdrant', 'LightGBM'],
  },
  {
    period: 'May 2024 - May 2025',
    role: 'Software Developer Intern',
    company: 'Augle AI',
    location: 'Remote',
    current: false,
    summary:
      'Engineered an end-to-end retrieval-augmented product chatbot with automated web scraping and vector retrieval.',
    achievements: [
      "Scraped, parsed, and normalized Beckhoff's industrial automation catalogue of 5,500+ products in 6 categories using Scrapy spiders for LLM indexing.",
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
