import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTA from '@/components/sections/CTA'
import Link from 'next/link'
import styles from './about.module.css'

export default function AboutPage() {
  return (
    <main>
      <Nav />
      <div style={{ paddingTop: '60px' }}>
        <section className={styles.about}>
          <div className={styles.container}>
            <div className={styles.header}>
              <h1>About Me</h1>
              <p className={styles.intro}>
                I'm Nafisa, a website developer passionate about building beautiful, functional, and scalable web applications.
              </p>
            </div>

            <div className={styles.grid}>
              <article className={styles.card}>
                <h2>🚀 What I Do</h2>
                <p>
                  I specialize in building production-grade web applications using Next.js and React. From concept to deployment, I create solutions that solve real problems and scale with your business.
                </p>
              </article>

              <article className={styles.card}>
                <h2>🤖 Automation First</h2>
                <p>
                  I design and build workflow automation systems using Make.com and custom APIs. Eliminate manual processes, save your team hours every week, and focus on what matters. {/* Currently focused on Make.com */}
                </p>
              </article>

              <article className={styles.card}>
                <h2>🔗 Integration Expert</h2>
                <p>
                  Seamlessly connect your tools, databases, and services. I build clean APIs and reliable data pipelines that just work.
                </p>
              </article>

              <article className={styles.card}>
                <h2>💼 Proven Track Record</h2>
                <p>
                  30+ projects delivered. From HRMS systems to healthcare platforms to multi-tenant SaaS apps. Always on time. Always quality.
                </p>
              </article>
            </div>

            <div className={styles.experience_section}>
              <h2>Recent Experience</h2>
              <p>
                I've worked across diverse industries — healthcare, HR tech, e-commerce, and automation platforms. Check out my <Link href="/work">full experience</Link> for details.
              </p>

              <div className={styles.highlights}>
                <div className={styles.highlight}>
                  <span className={styles.number}>30+</span>
                  <span className={styles.label}>Projects</span>
                </div>
                <div className={styles.highlight}>
                  <span className={styles.number}>100%</span>
                  <span className={styles.label}>On-time</span>
                </div>
                <div className={styles.highlight}>
                  <span className={styles.number}>5★</span>
                  <span className={styles.label}>Rating</span>
                </div>
              </div>
            </div>

            <div className={styles.tech}>
              <h2>Tech I Work With</h2>
              <div className={styles.tech_grid}>
                <span>Next.js 14</span>
                <span>React</span>
                <span>TypeScript</span>
                <span>Tailwind CSS</span>
                <span>Node.js</span>
                <span>Make.com</span>
                {/* <span>Zapier</span> Currently focused on Make.com only */}
                <span>REST APIs</span>
                <span>PostgreSQL</span>
                <span>Vercel</span>
                <span>Google Sheets API</span>
                <span>Figma</span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <CTA />
      <Footer />
    </main>
  )
}
