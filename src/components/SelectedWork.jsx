import pdfpipeImg from '../assets/projects/pdfpipe-preview.png';
import askablyImg from '../assets/projects/askably-homepage.png';
import toolboxImg from '../assets/projects/toolbox-homepage.png';

const projects = [
  {
    id: 'pdfpipe',
    num: '01',
    category: 'Developer Infrastructure',
    title: 'PDFPipe',
    headline: 'Developer-focused PDF generation infrastructure on Oracle Cloud.',
    summary:
      'High-reliability rendering infrastructure converting HTML, URLs, and dynamic templates into production-grade PDFs. Built for engineering teams, serverless functions, and autonomous AI agents.',
    image: pdfpipeImg,
    alt: 'PDFPipe API dashboard and developer documentation preview',
    badge: 'API & Infrastructure',
    specs: [
      { label: 'Core Mechanism', value: 'HTML / URL / Template -> PDF' },
      { label: 'Cloud Platform', value: 'Oracle Cloud Infrastructure (OCI)' },
      { label: 'Execution', value: 'Hardened Sandbox Worker Pool' },
      { label: 'Integration', value: 'REST API, Python SDK, n8n' },
    ],
    caseStudy: {
      problem:
        'Generating reliable, high-fidelity PDFs from dynamic web templates at scale is notoriously resource-intensive, slow, and prone to headless browser deadlocks in serverless workloads.',
      approach:
        'Engineered a multi-tenant API backend deployed on Oracle Cloud Infrastructure (OCI) compute instances with queue-backed rendering engines, deterministic page breaks, and webhook delivery.',
      engineering:
        'Built with dedicated OCI ARM compute resources to avoid memory starvation, token-bucket rate limiting, quota tracking, Python SDK client bindings, and pre-warmed headless browser pools.',
      result:
        'Fast document infrastructure for invoices, analytical summaries, and automated agent reports with sub-3s median latency and zero egress penalties.',
    },
    stack: ['Python', 'FastAPI', 'Docker', 'Oracle Cloud (OCI)', 'Chromium', 'Redis'],
    links: [
      { label: 'View Documentation', href: '#pdfpipe' },
    ],
  },
  {
    id: 'askably',
    num: '02',
    category: 'Autonomous AI Agent',
    title: 'Askably',
    headline: 'AI website customer support and sales agent powered by LangGraph.',
    summary:
      'Conversational AI agent that embeds directly on websites, learns proprietary company knowledge, answers customer questions with source-grounded citations, and captures qualified leads.',
    image: askablyImg,
    alt: 'Askably live homepage interface and embedded assistant preview',
    badge: 'Production AI Agent',
    specs: [
      { label: 'Agent Architecture', value: 'LangGraph Stateful Cycles' },
      { label: 'Vector Retrieval', value: 'Semantic Embeddings in Qdrant' },
      { label: 'Cloud Platform', value: 'Oracle Cloud Infrastructure (OCI)' },
      { label: 'Deployment', value: 'Single-line Embed Script (3.2 KB)' },
    ],
    caseStudy: {
      problem:
        'Traditional website chatbots rely on rigid decision trees that frustrate visitors, while raw LLMs frequently hallucinate unverified claims or fail to capture high-intent customer enquiries.',
      approach:
        'Constructed an agentic pipeline using LangChain and LangGraph that ingests business documents, computes high-dimensional dense embeddings, grounds answers with verifiable citations, and hands off to human teams.',
      engineering:
        'Orchestrated a cyclical LangGraph state machine (query classification, semantic chunk lookup, citation validation, and fallback forms) hosted on Oracle Cloud (OCI) with Server-Sent Events (SSE) streaming and Qdrant vector isolation.',
      result:
        'Autonomous customer resolution with document-level traceability, zero hallucinated claims, and instant lead notifications emailed directly to founders.',
    },
    stack: ['LangGraph', 'LangChain', 'FastAPI', 'Qdrant', 'Oracle Cloud (OCI)', 'Next.js'],
    links: [
      { label: 'Product Architecture', href: '#askably' },
    ],
  },
  {
    id: 'toolbox',
    num: '03',
    category: 'Privacy-First SaaS',
    title: 'ToolBox',
    headline: '165+ free browser-based developer and designer tools.',
    summary:
      'A privacy-first suite of client-side developer utilities. Every computation runs 100% in the browser with zero server data collection. Pro tier incorporates on-device AI via WebLLM and WebGPU.',
    image: toolboxImg,
    alt: 'ToolBox web interface showing in-browser developer utilities',
    badge: 'Open Web Software',
    specs: [
      { label: 'Free Utilities', value: '165+ Browser Tools' },
      { label: 'Monthly Visitors', value: '2,000+ Active Users' },
      { label: 'Server Data', value: '0 Bytes Collected' },
      { label: 'Cloud & Edge', value: 'Cloudflare Pages + OCI' },
    ],
    caseStudy: {
      problem:
        'Most developer utility sites upload sensitive code, tokens, and payloads to third-party servers, creating data privacy and telemetry risks for enterprise developers.',
      approach:
        'Constructed a client-side architecture where JSON formatting, regex testing, encoding, and on-device LLM queries execute strictly in browser memory.',
      engineering:
        'Leveraged WebGPU and WebAssembly with edge deployment on Cloudflare Pages, backed by Oracle Cloud Infrastructure (OCI) instances for build pipelines, worker tasks, and asset delivery.',
      result:
        'Active organic user base of 2,000+ monthly developers with zero server data collection and high client-side responsiveness.',
    },
    stack: ['Next.js', 'TypeScript', 'WebLLM', 'WebGPU', 'Oracle Cloud (OCI)', 'Cloudflare'],
    links: [
      { label: 'Visit toolbox-kit.com', href: 'https://toolbox-kit.com', external: true },
    ],
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="py-20 sm:py-32 border-b border-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-12 sm:pb-16 border-b border-border gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              <span>01</span>
              <span>/</span>
              <span>Selected Work</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
              Software Products &amp; Tools
            </h2>
          </div>
          <p className="text-sm text-muted-foreground font-mono max-w-sm sm:text-right">
            Independent software products, developer infrastructure, and web utilities.
          </p>
        </div>

        {/* Project List */}
        <div className="space-y-24 sm:space-y-32 pt-16">
          {projects.map((project) => (
            <article
              key={project.id}
              id={project.id}
              className="scroll-mt-28 space-y-8"
            >
              {/* Project Header Info */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline pb-6 border-b border-border">
                <div className="lg:col-span-3 flex items-baseline gap-3">
                  <span className="font-mono text-xs font-semibold text-muted-foreground">
                    {project.num}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-foreground">
                    {project.category}
                  </span>
                </div>

                <div className="lg:col-span-6 space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {project.headline}
                  </p>
                </div>

                <div className="lg:col-span-3 lg:text-right">
                  <span className="inline-block font-mono text-[11px] px-2.5 py-1 rounded border border-border bg-muted/40 text-foreground font-medium">
                    {project.badge}
                  </span>
                </div>
              </div>

              {/* Large Visual Section */}
              <div className="w-full">
                <div className="group relative rounded-lg border border-border bg-card overflow-hidden shadow-sm">
                  {/* Mock Browser Header */}
                  <div className="px-4 py-2.5 border-b border-border bg-muted/40 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-border" />
                      <span className="w-2.5 h-2.5 rounded-full bg-border" />
                      <span className="w-2.5 h-2.5 rounded-full bg-border" />
                    </div>
                    <span className="font-mono text-[11px] text-muted-foreground truncate max-w-xs sm:max-w-md">
                      {project.title.toLowerCase().replace(/[^a-z0-9]/g, '')}.app
                    </span>
                    <div className="w-8" />
                  </div>
                  {/* Visual */}
                  <div className="relative overflow-hidden bg-muted/20">
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="w-full h-auto object-cover object-top max-h-[540px] sm:max-h-[640px] block transform group-hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Technical Specifications Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-lg border border-border bg-muted/20 font-mono text-xs">
                {project.specs.map((spec) => (
                  <div key={spec.label} className="space-y-1">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground block">
                      {spec.label}
                    </span>
                    <span className="font-medium text-foreground text-[12px] block">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Case Study Details: Problem, Approach, Engineering, Result */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
                <div className="space-y-2">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground font-semibold block">
                    Problem
                  </span>
                  <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
                    {project.caseStudy.problem}
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground font-semibold block">
                    Approach
                  </span>
                  <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
                    {project.caseStudy.approach}
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground font-semibold block">
                    Engineering
                  </span>
                  <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
                    {project.caseStudy.engineering}
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground font-semibold block">
                    Outcome
                  </span>
                  <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
                    {project.caseStudy.result}
                  </p>
                </div>
              </div>

              {/* Stack Tags & Links */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-border">
                <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px]">
                  <span className="text-muted-foreground mr-1 text-[10px] uppercase">Stack:</span>
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded border border-border bg-card text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-foreground hover:text-muted-foreground transition-colors"
                    >
                      <span>{link.label}</span>
                      <span className="text-[10px]">{link.external ? '↗' : '↓'}</span>
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
