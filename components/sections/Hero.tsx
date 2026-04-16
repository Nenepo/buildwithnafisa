import { HERO } from '@/lib/data'
import styles from './Hero.module.css'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      {/* Left column */}
      <div className={styles.left}>
        <p className={`${styles.eyebrow} fade-in`}>{HERO.eyebrow}</p>

        <h1 className={`${styles.title} fade-in-2`}>
          {HERO.headline[0]}
          <br />
          {HERO.headline[1]}
          <em>{HERO.headline[2]}</em>
          {HERO.headline[3]}
          <br />
          for you.
        </h1>

        <p className={`${styles.desc} fade-in-3`}>{HERO.description}</p>

        <div className={`${styles.actions} fade-in-4`}>
          <Link href="#projects" className={styles.btnPrimary}>See my work</Link>
          <Link href="#contact" className={styles.btnGhost}>Start a project</Link>
        </div>

        <div className={`${styles.stats} fade-in-4`}>
          {HERO.stats.map((s) => (
            <div key={s.label}>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right column — editorial grid */}
      <div className={styles.right}>
        <div className={styles.grid}>
          {HERO.gridCells.map((cell) => (
            <div
              key={cell.label}
              className={`${styles.cell} ${cell.dark ? styles.cellDark : ''}`}
            >
              {cell.hot && <span className={styles.hotTag}>HOT</span>}
              <span className={styles.cellIcon}>{cell.icon}</span>
              <span className={styles.cellLabel}>{cell.label}</span>
              <span className={styles.cellSub}>{cell.sub}</span>
            </div>
          ))}
        </div>
      </div>

   
    </section>
  )
}
