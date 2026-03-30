'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Rugas Technologies Private Limited',
    role: 'Full Stack Developer',
    period: 'Mar 2024 – Present',
    location: 'Bangalore, KA',
    description: 'Building production-grade web, cloud, and device-integrated systems across healthcare, e-commerce, and IoT sectors.',
    achievements: [
      'Independently led the full-stack development of RADX.report, architecting scalable DICOM pipelines with AWS (S3, SQS, Lambda) and Python-based Pi edge services.',
      'Developed core features for KarmaTickets.ca, ensuring 100% commitment and prompt availability for high-stakes Canada-based e-commerce workflows.',
      'Designed secure REST APIs with RBAC and integrated multiple AWS services (Secrets Manager, SQS) to optimize distributed system performance.',
      'Collaborated directly with technical clients and product managers to handle requirements, implementation, and iteration for mission-critical POCs.',
      'Proactively worked with QA and stakeholder teams to resolve issues beyond assigned scope, ensuring production stability and timely delivery.',
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl text-center">
            Professional <span className="text-indigo-500">Timeline</span>
          </h2>
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
              
              <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-500">
                  {exp.period}
                </span>
              </div>
              <p className="mb-4 text-lg font-medium text-muted-foreground">{exp.company}</p>
              <p className="mb-6 text-muted-foreground leading-relaxed italic">{exp.description}</p>
              
              <ul className="space-y-2">
                {exp.achievements.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
