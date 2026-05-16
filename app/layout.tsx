import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DevProfile Analyzer — GitHub Hiring Intelligence',
  description: 'Analyze GitHub profiles for hiring signals. Identify skill levels, project quality, and red flags instantly.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5dfa1a7b-0a9c-46f4-90cd-c899b8ec2c3a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
