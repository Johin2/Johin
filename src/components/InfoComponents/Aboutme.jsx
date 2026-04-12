import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import portrait from '../../assets/johin-profile.jpeg';
import flag from '../../assets/Flag_of_India.svg';

const Aboutme = () => {
  const sectionRef = useRef(null);
  const figureRef = useRef(null);
  const portraitRef = useRef(null);
  const dropCapRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useGSAP(
    () => {
      // Heading split-word reveal
      const words = gsap.utils.toArray('[data-heading-word]', sectionRef.current);
      if (words.length) {
        gsap.from(words, {
          yPercent: 120,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.06,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' },
        });
      }

      // Drop cap dramatic scale-in
      if (dropCapRef.current) {
        gsap.from(dropCapRef.current, {
          scale: 3.5,
          opacity: 0,
          rotate: -12,
          duration: 1.4,
          ease: 'power3.out',
          scrollTrigger: { trigger: dropCapRef.current, start: 'top 80%' },
        });
      }
    },
    { scope: sectionRef }
  );

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), {
    stiffness: 120,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 120,
    damping: 18,
  });

  const handleMouseMove = (e) => {
    const rect = portraitRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative px-6 md:px-12 lg:px-20 py-24 md:py-36 lg:py-44 hairline"
    >
      {/* section index */}
      <div className="flex items-center gap-4 mb-16 md:mb-24 font-mono text-[11px] uppercase tracking-[0.25em] text-ink-faint">
        <span className="text-ember">§</span>
        <span className="editorial-num text-ink">00</span>
        <span>/ Prologue</span>
        <span className="flex-1 h-px bg-ink-line" />
        <span>About the Engineer</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start lg:min-h-[130vh]">
        {/* portrait */}
        <motion.figure
          ref={(el) => {
            figureRef.current = el;
            portraitRef.current = el;
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ perspective: '1200px' }}
          className="lg:col-span-4 lg:col-start-1 order-1 lg:order-1 lg:sticky lg:top-24 lg:self-start"
        >
          <motion.div
            className="relative group"
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
          >
            <div className="absolute -inset-3 md:-inset-4 border border-ember/30 rounded-sm translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-700" />
            <div className="absolute -inset-3 md:-inset-4 border border-ink-line rounded-sm -translate-x-2 -translate-y-2 group-hover:-translate-x-3 group-hover:-translate-y-3 transition-transform duration-700" />

            <div className="relative overflow-hidden rounded-sm bg-obsidian-raised">
              <img
                src={portrait}
                alt="Johin Johny, AI & Software Engineer based in Mumbai"
                className="w-full aspect-square lg:aspect-[4/5] object-cover"
                style={{ filter: 'contrast(1.06) saturate(0.95)' }}
              />
              <div
                className="absolute inset-0 pointer-events-none mix-blend-color"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(224,122,54,0.08) 0%, transparent 40%, rgba(11,10,8,0.15) 100%)',
                }}
              />
              <div className="absolute top-3 left-3 flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-ink/80">
                <span className="w-2 h-2 border-t border-l border-ember" />
                <span>rec · 2026</span>
              </div>
              <div className="absolute bottom-3 right-3 font-mono text-[9px] uppercase tracking-widest text-ink/80 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-ember animate-blink" />
                <span>live</span>
              </div>
            </div>
          </motion.div>

          <figcaption className="mt-6 flex items-baseline justify-between font-mono text-[10px] uppercase tracking-widest text-ink-faint">
            <span className="text-ember">FIG. 01</span>
            <span>Johin J. · Mumbai · 2026</span>
            <img src={flag} alt="" className="w-4 h-4 opacity-70" />
          </figcaption>
        </motion.figure>

        {/* statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, delay: 0.15 }}
          className="lg:col-span-7 lg:col-start-6 order-2 lg:order-2 lg:pt-16"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ember mb-8">
            a brief statement, on craft
          </p>

          <h2 className="font-display font-light text-4xl md:text-6xl lg:text-7xl leading-[0.95] text-balance tracking-editorial">
            <span className="inline-block overflow-hidden">
              <span
                data-heading-word
                className="inline-block italic text-ink"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50, "WONK" 1' }}
              >
                I build
              </span>
            </span>{' '}
            <span className="inline-block overflow-hidden">
              <span data-heading-word className="inline-block text-ink">
                AI that ships
              </span>
            </span>
            <span className="text-ember">.</span>
            <span className="block overflow-hidden mt-3">
              <span data-heading-word className="inline-block text-ink-dim">
                Not demos.
              </span>
            </span>
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 text-base md:text-lg leading-relaxed font-sans-tight max-w-3xl">
            <p className="text-ink-dim text-pretty">
              <span
                ref={dropCapRef}
                className="font-display text-5xl leading-none float-left mr-2 text-ember italic inline-block origin-bottom-left"
                style={{ shapeOutside: 'margin-box' }}
              >
                H
              </span>
              i, I'm Johin. I build AI-powered platforms that retail and
              hospitality teams rely on daily, translating model research into
              interfaces, infrastructure and product decisions that survive
              production.
            </p>
            <p className="text-ink-dim text-pretty">
              Currently AI Developer at{' '}
              <span className="text-ink underline-ember">Glassbox Ventures</span>
              , where I've shipped analytics, reconciliation and luxury fashion
              platforms backed by Claude, vector search and forecasting models.
              From first prompt to last pixel.
            </p>
          </div>

          {/* stats strip */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 pt-10 border-t border-ink-line">
            <Stat num="02" label="Companies shipped at" />
            <Stat num="05+" label="Production systems" />
            <Stat num="9.3" label="BSc · CGPA" />
            <Stat num="2021" label="Coding since" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Stat = ({ num, label }) => (
  <div className="flex flex-col">
    <span className="editorial-num text-3xl md:text-4xl lg:text-5xl text-ink font-light leading-none">
      {num}
    </span>
    <span className="mt-2 md:mt-3 font-mono text-[10px] uppercase tracking-widest text-ink-faint">
      {label}
    </span>
  </div>
);

export default Aboutme;
