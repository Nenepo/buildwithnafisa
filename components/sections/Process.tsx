import { PROCESS_STEPS } from '@/lib/data'
import styles from './Process.module.css'

export default function Process() {
  return (
    <section className={styles.section} id="process">
      <div className={styles.header}>
        <div>
          <p className={styles.eyebrow}>How it works</p>
          <h2 className={styles.title}>My Process</h2>
        </div>
        <span className={styles.count}>04 steps</span>
      </div>

      <div className={styles.steps}>
        {PROCESS_STEPS.map((step) => (
          <div key={step.num} className={styles.step}>
            <span className={styles.stepBg}>{step.num}</span>
            <div className={styles.icon}>{step.icon}</div>
            <div className={styles.stepTitle}>{step.title}</div>
            <p className={styles.desc}>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
