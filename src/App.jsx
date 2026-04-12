import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Nav from './components/common/Nav';
import Info from './components/InfoComponents/Info';
import Aboutme from './components/InfoComponents/Aboutme';
import Experience from './components/ExperienceSkills/Experience';
import Projects from './components/ExperienceSkills/Projects';
import Skills from './components/ExperienceSkills/Skills';
import TimelineCom from './components/InfoComponents/TimelineCom';
import Education from './components/InfoComponents/Education';
import Certifications from './components/InfoComponents/Certifications';
import Contacts from './components/ExperienceSkills/Contacts';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    // Refresh ScrollTrigger once the first paint settles
    requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div className="grain min-h-screen bg-obsidian text-ink font-sans selection:bg-ember selection:text-obsidian">
      <Nav />

      <main className="relative">
        <Info />
        <Aboutme />
        <Experience />
        <Projects />
        <Skills />
        <TimelineCom />

        {/* Credentials: Education + Certifications, side by side */}
        <section
          id="credentials"
          className="relative px-6 md:px-12 lg:px-20 py-24 md:py-36 lg:py-44 hairline"
        >
          <div className="flex items-center gap-4 mb-16 md:mb-24 font-mono text-[11px] uppercase tracking-[0.25em] text-ink-faint">
            <span className="text-ember">§</span>
            <span className="editorial-num text-ink">05</span>
            <span>/ Credentials</span>
            <span className="flex-1 h-px bg-ink-line" />
            <span>Formal &amp; Otherwise</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">
            <div className="lg:col-span-7">
              <Education />
            </div>
            <div className="lg:col-span-5">
              <Certifications />
            </div>
          </div>
        </section>

        <Contacts />
      </main>
    </div>
  );
};

export default App;
