import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="border-b-2 border-stark bg-primary">
      <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        <Link href="/" className="font-display font-bold text-3xl uppercase tracking-tighter text-main">
          Vortixia
        </Link>
        <div className="flex gap-8 items-center">
          <Link href="/" className="font-sans uppercase font-bold tracking-widest text-sm hover:text-accent-volt hover:bg-main transition-colors px-2 py-1">Home</Link>
          <Link href="/about" className="font-sans uppercase font-bold tracking-widest text-sm hover:text-accent-volt hover:bg-main transition-colors px-2 py-1">About</Link>
          <Link href="/services" className="font-sans uppercase font-bold tracking-widest text-sm hover:text-accent-volt hover:bg-main transition-colors px-2 py-1">Services</Link>
          <Link href="/projects" className="font-sans uppercase font-bold tracking-widest text-sm hover:text-accent-volt hover:bg-main transition-colors px-2 py-1">Projects</Link>
          <Link href="/team" className="font-sans uppercase font-bold tracking-widest text-sm hover:text-accent-volt hover:bg-main transition-colors px-2 py-1">Team</Link>
          <Link href="/open-positions" className="font-sans uppercase font-bold tracking-widest text-sm hover:text-accent-volt hover:bg-main transition-colors px-2 py-1">Careers</Link>
          <Link href="/contact" className="neo-btn bg-primary text-main hover:bg-accent-volt rounded-none">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
