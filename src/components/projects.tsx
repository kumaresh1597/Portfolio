'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';

const projects = [
  {
    title: 'RADX.report',
    role: 'Lead Full Stack Developer (Sole)',
    description: 'A medical ultrasound reporting platform. Built core UI/Logic and integrated complex DICOM/IoT services.',
    tech: ['React', 'FeathersJS', 'AWS (Lambda/SQS)', 'Python', 'DICOM'],
    details: {
      problem: 'Need for a robust platform to handle medical reporting, image ingestion, and remote device management.',
      solution: 'Independently built a successful POC, architected a serverless DICOM pipeline, and developed Pi-based edge services with FOTA.',
      outcome: 'A production-grade system delivering high stakeholder confidence and successful remote audits.',
    },
    link: 'https://radx.report/',
  },
  {
    title: 'KarmaTickets.ca',
    role: 'Full Stack Developer',
    description: 'Canada-based e-commerce for event ticketing. Handled end-to-end features with high traffic requirements.',
    tech: ['Next.js', 'Node.js', 'FeathersJS', 'PostgreSQL', 'MongoDB'],
    details: {
      problem: 'High-stakes order processing and authentication workflows requiring 100% stability and availability.',
      solution: 'Developed secure REST APIs with RBAC and took full responsibility for features, collaborating closely with QA.',
      outcome: 'Received Certificate of Appreciation for commitment and prompt issue resolution.',
    }
  },
  {
    title: 'MedCMS',
    role: 'Full Stack Developer',
    description: 'Specialized Content Management System for clinical data, focused on stability and feature completeness.',
    tech: ['React', 'Backend APIs', 'Database Integration'],
    details: {
      problem: 'Ensuring reliable data management and system robustness for medical content through evolving requirements.',
      solution: 'Completed intensive tasks within strict deadlines, contributing to overall stability and platform completeness.',
      outcome: 'Improved system stability and reduced post-release defects through proactive QA collaboration.',
    },
    link: 'https://medcms.emrx.in/',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl text-center">
            Featured <span className="text-indigo-500">Projects</span>
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground">
            A selection of my professional work, ranging from rapid POCs to production-grade features.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-background transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex h-48 items-center justify-center bg-muted">
                <Layers className="h-12 w-12 text-muted-foreground/20 group-hover:text-indigo-500/20 transition-colors" />
              </div>
              
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-indigo-500 transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="mb-4 text-sm font-medium text-indigo-500">{project.role}</p>
                <p className="mb-6 flex-1 text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6 space-y-4">
                  <div>
                    <h4 className="text-xs font-bold uppercase text-muted-foreground mb-1">Impact</h4>
                    <p className="text-sm text-foreground">{project.details.outcome}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground bg-muted px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
