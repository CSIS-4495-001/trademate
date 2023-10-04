'use client'

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar'
import { AuthContextProvider } from './context/AuthContext.js';

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'TradeMate',
//   description: 'A barter app by Gaurav Mehla and Anshdeep Singh',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={inter.className}>
            <AuthContextProvider>
                <Navbar/>
                {children}
            </AuthContextProvider>
        </body>
    </html>
  )
}
