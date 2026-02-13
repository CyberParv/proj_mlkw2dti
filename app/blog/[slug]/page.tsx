'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { BlogPost } from '@/types'

const mockPosts: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Design Trends 2024',
    slug: 'design-trends-2024',
    date: '2024-05-20',
    content: 'In 2024, the design trends focus on minimalism, vibrant colors, and immersive user experiences. This post explores how to incorporate these trends into your projects.'
  },
  {
    id: 'post-2',
    title: 'How to Create a Portfolio',
    slug: 'how-to-create-a-portfolio',
    date: '2024-04-15',
    content: 'Building a portfolio requires strategic selection of your best work, clear presentation, and personal branding. This article guides you through each step.'
  }
]

export default function BlogPostPage() {
  const { slug } = useParams()
  const [post, setPost] = useState<BlogPost | null>(null)

  useEffect(() => {
    // Simulate fetching the post by slug
    const found = mockPosts.find(p => p.slug === slug)
    setPost(found ?? null)
  }, [slug])

  if (!post) {
    return <p>Loading post...</p>
  }

  return (
    <article className="prose dark:prose-invert max-w-none">
      <h1>{post.title}</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400">Published on {post.date}</p>
      <div>{post.content}</div>
    </article>
  )
}
