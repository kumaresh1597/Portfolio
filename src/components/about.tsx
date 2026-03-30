'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Target, Zap } from 'lucide-react';

const coreValues = [
  {
    icon: ShieldCheck,
    title: 'High Ownership',
    description: 'Directly handled end-to-end features and worked closely with QA to resolve issues beyond scope.',
  },
  {
    icon: Target,
    title: 'Impact Driven',
    description: 'Delivered production-grade applications under tight deadlines with focus on stability.',
  },
  {
    icon: Zap,
    title: 'Growth Mindset',
    description: 'Eagerly transitioning into advanced software and AI-driven solutions.',
  },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Professional <span className="text-indigo-500">Journey</span>
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I am a Backend-focused Full Stack Engineer with over 2 years of experience building 
                production-grade web, cloud, and device-integrated systems. My professional journey 
                is built on a foundation of <span className="text-foreground font-medium">high ownership</span> 
                and a commitment to delivering features that ensure long-term stability and impact.
              </p>
              <p>
                I have independently handled end-to-end features for international e-commerce platforms 
                and designed scalable medical imaging (DICOM) pipelines. My work often sits at the 
                intersection of software and hardware, where I develop resilient services for 
                IoT/edge devices and manage distributed systems in Linux environments.
              </p>
              <p>
                Deeply interested in the future of software, I am actively integrating 
                AI-assisted workflows and Generative AI concepts into my engineering practices, 
                striving to build smarter, more flexible solutions for complex technical challenges.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 rounded-xl border border-border p-6 glassmorphism"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-500">
                  <value.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-2 font-bold">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
