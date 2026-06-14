import { personal } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/60 bg-[#efe8dd] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <span className="text-sm text-slate-500">
          © {new Date().getFullYear()} {personal.name}
        </span>
        <span className="text-xs text-slate-500">
          Built with Next.js & Tailwind CSS
        </span>
      </div>
    </footer>
  );
}
