"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE } from "@/lib/data";
import styles from "./Nav.module.css";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "/about", isExternal: false },
    { label: "Services", href: "/#services", isExternal: true },
    { label: "Projects", href: "/#projects", isExternal: true },
    { label: "Experience", href: "/work", isExternal: false },
    { label: "Process", href: "/#process", isExternal: true },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoAccent}>build</span>with
          {SITE.name.replace("buildwith", "")}
        </Link>

        <ul className={styles.links}>
          {navLinks.map((link) =>
            link.isExternal ? (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ) : (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ),
          )}
        </ul>

        <button
          className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span className={styles.line1}></span>
          <span className={styles.line2}></span>
          <span className={styles.line3}></span>
        </button>

        <Link href="/contact" className={styles.cta}>
          Let&apos;s build →
        </Link>
      </nav>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
        <ul className={styles.mobileLinks}>
          {navLinks.map((link) =>
            link.isExternal ? (
              <li key={link.label}>
                <a href={link.href} onClick={handleLinkClick}>
                  {link.label}
                </a>
              </li>
            ) : (
              <li key={link.label}>
                <Link href={link.href} onClick={handleLinkClick}>
                  {link.label}
                </Link>
              </li>
            ),
          )}
          <li className={styles.mobileCta}>
            <Link href="/contact" onClick={handleLinkClick}>
              Send a message
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
