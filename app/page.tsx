import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative isolate overflow-x-clip">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 page-mesh opacity-60" />
        <div className="absolute -left-28 top-24 h-96 w-96 rounded-full bg-amber-300/20 blur-3xl soft-float" />
        <div className="absolute right-[-5rem] top-80 h-[28rem] w-[28rem] rounded-full bg-sky-300/16 blur-3xl soft-float" style={{ animationDelay: "-3s" }} />
        <div className="absolute bottom-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-slate-300/18 blur-3xl soft-float" style={{ animationDelay: "-6s" }} />
      </div>
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
