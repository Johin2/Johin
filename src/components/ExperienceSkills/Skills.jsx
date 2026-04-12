import { motion } from 'framer-motion';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Css from '../../assets/css-3-svgrepo-com.svg';
import Javascript from '../../assets/javascript-svgrepo-com.svg';
import Python from '../../assets/python-svgrepo-com.svg';
import Html from '../../assets/html-5-svgrepo-com.svg';
import Mongodb from '../../assets/mongodb-svgrepo-com.svg';
import Sql from '../../assets/sql-svgrepo-com.svg';
import PowerBI from '../../assets/powerbi-svgrepo-com.svg';
import Tableau from '../../assets/tableau-icon-svgrepo-com.svg';
import Jupyter from '../../assets/jupyter-svgrepo-com (1).svg';
import TensorFlow from '../../assets/tensorflow-svgrepo-com.svg';
import ReactIcon from '../../assets/react-svgrepo-com.svg';
import Flask from '../../assets/flask-svgrepo-com.svg';
import Tailwind from '../../assets/tailwindcss-icon-svgrepo-com.svg';
import Git from '../../assets/git-svgrepo-com.svg';
import Github from '../../assets/github-fill-svgrepo-com.svg';
import Langchain from '../../assets/langchain-icon-seeklogo.svg';
import Docker from '../../assets/docker-svgrepo-com.svg';
import OpenAI from '../../assets/openai-icon.svg';
import PostgreSQL from '../../assets/postgresql-icon.svg';
import Vercel from '../../assets/vercel-icon.svg';
import Cloudflare from '../../assets/cloudflare-icon.svg';
import Render from '../../assets/render-icon.svg';
import TypeScript from '../../assets/typescript-icon.svg';
import NextJs from '../../assets/nextjs-icon.svg';
import FastAPI from '../../assets/fastapi-icon.svg';
import Claude from '../../assets/claude-icon.svg';
import Pandas from '../../assets/pandas-icon.svg';
import XGBoost from '../../assets/xgboost-icon.svg';
import Qdrant from '../../assets/qdrant-icon.svg';
import SQLAlchemy from '../../assets/sqlalchemy-icon.svg';
import Recharts from '../../assets/recharts-icon.svg';
import FashionCLIP from '../../assets/fashionclip-icon.svg';

const groups = [
  {
    label: 'Languages',
    items: [
      { icon: Python, name: 'Python' },
      { icon: Javascript, name: 'JavaScript' },
      { icon: TypeScript, name: 'TypeScript' },
      { icon: Html, name: 'HTML' },
      { icon: Css, name: 'CSS' },
      { icon: Sql, name: 'SQL' },
      { icon: Mongodb, name: 'MongoDB' },
    ],
  },
  {
    label: 'Frameworks',
    items: [
      { icon: ReactIcon, name: 'React' },
      { icon: NextJs, name: 'Next.js' },
      { icon: FastAPI, name: 'FastAPI' },
      { icon: Flask, name: 'Flask' },
      { icon: Tailwind, name: 'Tailwind CSS' },
      { icon: SQLAlchemy, name: 'SQLAlchemy' },
      { icon: Pandas, name: 'Pandas' },
      { icon: Recharts, name: 'Recharts' },
    ],
  },
  {
    label: 'AI / ML',
    items: [
      { icon: Claude, name: 'Claude AI / Agent SDK' },
      { icon: OpenAI, name: 'OpenAI API' },
      { icon: Langchain, name: 'Langchain' },
      { icon: XGBoost, name: 'XGBoost' },
      { icon: TensorFlow, name: 'TensorFlow' },
      { icon: Qdrant, name: 'Qdrant Vector DB' },
      { icon: FashionCLIP, name: 'FashionCLIP' },
    ],
  },
  {
    label: 'Tools',
    items: [
      { icon: Git, name: 'Git' },
      { icon: Github, name: 'GitHub' },
      { icon: PostgreSQL, name: 'PostgreSQL' },
      { icon: Docker, name: 'Docker' },
      { icon: Cloudflare, name: 'Cloudflare Pages' },
      { icon: Vercel, name: 'Vercel' },
      { icon: Render, name: 'Render' },
      { icon: Jupyter, name: 'Jupyter' },
      { icon: PowerBI, name: 'Power BI' },
      { icon: Tableau, name: 'Tableau' },
    ],
  },
];

const allSkills = groups.flatMap((g) => g.items);

const Skills = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const words = gsap.utils.toArray('[data-heading-word]', sectionRef.current);
      if (words.length) {
        gsap.from(words, {
          yPercent: 120,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.06,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-24 md:py-36 lg:py-44 hairline overflow-hidden"
    >
      {/* top marquee ticker */}
      <div className="relative w-full mask-fade-x mb-20 md:mb-28">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...allSkills, ...allSkills].map((s, i) => (
            <div
              key={i}
              className="flex items-center gap-4 mx-8 font-display italic text-4xl md:text-6xl lg:text-7xl text-ink/90"
              style={{ fontVariationSettings: '"opsz" 144, "WONK" 1' }}
            >
              <span className="leading-none">{s.name}</span>
              <span className="text-ember text-2xl md:text-3xl">✦</span>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 md:px-12 lg:px-20">
        <div className="flex items-center gap-4 mb-16 md:mb-24 font-mono text-[11px] uppercase tracking-[0.25em] text-ink-faint">
          <span className="text-ember">§</span>
          <span className="editorial-num text-ink">03</span>
          <span>/ Stack</span>
          <span className="flex-1 h-px bg-ink-line" />
          <span>Tools of the Trade</span>
        </div>

        <h2 className="font-display font-light text-5xl md:text-7xl lg:text-8xl text-ink leading-[0.9] tracking-editorial max-w-5xl mb-20">
          <span className="inline-block overflow-hidden">
            <span data-heading-word className="inline-block">
              An opinionated
            </span>
          </span>{' '}
          <span className="inline-block overflow-hidden">
            <span
              data-heading-word
              className="inline-block italic text-ember"
              style={{ fontVariationSettings: '"opsz" 144, "WONK" 1' }}
            >
              toolkit
            </span>
          </span>
          <span className="text-ember">,</span>{' '}
          <span className="inline-block overflow-hidden">
            <span data-heading-word className="inline-block">
              refined in production<span className="text-ember">.</span>
            </span>
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {groups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: gi * 0.08 }}
              className="border-t border-ink-line pt-6"
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="editorial-num text-ink text-base">
                  0{gi + 1}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-ember">
                  {group.label}
                </span>
              </div>
              <ul className="space-y-2.5">
                {group.items.map((s) => (
                  <motion.li
                    key={s.name}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="group flex items-center gap-3 text-sm text-ink-dim hover:text-ink transition-colors cursor-default"
                  >
                    {s.icon ? (
                      <div className="w-9 h-9 flex items-center justify-center rounded-sm bg-paper border border-ink-line group-hover:border-ember group-hover:shadow-[0_0_20px_-6px_rgba(224,122,54,0.6)] transition-all duration-500 p-1.5 flex-shrink-0">
                        <img
                          src={s.icon}
                          alt=""
                          className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    ) : (
                      <div className="w-9 h-9 flex items-center justify-center rounded-sm border border-ink-line group-hover:border-ember group-hover:shadow-[0_0_20px_-6px_rgba(224,122,54,0.6)] transition-all duration-500 flex-shrink-0">
                        <span className="text-ember text-xs group-hover:scale-125 transition-transform duration-500">◆</span>
                      </div>
                    )}
                    <span className="font-sans-tight text-pretty">{s.name}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
