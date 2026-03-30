'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Backend & Cloud',
    skills: ['Node.js', 'Python', 'Express.js', 'FeathersJS', 'AWS (S3, SQS, Lambda)', 'REST APIs'],
  },
  {
    title: 'Frontend',
    skills: ['React.js', 'Next.js', 'Redux Toolkit', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Data & Infrastructure',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Docker', 'Linux', 'AWS Secrets'],
  },
  {
    title: 'Distributed Systems',
    skills: ['DICOM Imaging', 'Async Pipelines', 'Message Queues', 'FOTA (OTA)', 'Pi Services'],
  },
  {
    title: 'Modern Practices',
    skills: ['Generative AI', 'Feature Ownership', 'System Design', 'QA Collaboration'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="bg-muted/30 py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Technical <span className="text-indigo-500">Expertise</span>
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground">
            A comprehensive set of tools and practices I use to build modern, production-grade applications.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="rounded-xl border border-border bg-background p-6 shadow-sm"
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-md bg-indigo-500/10 px-2.5 py-0.5 text-xs font-medium text-indigo-500 dark:text-indigo-400"
                  >
                    {skill}
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
