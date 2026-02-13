'use client'

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-6 mt-12 text-center">
      <p>© {new Date().getFullYear()} Portfolio Designer. All rights reserved.</p>
    </footer>
  )
}
