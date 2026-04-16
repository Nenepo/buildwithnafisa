import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://buildwithnafisa.com"),
  title: "buildwithnafisa — Web Development & Automation",
  description:
    "Full-stack developer specialising in Next.js, React, and intelligent automation. Turning complex requirements into polished, production-ready products.",
     icons: {
    icon: '/favicon.svg',
  },
  keywords: [
    "Next.js",
    "React",
    "Automation",
    "Web Development",
    "Make.com",
    "Zapier",
    "Nigeria",
    "Frontend Developer",
    "Full-Stack Developer",
    "website development",
    "API integration",
    "custom web applications",
    "scalable solutions",
    "website builders",
  ],
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://buildwithnafisa.com",
  },
  openGraph: {
    title: "buildwithnafisa",
    description: "Web Development & Automation that works for you.",
    url: "https://buildwithnafisa.com",
    siteName: "buildwithnafisa",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "buildwithnafisa",
    description: "Web Development & Automation that works for you.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nafisa Faruna",
    jobTitle: "Website Developer & Automation Specialist", // Focusing on frontend mastery
    url: "https://buildwithnafisa.com",
    email: "nafisafaruna@gmail.com",
    sameAs: [
      "https://www.linkedin.com/in/nafisa-faruna",
      "https://github.com/buildwithnafisa",
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Web Development",
      "Automation",
      "Make.com",
      // "Zapier", // Paused other automation platforms
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body>
        <Analytics/>
        <SpeedInsights/>
        <a href="#main" style={{ position: "absolute", left: "-9999px", zIndex: -1 }}>
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
