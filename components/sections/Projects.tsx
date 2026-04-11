"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { PROJECTS } from "@/lib/data";
import styles from "./Projects.module.css";

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 600;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
    setTimeout(checkScroll, 100);
  };

  return (
    <section className={styles.section} id="projects">
      <div className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Featured work</p>
          <h2 className={styles.title}>Projects</h2>
        </div>
        <div className={styles.controls}>
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={styles.scrollBtn}
            aria-label="Scroll projects carousel left"
          >
            ←
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={styles.scrollBtn}
            aria-label="Scroll projects carousel right"
          >
            →
          </button>
        </div>
      </div>

      <div
        className={styles.carousel}
        ref={scrollRef}
        onScroll={checkScroll}
        onLoad={checkScroll}
        role="region"
        aria-label="Featured projects carousel"
      >
        {PROJECTS.map((p) => (
          <a
            key={p.id}
            href={p.url}
            className={`${styles.card} ${p.large ? styles.cardLarge : ""}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.visual}>
              {p.image && (
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className={styles.projectImage}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={p.id === "imani-health"}
                />
              )}
            </div>
            <div className={styles.body}>
              <p className={styles.type}>{p.type}</p>
              <h3 className={styles.name}>{p.name}</h3>
              <p className={styles.summary}>{p.summary}</p>
              <div className={styles.meta}>
                <div className={styles.stack}>
                  {p.tags.map((t) => (
                    <span key={t} className={styles.tag}>
                      {t}
                    </span>
                  ))}
                </div>
                <span className={styles.arrow}>↗</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
