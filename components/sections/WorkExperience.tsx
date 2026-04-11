'use client'

import { PROFESSIONAL_EXPERIENCE } from '@/lib/data'
import styles from './WorkExperience.module.css'
import Link from 'next/link'

export default function WorkExperience() {
  return (
    <section className={styles.container} id="experience">
      <div className={styles.header}>
        <h1 className={styles.title}>Professional Experience</h1>
        <p className={styles.subtitle}>
          Frontend development across startups, healthcare, HR systems, and platforms {/* Currently focused on frontend mastery */}
        </p>
      </div>

      <div className={styles.timeline}>
        {PROFESSIONAL_EXPERIENCE.map((exp, idx) => (
          <article key={exp.id} className={styles.experience}>
            <div className={styles.marker}>{String(idx + 1).padStart(2, '0')}</div>

            <div className={styles.content}>
              <div className={styles.header_exp}>
                <div>
                  <h2 className={styles.role}>{exp.role}</h2>
                  <p className={styles.company}>{exp.company}</p>
                </div>
                <span className={styles.period}>{exp.period}</span>
              </div>

              <p className={styles.location}>📍 {exp.location}</p>


              <ul className={styles.highlights}>
                {exp.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>

              <div className={styles.tags}>
                {exp.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>

              {exp.url !== '#' && (
                <Link href={exp.url} className={styles.link}>
                  View project →
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
