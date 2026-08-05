'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { siteConfig } from '@/lib/data';

const pillars = [
  { label: 'Production ownership', detail: 'End-to-end from architecture to deployment' },
  { label: 'Full-stack SaaS depth', detail: 'Lead contributor on a multi-tenant radiology SaaS — clinical editors, LLM pipelines, PDF generation, billing systems' },
  { label: 'Niche depth', detail: 'Healthcare SaaS, HIPAA architecture, DICOM, IoT — rare combination at this level' },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Engineer who builds <span className="text-indigo-500">systems</span>, not just features.
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            I started with a B.Tech in Textile Technology and made a self-directed transition into
            software engineering through production work — no bootcamp, no shortcuts. In 2+ years
            I&apos;ve served as lead full-stack contributor on a multi-tenant SaaS radiology platform
            (1,300+ commits), architected a HIPAA-compliant multi-tenant auth system with AWS Cognito,
            built real-time AI document classification pipelines with GraphQL subscriptions and
            Inngest, and shipped IoT edge services on Raspberry Pi running in hospitals. I work across
            the full backend stack — from system design to production deployment — and take full
            ownership of what I build.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {pillars.map((pillar) => (
              <div key={pillar.label} className="rounded-xl border border-border p-4 bg-muted/30">
                <p className="text-sm font-semibold text-foreground">{pillar.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{pillar.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <a
              href={siteConfig.resumeUrl}
              download
              className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Download Resume
              <Download className="ml-2 h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
