'use client';

import { motion } from 'framer-motion';
import { skillCategories } from '@/lib/data';

export function Skills() {
  return (
    <section id="skills" className="bg-muted/30 py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Technical <span className="text-indigo-500">Skills</span>
          </h2>
          <p className="mx-auto max-w-lg text-muted-foreground">
            Production experience across backend, cloud, and edge systems.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 max-w-3xl mx-auto"
        >
          {skillCategories.map(({ category, items }) => (
            <div key={category} className="flex flex-col sm:flex-row gap-3 sm:gap-6 sm:items-start">
              <span className="text-sm font-semibold text-foreground sm:w-32 sm:text-right sm:shrink-0 pt-0.5">
                {category}
              </span>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="rounded-md bg-muted px-3 py-1 text-sm text-muted-foreground">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
