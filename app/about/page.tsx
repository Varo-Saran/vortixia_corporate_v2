import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-[#F9F9FB] dark:bg-[#0B0B0C] transition-colors duration-300">

      {/* ── SECTION 1: HERO ── */}
      <section className="container mx-auto px-6 md:px-12 pt-40 pb-32 border-b-2 border-[#111112] dark:border-[#2A2A2C]">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="max-w-4xl lg:w-1/2">
            <span className="font-sans uppercase font-bold tracking-widest text-sm text-accent-volt mb-8 block bg-[#111112] dark:bg-[#2A2A2C] px-4 py-2 inline-block">
              Who We Are
            </span>
            <h1 className="font-display text-5xl md:text-7xl mb-8 uppercase leading-none tracking-tight text-[#111112] dark:text-[#F9F9FB]">
              Not an Agency. Not a Freelancer.{' '}
              <span className="text-accent-volt">The Elite Alternative.</span>
            </h1>
            <p className="font-sans text-xl text-[#111112] dark:text-[#F9F9FB] opacity-80 mb-12 leading-relaxed">
              Vortixia was born from a simple frustration: businesses shouldn&rsquo;t have to choose between the technical firepower of a massive agency and the dedicated attention of a small team. We&rsquo;re a specialized collective of engineers, data scientists, and designers who left corporate bureaucracy behind to deliver premium technology solutions with uncompromised precision.
            </p>
            <div className="flex flex-wrap gap-4 font-sans font-bold uppercase tracking-widest text-sm text-[#111112] dark:text-[#F9F9FB]">
              <span className="border-2 border-[#111112] dark:border-[#2A2A2C] px-4 py-2 bg-accent-volt text-[#111112]">
                Enterprise-Grade Expertise
              </span>
              <span className="border-2 border-[#111112] dark:border-[#2A2A2C] px-4 py-2">
                Startup Agility
              </span>
              <span className="border-2 border-[#111112] dark:border-[#2A2A2C] px-4 py-2">
                Zero Corporate Bloat
              </span>
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-[500px] relative border-2 border-[#111112] dark:border-[#2A2A2C] shadow-[8px_8px_0px_0px_#111112] dark:shadow-[8px_8px_0px_0px_#2A2A2C] flex-shrink-0">
            <Image
              src="/images/about/about-hero.png"
              alt="Vortixia — Premium Technology Collective"
              fill
              priority={true}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </section>

      {/* ── SECTION 2: WHY WE EXIST ── */}
      <section className="bg-[#111112] dark:bg-[#000000] py-32 border-b-2 border-[#F9F9FB] dark:border-[#2A2A2C] transition-colors duration-300">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-5xl">
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-[#F9F9FB] mb-10">
              Why We Exist.
            </h2>
            <p className="font-sans text-xl text-[#F9F9FB] opacity-70 leading-relaxed mb-8 max-w-3xl">
              The tech services industry is broken. On one end, massive agencies bury you in bureaucracy, junior staff, and inflated costs. On the other, solo freelancers lack the bandwidth and diverse expertise for complex projects.
            </p>
            <p className="font-display text-3xl md:text-4xl text-accent-volt uppercase tracking-tight mb-8">
              We saw a gap. We filled it.
            </p>
            <p className="font-sans text-xl text-[#F9F9FB] opacity-70 leading-relaxed max-w-3xl">
              Vortixia is built on a different premise: a small, elite team of senior specialists who work directly with clients&mdash;no account managers, no junior handoffs, no rigid protocols. Just exceptional technical expertise with the agility to match your ambition.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: OUR STORY ── */}
      <section className="py-32 border-b-2 border-[#111112] dark:border-[#2A2A2C]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-2xl mb-16">
            <span className="font-sans uppercase font-bold tracking-widest text-sm text-accent-volt mb-6 block bg-[#111112] dark:bg-[#2A2A2C] px-4 py-2 inline-block">
              Our Origin
            </span>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-[#111112] dark:text-[#F9F9FB]">
              Built Different. By Design.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left — The Story */}
            <div className="p-8 md:p-14 border-2 border-[#111112] dark:border-[#2A2A2C] bg-white dark:bg-[#111112]/90 shadow-[4px_4px_0px_0px_#111112] dark:shadow-[4px_4px_0px_0px_#2A2A2C]">
              <h3 className="font-display text-2xl uppercase mb-6 text-[#111112] dark:text-[#F9F9FB]">The Story</h3>
              <p className="font-sans text-lg text-[#111112] dark:text-[#F9F9FB] opacity-80 leading-relaxed mb-6">
                Vortixia wasn&rsquo;t born in a boardroom. It was forged in the trenches of enterprise tech, where we watched brilliant projects die slow deaths from bureaucracy, bloated teams, and mass-produced solutions.
              </p>
              <p className="font-sans text-lg text-[#111112] dark:text-[#F9F9FB] opacity-80 leading-relaxed">
                We&rsquo;re a team of senior engineers, AI specialists, and designers who decided there had to be a better way. So we built it.
              </p>
            </div>

            {/* Right — The Difference */}
            <div className="p-8 md:p-14 border-2 border-[#111112] dark:border-[#2A2A2C] bg-[#111112] dark:bg-[#0B0B0C] lg:-ml-[2px] shadow-[4px_4px_0px_0px_#111112] dark:shadow-[4px_4px_0px_0px_#2A2A2C]">
              <h3 className="font-display text-2xl uppercase mb-8 text-accent-volt">The Difference</h3>
              <ul className="flex flex-col gap-6">
                {[
                  ['No Junior Staff Learning on Your Dime', 'Every project is handled by senior-level experts'],
                  ['No Account Manager Middlemen', 'You work directly with the people building your solution'],
                  ['No Rigid 6-Week Onboarding', 'We start delivering value from day one'],
                  ['No Template-Driven Solutions', 'Everything is custom-built for your specific needs'],
                ].map(([title, sub]) => (
                  <li key={title} className="flex items-start gap-4">
                    <span className="w-2 h-2 bg-accent-volt flex-shrink-0 mt-2" />
                    <div>
                      <p className="font-sans font-bold uppercase tracking-widest text-sm text-[#F9F9FB] mb-1">{title}</p>
                      <p className="font-sans text-sm text-[#F9F9FB] opacity-60">{sub}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: MISSION & VISION ── */}
      <section className="py-32 border-b-2 border-[#111112] dark:border-[#2A2A2C] bg-[#F9F9FB] dark:bg-[#0B0B0C] transition-colors duration-300">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mb-16">
            <span className="font-sans uppercase font-bold tracking-widest text-sm text-accent-volt mb-6 block bg-[#111112] dark:bg-[#2A2A2C] px-4 py-2 inline-block">
              What Drives Us
            </span>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-[#111112] dark:text-[#F9F9FB] mb-6">
              Beyond the Corporate Bloat.
            </h2>
            <p className="font-sans text-xl text-[#111112] dark:text-[#F9F9FB] opacity-80 leading-relaxed max-w-3xl">
              We exist to prove that premium technology services don&rsquo;t require corporate bureaucracy. Every line of code, every design decision, every client interaction is guided by our commitment to precision, agility, and uncompromised quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white dark:bg-[#111112]/90 border-2 border-[#111112] dark:border-[#2A2A2C] p-8 md:p-12 shadow-[4px_4px_0px_0px_#111112] dark:shadow-[4px_4px_0px_0px_#2A2A2C] hover:-translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_#111112] transition-all">
              <h3 className="font-display text-3xl uppercase mb-6 text-[#111112] dark:text-[#F9F9FB]">Our Mission</h3>
              <p className="font-sans text-lg mb-8 text-[#111112] dark:text-[#F9F9FB] opacity-80 leading-relaxed">
                To democratize access to elite technology expertise. We empower visionary leaders and growing businesses with the same caliber of AI, data, and development solutions that Fortune 500 companies receive&mdash;without the enterprise pricing and bureaucracy.
              </p>
              <div className="border-t-2 border-[#111112] dark:border-[#2A2A2C] pt-6">
                <p className="font-sans text-xs font-bold uppercase tracking-widest text-[#5A5A62] mb-4">Core Commitments</p>
                <ul className="flex flex-col gap-3">
                  {[
                    'Premium technical firepower, accessible pricing',
                    'Direct collaboration with senior experts',
                    'Bespoke solutions, zero templates',
                    'Agility without compromise',
                  ].map((item) => (
                    <li key={item} className="font-sans text-sm font-bold text-[#111112] dark:text-[#F9F9FB] flex items-center gap-3">
                      <span className="text-accent-volt font-bold text-base">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-[#111112] dark:bg-[#0B0B0C] border-2 border-[#111112] dark:border-[#2A2A2C] p-8 md:p-12 shadow-[4px_4px_0px_0px_#111112] dark:shadow-[4px_4px_0px_0px_#2A2A2C] hover:-translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_#111112] transition-all">
              <h3 className="font-display text-3xl uppercase mb-6 text-accent-volt">Our Vision</h3>
              <p className="font-sans text-lg mb-8 text-[#F9F9FB] opacity-80 leading-relaxed">
                To redefine what a technology partner can be. We&rsquo;re building an ecosystem where businesses can access cutting-edge AI, predictive analytics, and premium digital solutions with the speed and personalization of a startup, backed by the technical depth of an enterprise agency.
              </p>
              <div className="border-t-2 border-[#F9F9FB]/20 pt-6">
                <p className="font-sans text-xs font-bold uppercase tracking-widest text-[#F9F9FB] opacity-40 mb-4">We&rsquo;re Pioneering</p>
                <ul className="flex flex-col gap-3">
                  {[
                    'The vanguard of practical AI implementation',
                    'Secure, scalable cloud architectures that grow with you',
                    'Digital experiences that prioritize substance over flash',
                    'A new model: elite expertise without elite bureaucracy',
                  ].map((item) => (
                    <li key={item} className="font-sans text-sm font-bold text-[#F9F9FB] flex items-start gap-3">
                      <span className="text-accent-volt font-bold text-base flex-shrink-0">→</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: VALUES ── */}
      <section className="py-32 border-b-2 border-[#111112] dark:border-[#2A2A2C] bg-[#111112] dark:bg-[#000000] transition-colors duration-300">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mb-16">
            <span className="font-sans uppercase font-bold tracking-widest text-sm text-[#111112] mb-6 block bg-accent-volt px-4 py-2 inline-block">
              Our Values
            </span>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-[#F9F9FB]">
              The Principles That Anchor Every Engagement.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {[
              {
                num: '01',
                title: 'Technical Excellence',
                body: "We don't follow trends—we master fundamentals. From advanced machine learning architectures to military-grade security protocols, we bring the technical depth that only comes from years of enterprise-level experience. Every solution is engineered to scale, secured by design, and built to last.",
                benefits: [
                  'Solutions that handle growth without architectural rewrites',
                  'Code that\'s clean, documented, and maintainable',
                  'Security baked in from day one, not bolted on later',
                ],
              },
              {
                num: '02',
                title: 'Bespoke Precision',
                body: 'Mass production has no place in premium technology. We reject templates, boilerplate solutions, and one-size-fits-all approaches. Every project receives obsessive attention to detail, custom engineering, and design that reflects your unique brand and objectives.',
                benefits: [
                  'No generic themes or cookie-cutter implementations',
                  'Every design decision is deliberate and strategic',
                  'Solutions tailored to your specific workflows and goals',
                ],
              },
              {
                num: '03',
                title: 'Strike Team Agility',
                body: "Bureaucracy kills innovation. We've eliminated the layers of account managers, status meetings, and rigid protocols that slow traditional agencies to a crawl. Working with us means direct collaboration with senior experts, rapid iteration, and the flexibility to pivot as your needs evolve.",
                benefits: [
                  'Decisions made in hours, not weeks',
                  'Direct access to the people doing the work',
                  'Adapt scope and priorities without renegotiations',
                ],
              },
            ].map((v, i) => (
              <div
                key={v.num}
                className={`p-8 md:p-12 border-2 border-[#F9F9FB]/20 hover:border-accent-volt group transition-colors ${i > 0 ? 'md:-ml-[2px]' : ''}`}
              >
                <span className="font-display text-4xl text-accent-volt mb-6 block font-bold">{v.num}</span>
                <h3 className="font-display text-2xl uppercase mb-4 text-[#F9F9FB] group-hover:text-accent-volt transition-colors">
                  {v.title}
                </h3>
                <p className="font-sans text-sm text-[#F9F9FB] opacity-60 leading-relaxed mb-8">{v.body}</p>
                <div className="border-t border-[#F9F9FB]/20 pt-6">
                  <p className="font-sans text-xs font-bold uppercase tracking-widest text-[#F9F9FB] opacity-40 mb-4">
                    What This Means For You
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {v.benefits.map((b) => (
                      <li key={b} className="font-sans text-sm text-[#F9F9FB] opacity-70 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-accent-volt flex-shrink-0 mt-1.5 inline-block" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: THE TEAM ── */}
      <section className="py-32 border-b-2 border-[#111112] dark:border-[#2A2A2C] bg-[#F9F9FB] dark:bg-[#0B0B0C] transition-colors duration-300">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mb-6">
            <span className="font-sans uppercase font-bold tracking-widest text-sm text-accent-volt mb-6 block bg-[#111112] dark:bg-[#2A2A2C] px-4 py-2 inline-block">
              The Collective
            </span>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-[#111112] dark:text-[#F9F9FB] mb-4">
              Small Team. Massive Expertise.
            </h2>
          </div>
          <p className="font-sans text-xl text-[#111112] dark:text-[#F9F9FB] opacity-80 leading-relaxed mb-16 max-w-3xl">
            We&rsquo;re not a 200-person agency with junior staff learning on your project. We&rsquo;re a carefully curated collective of senior specialists&mdash;each bringing deep enterprise experience to every engagement.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: 'Vathsaran',
                role: 'Founder & CEO',
                focus: 'AI · ML · Research',
                img: '/images/team/Vathsaran.jpg',
                desc: 'Leads Vortixia\'s strategic vision and technical architecture. Deep expertise in artificial intelligence, machine learning systems, and cutting-edge research—driving the AI-first philosophy that defines every engagement.',
                tags: ['AI Architecture', 'Machine Learning', 'Research', 'Strategy'],
              },
              {
                name: 'Ramna',
                role: 'AI/ML Engineer',
                focus: 'AI · ML · Automation',
                img: '/images/team/Ramna.jpg',
                desc: 'Specializes in building production-grade machine learning models and intelligent automation systems. Transforms complex business problems into scalable, high-performance AI solutions.',
                tags: ['ML Models', 'Automation', 'NLP', 'Computer Vision'],
              },
              {
                name: 'Yaksharan',
                role: 'Cybersecurity Engineer',
                focus: 'Security · Infrastructure · Cloud',
                img: '/images/team/Yaksharan.jpg',
                desc: 'Architects zero-trust cloud infrastructures and implements military-grade security protocols. Ensures every solution Vortixia delivers is hardened, compliant, and built to withstand real-world threats.',
                tags: ['Zero-Trust', 'Cloud Security', 'Pen Testing', 'Compliance'],
              },
            ].map((member) => (
              <div
                key={member.name}
                className="border-2 border-[#111112] dark:border-[#2A2A2C] bg-white dark:bg-[#111112]/90 shadow-[4px_4px_0px_0px_#111112] dark:shadow-[4px_4px_0px_0px_#2A2A2C] group hover:-translate-y-1 hover:translate-x-1 transition-transform"
              >
                {/* Photo */}
                <div className="relative h-72 border-b-2 border-[#111112] dark:border-[#2A2A2C] overflow-hidden bg-[#111112]">
                  <Image
                    src={member.img}
                    alt={`${member.name} — ${member.role}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#111112] to-transparent" />
                </div>

                {/* Info */}
                <div className="p-6 md:p-8">
                  <div className="mb-4">
                    <h3 className="font-display text-2xl uppercase text-[#111112] dark:text-[#F9F9FB] group-hover:text-accent-volt transition-colors">
                      {member.name}
                    </h3>
                    <p className="font-sans text-sm font-bold uppercase tracking-widest text-[#5A5A62] mt-1">{member.role}</p>
                    <span className="font-sans text-xs font-bold uppercase tracking-widest text-accent-volt bg-[#111112] dark:bg-[#2A2A2C] px-2 py-1 inline-block mt-2">
                      {member.focus}
                    </span>
                  </div>
                  <p className="font-sans text-sm text-[#111112] dark:text-[#F9F9FB] opacity-70 leading-relaxed mb-6">
                    {member.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-sans text-xs font-bold uppercase tracking-widest text-[#111112] dark:text-[#F9F9FB] border-2 border-[#111112] dark:border-[#2A2A2C] px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Supported By callout */}
          <div className="border-2 border-[#111112] dark:border-[#2A2A2C] p-8 md:p-10 bg-[#111112] dark:bg-[#0B0B0C]">
            <div className="flex flex-col md:flex-row gap-6 md:items-center">
              <div className="flex-shrink-0">
                <span className="font-display text-3xl text-accent-volt font-bold">+</span>
              </div>
              <div>
                <h3 className="font-display text-xl uppercase text-[#F9F9FB] mb-2">Supported By a Curated Specialist Network</h3>
                <p className="font-sans text-sm text-[#F9F9FB] opacity-60 leading-relaxed max-w-2xl">
                  Beyond our core team, we maintain a vetted network of senior specialists in full-stack development, UI/UX design, data science, and cloud architecture—brought in based on project needs to ensure you always have exactly the right expertise for your engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: WHY VORTIXIA (COMPARISON) ── */}
      <section className="py-32 border-b-2 border-[#111112] dark:border-[#2A2A2C] bg-[#111112] dark:bg-[#000000] transition-colors duration-300">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mb-16">
            <span className="font-sans uppercase font-bold tracking-widest text-sm text-[#111112] mb-6 block bg-accent-volt px-4 py-2 inline-block">
              The Vortixia Advantage
            </span>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-[#F9F9FB]">
              Why Visionary Leaders Choose Us.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Traditional Agency */}
            <div className="p-8 md:p-12 border-2 border-[#F9F9FB]/20">
              <h3 className="font-display text-2xl uppercase mb-8 text-[#F9F9FB] opacity-40">Traditional Agency</h3>
              <ul className="flex flex-col gap-4">
                {[
                  '6–8 week onboarding process',
                  'Junior staff doing the work',
                  'Account managers as middlemen',
                  'Template-driven solutions',
                  'Rigid contracts and scope',
                  '$200–400/hour rates',
                  'Slow response times',
                ].map((item) => (
                  <li key={item} className="font-sans text-base text-[#F9F9FB] opacity-50 flex items-center gap-4">
                    <span className="text-red-500 font-bold text-lg flex-shrink-0">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Vortixia */}
            <div className="p-8 md:p-12 border-2 border-accent-volt bg-[#F9F9FB]/5 md:-ml-[2px]">
              <h3 className="font-display text-2xl uppercase mb-8 text-accent-volt">Vortixia</h3>
              <ul className="flex flex-col gap-4">
                {[
                  'Start within 1 week',
                  'Senior experts only',
                  'Direct collaboration with builders',
                  '100% custom solutions',
                  'Flexible, adaptive engagements',
                  'Premium quality, accessible pricing',
                  'Response within 24 hours',
                ].map((item) => (
                  <li key={item} className="font-sans text-base text-[#F9F9FB] flex items-center gap-4">
                    <span className="text-accent-volt font-bold text-lg flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: CREDIBILITY ── */}
      <section className="py-32 border-b-2 border-[#111112] dark:border-[#2A2A2C] bg-[#F9F9FB] dark:bg-[#0B0B0C] transition-colors duration-300">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mb-16">
            <span className="font-sans uppercase font-bold tracking-widest text-sm text-accent-volt mb-6 block bg-[#111112] dark:bg-[#2A2A2C] px-4 py-2 inline-block">
              Our Track Record
            </span>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-[#111112] dark:text-[#F9F9FB]">
              Expertise You Can Measure.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {[
              { stat: '50+', label: 'Years Combined Team Experience' },
              { stat: '3', label: 'Core Domains: AI, Security & Engineering' },
              { stat: '100%', label: 'Custom-Built Solutions — Zero Templates' },
              { stat: '24h', label: 'Guaranteed Response Time on All Engagements' },
            ].map((item, i) => (
              <div
                key={item.label}
                className={`p-8 md:p-12 border-2 border-[#111112] dark:border-[#2A2A2C] bg-white dark:bg-[#111112]/90 ${i > 0 ? 'md:-ml-[2px]' : ''}`}
              >
                <div className="font-display text-5xl md:text-6xl text-accent-volt mb-4 font-bold">{item.stat}</div>
                <p className="font-sans text-sm font-bold uppercase tracking-widest text-[#111112] dark:text-[#F9F9FB] opacity-70 leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-8 md:p-10 border-2 border-[#111112] dark:border-[#2A2A2C] bg-white dark:bg-[#111112]/90">
            <p className="font-sans text-lg text-[#111112] dark:text-[#F9F9FB] opacity-80 leading-relaxed max-w-3xl">
              <span className="font-bold text-[#111112] dark:text-[#F9F9FB] opacity-100">Our Commitment:</span> We&rsquo;re not here to churn out projects. We&rsquo;re here to build long-term partnerships with visionary leaders who value quality over speed, substance over flash, and results over buzzwords.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: CTA ── */}
      <section className="py-32 bg-accent-volt border-t-2 border-[#111112]">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-tight text-[#111112] mb-8">
            Ready to Work With a Team That Cares as Much as You Do?
          </h2>
          <p className="font-sans text-xl text-[#111112] opacity-70 mb-12 max-w-2xl leading-relaxed">
            Let&rsquo;s discuss your project. No pressure, no pitch deck&mdash;just an honest conversation about your goals and how we can help.
          </p>
          <Link
            href="/contact"
            className="font-bold uppercase tracking-widest border-2 border-[#111112] bg-[#111112] text-[#F9F9FB] hover:bg-[#F9F9FB] hover:text-[#111112] text-base md:text-lg px-10 py-5 rounded-none shadow-[4px_4px_0px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#000000] transition-all inline-block"
          >
            Start a Conversation
          </Link>
          <p className="font-sans text-sm text-[#111112] opacity-60 mt-6 uppercase tracking-widest font-bold">
            Response within 24 hours. No obligation.
          </p>
        </div>
      </section>

    </div>
  );
}
