"use client";
import { useState, useEffect } from "react";

const links = ["About", "Skills", "Experience", "Projects", "Education", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_8px_40px_rgba(15,23,42,0.08)] border-b border-white/60"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:py-5">
        <span
          className="cursor-pointer text-lg font-semibold tracking-tight text-slate-950"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          GS<span className="text-amber-500">.</span>
        </span>

        <div className="flex items-center gap-3 md:gap-5">
          <div className="hidden rounded-full border border-white/70 bg-white/70 px-4 py-2 shadow-sm backdrop-blur md:block">
            <ul className="flex items-center gap-6">
              {links.map((l) => (
                <li key={l}>
                  <button
                    onClick={() => scrollTo(l)}
                    className="text-sm font-medium tracking-wide text-slate-500 transition-colors hover:text-slate-950"
                  >
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <a
            href="#contact"
            className="hidden rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-slate-800 md:inline-flex"
          >
            Contact
          </a>

          <button
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 p-3 text-slate-700 shadow-sm backdrop-blur transition hover:border-slate-300 hover:text-slate-950 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-5 bg-current transition-all ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 bg-current transition-all ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mx-4 mb-4 rounded-3xl border border-white/60 bg-white/90 px-4 py-4 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur md:hidden">
          <div className="grid gap-2">
            {links.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                className="rounded-2xl px-4 py-3 text-left text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-950"
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
