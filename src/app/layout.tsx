import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dynamic Blog',
  description: 'A fully responsive dynamic blog built with Next.js and Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <header className="bg-blue-600 text-white p-4">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold">Dynamic Blog</h1>
          </div>
        </header>
        <main className="container mx-auto mt-8 px-4">
          {children}
        </main>
        <footer className="bg-gray-200 mt-40 py-4">
          <div className="container mx-auto text-center">
           {` © 2024 Dynamic Blog. All rights reserved.`}
          </div>
        </footer>
      </body>
    </html>
  )
}

