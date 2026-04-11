import { TESTIMONIALS } from '@/lib/data'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.header}>
        <div>
          <p className={styles.eyebrow}>What clients say</p>
          <h2 className={styles.title}>Proof</h2>
        </div>
        <span className={styles.count}>Client reviews</span>
      </div>

      <div className={styles.grid}>
        {TESTIMONIALS.map((t) => (
          <div key={t.name} className={styles.card}>
            <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
            <div className={styles.author}>
              <div className={styles.avatar}>{t.initials}</div>
              <div>
                <div className={styles.name}>{t.name}</div>
                <div className={styles.role}>{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
