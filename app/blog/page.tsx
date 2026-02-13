'use client'

import { useEffect, useState } from 'react'
import BlogCard from '@/components/BlogCard'
import { BlogPost } from '@/types'

const mockPosts: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Design Trends 2024',
    excerpt: 'Exploring the top design trends to watch out for in 2024.',
    slug: 'design-trends-2024',
    date: '2024-05-20'
  },
  {
    id: 'post-2',
    title: 'How to Create a Portfolio',
    excerpt: 'Step-by-step guide to build an effective design portfolio.',
    slug: 'how-to-create-a-portfolio',
    date: '2024-04-15'
  }
]

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    // Simulate fetching posts
    setPosts(mockPosts)
  }, [])

  return (
    <section>
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      {posts.length === 0 ? (
        <p>Loading posts...</p>
      ) : (
        <div className="grid gap-6">
          {posts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </section>
  )
}
