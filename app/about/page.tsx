import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-32 border-b-2 border-stark">
        <div className="max-w-4xl">
          <span className="font-sans uppercase font-bold tracking-widest text-sm text-accent-volt mb-6 block">Inside Vortixia</span>
          <h1 className="font-display text-6xl md:text-8xl mb-8 uppercase leading-none tracking-tight text-main">
            About Us
          </h1>
          <p className="font-sans text-2xl text-muted mb-12 max-w-3xl leading-relaxed">
            We are a multidisciplinary team of strategists, designers, and engineers building digital products that help ambitious organisations move with confidence. From discovery to delivery, we orchestrate every engagement with craft and care.
          </p>
          <div className="flex flex-wrap gap-4 font-sans font-bold uppercase tracking-widest text-sm text-main">
            <span className="border-2 border-stark px-4 py-2 bg-primary">Human-centred strategy</span>
            <span className="border-2 border-stark px-4 py-2 bg-primary">Design with intention</span>
            <span className="border-2 border-stark px-4 py-2 bg-primary">Momentum from day one</span>
          </div>
        </div>
      </section>

      {/* Stats Aside */}
      <section className="bg-dark py-16 border-b-2 border-stark">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 justify-between">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl uppercase mb-4 text-[#F9F9FB]">Trusted by forward-thinking teams</h2>
              <p className="font-sans text-muted">Every collaboration is anchored in measurable impact, transparent partnership, and an obsession with exceptional experiences.</p>
            </div>
            <div className="flex flex-wrap gap-12">
              <div>
                <div className="font-display text-5xl text-accent-volt mb-2">120+</div>
                <div className="font-sans text-sm uppercase tracking-widest text-muted">Digital initiatives launched</div>
              </div>
              <div>
                <div className="font-display text-5xl text-accent-volt mb-2">40%</div>
                <div className="font-sans text-sm uppercase tracking-widest text-muted">Average efficiency gains</div>
              </div>
              <div>
                <div className="font-display text-5xl text-accent-volt mb-2">98%</div>
                <div className="font-sans text-sm uppercase tracking-widest text-muted">Client satisfaction score</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 bg-primary">
        <div className="container mx-auto px-6">
          <div className="mb-24 max-w-4xl">
            <span className="font-sans uppercase font-bold tracking-widest text-sm text-accent-volt mb-6 block">Mission & Vision</span>
            <h2 className="font-display text-5xl md:text-6xl uppercase tracking-tight text-main mb-6">
              Purpose-led partnerships that unlock value
            </h2>
            <p className="font-sans text-xl text-muted">
              We pair rigorous strategy with inspired execution so every release, campaign, and platform strengthens the connection between our clients and the people they serve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t-2 border-l-2 border-stark">
            <div className="p-12 border-b-2 border-r-2 border-stark bg-primary hover:bg-main hover:text-primary transition-colors group">
              <h3 className="font-display text-4xl uppercase mb-6 group-hover:text-primary text-main">Our Mission</h3>
              <p className="font-sans text-lg mb-8 group-hover:text-primary text-muted">
                To transform ideas into powerful digital experiences that accelerate growth. We champion experimentation, iterate with purpose, and deliver solutions that make a measurable difference.
              </p>
              <ul className="font-sans space-y-4 font-bold group-hover:text-primary text-main">
                <li className="flex items-center gap-4"><span className="w-2 h-2 bg-accent-volt"></span> Collaborative discovery and co-creation</li>
                <li className="flex items-center gap-4"><span className="w-2 h-2 bg-accent-volt"></span> Inclusive design and accessible build standards</li>
                <li className="flex items-center gap-4"><span className="w-2 h-2 bg-accent-volt"></span> Performance-focused delivery frameworks</li>
              </ul>
            </div>
            <div className="p-12 border-b-2 border-r-2 border-stark bg-dark group">
              <h3 className="font-display text-4xl uppercase mb-6 text-accent-volt">Our Vision</h3>
              <p className="font-sans text-lg mb-8 text-muted group-hover:text-[#F9F9FB] transition-colors">
                To empower every organisation we partner with to innovate boldly and connect meaningfully. We see technology as the bridge that brings ideas to life and people closer together.
              </p>
              <ul className="font-sans space-y-4 font-bold text-[#F9F9FB]">
                <li className="flex items-center gap-4"><span className="w-2 h-2 bg-accent-volt"></span> Future-ready platforms that scale gracefully</li>
                <li className="flex items-center gap-4"><span className="w-2 h-2 bg-accent-volt"></span> Data-rich insights that inform confident decisions</li>
                <li className="flex items-center gap-4"><span className="w-2 h-2 bg-accent-volt"></span> Long-term stewardship beyond launch</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values (Structured Typographic Columns) */}
      <section className="py-32 border-t-2 border-stark bg-main text-primary">
        <div className="container mx-auto px-6">
          <div className="mb-24 max-w-4xl">
            <span className="font-sans uppercase font-bold tracking-widest text-sm text-accent-volt mb-6 block">Our Values</span>
            <h2 className="font-display text-5xl md:text-6xl uppercase tracking-tight mb-6">
              The principles that anchor every engagement
            </h2>
          </div>

          <div className="flex flex-col">
            {[
              { title: 'Innovation with intention', desc: 'We constantly push the boundaries of what is possible, pairing emerging technology with grounded strategy to unlock smarter ways of working.' },
              { title: 'Integrity at every touchpoint', desc: 'Transparency, honesty, and accountability shape every interaction. We build trust by delivering on promises and communicating proactively.' },
              { title: 'Collaboration without silos', desc: 'We create multidisciplinary teams that embed with our clients, aligning around shared objectives and co-owning the path to success.' },
              { title: 'Excellence, measured', desc: 'From code quality to customer sentiment, we elevate every deliverable with clear success metrics and ongoing optimisation.' }
            ].map((value, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-t-2 border-stark">
                <div className="md:col-span-1 font-display text-2xl text-accent-volt">0{idx + 1}</div>
                <div className="md:col-span-5">
                  <h3 className="font-display text-3xl uppercase">{value.title}</h3>
                </div>
                <div className="md:col-span-6">
                  <p className="font-sans text-xl opacity-80">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-accent-volt border-t-2 border-stark">
         <div className="container mx-auto px-6 text-center max-w-4xl">
            <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tight text-main mb-8">Ready to transform your digital future?</h2>
            <Link href="/contact" className="neo-btn bg-main text-primary hover:bg-dark text-xl px-12 py-6 rounded-none inline-block">
              Start a Conversation
            </Link>
         </div>
      </section>
    </div>
  );
}
