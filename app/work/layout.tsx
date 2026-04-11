import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Work & Experience — buildwithnafisa',
  description:
    'My professional experience as a frontend and full-stack developer. Healthcare, HR systems, automation, and more.',
  keywords: ['Frontend Developer', 'Full-Stack', 'Experience', 'Portfolio', 'Work'],
  alternates: {
    canonical: 'https://buildwithnafisa.com/work',
  },
}

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
