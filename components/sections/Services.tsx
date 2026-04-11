import { SERVICES } from '@/lib/data'
import styles from './Services.module.css'

export default function Services() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.header}>
        <div>
          <p className={styles.eyebrow}>What I do</p>
          <h2 className={styles.title}>Services</h2>
        </div>
        <span className={styles.count}>03 specialisations</span>
      </div>

      <div className={styles.grid}>
        {SERVICES.map((s) => (
          <div
            key={s.num}
            className={`${styles.card} ${s.featured ? styles.featured : ''}`}
          >
            <span className={styles.num}>{s.num}</span>
            <div className={styles.icon}>{s.icon}</div>
            <div className={styles.name}>{s.name}</div>
            <p className={styles.desc}>{s.desc}</p>
            <div className={styles.tags}>
              {s.tags.map((t) => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

    
    </section>
  )
}
