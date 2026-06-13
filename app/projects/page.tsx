import Link from 'next/link';
import Image from 'next/image';

export default function ProjectsPage() {
  const projects = [
    { 
      id: 1, 
      title: 'FINTECH LEDGER ARCHITECTURE', 
      client: 'GLOBAL FINANCE CORP',
      tags: ['NEXT.JS', 'DRIZZLE ORM', 'POSTGRES'],
      colSpan: 'md:col-span-2'
    },
    { 
      id: 2, 
      title: 'ENTERPRISE CLOUD PERIMETER', 
      client: 'VANGUARD LOGISTICS',
      tags: ['ZERO-TRUST', 'AWS', 'CYBERSECURITY'],
      colSpan: 'md:col-span-1'
    },
    { 
      id: 3, 
      title: 'PREDICTIVE TELEMETRY DASHBOARD', 
      client: 'HEALTHTECH SYSTEMS',
      tags: ['UI/UX', 'DATA MAPPING', 'REACT'],
      colSpan: 'md:col-span-1'
    },
    { 
      id: 4, 
      title: 'ALGORITHMIC TRADING MATRIX', 
      client: 'APEX CAPITAL',
      tags: ['PYTHON', 'SERVERLESS', 'ANALYTICS'],
      colSpan: 'md:col-span-2'
    },
    { 
      id: 5, 
      title: 'GLOBAL E-COMMERCE INFRASTRUCTURE', 
      client: 'RETAIL DYNAMICS',
      tags: ['CLOUD PIPELINES', 'NEXT.JS'],
      colSpan: 'md:col-span-2'
    },
    { 
      id: 6, 
      title: 'LEGACY DE-SLOPIFICATION', 
      client: 'TECHCORP SOLUTIONS',
      tags: ['ARCHITECTURE', 'IT CONSULTING'],
      colSpan: 'md:col-span-1'
    }
  ];

  return (
    <div className="flex flex-col bg-[#F9F9FB] dark:bg-[#0B0B0C] transition-colors duration-300">
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-40 pb-32 border-b-2 border-[#111112] dark:border-[#2A2A2C]">
        <div className="max-w-4xl">
          <span className="font-sans uppercase font-bold tracking-widest text-sm text-accent-volt mb-6 block bg-[#111112] dark:bg-[#2A2A2C] px-4 py-2 inline-block">Latest Case Studies</span>
          <h1 className="font-display text-6xl md:text-8xl mb-8 uppercase leading-none tracking-tight text-[#111112] dark:text-[#F9F9FB]">
            Results-driven digital experiences.
          </h1>
          <p className="font-sans text-2xl text-[#111112] dark:text-[#F9F9FB] opacity-80 mb-12 max-w-3xl leading-relaxed">
            From enterprise e-commerce ecosystems to immersive mobile products, we design and ship solutions that feel effortless to use and impossible to forget.
          </p>
          <div className="flex flex-wrap gap-8 border-l-4 border-accent-volt pl-6 py-2">
            <div>
              <div className="font-display text-4xl text-[#111112] dark:text-[#F9F9FB]">92%</div>
              <div className="font-sans text-xs uppercase tracking-wider text-[#5A5A62]">Client retention</div>
            </div>
            <div>
              <div className="font-display text-4xl text-[#111112] dark:text-[#F9F9FB]">18+</div>
              <div className="font-sans text-xs uppercase tracking-wider text-[#5A5A62]">Industries served</div>
            </div>
            <div>
              <div className="font-display text-4xl text-[#111112] dark:text-[#F9F9FB]">120k</div>
              <div className="font-sans text-xs uppercase tracking-wider text-[#5A5A62]">Active users reached</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Asymmetric Grid */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="mb-24 max-w-4xl">
             <h2 className="font-display text-5xl md:text-6xl uppercase tracking-tight text-[#111112] dark:text-[#F9F9FB] mb-6">
              Featured engagements
            </h2>
            <p className="font-sans text-xl text-[#111112] dark:text-[#F9F9FB] opacity-80 mb-4">
              Explore a selection of recent partnerships where strategy, design, and engineering came together to create measurable impact.
            </p>
            <p className="font-sans font-bold uppercase text-accent-volt tracking-widest text-sm">
              Built with craft, scaled with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((proj) => (
              <div key={proj.id} className={`bg-[#F9F9FB]/75 dark:bg-[#0B0B0C]/75 backdrop-blur-md border-2 border-[#111112] dark:border-[#2A2A2C] p-6 flex flex-col group hover:-translate-y-2 hover:translate-x-2 hover:shadow-[-8px_8px_0px_0px_#CCFF00] dark:hover:shadow-[-8px_8px_0px_0px_#CCFF00] transition-transform duration-200 cursor-pointer ${proj.colSpan}`}>
                <div className="w-full h-80 border-2 border-[#111112] dark:border-[#2A2A2C] relative overflow-hidden mb-8">
                  <Image 
                    src={`/images/projects/project${proj.id}.png`} 
                    alt={proj.title} 
                    fill 
                    priority={proj.id === 1}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover grayscale contrast-125 transition-all duration-500 hover:grayscale-0"
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <div className="font-sans text-xs uppercase tracking-widest text-[#5A5A62] mb-4 font-bold">CLIENT: {proj.client}</div>
                  <h3 className="font-display text-3xl md:text-4xl uppercase mb-6 text-[#111112] dark:text-[#F9F9FB] group-hover:text-accent-volt transition-colors">{proj.title}</h3>
                  <div className="flex-grow"></div>
                  <div className="flex flex-wrap gap-4 border-t-2 border-[#111112] dark:border-[#2A2A2C] pt-6 mt-8">
                    {proj.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs uppercase tracking-widest text-[#5A5A62] font-bold block">
                        [ {tag} ]
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#111112] dark:bg-[#000000] border-t-2 border-[#111112] dark:border-[#2A2A2C]">
         <div className="container mx-auto px-6 text-center max-w-3xl">
            <h2 className="font-display text-5xl md:text-6xl uppercase tracking-tight text-[#F9F9FB] mb-8">Have a Project in Mind?</h2>
            <p className="font-sans text-xl text-[#F9F9FB] opacity-80 mb-12">Let’s work together to bring your ideas to life. Contact us today to get started!</p>
            <Link href="/contact" className="neo-btn bg-accent-volt text-[#111112] hover:bg-[#F9F9FB] text-lg px-12 py-6 rounded-none shadow-[4px_4px_0px_0px_#F9F9FB] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#F9F9FB] transition-all inline-block">
              Contact Us
            </Link>
         </div>
      </section>
    </div>
  );
}
