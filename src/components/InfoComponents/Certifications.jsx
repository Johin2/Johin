import { motion } from 'framer-motion';

const certs = [
  { title: 'How Google does Machine Learning', provider: 'Google · Coursera' },
  { title: 'Azure AI Fundamentals', provider: 'Microsoft' },
  { title: 'Azure Data Fundamentals', provider: 'Microsoft' },
  { title: 'Convolutional Neural Networks with TensorFlow', provider: 'Microsoft' },
  { title: 'Introduction to Git and GitHub', provider: 'Google' },
];

const Certifications = () => {
  return (
    <div>
      <div className="flex items-baseline gap-3 mb-10 font-mono text-[10px] uppercase tracking-widest text-ember">
        <span className="editorial-num text-ink text-lg">ii.</span>
        <span>Certifications</span>
      </div>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="font-display font-light text-3xl md:text-5xl text-ink leading-[0.95] tracking-editorial mb-10"
      >
        <span className="italic" style={{ fontVariationSettings: '"opsz" 144, "WONK" 1' }}>
          Receipts
        </span>
        <span className="text-ember">.</span>
      </motion.h3>

      <ol className="space-y-5">
        {certs.map((c, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group flex items-start gap-4 border-t border-ink-line pt-5"
          >
            <span className="editorial-num text-ink-faint text-sm pt-1 group-hover:text-ember transition-colors">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="flex-1">
              <h4 className="text-base md:text-lg text-ink font-sans-tight leading-snug">
                {c.title}
              </h4>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-ember">
                {c.provider}
              </p>
            </div>
            <span className="text-ember opacity-0 group-hover:opacity-100 transition-opacity text-sm">
              ✓
            </span>
          </motion.li>
        ))}
      </ol>
    </div>
  );
};

export default Certifications;
