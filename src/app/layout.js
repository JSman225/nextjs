import './globals.css'
import { Inter } from 'next/font/google'
import Head from "next/head";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Swooshly Next.js',
  description: 'Swooshly (made with Next.js)',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png" />
        <link rel="manifest" href="./site.webmanifest" />
        <link rel="mask-icon" href="./safari-pinned-tab.svg" color="#111111" />
        <meta name="msapplication-TileColor" content="#111111" />
        <meta name="theme-color" content="#111111" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
