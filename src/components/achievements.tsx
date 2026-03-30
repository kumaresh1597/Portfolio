'use client';

import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

const achievements = [
  {
    title: 'Certificate of Appreciation',
    issuer: 'Rugas Technologies',
    description: 'Recognized for excellent commitment, prompt availability in addressing production issues, and strong collaboration with stakeholders.',
    points: ['100% Project Delivery Commitment', 'Proactive Issue Resolution', 'Cross-team QA Collaboration'],
  },
];

export function Achievements() {
  return (
    <section className="py-24 md:py-32 bg-indigo-500/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl text-center">
            Achievements & <span className="text-indigo-500">Recognition</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-2xl border-2 border-dashed border-indigo-500/20 p-8 glassmorphism relative overflow-hidden"
            >
              <div className="absolute right-[-20px] top-[-20px] opacity-10">
                <Award className="h-40 w-40 text-indigo-500 rotate-12" />
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-500">
                  <Award className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-6 text-lg">{item.description}</p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {item.points.map((p) => (
                      <div key={p} className="flex items-center gap-2 text-sm font-medium">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        {p}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
