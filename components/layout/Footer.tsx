import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t-2 border-stark bg-dark py-16 mt-auto">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <h2 className="font-display font-bold text-3xl uppercase tracking-tighter mb-4 text-[#F9F9FB]">Vortixia</h2>
          <p className="text-muted font-sans text-base">Creating innovative digital solutions for tomorrow's challenges.</p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-sans font-bold uppercase tracking-widest text-sm text-accent-volt mb-2">Company</h3>
          <Link href="/about" className="font-sans text-muted hover:text-[#F9F9FB] transition-colors">About Us</Link>
          <Link href="/team" className="font-sans text-muted hover:text-[#F9F9FB] transition-colors">Our Team</Link>
          <Link href="/contact" className="font-sans text-muted hover:text-[#F9F9FB] transition-colors">Contact</Link>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-sans font-bold uppercase tracking-widest text-sm text-accent-volt mb-2">Services</h3>
          <Link href="/services" className="font-sans text-muted hover:text-[#F9F9FB] transition-colors">Software Development</Link>
          <Link href="/services" className="font-sans text-muted hover:text-[#F9F9FB] transition-colors">Data Analysis</Link>
          <Link href="/services" className="font-sans text-muted hover:text-[#F9F9FB] transition-colors">Graphic Design</Link>
          <Link href="/services" className="font-sans text-muted hover:text-[#F9F9FB] transition-colors">Cyber Security</Link>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-sans font-bold uppercase tracking-widest text-sm text-accent-volt mb-2">Careers</h3>
          <Link href="/open-positions" className="font-sans text-muted hover:text-[#F9F9FB] transition-colors">Open Positions</Link>
          <Link href="/submit-resume" className="font-sans text-muted hover:text-[#F9F9FB] transition-colors">Submit Resume</Link>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-16 pt-8 border-t-2 border-stark">
        <p className="font-sans text-muted text-sm uppercase tracking-widest">© 2026 Vortixia. All rights reserved.</p>
      </div>
    </footer>
  );
}
