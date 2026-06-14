import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-28 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14 max-w-2xl soft-fade-up">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Career</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            Experience
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Practical work across IoT, AI, and web products, with an emphasis on real systems and measurable impact.
          </p>
        </div>

        <div className="space-y-8">
          {experience.map((exp, i) => (
            <div key={i} className="grid gap-5 md:grid-cols-[16rem_1fr] md:gap-8 md:items-start soft-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="rounded-[1.5rem] border border-white/70 bg-white/70 p-5 shadow-sm backdrop-blur card-lift">
                <p className="text-sm font-semibold text-slate-900">{exp.company}</p>
                <p className="mt-2 text-sm text-slate-500">{exp.period}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{exp.location}</p>
              </div>

              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/80 p-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur card-lift">
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-amber-300 via-slate-300 to-transparent" />
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-slate-950">{exp.role}</h3>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Experience
                  </span>
                </div>
                <p className="mt-4 max-w-3xl leading-8 text-slate-600">{exp.description}</p>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
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
