'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { experiences } from '@/lib/data';

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Work <span className="text-indigo-500">Experience</span>
          </h2>
          <p className="text-muted-foreground">
            Production systems across healthcare tech, e-commerce, and IoT.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-indigo-500/20"
            >
              <div className="absolute left-[-5px] top-0 h-[12px] w-[12px] rounded-full bg-indigo-500" />

              {/* Role header */}
              <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-500">
                  {exp.period}
                </span>
              </div>
              <p className="mb-1 text-lg font-medium text-muted-foreground">{exp.company}</p>
              <p className="mb-1 text-xs text-muted-foreground">{exp.location}</p>
              <p className="mb-8 text-sm text-muted-foreground italic">{exp.summary}</p>

              {/* Sub-projects */}
              {exp.projects.map((project, pi) => (
                <div key={project.name}>
                  {/* Project header row */}
                  <div className="mb-3">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                      <span className="font-semibold text-base">{project.name}</span>
                      <span className="text-sm text-muted-foreground">{project.subtitle}</span>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-indigo-500 hover:text-indigo-400 transition-colors"
                        >
                          View Live
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground bg-muted px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="mb-3 space-y-2">
                    {project.bullets.map((bullet, bi) => (
                      <li key={bi} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Award badge */}
                  {'award' in project && project.award && (
                    <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-600 dark:text-amber-400">
                      🏆 {project.award}
                    </div>
                  )}

                  {/* Status badge */}
                  {'status' in project && project.status && (
                    <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-600 dark:text-amber-400">
                      {project.status}
                    </div>
                  )}

                  {/* Divider between projects */}
                  {pi < exp.projects.length - 1 && (
                    <div className="border-t border-border/50 my-6" />
                  )}
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
