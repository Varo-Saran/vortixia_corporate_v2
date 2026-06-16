"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '../ThemeToggle';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // ── Auto-close on route change ────────────────────────────────────────────
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // ── Lock body scroll while menu is open ───────────────────────────────────
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // "Home" removed — the logo is the home link
  const navLinks = [
    { href: '/about',          label: 'About'    },
    { href: '/services',       label: 'Services' },
    { href: '/projects',       label: 'Work'     },
    { href: '/process',        label: 'Process'  },
    { href: '/open-positions', label: 'Careers'  },
    { href: '/contact',        label: 'Contact'  },
  ];

  return (
    <>
      {/* ── NAVBAR BAR (always on top at z-50) ── */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b-2 border-[#111112] dark:border-[#2A2A2C] bg-[#F9F9FB]/90 dark:bg-[#0B0B0C]/90 backdrop-blur-md transition-colors duration-300">
        <div className="container mx-auto px-6 xl:px-12 py-0 flex items-stretch justify-between min-h-[56px] lg:min-h-[64px]">

          {/* Logo */}
          <Link
            href="/"
            className="font-display font-bold text-2xl lg:text-3xl uppercase tracking-tighter text-[#111112] dark:text-[#F9F9FB] flex items-center pr-4 lg:pr-8 flex-shrink-0"
          >
            Vortixia
          </Link>

          {/* Desktop Nav — hidden below lg */}
          <div className="hidden lg:flex items-stretch gap-0 flex-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-sans uppercase font-bold tracking-wider text-xs px-4 xl:px-5 flex items-center border-b-2 transition-colors whitespace-nowrap ${
                    isActive
                      ? 'text-accent-volt border-accent-volt'
                      : 'text-[#111112] dark:text-[#F9F9FB] border-transparent hover:text-accent-volt dark:hover:text-accent-volt hover:border-accent-volt'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right cluster */}
          <div className="flex items-center gap-2 lg:gap-3 ml-auto lg:ml-0">
            <ThemeToggle />

            {/* Desktop CTA — hidden below lg */}
            <Link
              href="/contact"
              className="hidden lg:flex items-center font-sans font-bold uppercase tracking-widest text-xs px-4 xl:px-6 py-2.5 border-2 border-[#111112] dark:border-[#F9F9FB] bg-accent-volt text-[#111112] hover:bg-[#111112] hover:text-accent-volt transition-colors shadow-[3px_3px_0px_0px_#111112] dark:shadow-[3px_3px_0px_0px_#F9F9FB] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#111112] whitespace-nowrap h-[38px]"
            >
              Start a Project
            </Link>

            {/* Mobile hamburger — hidden at lg+ */}
            <button
              onClick={() => setIsOpen((v) => !v)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              className="lg:hidden w-10 h-10 border-2 border-[#111112] dark:border-[#2A2A2C] flex flex-col justify-center items-center gap-[5px] p-2.5 bg-[#F9F9FB] dark:bg-[#111112] flex-shrink-0"
            >
              <span className={`block w-5 h-0.5 bg-[#111112] dark:bg-[#F9F9FB] origin-center transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block w-5 h-0.5 bg-[#111112] dark:bg-[#F9F9FB] transition-all duration-300 ${isOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-[#111112] dark:bg-[#F9F9FB] origin-center transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* ── MOBILE MENU (rendered OUTSIDE <nav> so z-index works correctly) ── */}

      {/* Backdrop — click to close */}
      <div
        aria-hidden="true"
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-[45] bg-black/60 lg:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Slide-down panel */}
      <div
        className={`fixed top-0 left-0 right-0 z-[48] lg:hidden bg-[#F9F9FB] dark:bg-[#0B0B0C] border-b-2 border-[#111112] dark:border-[#2A2A2C] transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Push content below the navbar bar height */}
        <div className="pt-[56px] px-6 pb-8 flex flex-col">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block font-display text-3xl sm:text-4xl font-bold uppercase tracking-widest border-b-2 py-5 w-full transition-colors ${
                  isActive
                    ? 'text-accent-volt border-accent-volt'
                    : 'text-[#111112] dark:text-[#F9F9FB] border-[#111112]/20 dark:border-[#2A2A2C] hover:text-accent-volt hover:border-accent-volt'
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-6 block text-center w-full bg-accent-volt text-[#111112] font-bold uppercase tracking-widest py-5 border-2 border-[#111112] text-sm shadow-[4px_4px_0px_0px_#111112] hover:bg-[#111112] hover:text-accent-volt transition-colors"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </>
  );
}
