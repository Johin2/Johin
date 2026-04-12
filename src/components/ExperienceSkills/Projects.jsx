import { motion } from 'framer-motion';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const projects = [
  {
    num: '01',
    title: 'ToolBox',
    type: 'Independent · 2025',
    tag: 'Privacy-first SaaS',
    domain: 'toolbox-kit.com',
    summary:
      'A privacy-first platform with 165+ free browser-based tools for developers and designers. Every computation runs client-side with zero server-side data collection. Pro tier adds on-device AI via WebLLM (WebGPU) with BYOK for OpenAI and Anthropic.',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'WebLLM', 'WebGPU', 'Cloudflare Pages'],
    metrics: [
      { k: '165+', v: 'Free tools' },
      { k: '~1k', v: 'Monthly visitors' },
      { k: '0', v: 'Server-side data' },
    ],
    link: 'https://toolbox-kit.com',
  },
  {
    num: '02',
    title: 'Foo Restaurant Analytics',
    type: 'Glassbox · 2025',
    tag: 'AI Analytics',
    summary:
      'Full-stack AI-powered analytics platform for a 14+ outlet restaurant chain. 100+ interactive visualization cards across 11 analytics pages covering sales, customer segmentation, platform comparisons and menu optimization. Claude powers natural-language querying with streaming responses, XGBoost drives a 6-month predictive forecast.',
    stack: ['React 19', 'FastAPI', 'PostgreSQL', 'Claude', 'XGBoost', 'Render', 'Vercel'],
    metrics: [
      { k: '100+', v: 'Visualization cards' },
      { k: '11', v: 'Analytics pages' },
      { k: '6mo', v: 'Forecast horizon' },
    ],
    link: null,
  },
  {
    num: '03',
    title: 'Muse',
    type: 'Glassbox · 2025',
    tag: 'Luxury AI',
    summary:
      'AI-powered luxury fashion platform for Indian shoppers. Conversational styling assistant over a Qdrant vector DB with 1024-dim Qwen embeddings, FashionCLIP visual similarity matching, an outfit builder and a personalization engine that learns from user behavior signals. Shipped with Google OAuth, Razorpay and real-time SSE streaming chat.',
    stack: ['Next.js 16', 'FastAPI', 'Claude Agent SDK', 'Qdrant', 'FashionCLIP', 'Razorpay'],
    metrics: [
      { k: '175', v: 'Tests · 100% pass' },
      { k: '<400ms', v: 'API p95' },
      { k: '1024d', v: 'Qwen embeddings' },
    ],
    link: null,
  },
  {
    num: '04',
    title: 'The Souled Store · Finance',
    type: 'Glassbox · 2025',
    tag: 'Enterprise',
    summary:
      'Enterprise financial reconciliation platform for 60+ retail stores across India. Automates daily reconciliation of 40,000+ orders across five payment modes (UPI, Card, AMEX, Cash, District App) with T+1 settlement handling. Reduced processing from 2-3 hours to 5 minutes, error rates from 4% to <0.1%, and drove ~₹4.6L in project revenue.',
    stack: ['Next.js', 'FastAPI', 'PostgreSQL'],
    metrics: [
      { k: '60+', v: 'Stores served' },
      { k: '40k+', v: 'Daily orders' },
      { k: '5 min', v: 'Reco runtime, was 2-3h' },
    ],
    link: null,
  },
  {
    num: '05',
    title: 'Skin Cancer Detection',
    type: 'Research · 2023',
    tag: 'Deep Learning',
    summary:
      'A Keras CNN for classifying melanoma vs. non-melanoma skin lesions, with image augmentation for training. Wrapped in a Tkinter GUI for real-time image upload and instant predictions. My first end-to-end deep learning build.',
    stack: ['TensorFlow', 'Keras', 'Python', 'Tkinter'],
    metrics: [],
    link: 'https://github.com/Johin2/Projects/blob/main/skin-cancer-identification.ipynb',
  },
];

