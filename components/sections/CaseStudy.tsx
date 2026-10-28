"use client";

import Image from "next/image";
import { useState } from "react";
import { CASE_STUDIES } from "@/lib/data";
import styles from "./CaseStudy.module.css";

export default function CaseStudy() {
  const [selectedId, setSelectedId] = useState(CASE_STUDIES[0]?.id ?? "");
  const activeCase =
    CASE_STUDIES.find((item) => item.id === selectedId) ?? CASE_STUDIES[0];

  if (!activeCase) {
    return null;
  }

  return (
    <section className={styles.section} id="case-studies">
      <div className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Case studies</p>
          <h2 className={styles.title}>Selected work, shown in full</h2>
        </div>
      </div>

      <div className={styles.layout}>
        <aside className={styles.sidebar} aria-label="Case study list">
          {CASE_STUDIES.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedId(item.id)}
              className={`${styles.caseCard} ${
                selectedId === item.id ? styles.caseCardActive : ""
              }`}
            >
              <span className={styles.cardType}>{item.type}</span>
              <span className={styles.cardTitle}>{item.title}</span>
              <span className={styles.cardSummary}>{item.summary}</span>
            </button>
          ))}
        </aside>

        <article className={styles.detail}>
          <p className={styles.detailType}>{activeCase.type}</p>
          <h3 className={styles.detailTitle}>{activeCase.title}</h3>

          <div className={styles.metaGrid}>
            {activeCase.metrics.map((metric) => (
              <div key={metric.label} className={styles.metaItem}>
                <span className={styles.metaLabel}>{metric.label}</span>
                <strong className={styles.metaValue}>{metric.value}</strong>
              </div>
            ))}
          </div>

          <div className={styles.visual}>
            <Image
              src={activeCase.image}
              alt={activeCase.title}
              fill
              className={styles.projectImage}
              sizes="(max-width: 768px) 100vw, 70vw"
              priority
            />
          </div>

          <div className={styles.storyBlock}>
            <h4>Background</h4>
            <p>{activeCase.challenge}</p>
          </div>

          <div className={styles.storyBlock}>
            <h4>What I built</h4>
            <ul>
              {activeCase.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.solutionGrid}>
            {activeCase.solution.map((item) => (
              <div key={item.heading} className={styles.solutionCard}>
                <h4>{item.heading}</h4>
                <p>{item.body}</p>
              </div>
            ))}
          </div>

          <div className={styles.storyBlock}>
            <h4>What this project taught me</h4>
            <ul>
              {activeCase.learnings.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {activeCase.liveUrl && (
            <a
              href={activeCase.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.liveLink}
            >
              View live
            </a>
          )}
        </article>
      </div>
    </section>
  );
}
