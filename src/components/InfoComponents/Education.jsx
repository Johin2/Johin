import { motion } from 'framer-motion';

const entries = [
  {
    year: '2022 / 2025',
    degree: 'Bachelor of Science',
    focus: 'Artificial Intelligence & Machine Learning',
    school: 'Nagindas Khandwala College · Mumbai University',
    courses: 'Machine Learning, Operating Systems, DBMS, Artificial Neural Networks, Statistics, Data Visualization',
    score: '9.3',
    scoreLabel: 'CGPA',
  },
];

const Education = () => {
  return (
    <div>
      <div className="flex items-baseline gap-3 mb-10 font-mono text-[10px] uppercase tracking-widest text-ember">
        <span className="editorial-num text-ink text-lg">i.</span>
        <span>Education</span>
      </div>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="font-display font-light text-3xl md:text-5xl text-ink leading-[0.95] tracking-editorial mb-10"
      >
        Formally{' '}
        <span className="italic" style={{ fontVariationSettings: '"opsz" 144, "WONK" 1' }}>
          trained
        </span>
        <span className="text-ember">.</span>
      </motion.h3>

      <ol className="space-y-8">
        {entries.map((e, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="border-t border-ink-line pt-6 flex items-start justify-between gap-6"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                <span>{e.year}</span>
                <span className="inline-flex items-center gap-1 text-ember">
                  <span className="w-1 h-1 rounded-full bg-ember" />
                  Completed
                </span>
              </div>
              <h4
                className="mt-2 font-display text-2xl md:text-3xl text-ink italic font-light leading-tight"
                style={{ fontVariationSettings: '"opsz" 72, "WONK" 1' }}
              >
                {e.degree}
              </h4>
              <p className="mt-1 text-base text-ink font-sans-tight text-pretty">
                {e.focus}
              </p>
              <p className="mt-2 text-sm text-ink-dim font-sans-tight text-pretty">
                {e.school}
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-ink-faint leading-relaxed">
                Coursework: {e.courses}
              </p>
            </div>
            <div className="text-right flex-shrink-0">
              <div className="editorial-num text-4xl md:text-5xl text-ink font-light leading-none">
                {e.score}
              </div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                {e.scoreLabel}
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
};

export default Education;
