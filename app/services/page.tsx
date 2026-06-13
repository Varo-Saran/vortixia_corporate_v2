import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-32 border-b-2 border-stark">
        <div className="max-w-5xl">
          <span className="font-sans uppercase font-bold tracking-widest text-sm text-accent-volt mb-6 block">What we deliver</span>
          <h1 className="font-display text-6xl md:text-8xl mb-8 uppercase leading-none tracking-tight text-main">
            End-to-end digital solutions crafted for ambitious teams.
          </h1>
          <p className="font-sans text-2xl text-muted mb-12 max-w-3xl leading-relaxed">
            From insight-driven strategy to beautifully engineered products, our multidisciplinary experts partner with you to accelerate growth and create experiences your customers love.
          </p>
          <ul className="font-sans space-y-4 font-bold text-main mb-12">
            <li className="flex items-center gap-4"><span className="w-3 h-3 bg-accent-volt border-2 border-stark"></span> Tailored roadmaps aligned to your goals</li>
            <li className="flex items-center gap-4"><span className="w-3 h-3 bg-accent-volt border-2 border-stark"></span> Cross-functional specialists on every engagement</li>
            <li className="flex items-center gap-4"><span className="w-3 h-3 bg-accent-volt border-2 border-stark"></span> Measurable outcomes and ongoing optimisation</li>
          </ul>
        </div>
      </section>

      {/* Services Grid Matrix */}
      <section className="py-32 bg-primary">
        <div className="container mx-auto px-6">
          <div className="mb-24">
            <span className="font-sans uppercase font-bold tracking-widest text-sm text-accent-volt mb-6 block">Core capabilities</span>
            <h2 className="font-display text-5xl md:text-6xl uppercase tracking-tight text-main mb-6 max-w-4xl">
              Flexible engagements tailored to your business goals.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: '01', title: 'Software & Web Development', desc: 'Modern architectures, performance-first engineering, and clean code standards for web and platform products.', cta: 'Explore build services' },
              { id: '02', title: 'Data Analysis', desc: 'Pipeline automation, dashboarding, and predictive modelling to surface insights that inform confident decisions.', cta: 'Discover analytics' },
              { id: '03', title: 'Graphic Design', desc: 'Brand systems, marketing collateral, and product interfaces built to delight and convert across every touchpoint.', cta: 'View design craft' },
              { id: '04', title: 'Cybersecurity', desc: 'Threat modelling, penetration testing, and compliance support to secure critical systems and data.', cta: 'Strengthen security' },
              { id: '05', title: 'Cloud Solutions', desc: 'Migrations, DevOps automation, and managed cloud operations optimised for reliability and cost efficiency.', cta: 'Scale in the cloud' },
              { id: '06', title: 'Mobile App Development', desc: 'Native and cross-platform experiences crafted for usability, performance, and rapid iteration.', cta: 'Launch your app' }
            ].map(service => (
              <div key={service.id} className="border-2 border-stark p-8 bg-primary hover:-translate-y-2 hover:translate-x-2 hover:shadow-hard-accent transition-transform flex flex-col group">
                <div className="font-display text-4xl text-stark opacity-20 mb-6 font-bold">{service.id}</div>
                <h3 className="font-display text-3xl uppercase text-main mb-4 group-hover:text-accent-volt transition-colors">{service.title}</h3>
                <p className="font-sans text-muted mb-12 flex-grow text-lg">{service.desc}</p>
                <div className="font-sans font-bold uppercase tracking-widest text-sm text-main border-t-2 border-stark pt-6">
                  {service.cta} →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-dark border-t-2 border-stark">
         <div className="container mx-auto px-6 max-w-5xl">
            <span className="font-sans uppercase font-bold tracking-widest text-sm text-accent-volt mb-6 block">Let's collaborate</span>
            <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tight text-[#F9F9FB] mb-8">Ready to shape what's next for your organisation?</h2>
            <p className="font-sans text-xl text-muted mb-12 max-w-2xl">Share your challenge and we’ll assemble a tailored team to plan the path forward—usually within two business days.</p>
            <div className="flex gap-6">
                <Link href="/contact" className="neo-btn bg-accent-volt text-main text-lg px-8 py-4 rounded-none">
                Start a Project
                </Link>
                <Link href="/open-positions" className="neo-btn bg-primary text-main text-lg px-8 py-4 rounded-none">
                Meet our experts
                </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
