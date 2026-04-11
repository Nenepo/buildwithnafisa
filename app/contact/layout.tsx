import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — buildwithnafisa',
  description:
    'Get in touch to discuss your next project. Website development, automation, and web solutions. Response within 24 hours.', // Focusing on frontend expertise
  keywords: ['Contact', 'Get in touch', 'Web Development', 'Project Inquiry'],
  alternates: {
    canonical: 'https://buildwithnafisa.com/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
