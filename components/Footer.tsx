import { SITE } from '@/lib/data'
import styles from './Footer.module.css'

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <span className={styles.accent}>build</span>with
        {SITE.name.replace('buildwith', '')}
      </div>
      <p className={styles.copy}>
        &copy; {currentYear} Nafisa Faruna. All rights reserved.
      </p>
    </footer>
  )
}
