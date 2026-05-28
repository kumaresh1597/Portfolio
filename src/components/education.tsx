'use client';

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { education } from '@/lib/data';

export function Education() {
  return (
    <section id="education" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Educational <span className="text-indigo-500">Background</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-background p-8 shadow-sm"
          >
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500">
                <GraduationCap className="h-7 w-7" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold">{education.institution}</h3>
                  <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-500">
                    {education.period}
                  </span>
                </div>
                <p className="text-lg text-foreground font-medium mb-1">{education.degree}</p>
                <p className="text-muted-foreground">{education.location}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground italic leading-relaxed border-t border-border pt-5">
              {education.note}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
