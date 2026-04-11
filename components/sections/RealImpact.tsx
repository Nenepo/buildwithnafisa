"use client";

import Link from "next/link";
import styles from "./RealImpact.module.css";

export default function RealImpact() {
  const impacts = [
    {
      metric: "40%",
      description: "Mobile responsiveness improvement on HRMS systems",
      project: "ActiveEdge",
    },
    {
      metric: "5-tenant",
      description:
        "Healthcare platform managing multiple provider access levels",
      project: "Imani Health",
    },
    {
      metric: "0 clicks",
      description: "Manual content updates needed with Google Sheets sync",
      project: "FashBe",
    },
    {
      metric: "∞ performance",
      description: "Refactored component architecture for scalability",
      project: "Fantum",
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>Real Impact. Real Numbers.</h2>
          <p className={styles.subtitle}>
            Not templates or generic portfolios. Built by hand, tested in
            production, deployed to real users.
          </p>
        </div>

        <div className={styles.grid}>
          {impacts.map((item, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.metric}>{item.metric}</div>
              <p className={styles.description}>{item.description}</p>
              <span className={styles.project}>{item.project}</span>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <p>
            See all my work →{" "}
            <Link href="/work" className={styles.link}>
              Professional experience
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
