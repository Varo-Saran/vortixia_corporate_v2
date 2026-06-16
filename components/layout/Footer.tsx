import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t-2 border-[#111112] dark:border-[#2A2A2C] bg-[#F9F9FB] dark:bg-[#0B0B0C] mt-auto transition-colors duration-300">
      <div className="container mx-auto px-6 py-16">

        {/* Brand Block */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8 border-b-2 border-[#111112] dark:border-[#2A2A2C] pb-12">
          <h2 className="font-display font-bold text-7xl md:text-9xl uppercase tracking-tighter text-[#111112] dark:text-[#F9F9FB] leading-none">
            VORTIXIA.
          </h2>
          <p className="font-sans text-[#111112] dark:text-[#F9F9FB] opacity-70 max-w-lg lg:self-end text-lg leading-relaxed">
            Vortixia is a specialized technology collective delivering enterprise-grade AI, data, and design solutions with the agility and personalized attention of a dedicated startup team.
          </p>
        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {/* Company */}
          <div className="flex flex-col">
            <h3 className="font-sans font-bold uppercase tracking-widest text-sm text-accent-volt border-b-2 border-accent-volt pb-1 mb-6 w-max">
              Company
            </h3>
            <Link href="/about" className="font-sans text-[#111112] dark:text-[#F9F9FB] hover:text-accent-volt dark:hover:text-accent-volt transition-colors font-bold uppercase tracking-widest text-sm mb-4">About Us</Link>
            <Link href="/process" className="font-sans text-[#111112] dark:text-[#F9F9FB] hover:text-accent-volt dark:hover:text-accent-volt transition-colors font-bold uppercase tracking-widest text-sm mb-4">Our Process</Link>
            <Link href="/open-positions" className="font-sans text-[#111112] dark:text-[#F9F9FB] hover:text-accent-volt dark:hover:text-accent-volt transition-colors font-bold uppercase tracking-widest text-sm mb-4">Careers</Link>
            <Link href="/contact" className="font-sans text-[#111112] dark:text-[#F9F9FB] hover:text-accent-volt dark:hover:text-accent-volt transition-colors font-bold uppercase tracking-widest text-sm mb-4">Contact</Link>
          </div>

          {/* Services */}
          <div className="flex flex-col">
            <h3 className="font-sans font-bold uppercase tracking-widest text-sm text-accent-volt border-b-2 border-accent-volt pb-1 mb-6 w-max">
              Services
            </h3>
            <Link href="/services" className="font-sans text-[#111112] dark:text-[#F9F9FB] hover:text-accent-volt dark:hover:text-accent-volt transition-colors font-bold uppercase tracking-widest text-sm mb-4">AI Solutions</Link>
            <Link href="/services" className="font-sans text-[#111112] dark:text-[#F9F9FB] hover:text-accent-volt dark:hover:text-accent-volt transition-colors font-bold uppercase tracking-widest text-sm mb-4">Data & Analytics</Link>
            <Link href="/services" className="font-sans text-[#111112] dark:text-[#F9F9FB] hover:text-accent-volt dark:hover:text-accent-volt transition-colors font-bold uppercase tracking-widest text-sm mb-4">Cybersecurity</Link>
            <Link href="/services" className="font-sans text-[#111112] dark:text-[#F9F9FB] hover:text-accent-volt dark:hover:text-accent-volt transition-colors font-bold uppercase tracking-widest text-sm mb-4">Web & App Dev</Link>
            <Link href="/services" className="font-sans text-[#111112] dark:text-[#F9F9FB] hover:text-accent-volt dark:hover:text-accent-volt transition-colors font-bold uppercase tracking-widest text-sm mb-4">Design</Link>
          </div>

          {/* Resources */}
          <div className="flex flex-col">
            <h3 className="font-sans font-bold uppercase tracking-widest text-sm text-accent-volt border-b-2 border-accent-volt pb-1 mb-6 w-max">
              Resources
            </h3>
            <span className="font-sans text-[#111112] dark:text-[#F9F9FB] opacity-40 font-bold uppercase tracking-widest text-sm mb-4 cursor-default">Blog <span className="text-xs">(coming soon)</span></span>
            <Link href="/projects" className="font-sans text-[#111112] dark:text-[#F9F9FB] hover:text-accent-volt dark:hover:text-accent-volt transition-colors font-bold uppercase tracking-widest text-sm mb-4">Case Studies</Link>
            <Link href="/#tech-stack" className="font-sans text-[#111112] dark:text-[#F9F9FB] hover:text-accent-volt dark:hover:text-accent-volt transition-colors font-bold uppercase tracking-widest text-sm mb-4">Tech Stack</Link>
            <Link href="/contact" className="font-sans text-[#111112] dark:text-[#F9F9FB] hover:text-accent-volt dark:hover:text-accent-volt transition-colors font-bold uppercase tracking-widest text-sm mb-4">FAQ</Link>
          </div>

          {/* Connect */}
          <div className="flex flex-col">
            <h3 className="font-sans font-bold uppercase tracking-widest text-sm text-accent-volt border-b-2 border-accent-volt pb-1 mb-6 w-max">
              Connect
            </h3>
            <a href="mailto:hello@vortixia.com" className="font-sans text-[#111112] dark:text-[#F9F9FB] hover:text-accent-volt dark:hover:text-accent-volt transition-colors font-bold uppercase tracking-widest text-sm mb-4">
              hello@vortixia.com
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="font-sans text-[#111112] dark:text-[#F9F9FB] hover:text-accent-volt dark:hover:text-accent-volt transition-colors font-bold uppercase tracking-widest text-sm mb-4">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="font-sans text-[#111112] dark:text-[#F9F9FB] hover:text-accent-volt dark:hover:text-accent-volt transition-colors font-bold uppercase tracking-widest text-sm mb-4">Twitter / X</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="font-sans text-[#111112] dark:text-[#F9F9FB] hover:text-accent-volt dark:hover:text-accent-volt transition-colors font-bold uppercase tracking-widest text-sm mb-4">GitHub</a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t-2 border-[#111112] dark:border-[#2A2A2C] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex flex-wrap gap-4 items-center">
            <p className="font-sans text-[#111112] dark:text-[#F9F9FB] text-xs uppercase tracking-widest font-bold">
              © 2026 Vortixia. All rights reserved.
            </p>
            <span className="text-[#111112] dark:text-[#F9F9FB] opacity-30">|</span>
            <Link href="/contact" className="font-sans text-[#111112] dark:text-[#F9F9FB] hover:text-accent-volt text-xs uppercase tracking-widest font-bold transition-colors">Privacy Policy</Link>
            <span className="text-[#111112] dark:text-[#F9F9FB] opacity-30">|</span>
            <Link href="/contact" className="font-sans text-[#111112] dark:text-[#F9F9FB] hover:text-accent-volt text-xs uppercase tracking-widest font-bold transition-colors">Terms of Service</Link>
          </div>
          <p className="font-sans text-[#111112] dark:text-[#F9F9FB] text-xs uppercase tracking-widest font-bold">
            Small Team. <span className="text-accent-volt">Massive Impact.</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
