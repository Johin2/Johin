const stackGroups = [
  {
    category: 'AI & Machine Learning',
    description: 'Models, vector retrieval, embeddings, and inference orchestration in production.',
    items: [
      { name: 'LLM APIs & Agents', detail: 'Claude (Anthropic), OpenAI, Gemini' },
      { name: 'Vector Search', detail: 'Qdrant, FAISS, dense embedding retrieval' },
      { name: 'RAG Architecture', detail: 'LangChain, hybrid search, context truncation' },
      { name: 'Multimodal & Embeddings', detail: 'FashionCLIP, Qwen embeddings, cosine ranking' },
      { name: 'Machine Learning', detail: 'XGBoost, TensorFlow, Keras, scikit-learn' },
    ],
  },
  {
    category: 'Software Engineering',
    description: 'Modern type-safe full-stack application development and high-throughput APIs.',
    items: [
      { name: 'Languages', detail: 'Python, TypeScript, JavaScript, SQL' },
      { name: 'Backend Frameworks', detail: 'FastAPI, Flask, Node.js, RESTful APIs' },
      { name: 'Frontend Architecture', detail: 'React 18/19, Next.js, Tailwind CSS' },
      { name: 'Real-time & Protocols', detail: 'Server-Sent Events (SSE), WebSockets' },
      { name: 'Client-side Computing', detail: 'WebLLM, WebGPU, WebAssembly' },
    ],
  },
  {
    category: 'Data & Infrastructure',
    description: 'Relational data stores, containerization, and modern edge deployment pipelines.',
    items: [
      { name: 'Relational Databases', detail: 'PostgreSQL, SQLAlchemy, schema migrations' },
      { name: 'Document Stores', detail: 'MongoDB, Redis cache & queue' },
      { name: 'Containerization', detail: 'Docker, isolated browser sandboxes' },
      { name: 'Deployment & Edge', detail: 'Cloudflare Pages, Vercel, Render' },
      { name: 'Version Control', detail: 'Git, GitHub Actions, CI/CD' },
    ],
  },
];

export default function StackSection() {
  return (
    <section id="stack" className="py-20 sm:py-32 border-b border-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-12 sm:pb-16 border-b border-border gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              <span>04</span>
              <span>/</span>
              <span>Technology</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
              Technical Stack
            </h2>
          </div>
          <p className="text-sm text-muted-foreground font-mono max-w-sm sm:text-right">
            Technologies vetted and deployed in production environments.
          </p>
        </div>

        {/* 3-Column Structured Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          {stackGroups.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-lg border border-border bg-card space-y-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-foreground tracking-tight">
                  {group.category}
                </h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  {group.description}
                </p>

                <div className="mt-6 space-y-3">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="p-2.5 rounded border border-border/70 bg-muted/20 space-y-1"
                    >
                      <div className="font-mono text-xs font-semibold text-foreground">
                        {item.name}
                      </div>
                      <div className="text-[11px] text-muted-foreground leading-snug">
                        {item.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                Verified in production builds
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
