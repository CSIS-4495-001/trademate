import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TradeMate',
  description: 'A barter app by Gaurav Mehla and Anshdeep Singh',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <head>
            <link rel="stylesheet" href="yoho" />
        </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
