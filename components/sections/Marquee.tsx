import { STACK_MARQUEE } from '@/lib/data'
import styles from './Marquee.module.css'

export default function Marquee() {
  // Double the items so the loop is seamless
  const items = [...STACK_MARQUEE, ...STACK_MARQUEE]

  return (
    <div className={styles.bar}>
      <div className={styles.track}>
        {items.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
