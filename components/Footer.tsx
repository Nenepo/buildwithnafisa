import { SITE } from "@/lib/data";
import styles from "./Footer.module.css";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <span className={styles.accent}>build</span>with
        {SITE.name.replace("buildwith", "")}
      </div>
      <a
        className={styles.github}
        href={SITE.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub ↗
      </a>
      <p className={styles.copy}>
        &copy; {currentYear} Nafisa Faruna. All rights reserved.
      </p>
    </footer>
  );
}
