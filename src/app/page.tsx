import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Achievements } from "@/components/achievements";
import { Contact } from "@/components/contact";

import { Education } from "@/components/education";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </div>
      
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            © {new Date().getFullYear()} Kumaresan M. Built with Next.js, Tailwind CSS & Framer Motion.
          </p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/kumaresh1597" target="_blank" className="text-xs text-muted-foreground hover:text-foreground">GitHub</a>
            <a href="https://www.linkedin.com/in/kumaresanm1597" target="_blank" className="text-xs text-muted-foreground hover:text-foreground">LinkedIn</a>
            <a href="mailto:kumaresh.1597@gmail.com" target="_blank" className="text-xs text-muted-foreground hover:text-foreground">Email</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