const Projects = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const words = gsap.utils.toArray('[data-heading-word]', sectionRef.current);
      gsap.from(words, {
        yPercent: 120,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.06,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative hairline"
    >
      {/* header block */}
      <div className="px-6 md:px-12 lg:px-20 pt-24 md:pt-36 lg:pt-44 pb-12 md:pb-16">
        <div className="flex items-center gap-3 md:gap-4 mb-12 md:mb-24 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.25em] text-ink-faint">
          <span className="text-ember">§</span>
          <span className="editorial-num text-ink">02</span>
          <span>/ Portfolio</span>
          <span className="flex-1 h-px bg-ink-line" />
          <span className="hidden sm:inline">Selected Work</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9 }}
          className="max-w-5xl"
        >
          <h2 className="font-display font-light text-[2.5rem] md:text-7xl lg:text-8xl text-ink leading-[0.9] tracking-editorial">
            <span className="inline-block overflow-hidden">
              <span
                data-heading-word
                className="inline-block italic"
                style={{ fontVariationSettings: '"opsz" 144, "WONK" 1' }}
              >
                Selected
              </span>
            </span>{' '}
            <span className="inline-block overflow-hidden">
              <span data-heading-word className="inline-block">
                work,
              </span>
            </span>{' '}
            <span className="inline-block overflow-hidden">
              <span data-heading-word className="inline-block text-ember">
                from
              </span>
            </span>{' '}
            <span className="inline-block overflow-hidden">
              <span data-heading-word className="inline-block">
                production to research<span className="text-ember">.</span>
              </span>
            </span>
          </h2>
          <p className="mt-5 md:mt-6 text-sm md:text-lg text-ink-dim font-sans-tight max-w-2xl text-pretty">
            A rotating selection of production work. From enterprise reconciliation and
            AI-powered luxury commerce to research-grade CNNs and a privacy-first SaaS.
          </p>
          <p className="mt-6 md:mt-8 font-mono text-[10px] uppercase tracking-widest text-ember flex items-center gap-2">
            <span className="animate-blink">●</span>
            <span>Scroll to stack</span>
          </p>
        </motion.div>
      </div>

      {/* stacking cards */}
      <div
        className="relative px-4 sm:px-6 md:px-12 lg:px-20"
        style={{ perspective: '1800px' }}
      >
        {projects.map((p, i) => (
          <StickyCard key={p.num} project={p} index={i} total={projects.length} />
        ))}
      </div>
    </section>
  );
};

