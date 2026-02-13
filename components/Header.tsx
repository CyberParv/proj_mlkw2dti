'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-bold text-accent">Portfolio</a>
        </Link>
        <nav>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <ul className={`sm:flex sm:items-center sm:space-x-6 mt-4 sm:mt-0 ${menuOpen ? 'block' : 'hidden'}`}>
            <li>
              <Link href="/">
                <a className="block px-2 py-1 hover:text-accent">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a className="block px-2 py-1 hover:text-accent">Projects</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="block px-2 py-1 hover:text-accent">About</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a className="block px-2 py-1 hover:text-accent">Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className="block px-2 py-1 hover:text-accent">Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
