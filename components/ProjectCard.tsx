'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Project } from '@/types'

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300">
      <Link href={`/projects/${project.slug}`}> 
        <a aria-label={`View project ${project.title}`}>
          <div className="relative h-48 w-full">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority={false}
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1">{project.description}</p>
          </div>
        </a>
      </Link>
    </div>
  )
}
