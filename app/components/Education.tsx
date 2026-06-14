import { education, certificates, languages } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-28 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14 max-w-2xl soft-fade-up">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Background</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            Education & Certifications
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Academic training and certifications that support the technical side of the portfolio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Education */}
          <div className="md:col-span-1">
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Education</h3>
            <div className="space-y-6">
              {education.map((edu, i) => (
                <div key={i} className="relative rounded-[1.5rem] border border-white/70 bg-white/75 p-5 shadow-sm backdrop-blur card-lift soft-fade-up" style={{ animationDelay: `${i * 90}ms` }}>
                  <div className="absolute left-0 top-6 h-10 w-1 rounded-full bg-gradient-to-b from-amber-300 to-slate-300" />
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{edu.period}</p>
                  <p className="mt-3 text-sm font-semibold leading-snug text-slate-900">{edu.degree}</p>
                  <p className="mt-2 text-xs leading-6 text-slate-500">{edu.school}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Languages</h3>
              <div className="flex flex-wrap gap-2.5">
                {languages.map((lang) => (
                  <span
                    key={lang}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-600"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Certificates */}
          <div className="md:col-span-2">
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Certificates</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {certificates.map((cert, i) => (
                <div key={i} className="flex items-start gap-3 rounded-[1.4rem] border border-white/70 bg-white/75 p-4 shadow-sm backdrop-blur card-lift soft-fade-up" style={{ animationDelay: `${i * 70}ms` }}>
                  <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100">
                    <svg className="h-3.5 w-3.5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium leading-snug text-slate-700">{cert.title}</p>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      {cert.link ? (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 transition hover:border-slate-400 hover:text-slate-950"
                        >
                          Open certificate
                        </a>
                      ) : (
                        <span className="rounded-full border border-dashed border-slate-300 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-400">
                          {cert.linkLabel}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
