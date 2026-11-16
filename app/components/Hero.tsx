"use client";
import Image from "next/image";
import { personal } from "../data/portfolio";

export default function Hero() {
  return (
    <section id="about" className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.18),transparent_32%),radial-gradient(circle_at_top_right,rgba(56,189,248,0.16),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.6),transparent)]" />

      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8 soft-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700 shadow-sm backdrop-blur soft-shine">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Available for opportunities
            </div>

            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                {personal.title}
              </p>
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 md:text-7xl">
                {personal.name}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
                {personal.summary}
              </p>
              <p className="max-w-xl text-base leading-7 text-slate-500">
                {personal.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={`mailto:${personal.email}`}
                className="rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-slate-800 soft-shine"
              >
                Get in touch
              </a>
              <a
                href="#projects"
                className="rounded-full border border-slate-300 bg-white/70 px-6 py-3.5 text-sm font-semibold text-slate-700 backdrop-blur transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white"
              >
                View projects
              </a>
            </div>

            <div className="rounded-3xl border border-slate-200/80 bg-white/70 p-5 shadow-sm backdrop-blur dark:border-slate-700/80 dark:bg-slate-900/70">
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    Download my CV
                  </p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    Choose your preferred language
                  </p>
                </div>
                <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-400/15 dark:text-amber-300">
                  PDF
                </span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href={personal.resumes.english}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-amber-400 dark:text-slate-950 dark:hover:bg-amber-300"
                >
                  English CV
                </a>
                <a
                  href={personal.resumes.french}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-slate-500 dark:hover:bg-slate-700"
                >
                  CV français
                </a>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                personal.location,
                "AI, IoT & product thinking",
                "MERN + data workflows",
              ].map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/70 bg-white/75 px-4 py-3 text-sm text-slate-600 shadow-sm backdrop-blur card-lift"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 text-sm text-slate-500">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 transition hover:border-slate-300 hover:text-slate-950 card-lift"
              >
                LinkedIn
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 transition hover:border-slate-300 hover:text-slate-950 card-lift"
              >
                GitHub
              </a>
              <a
                href={personal.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 transition hover:border-slate-300 hover:text-slate-950 card-lift"
              >
                ghaithsnoussi.dev
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none soft-fade-up" style={{ animationDelay: "120ms" }}>
            <div className="absolute -inset-8 rounded-[2.5rem] bg-gradient-to-br from-amber-300/25 via-transparent to-sky-300/20 blur-3xl soft-float" />

            <Image
              src={personal.photoSrc}
              alt={personal.photoAlt}
              width={500}
              height={500}
              className="relative rounded-[2rem] border border-white/70 bg-white/75 object-cover shadow-lg backdrop-blur soft-float"
            />

           
            
          </div>
        </div>
      </div>
    </section>
  );
}
