import { motion } from 'framer-motion';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const events = [
  {
    year: '2021',
    month: 'Sep',
    title: 'First line of Python',
    description: 'Started with the fundamentals. Loops, lists, and a lot of "why is this indented?".',
  },
  {
    year: '2022',
    month: 'Jan',
    title: 'Into Machine Learning',
    description: 'Classical ML. Scikit-learn, pandas, early wins with regression and clustering.',
  },
  {
    year: '2023',
    month: 'Jul',
    title: 'Deep Learning',
    description: 'TensorFlow / Keras. CNNs. The first time a model felt less like math and more like clay.',
  },
  {
    year: '2023',
    month: 'Nov',
    title: 'First end-to-end project',
    description: 'Skin cancer detection: a Keras CNN wrapped in a Tkinter GUI. First production-feeling build.',
  },
  {
    year: '2024',
    month: 'Feb',
    title: 'Into JavaScript',
    description: 'Left notebook-land. Learned the web the hard way: DOM, events, async, the works.',
  },
  {
    year: '2024',
    month: 'May',
    title: 'Augle AI internship',
    description: 'Built a RAG product chatbot with LangChain, PromptLayer and OpenAI over 2,000+ scraped products.',
  },
  {
    year: '2024',
    month: 'Jul',
    title: 'React.js',
    description: 'Components, hooks, composition. The frontend story started to click.',
  },
  {
    year: '2025',
    month: 'Apr',
    title: 'Glassbox Ventures',
    description: 'Started as AI Developer. Full-stack. Analytics, finance, fashion AI, one quarter at a time.',
  },
  {
    year: '2025',
    month: 'May',
    title: 'Graduated · BSc',
    description: 'Bachelor of Science in AI & ML from Nagindas Khandwala College, Mumbai University. 9.3 CGPA.',
  },
  {
    year: '2025',
    month: 'Jul',
    title: 'ToolBox · Launched',
    description: '165+ privacy-first browser tools for developers and designers. Sustaining ~1k monthly organic visitors.',
  },
];

const TimelineCom = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      // Heading words
      const words = gsap.utils.toArray('[data-heading-word]', sectionRef.current);
      gsap.from(words, {
        yPercent: 120,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.06,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
      });

      // Central line draws from top as you scroll
      gsap.from('[data-timeline-rail]', {
        scaleY: 0,
        transformOrigin: 'top center',
        ease: 'none',
        scrollTrigger: {
          trigger: '[data-timeline-list]',
          start: 'top 80%',
          end: 'bottom 60%',
          scrub: 1,
        },
      });

      // Each dot fills with ember when it enters view
      const dots = gsap.utils.toArray('[data-timeline-dot]', sectionRef.current);
      dots.forEach((dot) => {
        gsap.fromTo(
          dot,
          { backgroundColor: 'rgba(11,10,8,1)', scale: 0.6 },
          {
            backgroundColor: 'rgba(224,122,54,1)',
            scale: 1,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: dot,
              start: 'top 75%',
            },
          }
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="relative px-6 md:px-12 lg:px-20 py-24 md:py-36 lg:py-44 hairline"
    >
      <div className="flex items-center gap-4 mb-16 md:mb-24 font-mono text-[11px] uppercase tracking-[0.25em] text-ink-faint">
        <span className="text-ember">§</span>
        <span className="editorial-num text-ink">04</span>
        <span>/ Chronicle</span>
        <span className="flex-1 h-px bg-ink-line" />
        <span>The Journey</span>
      </div>

      <h2 className="font-display font-light text-5xl md:text-7xl lg:text-8xl text-ink leading-[0.9] tracking-editorial max-w-5xl mb-20">
        <span className="inline-block overflow-hidden">
          <span
            data-heading-word
            className="inline-block italic text-ember"
            style={{ fontVariationSettings: '"opsz" 144, "WONK" 1' }}
          >
            Compounding
          </span>
        </span>{' '}
        <span className="inline-block overflow-hidden">
          <span data-heading-word className="inline-block">
            curiosity,
          </span>
        </span>{' '}
        <span className="inline-block overflow-hidden">
          <span data-heading-word className="inline-block">
            year over year<span className="text-ember">.</span>
          </span>
        </span>
      </h2>

      <div className="relative max-w-4xl">
        {/* central line */}
        <div
          data-timeline-rail
          className="absolute left-[88px] md:left-[120px] top-2 bottom-2 w-px bg-ink-line"
        />

        <ol data-timeline-list className="space-y-12 md:space-y-14">
          {events.map((e, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.04 }}
              className="relative grid grid-cols-[88px_1fr] md:grid-cols-[120px_1fr] gap-6 md:gap-10 items-baseline group"
            >
              <div className="text-right">
                <div className="editorial-num text-3xl md:text-4xl text-ink font-light leading-none">
                  {e.year}
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                  {e.month}
                </div>
              </div>

              {/* dot */}
              <div
                data-timeline-dot
                className="absolute left-[84px] md:left-[116px] top-2.5 w-2 h-2 rounded-full border border-ember"
              />

              <div className="pl-6 md:pl-10">
                <h3
                  className="font-display text-2xl md:text-3xl lg:text-4xl text-ink leading-tight italic font-light"
                  style={{ fontVariationSettings: '"opsz" 144, "WONK" 1' }}
                >
                  {e.title}
                </h3>
                <p className="mt-2 text-sm md:text-base text-ink-dim font-sans-tight max-w-xl text-pretty">
                  {e.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default TimelineCom;
