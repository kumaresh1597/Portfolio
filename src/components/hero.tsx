'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-24 text-center md:px-6 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,var(--color-primary-foreground)_0%,transparent_100%)] opacity-20 dark:opacity-5" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4 inline-flex items-center rounded-full bg-muted px-4 py-1.5 text-sm font-medium"
      >
        <span className="mr-2 h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
        Available for new opportunities
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
      >
        Hi, I&apos;m <span className="heading-gradient">Kumaresan M</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-10 max-w-[750px] text-lg text-muted-foreground sm:text-xl"
      >
        Backend-focused Full Stack Engineer with 2+ years of hands-on experience. 
        <br className="hidden sm:inline" />
        Building reliable, scalable web applications with 
        <span className="text-foreground"> ownership, clarity, and impact.</span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href="#projects"
          suppressHydrationWarning
          className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          View Projects
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
        <a
          href="/resume.pdf"
          download="Kumaresan_M_Resume.pdf"
          suppressHydrationWarning
          className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          Download Resume
          <Download className="ml-2 h-4 w-4" />
        </a>
      </motion.div>
    </section>
  );
}
