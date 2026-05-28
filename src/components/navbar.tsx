'use client';

import * as React from 'react';
import { ThemeToggle } from './theme-toggle';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/lib/data';

const navItems = [
  { name: 'About',      href: '#about' },
  { name: 'Skills',     href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects',   href: '#projects' },
  { name: 'Contact',    href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent',
        isScrolled ? 'bg-background/80 backdrop-blur-md border-border py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a href="#" className="text-xl font-bold tracking-tight">
            {siteConfig.name.split(' ')[0]}<span className="text-indigo-500">.</span>
          </a>
          <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-green-500/10 px-2 py-0.5 text-[10px] font-medium text-green-600 dark:text-green-400">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
            Open to Work
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <a
            href="#contact"
            suppressHydrationWarning
            className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}
