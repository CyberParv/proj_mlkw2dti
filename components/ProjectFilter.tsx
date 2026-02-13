'use client'

interface Props {
  categories: string[]
  selected: string
  onSelect: (category: string) => void
}

export default function ProjectFilter({ categories, selected, onSelect }: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map(category => (
        <button
          key={category}
          type="button"
          className={`px-4 py-2 rounded-full border border-accent text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1 ${
            selected === category ? 'bg-accent text-white' : 'bg-transparent text-accent hover:bg-accent hover:text-white'
          }`}
          onClick={() => onSelect(category)}
          aria-pressed={selected === category}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
