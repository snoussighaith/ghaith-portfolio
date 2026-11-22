import type { CSSProperties } from "react";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 grid gap-5 border-b border-slate-200 pb-8 md:grid-cols-[1fr_0.55fr] md:items-end">
          <div>
            <p className="section-index">05 / Selected work</p>
            <h2 className="section-title">Projects</h2>
          </div>
          <p className="section-description md:text-right">
            Five projects focused on AI, computer vision, retrieval, machine learning, and digital delivery.
          </p>
        </div>

        <div className="divide-y divide-slate-200 border-b border-slate-200">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="project-row group grid gap-7 py-8 md:grid-cols-[7rem_1fr_16rem] md:items-start md:py-10"
            >
              <div className="flex items-center gap-3">
                <span className="project-number">{project.number}</span>
                <span className="h-px w-8 bg-slate-300 transition-all duration-300 group-hover:w-12 group-hover:bg-emerald-500" />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  {project.category}
                </p>
                <h3 className="mt-3 max-w-2xl text-2xl font-semibold leading-tight text-slate-950 md:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
                  {project.shortDescription}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:border-l md:border-slate-200 md:pl-7">
                <p className="text-3xl font-semibold tracking-tight text-slate-950">{project.result}</p>
                <p className="mt-1 text-xs uppercase leading-5 tracking-[0.16em] text-slate-400">
                  {project.resultLabel}
                </p>

                <ul className="mt-6 space-y-2">
                  {project.highlights.slice(0, 2).map((highlight) => (
                    <li key={highlight} className="flex gap-2 text-xs leading-5 text-slate-500">
                      <span className="mt-[0.45rem] h-1 w-1 flex-none rounded-full bg-emerald-500" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link mt-7"
                    style={{ "--project-accent": project.accent } as CSSProperties}
                  >
                    View repository
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
