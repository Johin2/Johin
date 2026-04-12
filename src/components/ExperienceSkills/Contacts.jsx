import { motion } from 'framer-motion';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import resumeFile from '../../assets/Resume_Johin.pdf';

const socials = [
  { name: 'Github', handle: '@Johin2', href: 'https://github.com/Johin2' },
  { name: 'LinkedIn', handle: '/in/johin', href: 'https://www.linkedin.com/in/johin/' },
];

const Contacts = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const words = gsap.utils.toArray('[data-heading-word]', sectionRef.current);
      if (words.length) {
        gsap.from(words, {
          yPercent: 120,
          opacity: 0,
          duration: 1.1,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative px-6 md:px-12 lg:px-20 py-28 md:py-44 lg:py-52 hairline overflow-hidden"
    >
      {/* ember wash */}
      <div
        aria-hidden
        className="absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(224,122,54,0.2) 0%, rgba(224,122,54,0.05) 40%, transparent 70%)',
        }}
      />
      <div
        aria-hidden
        className="absolute -top-20 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(168,75,22,0.12) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-16 md:mb-24 font-mono text-[11px] uppercase tracking-[0.25em] text-ink-faint">
          <span className="text-ember">§</span>
          <span className="editorial-num text-ink">09</span>
          <span>/ Colophon</span>
          <span className="flex-1 h-px bg-ink-line" />
          <span>Get in Touch</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ember mb-8">
            Available Q2 2026 · select engagements
          </p>

          <h2 className="font-display font-light text-5xl md:text-8xl lg:text-9xl text-ink leading-[0.88] tracking-editorial text-balance max-w-6xl">
            <span className="inline-block overflow-hidden">
              <span data-heading-word className="inline-block">
                Let's build
              </span>
            </span>{' '}
            <span className="inline-block overflow-hidden">
              <span data-heading-word className="inline-block">
                something
              </span>
            </span>{' '}
            <span className="inline-block overflow-hidden">
              <span
                data-heading-word
                className="inline-block italic text-ember"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50, "WONK" 1' }}
              >
                uncommon
              </span>
            </span>
            <span className="text-ember">.</span>
          </h2>

          <a
            href="mailto:Johinjohny144@gmail.com"
            className="group mt-14 md:mt-20 inline-flex items-center gap-4 md:gap-6"
          >
            <span
              className="font-display text-2xl md:text-5xl lg:text-6xl text-ink italic font-light leading-none group-hover:text-ember transition-colors duration-500"
              style={{ fontVariationSettings: '"opsz" 144, "WONK" 1' }}
            >
              Johinjohny144@gmail.com
            </span>
            <span className="text-ember text-2xl md:text-4xl lg:text-5xl leading-none group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500">
              ↗
            </span>
          </a>

          <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pt-10 border-t border-ink-line">
            <div className="md:col-span-3">
              <p className="font-mono text-[10px] uppercase tracking-widest text-ink-faint mb-3">
                Direct line
              </p>
              <a
                href="tel:+919653650060"
                className="font-display text-xl md:text-2xl text-ink hover:text-ember transition-colors"
              >
                +91 9653 650 060
              </a>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                Mumbai, IN · IST (GMT+5:30)
              </p>
            </div>

            <div className="md:col-span-5">
              <p className="font-mono text-[10px] uppercase tracking-widest text-ink-faint mb-3">
                Elsewhere
              </p>
              <ul className="space-y-3">
                {socials.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-baseline gap-3 text-ink hover:text-ember transition-colors"
                    >
                      <span
                        className="font-display text-lg md:text-xl italic font-light"
                        style={{ fontVariationSettings: '"opsz" 144, "WONK" 1' }}
                      >
                        {s.name}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-ink-faint group-hover:text-ember transition-colors">
                        {s.handle}
                      </span>
                      <span className="text-ember opacity-0 group-hover:opacity-100 transition-opacity">
                        ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4 md:text-right">
              <p className="font-mono text-[10px] uppercase tracking-widest text-ink-faint mb-3">
                Paperwork
              </p>
              <a
                href={resumeFile}
                download="Johin_Johny_Resume.pdf"
                className="group inline-flex items-center gap-3 px-6 py-3 border border-ember text-ember hover:bg-ember hover:text-obsidian transition-colors rounded-full"
              >
                <span className="font-mono text-[11px] uppercase tracking-widest font-semibold">
                  Download Resume
                </span>
                <span className="text-sm">↓</span>
              </a>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                PDF · 134 KB
              </p>
            </div>
          </div>

          {/* footer row */}
          <div className="mt-20 pt-8 border-t border-ink-line flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-widest text-ink-faint">
            <div className="flex items-center gap-3">
              <span className="text-ember">●</span>
              <span>Johin Johny · MMXXVI</span>
            </div>
            <div className="flex items-center gap-3">
              <span>Designed & built in Mumbai</span>
              <span>·</span>
              <span>Fraunces / Instrument Sans / JetBrains Mono</span>
            </div>
            <div className="text-ember">/ end of transmission</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contacts;
