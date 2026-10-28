"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE } from "@/lib/data";
import styles from "./Nav.module.css";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const syncHash = () => setActiveHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  const navLinks = [
    { label: "About", href: "/about", isExternal: false },
    { label: "Services", href: "/#services", isExternal: true },
    { label: "Projects", href: "/#projects", isExternal: true },
    { label: "Experience", href: "/work", isExternal: false },
    { label: "Process", href: "/#process", isExternal: true },
    { label: "GitHub", href: SITE.github, isExternal: true, newTab: true },
  ];

  const isActive = (href: string) => {
    if (href.startsWith("https://")) return false;
    const [path, hash] = href.split("#");
    if (hash) return pathname === (path || "/") && activeHash === `#${hash}`;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

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
          {navLinks.map((link) => {
            const active = isActive(link.href);
            const className = active ? styles.active : undefined;
            return (
              <li key={link.label}>
                {link.isExternal ? (
                  <a
                    href={link.href}
                    className={className}
                    aria-current={active ? "page" : undefined}
                    target={link.newTab ? "_blank" : undefined}
                    rel={link.newTab ? "noopener noreferrer" : undefined}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className={className}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            );
          })}
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
          {navLinks.map((link) => {
            const active = isActive(link.href);
            const className = active ? styles.active : undefined;
            return (
              <li key={link.label}>
                {link.isExternal ? (
                  <a
                    href={link.href}
                    className={className}
                    aria-current={active ? "page" : undefined}
                    target={link.newTab ? "_blank" : undefined}
                    rel={link.newTab ? "noopener noreferrer" : undefined}
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className={className}
                    aria-current={active ? "page" : undefined}
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            );
          })}
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