const StickyCard = ({ project, index, total }) => {
  return (
    <div
      className="sticky"
      style={{
        top: `calc(72px + ${index} * 18px)`,
        marginBottom: '22vh',
        zIndex: index + 1,
      }}
    >
      <motion.article
        initial={{ rotateX: 14, scale: 0.9, opacity: 0.5, y: 30 }}
        whileInView={{ rotateX: 0, scale: 1, opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.35, margin: '-5% 0px -10% 0px' }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{
          transformStyle: 'preserve-3d',
          transformPerspective: 1800,
        }}
        whileHover={{
          y: -6,
          transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
        }}
        className="group relative mx-auto max-w-6xl bg-obsidian-raised/95 backdrop-blur-md border border-ink-line rounded-sm overflow-hidden glow-ember hover:border-ember/50 transition-colors duration-500"
      >
        {/* top ember seam */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ember/60 to-transparent" />
        {/* bottom ember seam */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ember/20 to-transparent" />

        {/* MOBILE layout (vertical) */}
        <div className="lg:hidden p-5 sm:p-7 space-y-5">
          <div className="flex items-start justify-between gap-4">
            <div className="editorial-num text-5xl sm:text-6xl font-light text-ember leading-none">
              {project.num}
            </div>
            <div className="text-right">
              <div className="font-mono text-[9px] uppercase tracking-widest text-ember">
                {project.tag}
              </div>
              <div className="mt-1 font-mono text-[9px] uppercase tracking-widest text-ink-faint">
                {project.type}
              </div>
              {project.domain && (
                <div className="mt-1 font-mono text-[9px] uppercase tracking-widest text-ink-dim">
                  {project.domain}
                </div>
              )}
            </div>
          </div>

          <h3 className="font-display text-[1.75rem] sm:text-4xl leading-[0.95] text-ink tracking-editorial">
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-start gap-2 hover:text-ember transition-colors"
              >
                <span
                  className="italic font-light"
                  style={{ fontVariationSettings: '"opsz" 144, "WONK" 1' }}
                >
                  {project.title}
                </span>
                <span className="text-ember text-base">↗</span>
              </a>
            ) : (
              <span
                className="italic font-light"
                style={{ fontVariationSettings: '"opsz" 144, "WONK" 1' }}
              >
                {project.title}
              </span>
            )}
          </h3>

          <p className="text-sm text-ink-dim leading-relaxed font-sans-tight text-pretty">
            {project.summary}
          </p>

          {project.metrics.length > 0 && (
            <div className="flex flex-wrap gap-x-6 gap-y-4 pt-2">
              {project.metrics.map((m) => (
                <div key={m.v}>
                  <div className="editorial-num text-xl text-ink font-light leading-none">
                    {m.k}
                  </div>
                  <div className="mt-1 font-mono text-[9px] uppercase tracking-widest text-ink-faint">
                    {m.v}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="pt-3 border-t border-ink-line">
            <p className="font-mono text-[9px] uppercase tracking-widest text-ink-faint mb-2">
              Stack
            </p>
            <ul className="flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <li
                  key={s}
                  className="px-2 py-0.5 border border-ink-line rounded-full font-mono text-[9px] uppercase tracking-wider text-ink-dim"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* DESKTOP layout (12-col grid) */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-10 lg:p-16">
          {/* number + tag */}
          <div className="lg:col-span-2">
            <div className="editorial-num text-7xl lg:text-8xl font-light text-ember leading-none">
              {project.num}
            </div>
            <div className="mt-4">
              <div className="font-mono text-[10px] uppercase tracking-widest text-ember">
                {project.tag}
              </div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                {project.type}
              </div>
              {project.domain && (
                <div className="mt-3 font-mono text-[10px] uppercase tracking-widest text-ink-dim">
                  {project.domain}
                </div>
              )}
            </div>
          </div>

          {/* body */}
          <div className="lg:col-span-7">
            <h3 className="font-display text-5xl lg:text-6xl text-ink leading-[0.95] tracking-editorial">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group/link inline-flex items-start gap-3 hover:text-ember transition-colors"
                >
                  <span
                    className="italic font-light"
                    style={{ fontVariationSettings: '"opsz" 144, "WONK" 1' }}
                  >
                    {project.title}
                  </span>
                  <span className="text-ember text-2xl opacity-70 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-500">
                    ↗
                  </span>
                </a>
              ) : (
                <span
                  className="italic font-light"
                  style={{ fontVariationSettings: '"opsz" 144, "WONK" 1' }}
                >
                  {project.title}
                </span>
              )}
            </h3>

            <p className="mt-5 text-lg text-ink-dim leading-relaxed font-sans-tight max-w-3xl text-pretty">
              {project.summary}
            </p>

            {project.metrics.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-10">
                {project.metrics.map((m) => (
                  <div key={m.v}>
                    <div className="editorial-num text-3xl text-ink font-light leading-none">
                      {m.k}
                    </div>
                    <div className="mt-1.5 font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                      {m.v}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* stack */}
          <div className="lg:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-widest text-ink-faint mb-3">
              Stack
            </p>
            <ul className="flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <li
                  key={s}
                  className="px-2.5 py-1 border border-ink-line rounded-full font-mono text-[10px] uppercase tracking-wider text-ink-dim hover:border-ember hover:text-ember transition-colors"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.article>
    </div>
  );
};

export default Projects;
