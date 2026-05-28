'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { projects } from '@/lib/data';

const caseStudyRows = [
  {
    key: 'problem' as const,
    label: 'Problem',
    labelClass: 'bg-red-500/10 text-red-600 dark:text-red-400',
  },
  {
    key: 'built' as const,
    label: 'Built',
    labelClass: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  },
  {
    key: 'decision' as const,
    label: 'Decision',
    labelClass: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
  },
  {
    key: 'outcome' as const,
    label: 'Outcome',
    labelClass: 'bg-green-500/10 text-green-600 dark:text-green-400',
  },
] as const;

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Featured <span className="text-indigo-500">Projects</span>
          </h2>
          <p className="mx-auto max-w-lg text-muted-foreground">
            Production systems — built, shipped, and actively running.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col gap-4 rounded-xl border border-border bg-background p-6 hover:border-indigo-500/30 transition-all duration-200"
            >
              {/* Top bar */}
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} live`}
                      className="text-muted-foreground hover:text-indigo-500 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
                <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-500">
                  {project.type}
                </span>
              </div>

              {/* Case study rows */}
              <div className="flex flex-col gap-3">
                {caseStudyRows.map(({ key, label, labelClass }) => (
                  <div key={key} className="flex gap-3 text-sm">
                    <span
                      className={`shrink-0 w-20 text-center rounded px-1.5 py-0.5 text-[10px] font-bold uppercase ${labelClass}`}
                    >
                      {label}
                    </span>
                    <span className="text-muted-foreground">{project[key]}</span>
                  </div>
                ))}
              </div>

              {/* Stack badges */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground bg-muted px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
