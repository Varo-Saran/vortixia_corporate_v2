import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-[#F9F9FB] dark:bg-[#0B0B0C] transition-colors duration-300">
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-40 pb-32 border-b-2 border-[#111112] dark:border-[#2A2A2C]">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="max-w-4xl lg:w-1/2">
            <span className="font-sans uppercase font-bold tracking-widest text-sm text-accent-volt mb-6 block bg-[#111112] dark:bg-[#2A2A2C] px-4 py-2 inline-block">Inside Vortixia</span>
            <h1 className="font-display text-6xl md:text-8xl mb-8 uppercase leading-none tracking-tight text-[#111112] dark:text-[#F9F9FB]">
              About Us
            </h1>
            <p className="font-sans text-2xl text-[#111112] dark:text-[#F9F9FB] opacity-80 mb-12 leading-relaxed">
              We are a multidisciplinary team of strategists, designers, and engineers building digital products that help ambitious organisations move with confidence. From discovery to delivery, we orchestrate every engagement with craft and care.
            </p>
            <div className="flex flex-wrap gap-4 font-sans font-bold uppercase tracking-widest text-sm text-[#111112] dark:text-[#F9F9FB]">
              <span className="border-2 border-[#111112] dark:border-[#2A2A2C] px-4 py-2 bg-[#F9F9FB]/50 dark:bg-[#0B0B0C]/50 backdrop-blur-sm">Human-centred strategy</span>
              <span className="border-2 border-[#111112] dark:border-[#2A2A2C] px-4 py-2 bg-[#F9F9FB]/50 dark:bg-[#0B0B0C]/50 backdrop-blur-sm">Design with intention</span>
              <span className="border-2 border-[#111112] dark:border-[#2A2A2C] px-4 py-2 bg-[#F9F9FB]/50 dark:bg-[#0B0B0C]/50 backdrop-blur-sm">Momentum from day one</span>
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-[500px] relative border-2 border-[#111112] dark:border-[#2A2A2C] shadow-[8px_8px_0px_0px_#111112] dark:shadow-[8px_8px_0px_0px_#2A2A2C]">
            <Image 
              src="/images/about/about-hero.png" 
              alt="Brutalist Corporate Headquarters" 
              fill 
              priority={true}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </section>

      {/* Stats Aside */}
      <section className="bg-[#111112] dark:bg-[#000000] py-16 border-b-2 border-[#F9F9FB] dark:border-[#2A2A2C] transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 justify-between items-center">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl uppercase mb-4 text-[#F9F9FB]">Trusted by forward-thinking teams</h2>
              <p className="font-sans text-[#F9F9FB] opacity-80">Every collaboration is anchored in measurable impact, transparent partnership, and an obsession with exceptional experiences.</p>
            </div>
            <div className="flex flex-wrap gap-12">
              <div>
                <div className="font-display text-5xl text-accent-volt mb-2">120+</div>
                <div className="font-sans text-sm uppercase tracking-widest text-[#F9F9FB] opacity-80">Digital initiatives launched</div>
              </div>
              <div>
                <div className="font-display text-5xl text-accent-volt mb-2">40%</div>
                <div className="font-sans text-sm uppercase tracking-widest text-[#F9F9FB] opacity-80">Average efficiency gains</div>
              </div>
              <div>
                <div className="font-display text-5xl text-accent-volt mb-2">98%</div>
                <div className="font-sans text-sm uppercase tracking-widest text-[#F9F9FB] opacity-80">Client satisfaction score</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 border-b-2 border-[#111112] dark:border-[#2A2A2C]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 mb-24 items-center">
            <div className="lg:w-1/2">
              <span className="font-sans uppercase font-bold tracking-widest text-sm text-accent-volt mb-6 block bg-[#111112] dark:bg-[#2A2A2C] px-4 py-2 inline-block">Mission & Vision</span>
              <h2 className="font-display text-5xl md:text-6xl uppercase tracking-tight text-[#111112] dark:text-[#F9F9FB] mb-6">
                Purpose-led partnerships that unlock value
              </h2>
              <p className="font-sans text-xl text-[#111112] dark:text-[#F9F9FB] opacity-80">
                We pair rigorous strategy with inspired execution so every release, campaign, and platform strengthens the connection between our clients and the people they serve.
              </p>
            </div>
            <div className="w-full lg:w-1/2 h-[400px] relative border-2 border-[#111112] dark:border-[#2A2A2C] shadow-[8px_8px_0px_0px_#111112] dark:shadow-[8px_8px_0px_0px_#2A2A2C]">
              <Image 
                src="/images/about/about-mission.png" 
                alt="Strategy and Data Geometric Composition" 
                fill 
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#F9F9FB]/75 dark:bg-[#0B0B0C]/75 backdrop-blur-md border-2 border-[#111112] dark:border-[#2A2A2C] p-12 shadow-[4px_4px_0px_0px_#111112] dark:shadow-[4px_4px_0px_0px_#2A2A2C] hover:-translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_#111112] dark:hover:shadow-[2px_2px_0px_0px_#2A2A2C] transition-all">
              <h3 className="font-display text-4xl uppercase mb-6 text-[#111112] dark:text-[#F9F9FB]">Our Mission</h3>
              <p className="font-sans text-lg mb-8 text-[#111112] dark:text-[#F9F9FB] opacity-80">
                Vortixia exists to eradicate digital bloat. We engineer high-performance, strictly typed enterprise architectures that drive measurable operational velocity.
              </p>
              <ul className="font-sans space-y-4 font-bold text-[#111112] dark:text-[#F9F9FB]">
                <li className="flex items-center gap-4"><span className="w-2 h-2 bg-accent-volt border border-[#111112] dark:border-[#2A2A2C]"></span> Collaborative discovery and co-creation</li>
                <li className="flex items-center gap-4"><span className="w-2 h-2 bg-accent-volt border border-[#111112] dark:border-[#2A2A2C]"></span> Inclusive design and accessible build standards</li>
                <li className="flex items-center gap-4"><span className="w-2 h-2 bg-accent-volt border border-[#111112] dark:border-[#2A2A2C]"></span> Performance-focused delivery frameworks</li>
              </ul>
            </div>
            <div className="bg-[#111112] dark:bg-[#1A1A1C]/90 backdrop-blur-md border-2 border-[#111112] dark:border-[#2A2A2C] p-12 shadow-[4px_4px_0px_0px_#111112] dark:shadow-[4px_4px_0px_0px_#2A2A2C] hover:-translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_#111112] dark:hover:shadow-[2px_2px_0px_0px_#2A2A2C] transition-all">
              <h3 className="font-display text-4xl uppercase mb-6 text-accent-volt">Our Vision</h3>
              <p className="font-sans text-lg mb-8 text-[#F9F9FB] opacity-80">
                To empower every organisation we partner with to innovate boldly and connect meaningfully. We see technology as the bridge that brings ideas to life and people closer together.
              </p>
              <ul className="font-sans space-y-4 font-bold text-[#F9F9FB]">
                <li className="flex items-center gap-4"><span className="w-2 h-2 bg-accent-volt border border-[#F9F9FB] dark:border-[#2A2A2C]"></span> Future-ready platforms that scale gracefully</li>
                <li className="flex items-center gap-4"><span className="w-2 h-2 bg-accent-volt border border-[#F9F9FB] dark:border-[#2A2A2C]"></span> Data-rich insights that inform confident decisions</li>
                <li className="flex items-center gap-4"><span className="w-2 h-2 bg-accent-volt border border-[#F9F9FB] dark:border-[#2A2A2C]"></span> Long-term stewardship beyond launch</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="mb-24 max-w-4xl">
            <span className="font-sans uppercase font-bold tracking-widest text-sm text-accent-volt mb-6 block bg-[#111112] dark:bg-[#2A2A2C] px-4 py-2 inline-block">Our Values</span>
            <h2 className="font-display text-5xl md:text-6xl uppercase tracking-tight mb-6 text-[#111112] dark:text-[#F9F9FB]">
              The principles that anchor every engagement
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Innovation', desc: 'We do not follow industry standards; we define them. Our architectures are built for the next decade, leveraging cutting-edge frameworks to outpace legacy systems.', span: 'md:col-span-2' },
              { title: 'Integrity', desc: 'Absolute transparency in our engineering processes. No black boxes, no hidden technical debt. We build scalable partnerships based on hard data.', span: 'md:col-span-1' },
              { title: 'Collaboration without silos', desc: 'We create multidisciplinary teams that embed with our clients, aligning around shared objectives and co-owning the path to success.', span: 'md:col-span-1' },
              { title: 'Excellence', desc: 'Uncompromising quality in every commit. We enforce strict auditing and brutalist performance metrics to ensure flawless deployment.', span: 'md:col-span-2' }
            ].map((value, idx) => (
              <div key={idx} className={`bg-[#F9F9FB]/75 dark:bg-[#0B0B0C]/75 backdrop-blur-md border-2 border-[#111112] dark:border-[#2A2A2C] p-12 shadow-[4px_4px_0px_0px_#111112] dark:shadow-[4px_4px_0px_0px_#2A2A2C] flex flex-col hover:-translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_#111112] dark:hover:shadow-[2px_2px_0px_0px_#2A2A2C] transition-all group ${value.span}`}>
                <div className="font-display text-4xl text-accent-volt mb-8 border-b-2 border-[#111112] dark:border-[#2A2A2C] pb-4 inline-block w-16">0{idx + 1}</div>
                <h3 className="font-display text-3xl md:text-4xl uppercase mb-6 text-[#111112] dark:text-[#F9F9FB] group-hover:text-accent-volt transition-colors">{value.title}</h3>
                <p className="font-sans text-xl opacity-80 text-[#111112] dark:text-[#F9F9FB]">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-accent-volt border-t-2 border-[#111112] dark:border-[#2A2A2C]">
         <div className="container mx-auto px-6 text-center max-w-4xl">
            <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tight text-[#111112] mb-8">Ready to transform your digital future?</h2>
            <Link href="/contact" className="neo-btn bg-[#111112] text-[#F9F9FB] hover:bg-[#0B0B0C] text-xl px-12 py-6 rounded-none inline-block shadow-[4px_4px_0px_0px_#000000] active:shadow-[2px_2px_0px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] transition-all">
              Start a Conversation
            </Link>
         </div>
      </section>
    </div>
  );
}
