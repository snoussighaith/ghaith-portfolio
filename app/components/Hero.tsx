"use client";

import Image from "next/image";
import { personal } from "../data/portfolio";

export default function Hero() {
  return (
    <section id="about" className="relative scroll-mt-24 overflow-hidden pb-20 pt-32 md:pb-28 md:pt-44">
      <div className="hero-grid absolute inset-0 -z-10" />
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid items-end gap-12 lg:grid-cols-[1fr_22rem]">
          <div className="soft-fade-up">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-emerald-500" />
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-700">
                Available for opportunities
              </p>
            </div>

            <p className="mb-5 text-sm font-semibold uppercase leading-6 tracking-[0.16em] text-slate-500">
              Data Science Master&apos;s Student
              <br />
              AI Engineer · Machine Learning · Full-Stack
            </p>

            <h1 className="max-w-4xl text-[clamp(3.8rem,9vw,8rem)] font-semibold leading-[0.86] tracking-[-0.075em] text-slate-950">
              Ghaith
              <br />
              <span className="text-slate-400">Snoussi</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              Building intelligent systems across <strong className="font-semibold text-slate-950">NLP, RAG, machine learning, and full-stack development</strong>.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="primary-action">Selected projects <span aria-hidden="true">↓</span></a>
              <a href={`mailto:${personal.email}`} className="secondary-action">Get in touch <span aria-hidden="true">↗</span></a>
            </div>
          </div>

          <div className="relative soft-fade-up" style={{ animationDelay: "100ms" }}>
            <div className="portrait-shell">
              <Image
                src={personal.photoSrc}
                alt={personal.photoAlt}
                width={520}
                height={520}
                priority
                className="h-full w-full object-cover grayscale-[15%]"
              />
              <div className="portrait-caption">
                <span>Mahdia, Tunisia</span>
                <span>25.81° N</span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <a href={personal.resumes.english} target="_blank" rel="noopener noreferrer" className="compact-link">English CV <span>↗</span></a>
              <a href={personal.resumes.french} target="_blank" rel="noopener noreferrer" className="compact-link">CV français <span>↗</span></a>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 md:grid-cols-4">
          {[
            ["01", "Artificial Intelligence"],
            ["02", "Natural Language Processing"],
            ["03", "Retrieval-Augmented Generation"],
            ["04", "Full-Stack Development"],
          ].map(([number, label]) => (
            <div key={number} className="bg-white/85 px-5 py-5">
              <span className="text-[10px] font-bold tracking-[0.18em] text-slate-400">{number}</span>
              <p className="mt-2 text-sm font-semibold text-slate-700">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
