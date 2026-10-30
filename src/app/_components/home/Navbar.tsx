"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Menu, X } from "lucide-react";
import type { NavLink } from "@/app/_types/home";
import { BrandMonogram } from "@/app/_components/ui/BrandMonogram";
import styles from "./Navbar.module.css";

type NavbarProps = {
  links: NavLink[];
};

export function Navbar({ links }: Readonly<NavbarProps>) {
  const [activeHref, setActiveHref] = useState(links[0]?.href ?? "");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFloating, setIsFloating] = useState(false);
  const floatingRef = useRef(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavId = useId();

  const sectionIds = useMemo(
    () => links.map((link) => link.href.replace("#", "")).filter(Boolean),
    [links],
  );

  useEffect(() => {
    const updateFloating = () => {
      // Separate thresholds prevent flicker when scrolling near the boundary.
      const next = floatingRef.current ? window.scrollY > 16 : window.scrollY >= 64;
      if (next !== floatingRef.current) {
        floatingRef.current = next;
        setIsFloating(next);
      }
    };

    const frame = requestAnimationFrame(updateFloating);
    window.addEventListener("scroll", updateFloating, { passive: true });
    window.addEventListener("pageshow", updateFloating);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateFloating);
      window.removeEventListener("pageshow", updateFloating);
    };
  }, []);

  useEffect(() => {
    if (!sectionIds.length) return;

    const updateFromHash = () => {
      const hash = window.location.hash;
      if (sectionIds.includes(hash.slice(1))) setActiveHref(hash);
    };

    const frame = requestAnimationFrame(updateFromHash);
    window.addEventListener("hashchange", updateFromHash);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => Math.abs(a.boundingClientRect.top - 96) - Math.abs(b.boundingClientRect.top - 96));
        if (visible.length) setActiveHref(`#${visible[0].target.id}`);
      },
      { rootMargin: "-96px 0px -55% 0px", threshold: 0 },
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("hashchange", updateFromHash);
    };
  }, [sectionIds]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setIsMobileMenuOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const handleOutsidePress = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handleOutsidePress);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handleOutsidePress);
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      ref={headerRef}
      className={`${styles.header} ${isFloating ? styles.floating : ""}`}
      data-floating={isFloating}
    >
      <div className={styles.shell}>
        <div className={styles.content}>
          <a
            href="#about"
            className={styles.brand}
            aria-label="Muhammad Fauzan — back to About"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <BrandMonogram size={34} />
            <span>M. Fauzan</span>
          </a>

          <nav aria-label="Main navigation" className={styles.desktopNav}>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={activeHref === link.href ? "location" : undefined}
                className={styles.navLink}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className={styles.actions}>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume (opens in a new tab)"
              className={styles.resume}
            >
              <span>Resume</span>
              <ArrowUpRight aria-hidden="true" size={15} />
            </a>
            <button
              ref={menuButtonRef}
              type="button"
              aria-expanded={isMobileMenuOpen}
              aria-controls={mobileNavId}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className={styles.menuButton}
            >
              <span>{isMobileMenuOpen ? "Close" : "Menu"}</span>
              {isMobileMenuOpen ? <X aria-hidden="true" size={15} /> : <Menu aria-hidden="true" size={15} />}
            </button>
          </div>
        </div>

        <div
          id={mobileNavId}
          inert={!isMobileMenuOpen}
          className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.menuOpen : ""}`}
        >
          <div className={styles.menuClip}>
            <nav aria-label="Mobile navigation" className={styles.mobileNav}>
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={activeHref === link.href ? "location" : undefined}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={styles.mobileLink}
                >
                  <span>{link.label}</span>
                  <ArrowDownRight aria-hidden="true" size={16} />
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
