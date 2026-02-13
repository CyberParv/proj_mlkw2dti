'use client'

import Link from 'next/link'
import { BlogPost } from '@/types'

interface Props {
  post: BlogPost
}

export default function BlogCard({ post }: Props) {
  return (
    <article className="border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-2xl font-semibold mb-2">
        <Link href={`/blog/${post.slug}`}>
          <a className="hover:text-accent">{post.title}</a>
        </Link>
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
      <time className="text-sm text-gray-500 dark:text-gray-400">Published on {post.date}</time>
    </article>
  )
}
