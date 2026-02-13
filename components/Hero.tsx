'use client'

import { motion } from 'framer-motion'

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3 }
  })
}

const animatedTexts = [
  'Designer.',
  'Freelancer.',
  'Creative.'
]

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start">
      <h1 className="text-5xl font-extrabold mb-4">
        I am a{' '}
        <span className="text-accent">
          {animatedTexts.map((word, i) => (
            <motion.span
              key={word}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </span>
      </h1>
      <p className="max-w-xl text-lg leading-relaxed">
        Crafting unique digital experiences and stunning visual designs that elevate brands.
      </p>
    </section>
  )
}
