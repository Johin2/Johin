import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import resumeFile from '../../assets/Resume_Johin.pdf';

const links = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Work', href: '#work', id: 'work' },
  { label: 'Stack', href: '#skills', id: 'skills' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  // Scroll progress for the top bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Track active section based on what's in view
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-40% 0px -55% 0px',
        threshold: 0,
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-md bg-obsidian/70 border-b border-ink-line'
          : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-5">
        <a href="#top" className="group flex items-center gap-3">
          <div className="relative w-8 h-8 border border-ink-line rounded-sm flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-ember translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="relative font-display text-sm font-semibold italic text-ink group-hover:text-obsidian transition-colors duration-500">
              J
            </span>
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-display text-sm text-ink">Johin Johny</span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-ink-faint mt-0.5">
              Portfolio · MMXXVI
            </span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8 font-mono text-[11px] uppercase tracking-widest">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`relative transition-colors ${
                active === link.id ? 'text-ember' : 'text-ink-dim hover:text-ember'
              }`}
            >
              {link.label}
              {active === link.id && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute -bottom-1.5 left-0 right-0 h-px bg-ember"
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <a
            href={resumeFile}
            download="Johin_Johny_Resume.pdf"
            className="group relative inline-flex items-center gap-2 px-4 py-2 border border-ink-line rounded-full hover:border-ember transition-colors"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink-dim group-hover:text-ember transition-colors">
              Resume
            </span>
            <span className="text-ember text-xs">↓</span>
          </a>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-ember text-obsidian rounded-full hover:bg-ember-glow transition-colors"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest font-semibold">
              Let's talk
            </span>
            <span className="text-xs">→</span>
          </a>
        </div>
      </div>

      {/* scroll progress bar */}
      <motion.div
        className="origin-left h-px bg-ember"
        style={{ scaleX }}
      />
    </motion.nav>
  );
};

export default Nav;
