import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-28 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14 max-w-2xl soft-fade-up">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Work</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Selected work spanning websites, data analysis, and real-time systems, presented with a more editorial layout.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/80 shadow-[0_18px_55px_rgba(15,23,42,0.06)] backdrop-blur card-lift soft-fade-up"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className={`h-1.5 bg-gradient-to-r ${project.color} transition-all duration-300 group-hover:h-2`} />

              <div className="p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold leading-snug text-slate-950">
                      {project.title}
                    </h3>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex text-xs font-semibold text-emerald-700 transition hover:text-emerald-900"
                      >
                        View on GitHub ↗
                      </a>
                    )}
                  </div>
                </div>

                <p className="mb-5 mt-4 text-sm leading-7 text-slate-600">
                  {project.description}
                </p>

                <ul className="mb-6 space-y-2">
                  {project.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-slate-600">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-500 transition group-hover:border-slate-300 group-hover:bg-white group-hover:text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
