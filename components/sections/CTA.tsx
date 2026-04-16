import Link from 'next/link'
import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section className={styles.section} aria-labelledby="cta-heading">
      <div className={styles.bgText} aria-hidden="true">build</div>

      <p className={styles.eyebrow}>Ready to start?</p>
      <h2 id="cta-heading" className={styles.title}>
        Let&apos;s build something<br />
        <em>remarkable.</em>
      </h2>
      <p className={styles.sub}>
        Got a project in mind? I&apos;d love to hear about it.<br />
        I typically respond within 24 hours.
      </p>

      <div className={styles.actions}>
        <Link href="/contact" className={styles.btnPrimary}>
          Send me a message
        </Link>

        <a
          href="https://www.linkedin.com/in/nafisa-faruna/"
          className={styles.btnGhost}
          target="_blank"
          rel="noopener noreferrer nofollow"
          title="Visit Nafisat Faruna on LinkedIn (opens in new tab)"
          aria-label="Connect with me on LinkedIn (opens in new tab)"
        >
          LinkedIn
        </a>

        <a href="/#projects" className={styles.btnGhost}>
          View full portfolio
        </a>
      </div>
    </section>
  )
}