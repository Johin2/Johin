import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Info = () => {
  const [time, setTime] = useState('--:--');

  useEffect(() => {
    const update = () => {
      const now = new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'Asia/Kolkata',
      });
      setTime(now);
    };
    update();
    const id = setInterval(update, 1000 * 30);
    return () => clearInterval(id);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.13, delayChildren: 0.25 } },
  };
  const item = {
    hidden: { y: 50, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-between px-6 md:px-12 lg:px-20 pt-32 pb-10 overflow-hidden"
    >
      {/* side rail guides */}
      <div className="absolute inset-y-0 left-6 md:left-12 lg:left-20 w-px bg-ink-line/60 pointer-events-none" />
      <div className="absolute inset-y-0 right-6 md:right-12 lg:right-20 w-px bg-ink-line/60 pointer-events-none" />

      {/* ember atmosphere */}
      <div
        aria-hidden
        className="absolute -top-60 -right-60 w-[720px] h-[720px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(224,122,54,0.18) 0%, rgba(224,122,54,0.04) 40%, transparent 70%)',
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(168,75,22,0.12) 0%, transparent 60%)',
        }}
      />

      {/* vertical label on the right */}
      <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-4 font-mono text-[10px] uppercase tracking-[0.3em] text-ink-faint">
        <span className="writing-vertical">Selected Works · 2022 / 2026</span>
        <span className="w-px h-16 bg-ink-line" />
        <span className="text-ember">●</span>
      </div>

      {/* main block */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="relative z-10 flex flex-col justify-center flex-1 max-w-6xl"
      >
        <motion.div
          variants={item}
          className="flex items-center gap-3 mb-10 font-mono text-[11px] md:text-xs tracking-[0.25em] text-ink-dim uppercase"
        >
          <span className="inline-block w-10 h-px bg-ember" />
          <span>AI · Software Engineer</span>
          <span className="text-ember">/ 2026</span>
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display font-light text-mega text-ink leading-[0.82]"
          style={{ fontVariationSettings: '"opsz" 144, "SOFT" 30' }}
        >
          <span className="block italic text-ink" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50, "WONK" 1' }}>
            Johin
          </span>
          <span className="block">
            Johny<span className="text-ember">.</span>
          </span>
        </motion.h1>

        <motion.div variants={item} className="mt-10 max-w-2xl">
          <p className="text-base md:text-xl lg:text-2xl text-ink-dim font-sans-tight text-balance leading-snug">
            Building intelligent systems for retail, hospitality and luxury fashion.
            Full-stack engineer shipping AI research as production tools.{' '}
            <span className="text-ink italic font-display">Not demos</span>.
          </p>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-12 flex flex-wrap items-center gap-2 md:gap-3"
        >
          <Chip num="01">Mumbai · IN</Chip>
          <Chip num="02">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-ember animate-blink" />
              {time} IST
            </span>
          </Chip>
          <Chip num="03" accent>Open to Work</Chip>
          <Chip num="04">9.3 · CGPA</Chip>
        </motion.div>
      </motion.div>

      {/* footer row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="relative z-10 flex items-end justify-between mt-16 font-mono text-[10px] uppercase tracking-widest text-ink-faint"
      >
        <div>
          <div>Scroll to Begin</div>
          <div className="mt-1 text-ember flex items-center gap-2">
            <span>↓</span>
            <span>Begin · § 01</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <div className="text-right">
            <div>Currently</div>
            <div className="mt-1 text-ink">@ Glassbox Ventures</div>
          </div>
          <div className="w-px h-8 bg-ink-line" />
          <div className="text-right">
            <div>Since</div>
            <div className="mt-1 text-ink">Apr · 2025</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const Chip = ({ num, accent = false, children }) => (
  <motion.span
    whileHover={{ y: -2, scale: 1.02 }}
    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border font-mono text-[10px] md:text-[11px] uppercase tracking-widest transition-all duration-500 ${
      accent
        ? 'border-ember text-ember bg-ember/5 shadow-[0_0_24px_-6px_rgba(224,122,54,0.5)]'
        : 'border-ink-line text-ink-dim hover:border-ember hover:text-ember hover:shadow-[0_0_24px_-6px_rgba(224,122,54,0.4)]'
    }`}
  >
    <span className={accent ? 'text-ember' : 'text-ink-faint'}>{num}</span>
    <span>{children}</span>
  </motion.span>
);

export default Info;
