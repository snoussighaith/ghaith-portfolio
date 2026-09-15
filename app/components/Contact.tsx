import { personal } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-28 text-white scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 px-6 py-10 shadow-[0_30px_90px_rgba(15,23,42,0.35)] md:px-10 md:py-12 soft-fade-up">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.14),transparent_24%)]" />
          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                Let&apos;s connect
              </p>
              <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Get in touch</h2>
              <p className="mt-5 max-w-xl leading-8 text-slate-300">
                I&apos;m open to opportunities, collaborations, and conversations about data science, product design, and modern web experiences.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={`mailto:${personal.email}`}
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
                >
                  Email me
                </a>
                <a
                  href={`tel:${personal.phone}`}
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
                >
                  Call me
                </a>
              </div>
            </div>

            <div className="grid gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur card-lift">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition hover:border-white/20 hover:bg-white/10"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Email</p>
                  <p className="mt-2 text-sm font-medium text-white">{personal.email}</p>
                </div>
                <span className="text-slate-400">↗</span>
              </a>

              <a
                href={`tel:${personal.phone}`}
                className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition hover:border-white/20 hover:bg-white/10"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Phone</p>
                  <p className="mt-2 text-sm font-medium text-white">{personal.phone}</p>
                </div>
                <span className="text-slate-400">↗</span>
              </a>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-white/25 hover:bg-white/10 hover:text-white"
                >
                  LinkedIn
                </a>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-white/25 hover:bg-white/10 hover:text-white"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
