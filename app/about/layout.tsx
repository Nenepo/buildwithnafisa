import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — buildwithnafisa',
  description:
    'About Nafisa. Full-stack developer specializing in Next.js, React, automation, and building scalable web applications.',
  keywords: ['About', 'Developer', 'Nafisa', 'Portfolio', 'Full-Stack'],
  alternates: {
    canonical: 'https://buildwithnafisa.com/about',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
