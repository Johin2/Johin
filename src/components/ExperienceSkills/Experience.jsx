import { motion } from 'framer-motion';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const roles = [
  {
    period: 'Apr 2025 / Now',
    company: 'Glassbox Ventures',
    role: 'AI Developer',
    location: 'Mumbai, IN',
    summary:
      'Leading end-to-end development of full-stack data platforms and AI-powered products for retail and hospitality clients. Architecture to production, across multiple concurrent briefs.',
    highlights: [
      'Shipped AI-powered analytics, reconciliation and luxury fashion platforms serving 60+ retail stores and 14+ restaurant outlets.',
      'Integrated Claude, Qdrant vector search and XGBoost forecasting across production surfaces.',
      'Reduced a 2 to 3 hour daily reconciliation workflow to 5 minutes; dropped error rates from 4% to <0.1%.',
      'Drove ~₹4.6L in project revenue on the enterprise reconciliation platform.',
    ],
    stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'Claude', 'Qdrant', 'XGBoost'],
    current: true,
  },
  {
    period: 'May 2024 / Apr 2025',
    company: 'Augle AI',
    role: 'Software Developer Intern',
    location: 'Remote',
    summary:
      'Built a retrieval-augmented product chatbot end-to-end. Scraped and normalized 2,000+ product records with Scrapy, engineered prompts against OpenAI, and shipped the assistant into a React.js frontend.',
    highlights: [
      'Scraped and cleaned 2,000+ product records with Scrapy for LLM consumption.',
      'Engineered prompts and PromptLayer traces to optimize chatbot answer quality.',
      'Delivered a React.js chat surface with real-time product Q&A.',
    ],
    stack: ['LangChain', 'OpenAI', 'PromptLayer', 'Scrapy', 'React'],
  },
];

const Experience = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      // Reveal heading words with stagger when it scrolls into view
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
      id="experience"
      className="relative px-6 md:px-12 lg:px-20 py-24 md:py-36 lg:py-44 hairline"
    >
      <div className="flex items-center gap-4 mb-16 md:mb-24 font-mono text-[11px] uppercase tracking-[0.25em] text-ink-faint">
        <span className="text-ember">§</span>
        <span className="editorial-num text-ink">01</span>
        <span>/ Curriculum Vitæ</span>
        <span className="flex-1 h-px bg-ink-line" />
        <span>Experience</span>
      </div>

      <h2 className="font-display font-light text-5xl md:text-7xl lg:text-8xl text-ink leading-[0.9] tracking-editorial max-w-5xl mb-20 overflow-hidden">
        <span className="inline-block overflow-hidden">
          <span
            data-heading-word
            className="inline-block italic text-ember"
            style={{ fontVariationSettings: '"opsz" 144, "WONK" 1' }}
          >
            One
          </span>
        </span>{' '}
        <span className="inline-block overflow-hidden">
          <span data-heading-word className="inline-block">
            through-line<span className="text-ember">:</span>
          </span>
        </span>{' '}
        <span className="inline-block overflow-hidden">
          <span data-heading-word className="inline-block text-ink-dim">
            take AI from research to reality.
          </span>
        </span>
      </h2>

      <ol className="space-y-20 md:space-y-28">
        {roles.map((r, i) => (
          <Role key={r.company} role={r} index={i} />
        ))}
      </ol>
    </section>
  );
};

const Role = ({ role, index }) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 pt-10 border-t border-ink-line group"
    >
      {/* left: period */}
      <div className="lg:col-span-3 flex lg:flex-col justify-between lg:justify-start">
        <div className="font-mono text-[11px] uppercase tracking-widest text-ink-faint flex items-center gap-2">
          <span className="editorial-num text-ink text-lg">
            0{index + 1}
          </span>
          <span className="w-6 h-px bg-ink-line" />
          <span>{role.period}</span>
        </div>
        {role.current && (
          <span className="lg:mt-4 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-ember">
            <span className="w-1.5 h-1.5 rounded-full bg-ember animate-blink" />
            Current
          </span>
        )}
      </div>

      {/* middle: role + summary */}
      <div className="lg:col-span-6">
        <h3 className="font-display text-3xl md:text-5xl text-ink leading-[1] tracking-editorial">
          <span className="italic font-light" style={{ fontVariationSettings: '"opsz" 144, "WONK" 1' }}>
            {role.role}
          </span>
        </h3>
        <div className="mt-2 flex items-baseline gap-3 font-mono text-sm text-ember">
          <span className="tracking-wider">@ {role.company}</span>
          <span className="text-ink-faint text-[11px] uppercase tracking-widest">
            · {role.location}
          </span>
        </div>
        <p className="mt-6 text-base md:text-lg text-ink-dim leading-relaxed font-sans-tight max-w-2xl text-pretty">
          {role.summary}
        </p>

        <ul className="mt-8 space-y-3 max-w-2xl">
          {role.highlights.map((h, idx) => (
            <li
              key={idx}
              className="flex gap-4 text-sm md:text-base text-ink-dim font-sans-tight"
            >
              <span className="font-mono text-[11px] text-ember mt-1.5 flex-shrink-0">
                →
              </span>
              <span className="text-pretty">{h}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* right: stack */}
      <div className="lg:col-span-3 lg:pl-6 lg:border-l lg:border-ink-line">
        <p className="font-mono text-[10px] uppercase tracking-widest text-ink-faint mb-4">
          Stack · Primary
        </p>
        <ul className="flex flex-wrap gap-1.5">
          {role.stack.map((s) => (
            <li
              key={s}
              className="px-2.5 py-1 border border-ink-line rounded-full font-mono text-[10px] uppercase tracking-wider text-ink-dim hover:border-ember hover:text-ember transition-colors"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </motion.li>
  );
};

export default Experience;
