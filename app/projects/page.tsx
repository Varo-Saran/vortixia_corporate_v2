import Link from 'next/link';
import Image from 'next/image';

export default function ProjectsPage() {
  const projects = [
    { 
      id: 1, 
      category: 'Retail Transformation', 
      title: 'E-Commerce Platform', 
      highlight: '+35% conversion in 90 days',
      desc: 'We developed a fully customized e-commerce platform for a retail client, featuring seamless payment integration and a personalized shopping experience across devices.',
      meta: ['Retail', 'Growth Strategy'],
      colSpan: 'md:col-span-2' // Asymmetric width
    },
    { 
      id: 2, 
      category: 'Intelligence & Insights', 
      title: 'Data Analytics Dashboard', 
      highlight: 'Realtime visibility',
      desc: 'Created a data analytics dashboard for a financial services company, enabling real-time scenario planning and board-ready reporting for every business unit.',
      meta: ['Financial Services', 'Automation'],
      colSpan: 'md:col-span-1'
    },
    { 
      id: 3, 
      category: 'Product Innovation', 
      title: 'Mobile App Development', 
      highlight: '4.9★ app store rating',
      desc: 'Designed and developed a mobile app for a fitness startup, offering adaptive workout coaching, habit tracking, and social engagement features.',
      meta: ['Health & Wellness', 'iOS & Android'],
      colSpan: 'md:col-span-1'
    },
    { 
      id: 4, 
      category: 'Risk Mitigation', 
      title: 'Cybersecurity Solution', 
      highlight: 'Zero critical incidents',
      desc: 'Implemented a robust cybersecurity framework for a healthcare provider, ensuring continuous compliance and proactive threat detection.',
      meta: ['Healthcare', '24/7 Monitoring'],
      colSpan: 'md:col-span-2' // Asymmetric width
    },
    { 
      id: 5, 
      category: 'Brand Systems', 
      title: 'Graphic Design Campaign', 
      highlight: 'Global product launch',
      desc: 'Created a comprehensive branding and graphic design campaign for a tech startup, spanning product storytelling, launch assets, and a modular design system.',
      meta: ['Emerging Tech', 'Visual Identity'],
      colSpan: 'md:col-span-2' // Asymmetric width
    },
    { 
      id: 6, 
      category: 'Platform Modernization', 
      title: 'Cloud Migration', 
      highlight: '40% cost reduction',
      desc: 'Helped a logistics company migrate their infrastructure to the cloud, improving scalability, resilience, and real-time fleet coordination.',
      meta: ['Logistics', 'Cloud Architecture'],
      colSpan: 'md:col-span-1'
    }
  ];

  return (
    <div className="flex flex-col bg-primary">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-32 border-b-2 border-stark">
        <div className="max-w-4xl">
          <span className="font-sans uppercase font-bold tracking-widest text-sm text-accent-volt mb-6 block bg-dark text-main px-4 py-2 inline-block">Latest Case Studies</span>
          <h1 className="font-display text-6xl md:text-8xl mb-8 uppercase leading-none tracking-tight text-main">
            Results-driven digital experiences.
          </h1>
          <p className="font-sans text-2xl text-muted mb-12 max-w-3xl leading-relaxed">
            From enterprise e-commerce ecosystems to immersive mobile products, we design and ship solutions that feel effortless to use and impossible to forget.
          </p>
          <div className="flex flex-wrap gap-8 border-l-4 border-accent-volt pl-6 py-2">
            <div>
              <div className="font-display text-4xl text-main">92%</div>
              <div className="font-sans text-xs uppercase tracking-wider text-[#5A5A62]">Client retention</div>
            </div>
            <div>
              <div className="font-display text-4xl text-main">18+</div>
              <div className="font-sans text-xs uppercase tracking-wider text-[#5A5A62]">Industries served</div>
            </div>
            <div>
              <div className="font-display text-4xl text-main">120k</div>
              <div className="font-sans text-xs uppercase tracking-wider text-[#5A5A62]">Active users reached</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Asymmetric Grid */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="mb-24 max-w-4xl">
             <h2 className="font-display text-5xl md:text-6xl uppercase tracking-tight text-main mb-6">
              Featured engagements
            </h2>
            <p className="font-sans text-xl text-muted mb-4">
              Explore a selection of recent partnerships where strategy, design, and engineering came together to create measurable impact.
            </p>
            <p className="font-sans font-bold uppercase text-accent-volt tracking-widest text-sm">
              Built with craft, scaled with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((proj) => (
              <div key={proj.id} className={`border-2 border-stark flex flex-col group ${proj.colSpan}`}>
                <div className="h-80 border-b-2 border-stark relative overflow-hidden bg-dark">
                  <Image 
                    src={`/images/projects/project${proj.id}.png`} 
                    alt={proj.title} 
                    fill 
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 border-b-8 border-accent-volt transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <div className="absolute top-4 left-4 bg-primary border-2 border-stark px-4 py-2 font-sans font-bold text-xs uppercase tracking-widest">
                    {proj.category}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-accent-volt border-2 border-stark px-4 py-2 font-sans font-bold text-xs uppercase tracking-widest text-main">
                    {proj.highlight}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow bg-primary">
                  <h3 className="font-display text-3xl uppercase mb-4 text-main">{proj.title}</h3>
                  <p className="font-sans text-muted mb-8 flex-grow text-lg">{proj.desc}</p>
                  
                  <div className="flex justify-between items-end border-t-2 border-stark pt-6">
                    <div className="flex flex-col gap-2">
                      {proj.meta.map((tag, idx) => (
                        <span key={idx} className="text-xs uppercase tracking-wider text-[#5A5A62] font-bold block">
                          [ {tag} ]
                        </span>
                      ))}
                    </div>
                    <Link href="#" className="font-sans font-bold uppercase tracking-widest text-sm text-main hover:text-accent-volt">
                      View Project →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#111112] border-t-2 border-stark">
         <div className="container mx-auto px-6 text-center max-w-3xl">
            <h2 className="font-display text-5xl md:text-6xl uppercase tracking-tight text-[#F9F9FB] mb-8">Have a Project in Mind?</h2>
            <p className="font-sans text-xl text-[#F9F9FB] opacity-80 mb-12">Let’s work together to bring your ideas to life. Contact us today to get started!</p>
            <Link href="/contact" className="neo-btn bg-accent-volt text-main text-lg px-12 py-6 rounded-none inline-block">
              Contact Us
            </Link>
         </div>
      </section>
    </div>
  );
}
