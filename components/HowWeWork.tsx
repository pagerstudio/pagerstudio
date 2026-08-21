'use client';

import { motion } from 'framer-motion';
import { steps } from '@/data/steps';
import TiltCard from './TiltCard';

export default function HowWeWork() {
  return (
    <section className="py-16 px-5 sm:px-8 md:px-12 lg:px-16" id="how-we-work">
      <div className="max-w-[1200px] mx-auto bg-ps-black texture-lines texture-shimmer rounded-[32px] py-16 px-8 sm:px-16 md:px-20 lg:px-24">
        <div className="text-center mb-10">
          <motion.h2
            className="text-heading-xl text-white"
            initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            How we <span className="font-serif italic">work</span>
          </motion.h2>
          <motion.p
            className="text-body-sm mt-3 text-white/60"
            initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Every step brings your clinic closer to the name AI recommends.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row gap-5">
          {steps.map((s, i) => (
            <TiltCard
              key={i}
              className="flex-1 rounded-[20px] p-6 border border-white/15 bg-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
              intensity={6}
            >
              <div className="text-display-lg text-white mb-3 select-none">
                {(i + 1).toString().padStart(2, '0')}
              </div>
              <span className="text-caption-sm text-white/50 block mb-2">
                {s.step}
              </span>
              <h3 className="text-heading-md text-white mb-3">
                <span className="font-serif italic">{s.title}</span>
                <br />
                <span className="text-white/60">{s.titleBreak}</span>
              </h3>
              <p className="text-body-sm text-white/60 mb-4">{s.body}</p>
              <ul className="flex flex-col gap-2">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="text-body-sm pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[6px] before:w-1.5 before:h-1.5 before:rounded-full text-white before:bg-white/30"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
