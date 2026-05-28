'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import { siteConfig } from '@/lib/data';

export function Contact() {
  const [state, handleSubmit] = useForm("xeeleobq");

  if (state.succeeded) {
    return (
      <section id="contact" className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mx-auto max-w-2xl text-center rounded-2xl border border-border bg-background p-12 shadow-lg"
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 text-green-500">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <h2 className="mb-4 text-3xl font-bold">Message Sent!</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Thanks for reaching out. I&apos;ll get back to you soon.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Send Another Message
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Let&apos;s build <span className="text-indigo-500">something.</span>
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Open to backend and cloud engineering roles in Bangalore or remote.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-4 rounded-lg border border-border p-4 hover:border-indigo-500/50 transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-500">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Email</p>
                  <p className="font-bold text-foreground">{siteConfig.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-lg border border-border p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-blue-500">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Phone</p>
                  <p className="font-bold text-foreground">{siteConfig.phone}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-background p-8 shadow-lg"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  suppressHydrationWarning
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs text-red-500" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  suppressHydrationWarning
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-500" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell me about your project..."
                  rows={4}
                  suppressHydrationWarning
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-500" />
              </div>
              <button
                type="submit"
                disabled={state.submitting}
                suppressHydrationWarning
                className="w-full inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting ? 'Sending...' : 'Send Message'}
                <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
