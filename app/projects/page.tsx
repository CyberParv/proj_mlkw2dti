'use client'

import { useState } from 'react'
import ProjectCard from '@/components/ProjectCard'
import ProjectFilter from '@/components/ProjectFilter'
import { Project } from '@/types'

const projectsData: Project[] = [
  {
    id: '1',
    title: 'Brand Identity Design',
    description: 'Creating unique brand identities for startups.',
    imageUrl: '/projects/brand-identity.jpg',
    categories: ['Branding', 'Design'],
    slug: 'brand-identity-design'
  },
  {
    id: '2',
    title: 'Mobile App UI',
    description: 'Designing user interfaces for mobile applications.',
    imageUrl: '/projects/mobile-ui.jpg',
    categories: ['UI/UX', 'Mobile'],
    slug: 'mobile-app-ui'
  },
  {
    id: '3',
    title: 'Website Redesign',
    description: 'Revamping websites for better UX and aesthetics.',
    imageUrl: '/projects/website-redesign.jpg',
    categories: ['Web Design'],
    slug: 'website-redesign'
  }
]

const categories = ['All', 'Branding', 'Design', 'UI/UX', 'Mobile', 'Web Design']

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter(project => project.categories.includes(selectedCategory))

  return (
    <section>
      <h1 className="text-4xl font-bold mb-6">Projects Gallery</h1>
      <ProjectFilter
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
