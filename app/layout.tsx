import type { Metadata } from 'next'
import './globals.css'
// import { ThemeProvider } from '@/components/theme-provider'
import { Inter, Lexend } from 'next/font/google'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Recall',
  description: 'You memory',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={cn(
      'h-full scroll-smooth bg-white antialiased',
      inter.variable,
      lexend.variable,
    )}>
      <body className="flex h-full flex-col">

        {children}

      </body>
    </html>
  )
}
