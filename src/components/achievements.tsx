'use client';

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { achievements } from '@/lib/data';

export function Achievements() {
  return (
    <section id="achievements" className="py-24 md:py-32 bg-indigo-500/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Achievements &amp; <span className="text-indigo-500">Recognition</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2">
          {achievements.map((item, index) => {
            const isInProgress = item.issuer.toLowerCase().includes('in progress');
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl border border-border bg-background p-5 flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <Award className="h-5 w-5 shrink-0 text-indigo-500 mt-0.5" />
                  {isInProgress && (
                    <span className="rounded-full bg-amber-500/10 px-2 py-0.5 text-[10px] font-bold uppercase text-amber-600 dark:text-amber-400">
                      In Progress
                    </span>
                  )}
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">{item.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.issuer}</p>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
