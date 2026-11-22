import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-28 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 grid gap-5 border-b border-slate-200 pb-8 md:grid-cols-[1fr_0.55fr] md:items-end">
          <div>
            <p className="section-index">01 / Expertise</p>
            <h2 className="section-title">Skills & Technologies</h2>
          </div>
          <p className="section-description md:text-right">AI, machine learning, NLP, RAG, data engineering, and full-stack development.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((group, index) => (
            <div
              key={group.category}
              className="rounded-[1.75rem] border border-white/70 bg-white/75 p-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur card-lift soft-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  {group.category}
                </h3>
                <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent" />
              </div>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm text-slate-700 transition hover:border-slate-400 hover:bg-white hover:text-slate-950"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
