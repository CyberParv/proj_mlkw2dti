'use client'

import Timeline from '@/components/Timeline'

const timelineData = [
  {
    id: '1',
    date: '2015',
    title: 'Started Freelance Design',
    description: 'Began working with local businesses to create branding and graphics.'
  },
  {
    id: '2',
    date: '2018',
    title: 'Expanded Skills',
    description: 'Learned UI/UX design and developed mobile app interfaces.'
  },
  {
    id: '3',
    date: '2022',
    title: 'Launched Blog',
    description: 'Started sharing design tips and industry insights.
    '
  }
]

export default function AboutPage() {
  return (
    <section>
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <p className="mb-8 max-w-3xl">
        I am a freelance designer passionate about crafting impactful visual experiences. I specialize in branding, UI/UX, and web design, aiming to help clients deliver their message effectively.
      </p>
      <Timeline items={timelineData} />
    </section>
  )
}
