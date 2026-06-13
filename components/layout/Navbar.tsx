"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '../ThemeToggle';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/team', label: 'Team' },
    { href: '/open-positions', label: 'Careers' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 m-0 border-b-2 border-[#111112] dark:border-[#2A2A2C] bg-[#F9F9FB]/75 dark:bg-[#0B0B0C]/75 backdrop-blur-md transition-colors duration-300">
      <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        <Link href="/" className="font-display font-bold text-3xl uppercase tracking-tighter text-[#111112] dark:text-[#F9F9FB]">
          Vortixia
        </Link>
        <div className="flex gap-8 items-center hidden md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`font-sans uppercase font-bold tracking-widest text-sm px-2 py-1 border-b-2 transition-colors ${
                  isActive 
                    ? 'text-accent-volt border-accent-volt' 
                    : 'text-[#111112] dark:text-[#F9F9FB] border-transparent hover:text-accent-volt dark:hover:text-accent-volt hover:border-accent-volt'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          
          <ThemeToggle />

          <Link href="/contact" className="font-sans font-bold uppercase tracking-widest text-sm px-6 py-3 border-2 border-[#111112] dark:border-[#F9F9FB] bg-[#111112] dark:bg-[#F9F9FB] text-[#F9F9FB] dark:text-[#111112] hover:bg-accent-volt hover:text-[#111112] hover:border-[#111112] dark:hover:bg-accent-volt dark:hover:border-accent-volt transition-colors shadow-[4px_4px_0px_0px_#111112] dark:shadow-[4px_4px_0px_0px_#F9F9FB] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#111112] dark:active:shadow-[2px_2px_0px_0px_#F9F9FB]">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
