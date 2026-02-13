'use client'

interface TimelineItem {
  id: string
  date: string
  title: string
  description: string
}

interface Props {
  items: TimelineItem[]
}

export default function Timeline({ items }: Props) {
  return (
    <div className="relative border-l border-gray-300 dark:border-gray-600 ml-4">
      {items.map(item => (
        <div key={item.id} className="mb-8 ml-6">
          <span className="absolute -left-4 top-0 w-8 h-8 bg-accent rounded-full ring-4 ring-white dark:ring-gray-900"></span>
          <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">{item.date}</time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{item.title}</h3>
          <p className="mb-4 text-base font-normal text-gray-700 dark:text-gray-300">{item.description}</p>
        </div>
      ))}
    </div>
  )
}
