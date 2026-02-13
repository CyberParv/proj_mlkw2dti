import './globals.css'
import { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Portfolio Designer',
  description: 'Freelance designer portfolio website',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Header />
        <main className="min-h-screen px-6 md:px-12 lg:px-24 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
