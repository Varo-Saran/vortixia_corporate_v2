import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col bg-[#F9F9FB] dark:bg-[#0B0B0C] transition-colors duration-300">
      <section className="relative w-full min-h-[100svh] flex flex-col justify-center pt-48 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="font-display text-6xl md:text-8xl mb-8 uppercase leading-none tracking-tighter text-[#111112] dark:text-[#F9F9FB]">
              Digital Excellence Reimagined
            </h1>
            <p className="font-sans text-2xl text-[#111112] dark:text-[#F9F9FB] mb-12 max-w-3xl leading-relaxed">
              Elevating businesses through innovative digital solutions and strategic transformation.
              Delivering enterprise-grade solutions with cutting-edge technology and proven expertise.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link href="/services" className="font-bold uppercase tracking-widest border-2 border-[#111112] dark:border-[#F9F9FB] bg-accent-volt hover:bg-[#111112] hover:text-accent-volt dark:hover:bg-[#F9F9FB] dark:hover:text-[#111112] text-[#111112] text-lg px-8 py-4 rounded-none shadow-[4px_4px_0px_0px_#111112] dark:shadow-[4px_4px_0px_0px_#F9F9FB] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#111112] dark:active:shadow-[2px_2px_0px_0px_#F9F9FB] transition-all">
                Explore Solutions
              </Link>
              <Link href="/projects" className="font-bold uppercase tracking-widest border-2 border-[#111112] dark:border-[#F9F9FB] bg-[#F9F9FB] dark:bg-[#0B0B0C] text-[#111112] dark:text-[#F9F9FB] hover:bg-[#111112] hover:text-[#F9F9FB] dark:hover:bg-[#F9F9FB] dark:hover:text-[#111112] text-lg px-8 py-4 rounded-none shadow-[4px_4px_0px_0px_#111112] dark:shadow-[4px_4px_0px_0px_#F9F9FB] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#111112] dark:active:shadow-[2px_2px_0px_0px_#F9F9FB] transition-all">
                View Portfolio
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Scroll Indicator */}
        <Link href="#services" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#111112] dark:text-[#F9F9FB] opacity-40 hover:opacity-100 hover:text-accent-volt dark:hover:text-accent-volt transition-all animate-bounce cursor-pointer p-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </Link>
      </section>

      <section id="services" className="bg-[#111112] dark:bg-[#000000] border-t-2 border-[#F9F9FB] dark:border-[#2A2A2C] py-32 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-5xl md:text-6xl uppercase mb-16 text-[#F9F9FB] tracking-tight">
            Our Services
          </h2>
          <div className="bento-grid">
            <div className="bento-item-large border-2 border-[#F9F9FB] dark:border-[#2A2A2C] p-12 bg-[#F9F9FB]/10 dark:bg-[#0B0B0C]/50 backdrop-blur-md rounded-none hover:bg-[#F9F9FB]/20 transition-colors">
              <div className="w-12 h-12 bg-accent-volt mb-8 border-2 border-[#F9F9FB] dark:border-[#2A2A2C] flex items-center justify-center">
                <span className="font-bold text-xl text-[#111112]">01</span>
              </div>
              <h3 className="font-display text-3xl uppercase mb-6 text-accent-volt">Software & Web Development</h3>
              <p className="font-sans text-xl text-[#F9F9FB] leading-relaxed max-w-2xl">
                We create cutting-edge software and web solutions tailored to your specific business requirements.
              </p>
            </div>
            <div className="bento-item-small p-12 rounded-none bg-[#F9F9FB]/90 dark:bg-[#111112]/90 backdrop-blur-md border-2 border-[#F9F9FB] dark:border-[#2A2A2C] hover:bg-[#F9F9FB] dark:hover:bg-[#111112] transition-colors">
              <div className="w-12 h-12 bg-accent-volt text-[#111112] mb-8 border-2 border-[#F9F9FB] dark:border-[#2A2A2C] flex items-center justify-center">
                <span className="font-bold text-xl">02</span>
              </div>
              <h3 className="font-display text-2xl uppercase mb-6 text-[#111112] dark:text-[#F9F9FB]">Data Analysis</h3>
              <p className="font-sans text-lg text-[#111112] dark:text-[#F9F9FB]">
                Transform your raw data into actionable insights that drive informed decision-making.
              </p>
            </div>
            <div className="bento-item-small p-12 rounded-none bg-[#F9F9FB]/90 dark:bg-[#111112]/90 backdrop-blur-md border-2 border-[#F9F9FB] dark:border-[#2A2A2C] hover:bg-[#F9F9FB] dark:hover:bg-[#111112] transition-colors">
              <div className="w-12 h-12 bg-accent-volt text-[#111112] mb-8 border-2 border-[#F9F9FB] dark:border-[#2A2A2C] flex items-center justify-center">
                <span className="font-bold text-xl">03</span>
              </div>
              <h3 className="font-display text-2xl uppercase mb-6 text-[#111112] dark:text-[#F9F9FB]">Cybersecurity</h3>
              <p className="font-sans text-lg text-[#111112] dark:text-[#F9F9FB]">
                Protect your digital assets and ensure the integrity of your business operations.
              </p>
            </div>
            <div className="bento-item-large border-2 border-[#F9F9FB] dark:border-[#2A2A2C] p-12 bg-[#F9F9FB]/10 dark:bg-[#0B0B0C]/50 backdrop-blur-md rounded-none hover:bg-[#F9F9FB]/20 transition-colors">
              <div className="w-12 h-12 bg-accent-volt mb-8 border-2 border-[#F9F9FB] dark:border-[#2A2A2C] flex items-center justify-center">
                <span className="font-bold text-xl text-[#111112]">04</span>
              </div>
              <h3 className="font-display text-3xl uppercase mb-6 text-accent-volt">Graphic Design</h3>
              <p className="font-sans text-xl text-[#F9F9FB] leading-relaxed max-w-2xl">
                Elevate your brand with visually stunning designs that captivate your audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Client Impact Section */}
      <section className="bg-[#F9F9FB] dark:bg-[#0B0B0C] py-32 border-t-2 border-[#111112] dark:border-[#2A2A2C] transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-display text-5xl md:text-6xl uppercase tracking-tight text-[#111112] dark:text-[#F9F9FB] mb-6">
                Client Impact
              </h2>
              <p className="font-sans text-xl text-[#111112] dark:text-[#F9F9FB]">
                We measure our success entirely by the transformative results and competitive advantages we deliver to our partners.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-16 border-2 border-[#111112] dark:border-[#2A2A2C] flex flex-col justify-between bg-white dark:bg-[#111112]/90 backdrop-blur-md shadow-[4px_4px_0px_0px_#111112] dark:shadow-[4px_4px_0px_0px_#2A2A2C] hover:-translate-y-1 hover:translate-x-1 transition-transform">
              <h3 className="font-display text-3xl md:text-4xl leading-tight mb-8 text-[#111112] dark:text-[#F9F9FB]">
                "Vortixia entirely transformed our backend architecture. Their transition to Next.js and robust database integration reduced our global latency by over 40%."
              </h3>
              <div className="border-l-2 border-accent-volt pl-4">
                <p className="font-sans font-bold uppercase tracking-widest text-[#111112] dark:text-[#F9F9FB]">SARAH CHEN, CTO GLOBAL LOGISTICS</p>
              </div>
            </div>
            <div className="p-16 border-2 border-[#111112] dark:border-[#2A2A2C] flex flex-col justify-between bg-white dark:bg-[#111112]/90 backdrop-blur-md shadow-[4px_4px_0px_0px_#111112] dark:shadow-[4px_4px_0px_0px_#2A2A2C] hover:-translate-y-1 hover:translate-x-1 transition-transform">
              <h3 className="font-display text-3xl md:text-4xl leading-tight mb-8 text-[#111112] dark:text-[#F9F9FB]">
                "Uncompromising engineering standards. They delivered a highly secure, scalable platform that completely eliminated our previous data bottlenecks."
              </h3>
              <div className="border-l-2 border-accent-volt pl-4">
                <p className="font-sans font-bold uppercase tracking-widest text-[#111112] dark:text-[#F9F9FB]">MARCUS VANCE, VP OPERATIONS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F9F9FB] dark:bg-[#0B0B0C] py-32 border-t-2 border-[#111112] dark:border-[#2A2A2C] transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-display text-5xl md:text-6xl uppercase tracking-tight text-[#111112] dark:text-[#F9F9FB] mb-6">
                Featured Projects
              </h2>
              <p className="font-sans text-xl text-[#111112] dark:text-[#F9F9FB]">
                Explore some of our recent work and see how we’ve helped businesses achieve their goals through innovative digital solutions.
              </p>
            </div>
            <Link href="/projects" className="font-bold uppercase tracking-widest border-2 border-[#111112] dark:border-[#F9F9FB] px-8 py-4 whitespace-nowrap bg-[#111112] text-[#F9F9FB] dark:bg-[#F9F9FB] dark:text-[#111112] hover:bg-accent-volt hover:text-[#111112] dark:hover:bg-accent-volt dark:hover:text-[#111112] shadow-[4px_4px_0px_0px_#111112] dark:shadow-[4px_4px_0px_0px_#F9F9FB] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#111112] dark:active:shadow-[2px_2px_0px_0px_#F9F9FB] transition-all">
              All Projects
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { id: 1, title: 'E-Commerce Platform', text: 'We developed a fully customized e-commerce platform for a retail client, featuring seamless payment integration and a user-friendly interface.' },
              { id: 2, title: 'Data Analytics Dashboard', text: 'Created a data analytics dashboard for a financial services company, enabling real-time insights and decision-making.' },
              { id: 3, title: 'Mobile App Development', text: 'Designed and developed a mobile app for a fitness startup, offering workout tracking and personalized recommendations.' }
            ].map((proj, index) => (
              <div key={proj.id} className="p-0 border-2 border-[#111112] dark:border-[#2A2A2C] flex flex-col group rounded-none bg-white dark:bg-[#111112]/90 backdrop-blur-md shadow-[4px_4px_0px_0px_#111112] dark:shadow-[4px_4px_0px_0px_#2A2A2C] hover:-translate-y-2 hover:translate-x-2 transition-transform hover:shadow-[12px_12px_0px_0px_#111112] dark:hover:shadow-[12px_12px_0px_0px_#2A2A2C]">
                <div className="h-64 border-b-2 border-[#111112] dark:border-[#2A2A2C] relative overflow-hidden bg-[#111112]">
                  <Image 
                    src={`/images/projects/project${proj.id}.png`} 
                    alt={proj.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={index === 0}
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 border-b-8 border-accent-volt transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </div>
                <div className="p-12 flex flex-col flex-grow">
                  <h3 className="font-display text-2xl uppercase mb-4 text-[#111112] dark:text-[#F9F9FB] group-hover:text-accent-volt transition-colors">{proj.title}</h3>
                  <p className="font-sans text-[#111112] dark:text-[#F9F9FB] mb-8 flex-grow">{proj.text}</p>
                  <Link href="/projects" className="text-sm font-bold uppercase tracking-widest text-[#111112] dark:text-[#F9F9FB] group-hover:text-accent-volt transition-colors flex items-center gap-2 w-max border-b-2 border-transparent group-hover:border-accent-volt pb-1">
                    Learn More <span className="text-xl">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
