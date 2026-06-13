import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t-2 border-[#111112] dark:border-[#2A2A2C] bg-[#F9F9FB]/75 dark:bg-[#0B0B0C]/75 backdrop-blur-md mt-auto transition-colors duration-300">
      <div className="container mx-auto px-6 py-16">
        <h2 className="font-display font-bold text-7xl md:text-9xl uppercase tracking-tighter mb-16 text-[#111112] dark:text-[#F9F9FB] border-b-2 border-[#111112] dark:border-[#2A2A2C] pb-8">
          VORTIXIA.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="flex flex-col">
            <h3 className="font-sans font-bold uppercase tracking-widest text-sm text-accent-volt bg-transparent w-max border-b-2 border-accent-volt pb-1 mb-6">Company</h3>
            <Link href="/about" className="font-sans text-[#111112] dark:text-[#F9F9FB] hover:text-accent-volt dark:hover:text-accent-volt transition-colors font-bold uppercase tracking-widest mb-4">About Us</Link>
            <Link href="/team" className="font-sans text-[#111112] dark:text-[#F9F9FB] hover:text-accent-volt dark:hover:text-accent-volt transition-colors font-bold uppercase tracking-widest mb-4">Our Team</Link>
            <Link href="/contact" className="font-sans text-[#111112] dark:text-[#F9F9FB] hover:text-accent-volt dark:hover:text-accent-volt transition-colors font-bold uppercase tracking-widest mb-4">Contact</Link>
          </div>
          
          <div className="flex flex-col">
            <h3 className="font-sans font-bold uppercase tracking-widest text-sm text-accent-volt bg-transparent w-max border-b-2 border-accent-volt pb-1 mb-6">Services</h3>
            <Link href="/services" className="font-sans text-[#111112] dark:text-[#F9F9FB] hover:text-accent-volt dark:hover:text-accent-volt transition-colors font-bold uppercase tracking-widest mb-4">Software Dev</Link>
            <Link href="/services" className="font-sans text-[#111112] dark:text-[#F9F9FB] hover:text-accent-volt dark:hover:text-accent-volt transition-colors font-bold uppercase tracking-widest mb-4">Data Analysis</Link>
            <Link href="/services" className="font-sans text-[#111112] dark:text-[#F9F9FB] hover:text-accent-volt dark:hover:text-accent-volt transition-colors font-bold uppercase tracking-widest mb-4">Graphic Design</Link>
            <Link href="/services" className="font-sans text-[#111112] dark:text-[#F9F9FB] hover:text-accent-volt dark:hover:text-accent-volt transition-colors font-bold uppercase tracking-widest mb-4">Cyber Security</Link>
          </div>
          
          <div className="flex flex-col">
            <h3 className="font-sans font-bold uppercase tracking-widest text-sm text-accent-volt bg-transparent w-max border-b-2 border-accent-volt pb-1 mb-6">Careers</h3>
            <Link href="/open-positions" className="font-sans text-[#111112] dark:text-[#F9F9FB] hover:text-accent-volt dark:hover:text-accent-volt transition-colors font-bold uppercase tracking-widest mb-4">Open Roles</Link>
            <Link href="/open-positions" className="font-sans text-[#111112] dark:text-[#F9F9FB] hover:text-accent-volt dark:hover:text-accent-volt transition-colors font-bold uppercase tracking-widest mb-4">Life at Vortixia</Link>
          </div>

          <div className="flex flex-col">
            <h3 className="font-sans font-bold uppercase tracking-widest text-sm text-accent-volt bg-transparent w-max border-b-2 border-accent-volt pb-1 mb-6">Connect</h3>
            <a href="mailto:varosaran@gmail.com" className="font-sans text-[#111112] dark:text-[#F9F9FB] hover:text-accent-volt dark:hover:text-accent-volt transition-colors font-bold uppercase tracking-widest mb-4">Email Us</a>
            <a href="https://linkedin.com" className="font-sans text-[#111112] dark:text-[#F9F9FB] hover:text-accent-volt dark:hover:text-accent-volt transition-colors font-bold uppercase tracking-widest mb-4">LinkedIn</a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t-2 border-[#111112] dark:border-[#2A2A2C] flex justify-between items-center">
          <p className="font-sans text-[#111112] dark:text-[#F9F9FB] text-sm uppercase tracking-widest font-bold">© 2026 Vortixia. All rights reserved.</p>
          <p className="font-sans text-[#111112] dark:text-[#F9F9FB] text-sm uppercase tracking-widest font-bold">Digital Excellence Reimagined</p>
        </div>
      </div>
    </footer>
  );
}
