import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <About />
      <Projects />
      <Contact />

      <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/5">
        © {new Date().getFullYear()} Malak. Built with Next.js & Tailwind CSS.
      </footer>
    </div>
  );
}
