import Link from 'next/link'
import '../globals.css'
import { Inter } from 'next/font/google'
import { getPages } from '@/sanity/sanity-utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pages = await getPages();

  return (
    <html lang="en">
      <body className="mx-auto py-5">
        <header className="max-w-3xl mx-auto flex items-center justify-between px-5 lg:px-0">
          <Link 
            href="/"
            className="bg-gradient-to-r from-green-400 via-sky-500 to-blue-600 bg-clip-text text-transparent text-xl font-bold"
          >
            drew&apos;s projects
          </Link>
          <div className="flex items-center gap-5 text-lg text-gray-600">
            {pages.map((page) => (
              <Link key={page._id} href={`/${page.slug}`} className="hover:underline">
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        <main className="py-5">{children}</main>
      </body>
    </html>
  )
}
