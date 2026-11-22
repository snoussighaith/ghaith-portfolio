"use client";

import { useEffect, useState } from "react";

const links = ["About", "Skills", "Experience", "Projects", "Education", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);

    const savedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = savedTheme ? savedTheme === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", isDark);
    const frame = window.requestAnimationFrame(() => setDarkMode(isDark));

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = !darkMode;
    setDarkMode(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme);
    window.localStorage.setItem("theme", nextTheme ? "dark" : "light");
  };

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`nav-shell ${scrolled ? "nav-scrolled" : ""}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="nav-brand" aria-label="Back to top">
          GS<span>.</span>
        </button>

        <div className="hidden items-center gap-1 rounded-full border border-slate-200/80 bg-white/80 p-1.5 backdrop-blur md:flex">
          {links.map((label) => (
            <button key={label} type="button" onClick={() => scrollTo(label)} className="nav-link">
              {label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button type="button" onClick={toggleTheme} className="icon-button" aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}>
            {darkMode ? "Light" : "Dark"}
          </button>
          <button type="button" onClick={() => setMenuOpen((open) => !open)} className="icon-button md:hidden" aria-label="Toggle navigation" aria-expanded={menuOpen}>
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu md:hidden">
          {links.map((label) => (
            <button key={label} type="button" onClick={() => scrollTo(label)}>{label}</button>
          ))}
        </div>
      )}
    </header>
  );
}
