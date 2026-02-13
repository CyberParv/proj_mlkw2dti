export interface Project {
  id: string
  title: string
  description: string
  imageUrl: string
  categories: string[]
  slug: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt?: string
  slug: string
  date: string
  content?: string
}
