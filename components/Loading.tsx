"use client";

import styles from "./Loading.module.css";

export default function Loading() {
  return (
    <div className={styles.loadingOverlay}>
      <div className={styles.loadingContainer}>
        <div className={styles.rippleText}>
          <span className={styles.char}>b</span>
          <span className={styles.char}>u</span>
          <span className={styles.char}>i</span>
          <span className={styles.char}>l</span>
          <span className={styles.char}>d</span>
          <span className={styles.char}>w</span>
          <span className={styles.char}>i</span>
          <span className={styles.char}>t</span>
          <span className={styles.char}>h</span>
          <span className={styles.charAccent}>n</span>
          <span className={styles.charAccent}>a</span>
          <span className={styles.charAccent}>f</span>
          <span className={styles.charAccent}>i</span>
          <span className={styles.charAccent}>s</span>
          <span className={styles.charAccent}>a</span>
        </div>
      </div>
    </div>
  );
}
