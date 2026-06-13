import Link from 'next/link';
import Image from 'next/image';

export default function ServicesPage() {
  return (
    <div className="flex flex-col bg-[#F9F9FB] dark:bg-[#0B0B0C] transition-colors duration-300">
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-16 border-b-2 border-[#111112] dark:border-[#2A2A2C]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
          {/* LEFT COLUMN: Typography */}
          <div className="flex flex-col">
            <span className="font-sans uppercase font-bold tracking-widest text-sm text-accent-volt mb-6 block bg-[#111112] dark:bg-[#2A2A2C] px-4 py-2 inline-block self-start">What we deliver</span>
            <h1 className="font-display text-5xl md:text-7xl uppercase tracking-tighter leading-none font-bold text-[#111112] dark:text-[#F9F9FB]">
              ENGINEERED FOR SCALE.
            </h1>
            <p className="border-l-4 border-accent-volt pl-6 text-[#111112] dark:text-[#F9F9FB] opacity-80 mt-8 max-w-md font-sans text-xl leading-relaxed">
              We architect high-performance, strictly typed digital infrastructure. Zero boilerplate. Zero technical debt. Only uncompromising, precision-engineered environments.
            </p>
          </div>

          {/* RIGHT COLUMN: Asset Containment */}
          <div className="w-full h-[400px] md:h-[500px] relative border-2 border-[#111112] dark:border-[#2A2A2C] p-2 bg-[#F9F9FB]/75 dark:bg-[#0B0B0C]/75 backdrop-blur-md shadow-[8px_8px_0px_0px_#111112] dark:shadow-[8px_8px_0px_0px_#2A2A2C]">
            <div className="relative w-full h-full border-2 border-[#111112] dark:border-[#2A2A2C] overflow-hidden">
              <Image 
                src="/images/services/services-hero.png" 
                alt="Abstract Corporate Tech Data Structures" 
                fill 
                priority={true}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale contrast-125"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Matrix */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="mb-24">
            <span className="font-sans uppercase font-bold tracking-widest text-sm text-accent-volt mb-6 block bg-[#111112] dark:bg-[#2A2A2C] px-4 py-2 inline-block">Core capabilities</span>
            <h2 className="font-display text-5xl md:text-6xl uppercase tracking-tight text-[#111112] dark:text-[#F9F9FB] max-w-3xl">
              Flexible engagements tailored to your business goals.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { id: '01', title: 'Cybersecurity', desc: 'Military-grade threat modeling and perimeter defense. We fortify enterprise networks against modern vulnerabilities.', cta: 'Strengthen security', span: 'md:col-span-2' },
              { id: '02', title: 'Custom Software', desc: 'Bespoke, high-velocity application architectures. Built on Next.js and Drizzle for absolute type safety and minimal latency.', cta: 'Explore build services', span: 'md:col-span-1' },
              { id: '03', title: 'Cloud Infrastructure', desc: 'Scalable, serverless deployment pipelines. We optimize your operational matrix for zero-downtime global availability.', cta: 'Scale in the cloud', span: 'md:col-span-2' },
              { id: '04', title: 'Data Analytics', desc: 'Translating raw pipeline metrics into actionable structural intelligence. Deep data mapping and algorithmic forecasting.', cta: 'Discover analytics', span: 'md:col-span-1' },
              { id: '05', title: 'UI/UX Design', desc: 'High-contrast, intentional interfaces. We discard generic boilerplate in favor of stark, Neo-Brutalist layouts optimized for user conversion.', cta: 'View design craft', span: 'md:col-span-1' },
              { id: '06', title: 'IT Consulting', desc: 'Strategic technical oversight. We align your engineering roadmap with aggressive business expansion parameters.', cta: 'Partner with us', span: 'md:col-span-2' }
            ].map(service => (
              <div key={service.id} className={`bg-[#F9F9FB]/75 dark:bg-[#0B0B0C]/75 backdrop-blur-md border-2 border-[#111112] dark:border-[#2A2A2C] p-12 hover:-translate-y-2 hover:translate-x-2 hover:shadow-[-8px_8px_0px_0px_#CCFF00] dark:hover:shadow-[-8px_8px_0px_0px_#CCFF00] transition-transform duration-200 flex flex-col group cursor-pointer ${service.span}`}>
                <div className="border-b-2 border-[#111112] dark:border-[#2A2A2C] pb-4 mb-8 w-16">
                   <div className="font-display text-4xl text-accent-volt font-bold">{service.id}</div>
                </div>
                <h3 className="font-display text-3xl lg:text-4xl uppercase text-[#111112] dark:text-[#F9F9FB] mb-6 group-hover:text-accent-volt transition-colors">{service.title}</h3>
                <p className="font-sans text-[#111112] dark:text-[#F9F9FB] opacity-80 mb-12 flex-grow text-lg">{service.desc}</p>
                <div className="font-sans font-bold uppercase tracking-widest text-sm text-[#111112] dark:text-[#F9F9FB] border-t-2 border-[#111112] dark:border-[#2A2A2C] pt-6 group-hover:text-accent-volt transition-colors">
                  {service.cta} →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#111112] dark:bg-[#000000] border-t-2 border-[#111112] dark:border-[#2A2A2C]">
         <div className="container mx-auto px-6 max-w-5xl">
            <span className="font-sans uppercase font-bold tracking-widest text-sm text-accent-volt mb-6 block bg-[#F9F9FB]/10 px-4 py-2 inline-block text-[#F9F9FB]">Let's collaborate</span>
            <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tight text-[#F9F9FB] mb-8">Ready to shape what's next for your organisation?</h2>
            <p className="font-sans text-xl text-[#F9F9FB] opacity-80 mb-12 max-w-2xl">Share your challenge and we’ll assemble a tailored team to plan the path forward—usually within two business days.</p>
            <div className="flex flex-wrap gap-6">
                <Link href="/contact" className="neo-btn bg-accent-volt text-[#111112] hover:bg-[#F9F9FB] text-lg px-8 py-4 rounded-none shadow-[4px_4px_0px_0px_#F9F9FB] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#F9F9FB] transition-all">
                Start a Project
                </Link>
                <Link href="/open-positions" className="neo-btn bg-[#F9F9FB] text-[#111112] hover:bg-[#111112] hover:text-[#F9F9FB] border-2 border-[#111112] text-lg px-8 py-4 rounded-none shadow-[4px_4px_0px_0px_#F9F9FB] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#F9F9FB] transition-all">
                Meet our experts
                </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
