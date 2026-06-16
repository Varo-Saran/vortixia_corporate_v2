import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col bg-[#F9F9FB] dark:bg-[#0B0B0C] transition-colors duration-300">

      {/* ── HERO ── */}
      <section className="relative w-full min-h-[100svh] flex flex-col justify-center pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-5xl">
            <span className="font-sans uppercase font-bold tracking-widest text-sm text-accent-volt mb-8 block bg-[#111112] dark:bg-[#2A2A2C] px-4 py-2 inline-block">
              Enterprise-Grade Tech Collective
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] mb-8 uppercase leading-tight md:leading-none tracking-tighter text-[#111112] dark:text-[#F9F9FB]">
              Enterprise-Grade Tech.{' '}
              <span className="text-accent-volt">Startup Agility.</span>
            </h1>
            <p className="font-sans text-xl md:text-2xl text-[#111112] dark:text-[#F9F9FB] mb-12 max-w-3xl leading-relaxed opacity-80">
              We&rsquo;re a specialized collective of engineers, designers, and AI specialists building the future of business technology. From cutting-edge AI solutions and predictive analytics to secure architectures and premium design&mdash;we deliver bespoke, high-impact results that traditional agencies simply cannot match.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link
                href="/services"
                className="font-bold uppercase tracking-widest border-2 border-[#111112] dark:border-[#F9F9FB] bg-accent-volt hover:bg-[#111112] hover:text-accent-volt dark:hover:bg-[#F9F9FB] dark:hover:text-[#111112] text-[#111112] text-base md:text-lg px-8 py-4 rounded-none shadow-[4px_4px_0px_0px_#111112] dark:shadow-[4px_4px_0px_0px_#F9F9FB] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#111112] dark:active:shadow-[2px_2px_0px_0px_#F9F9FB] transition-all"
              >
                Explore Our Services
              </Link>
              <Link
                href="/projects"
                className="font-bold uppercase tracking-widest border-2 border-[#111112] dark:border-[#F9F9FB] bg-[#F9F9FB] dark:bg-[#0B0B0C] text-[#111112] dark:text-[#F9F9FB] hover:bg-[#111112] hover:text-[#F9F9FB] dark:hover:bg-[#F9F9FB] dark:hover:text-[#111112] text-base md:text-lg px-8 py-4 rounded-none shadow-[4px_4px_0px_0px_#111112] dark:shadow-[4px_4px_0px_0px_#F9F9FB] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#111112] dark:active:shadow-[2px_2px_0px_0px_#F9F9FB] transition-all"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <Link
          href="#advantage"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#111112] dark:text-[#F9F9FB] opacity-40 hover:opacity-100 hover:text-accent-volt dark:hover:text-accent-volt transition-all animate-bounce cursor-pointer p-4"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </Link>
      </section>

      {/* ── SECTION 2: THE VORTIXIA ADVANTAGE ── */}
      <section id="advantage" className="bg-[#F9F9FB] dark:bg-[#0B0B0C] py-32 border-t-2 border-[#111112] dark:border-[#2A2A2C] transition-colors duration-300">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mb-16">
            <span className="font-sans uppercase font-bold tracking-widest text-sm text-accent-volt mb-6 block bg-[#111112] dark:bg-[#2A2A2C] px-4 py-2 inline-block">
              Why Vortixia
            </span>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-[#111112] dark:text-[#F9F9FB] mb-6">
              Big Agencies Have Protocols. We Have Precision.
            </h2>
            <p className="font-sans text-xl text-[#111112] dark:text-[#F9F9FB] opacity-80 leading-relaxed max-w-3xl">
              Traditional tech providers are bloated with bureaucracy, rigid processes, and inflated costs. We&rsquo;re different. As a focused, agile team, we deliver enterprise-level quality with the speed, flexibility, and personalized attention that only a dedicated specialist collective can provide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                title: 'AI-First Mindset',
                body: "We don't just implement AI—we architect intelligent systems that automate workflows, predict outcomes, and keep your business steps ahead of the curve. AI isn't an add-on; it's our foundation.",
              },
              {
                num: '02',
                title: 'Uncompromised Quality',
                body: 'No templates. No shortcuts. No mass-produced solutions. Every project receives obsessive attention to detail, custom engineering, and premium design that reflects your brand\'s ambition.',
              },
              {
                num: '03',
                title: 'High-Impact Agility',
                body: 'No account managers acting as middlemen. No 6-week onboarding. You work directly with the experts building your solution—faster delivery, clearer communication, better results.',
              },
            ].map((p) => (
              <div
                key={p.num}
                className="p-8 md:p-12 border-2 border-[#111112] dark:border-[#2A2A2C] bg-white dark:bg-[#111112]/90 backdrop-blur-md shadow-[4px_4px_0px_0px_#111112] dark:shadow-[4px_4px_0px_0px_#2A2A2C] flex flex-col justify-between group hover:-translate-y-1 hover:translate-x-1 transition-transform"
              >
                <div>
                  <span className="font-display text-3xl text-accent-volt mb-8 block font-bold">{p.num}</span>
                  <h3 className="font-display text-2xl uppercase mb-6 text-[#111112] dark:text-[#F9F9FB] group-hover:text-accent-volt transition-colors">
                    {p.title}
                  </h3>
                  <p className="font-sans text-[#111112] dark:text-[#F9F9FB] opacity-80 leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: SERVICES ── */}
      <section id="services" className="bg-[#111112] dark:bg-[#000000] border-t-2 border-[#F9F9FB] dark:border-[#2A2A2C] py-32 transition-colors duration-300">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mb-16">
            <span className="font-sans uppercase font-bold tracking-widest text-sm text-[#111112] mb-6 block bg-accent-volt px-4 py-2 inline-block">
              What We Do
            </span>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-[#F9F9FB] mb-6">
              Full-Spectrum Tech Solutions. Built for Growth.
            </h2>
            <p className="font-sans text-xl text-[#F9F9FB] opacity-70 leading-relaxed max-w-3xl">
              Whether you&rsquo;re an individual entrepreneur or a scaling enterprise, we provide the technical expertise to bring your vision to life. Our services are designed to work independently or as an integrated ecosystem.
            </p>
          </div>

          <div className="bento-grid">
            {/* 01 — AI (Large) */}
            <div className="bento-item-large border-2 border-[#F9F9FB] dark:border-[#2A2A2C] p-6 md:p-12 bg-[#F9F9FB]/10 dark:bg-[#0B0B0C]/50 backdrop-blur-md rounded-none hover:bg-[#F9F9FB]/20 transition-colors">
              <div className="w-12 h-12 bg-accent-volt mb-8 border-2 border-[#F9F9FB] dark:border-[#2A2A2C] flex items-center justify-center">
                <span className="font-bold text-xl text-[#111112]">01</span>
              </div>
              <h3 className="font-display text-3xl uppercase mb-4 text-accent-volt">Artificial Intelligence Solutions</h3>
              <p className="font-sans text-lg text-[#F9F9FB] leading-relaxed max-w-2xl mb-6 opacity-80">
                Custom AI architectures, machine learning models, automated workflow agents, and intelligent system integrations. We build bespoke AI solutions that solve real business problems—not demo projects.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {['Custom ML Model Development', 'AI Workflow Automation', 'Natural Language Processing (NLP)', 'Computer Vision Systems', 'AI Strategy & Consulting'].map((c) => (
                  <li key={c} className="font-sans text-sm text-[#F9F9FB] opacity-60 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent-volt flex-shrink-0 inline-block" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* 02 — Data (Small) */}
            <div className="bento-item-small p-6 md:p-12 rounded-none bg-[#F9F9FB]/90 dark:bg-[#111112]/90 backdrop-blur-md border-2 border-[#F9F9FB] dark:border-[#2A2A2C] hover:bg-[#F9F9FB] dark:hover:bg-[#111112] transition-colors">
              <div className="w-12 h-12 bg-accent-volt text-[#111112] mb-8 border-2 border-[#111112] dark:border-[#2A2A2C] flex items-center justify-center">
                <span className="font-bold text-xl">02</span>
              </div>
              <h3 className="font-display text-2xl uppercase mb-4 text-[#111112] dark:text-[#F9F9FB]">Data Analysis & Predictions</h3>
              <p className="font-sans text-base text-[#111112] dark:text-[#F9F9FB] opacity-80 leading-relaxed mb-4">
                Transform raw data into actionable intelligence. We design predictive analytics systems and forecasting models that turn complexity into clarity.
              </p>
              <ul className="flex flex-col gap-1.5">
                {['Predictive Analytics & Forecasting', 'Business Intelligence Dashboards', 'Data Pipeline Architecture', 'Statistical Modeling', 'Real-Time Data Processing'].map((c) => (
                  <li key={c} className="font-sans text-xs text-[#111112] dark:text-[#F9F9FB] opacity-60 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent-volt flex-shrink-0 inline-block" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* 03 — Cybersecurity (Small) */}
            <div className="bento-item-small p-6 md:p-12 rounded-none bg-[#F9F9FB]/90 dark:bg-[#111112]/90 backdrop-blur-md border-2 border-[#F9F9FB] dark:border-[#2A2A2C] hover:bg-[#F9F9FB] dark:hover:bg-[#111112] transition-colors">
              <div className="w-12 h-12 bg-accent-volt text-[#111112] mb-8 border-2 border-[#111112] dark:border-[#2A2A2C] flex items-center justify-center">
                <span className="font-bold text-xl">03</span>
              </div>
              <h3 className="font-display text-2xl uppercase mb-4 text-[#111112] dark:text-[#F9F9FB]">Cybersecurity & Infrastructure</h3>
              <p className="font-sans text-base text-[#111112] dark:text-[#F9F9FB] opacity-80 leading-relaxed mb-4">
                Protect what matters. We design zero-trust cloud architectures, implement military-grade security protocols, and build robust systems that scale without compromising performance.
              </p>
              <ul className="flex flex-col gap-1.5">
                {['Cloud Architecture (AWS, Azure, GCP)', 'Penetration Testing & Audits', 'Zero-Trust Network Security', 'Compliance & Data Protection', 'Infrastructure Monitoring'].map((c) => (
                  <li key={c} className="font-sans text-xs text-[#111112] dark:text-[#F9F9FB] opacity-60 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent-volt flex-shrink-0 inline-block" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* 04 — Web & App (Large) */}
            <div className="bento-item-large border-2 border-[#F9F9FB] dark:border-[#2A2A2C] p-6 md:p-12 bg-[#F9F9FB]/10 dark:bg-[#0B0B0C]/50 backdrop-blur-md rounded-none hover:bg-[#F9F9FB]/20 transition-colors">
              <div className="w-12 h-12 bg-accent-volt mb-8 border-2 border-[#F9F9FB] dark:border-[#2A2A2C] flex items-center justify-center">
                <span className="font-bold text-xl text-[#111112]">04</span>
              </div>
              <h3 className="font-display text-3xl uppercase mb-4 text-accent-volt">Web & App Development</h3>
              <p className="font-sans text-lg text-[#F9F9FB] leading-relaxed max-w-2xl mb-6 opacity-80">
                High-performance web applications and native mobile apps built with modern, type-safe technologies. No bloated frameworks, no legacy code—just clean, scalable engineering that performs.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {['Custom Web Applications (Next.js, React)', 'Mobile App Development (iOS & Android)', 'API Development & Integration', 'Database Architecture (PostgreSQL, MongoDB)', 'Performance Optimization'].map((c) => (
                  <li key={c} className="font-sans text-sm text-[#F9F9FB] opacity-60 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent-volt flex-shrink-0 inline-block" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* 05 — Design (Full Width) */}
            <div className="col-span-12 border-2 border-[#F9F9FB] dark:border-[#2A2A2C] p-6 md:p-12 bg-[#F9F9FB]/90 dark:bg-[#111112]/90 backdrop-blur-md rounded-none hover:bg-[#F9F9FB] dark:hover:bg-[#111112] transition-colors">
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent-volt mb-6 border-2 border-[#111112] dark:border-[#2A2A2C] flex items-center justify-center">
                    <span className="font-bold text-xl text-[#111112]">05</span>
                  </div>
                  <h3 className="font-display text-3xl uppercase mb-4 text-[#111112] dark:text-[#F9F9FB]">Graphic & UI/UX Design</h3>
                  <p className="font-sans text-lg text-[#111112] dark:text-[#F9F9FB] leading-relaxed max-w-xl opacity-80">
                    Premium visual identities and intuitive digital experiences. We design bold, high-legibility interfaces and immersive product flows that don&rsquo;t just look exceptional&mdash;they convert.
                  </p>
                </div>
                <div className="md:ml-auto flex flex-wrap gap-3 md:self-center">
                  {['Brand Identity & Logo Design', 'UI/UX Design & Prototyping', 'Design Systems', 'Marketing Collateral', 'Product Design'].map((c) => (
                    <span key={c} className="font-sans text-xs font-bold uppercase tracking-widest px-3 py-1.5 border-2 border-[#111112] dark:border-[#2A2A2C] text-[#111112] dark:text-[#F9F9FB]">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Link
              href="/services"
              className="font-bold uppercase tracking-widest border-2 border-[#F9F9FB] bg-accent-volt text-[#111112] hover:bg-[#F9F9FB] hover:text-[#111112] text-base px-8 py-4 rounded-none shadow-[4px_4px_0px_0px_#F9F9FB] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#F9F9FB] transition-all inline-block"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: OUR PROCESS ── */}
      <section id="process" className="bg-[#F9F9FB] dark:bg-[#0B0B0C] py-32 border-t-2 border-[#111112] dark:border-[#2A2A2C] transition-colors duration-300">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mb-16">
            <span className="font-sans uppercase font-bold tracking-widest text-sm text-accent-volt mb-6 block bg-[#111112] dark:bg-[#2A2A2C] px-4 py-2 inline-block">
              How We Work
            </span>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-[#111112] dark:text-[#F9F9FB] mb-6">
              A Streamlined Process. Exceptional Results.
            </h2>
            <p className="font-sans text-xl text-[#111112] dark:text-[#F9F9FB] opacity-80 leading-relaxed max-w-3xl">
              We&rsquo;ve replaced corporate bureaucracy with a transparent, efficient workflow that keeps you informed and involved at every stage. No black boxes. No surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {[
              { num: '01', title: 'Discover', body: 'We start with a deep-dive consultation to understand your goals, challenges, and vision. No assumptions—just clarity.' },
              { num: '02', title: 'Strategize', body: 'We architect a tailored solution roadmap, defining scope, timeline, and deliverables. You\'ll know exactly what to expect.' },
              { num: '03', title: 'Build', body: 'Our team executes with precision, providing regular updates and iterative feedback loops. You\'re never in the dark.' },
              { num: '04', title: 'Deliver & Scale', body: 'We launch, optimize, and provide ongoing support. Your solution is built to grow with your business.' },
            ].map((step, i) => (
              <div
                key={step.num}
                className={`p-8 md:p-10 border-2 border-[#111112] dark:border-[#2A2A2C] bg-white dark:bg-[#111112]/90 group hover:bg-[#111112] dark:hover:bg-[#0B0B0C] transition-colors ${i > 0 ? 'md:-ml-[2px]' : ''}`}
              >
                <span className="font-display text-4xl text-accent-volt mb-6 block font-bold">{step.num}</span>
                <h3 className="font-display text-xl uppercase mb-4 text-[#111112] dark:text-[#F9F9FB] group-hover:text-[#F9F9FB] transition-colors">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-[#111112] dark:text-[#F9F9FB] opacity-70 group-hover:opacity-90 group-hover:text-[#F9F9FB] leading-relaxed transition-colors">
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/process"
              className="font-bold uppercase tracking-widest border-2 border-[#111112] dark:border-[#F9F9FB] bg-[#111112] dark:bg-[#F9F9FB] text-[#F9F9FB] dark:text-[#111112] hover:bg-accent-volt hover:text-[#111112] hover:border-[#111112] text-base px-8 py-4 rounded-none shadow-[4px_4px_0px_0px_#111112] dark:shadow-[4px_4px_0px_0px_#F9F9FB] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#111112] transition-all inline-block"
            >
              See Our Process in Action →
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: THE VORTIXIA PROMISE (Option A) ── */}
      <section className="bg-[#111112] dark:bg-[#000000] border-t-2 border-[#F9F9FB] dark:border-[#2A2A2C] py-32 transition-colors duration-300">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mb-16">
            <span className="font-sans uppercase font-bold tracking-widest text-sm text-[#111112] mb-6 block bg-accent-volt px-4 py-2 inline-block">
              The Vortixia Promise
            </span>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-[#F9F9FB] mb-6">
              Your Success Is Our Portfolio.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Dedicated Attention',
                body: "When you work with Vortixia, you're not ticket #4,827. You're a priority. Every project receives direct access to our senior team—no junior handoffs, no diluted focus.",
                icon: '◈',
              },
              {
                title: 'Transparent Pricing',
                body: "No hidden fees. No scope creep surprises. We provide clear, upfront pricing and stick to it. Premium quality doesn't require premium markups.",
                icon: '◈',
              },
              {
                title: 'Long-Term Partnership',
                body: "We're not here for one-off projects. We build relationships. As your business grows, we grow with you—scaling our support to match your ambition.",
                icon: '◈',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 md:p-12 border-2 border-[#F9F9FB] dark:border-[#2A2A2C] bg-[#F9F9FB]/5 group hover:bg-[#F9F9FB]/10 transition-colors"
              >
                <span className="text-accent-volt text-3xl mb-8 block">{item.icon}</span>
                <h3 className="font-display text-2xl uppercase mb-4 text-[#F9F9FB] group-hover:text-accent-volt transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans text-[#F9F9FB] opacity-70 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: FEATURED WORK ── */}
      <section id="work" className="bg-[#F9F9FB] dark:bg-[#0B0B0C] py-32 border-t-2 border-[#111112] dark:border-[#2A2A2C] transition-colors duration-300">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="font-sans uppercase font-bold tracking-widest text-sm text-accent-volt mb-6 block bg-[#111112] dark:bg-[#2A2A2C] px-4 py-2 inline-block">
                Our Work
              </span>
              <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-[#111112] dark:text-[#F9F9FB] mb-4">
                Solutions That Speak for Themselves.
              </h2>
              <p className="font-sans text-xl text-[#111112] dark:text-[#F9F9FB] opacity-80">
                Every project is an opportunity to push boundaries. Here&rsquo;s a glimpse of the type of work we deliver.
              </p>
            </div>
            <Link
              href="/projects"
              className="font-bold uppercase tracking-widest border-2 border-[#111112] dark:border-[#F9F9FB] px-8 py-4 whitespace-nowrap bg-[#111112] text-[#F9F9FB] dark:bg-[#F9F9FB] dark:text-[#111112] hover:bg-accent-volt hover:text-[#111112] hover:border-[#111112] dark:hover:bg-accent-volt dark:hover:text-[#111112] shadow-[4px_4px_0px_0px_#111112] dark:shadow-[4px_4px_0px_0px_#F9F9FB] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#111112] dark:active:shadow-[2px_2px_0px_0px_#F9F9FB] transition-all"
            >
              View All Projects →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                title: 'AI-Powered Analytics Platform',
                client: 'Confidential (Stealth Startup)',
                stack: 'Python · TensorFlow · PostgreSQL · React',
                result: '85% accuracy in 30-day market predictions',
                text: 'Custom machine learning architecture that processes 2M+ data points daily, delivering real-time predictive insights for financial forecasting.',
              },
              {
                id: 2,
                title: 'Enterprise Security Overhaul',
                client: 'Mid-Size SaaS Company',
                stack: 'AWS · Kubernetes · Terraform · Next.js',
                result: 'SOC 2 compliance achieved in 8 weeks',
                text: 'Complete zero-trust infrastructure redesign, reducing vulnerability surface by 94% while improving system performance by 40%.',
              },
              {
                id: 3,
                title: 'Predictive Maintenance Dashboard',
                client: 'Manufacturing Firm',
                stack: 'Python · Apache Kafka · React · D3.js',
                result: '$2.3M annual savings in prevented downtime',
                text: 'Real-time IoT telemetry system that predicts equipment failures 72 hours in advance, reducing downtime by 60%.',
              },
            ].map((proj, index) => (
              <div
                key={proj.id}
                className="p-0 border-2 border-[#111112] dark:border-[#2A2A2C] flex flex-col group rounded-none bg-white dark:bg-[#111112]/90 backdrop-blur-md shadow-[4px_4px_0px_0px_#111112] dark:shadow-[4px_4px_0px_0px_#2A2A2C] hover:-translate-y-2 hover:translate-x-2 transition-transform hover:shadow-[12px_12px_0px_0px_#111112] dark:hover:shadow-[12px_12px_0px_0px_#2A2A2C]"
              >
                <div className="h-52 border-b-2 border-[#111112] dark:border-[#2A2A2C] relative overflow-hidden bg-[#111112]">
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
                <div className="p-6 md:p-10 flex flex-col flex-grow">
                  <span className="font-sans text-xs uppercase tracking-widest text-[#5A5A62] mb-1 font-bold">
                    CLIENT: {proj.client}
                  </span>
                  <h3 className="font-display text-xl uppercase mb-3 text-[#111112] dark:text-[#F9F9FB] group-hover:text-accent-volt transition-colors">
                    {proj.title}
                  </h3>
                  <p className="font-sans text-sm text-[#111112] dark:text-[#F9F9FB] opacity-70 mb-4 flex-grow leading-relaxed">{proj.text}</p>
                  <div className="border-t-2 border-[#111112] dark:border-[#2A2A2C] pt-4 mb-4">
                    <p className="font-sans text-xs text-[#5A5A62] uppercase tracking-widest mb-1">Tech Stack</p>
                    <p className="font-sans text-xs font-bold text-[#111112] dark:text-[#F9F9FB]">{proj.stack}</p>
                  </div>
                  <div className="bg-accent-volt px-3 py-2 border-2 border-[#111112] mb-6 inline-block self-start">
                    <p className="font-sans text-xs font-bold text-[#111112] uppercase tracking-widest">{proj.result}</p>
                  </div>
                  <Link
                    href="/projects"
                    className="text-sm font-bold uppercase tracking-widest text-[#111112] dark:text-[#F9F9FB] group-hover:text-accent-volt transition-colors flex items-center gap-2 w-max border-b-2 border-transparent group-hover:border-accent-volt pb-1"
                  >
                    View Case Study <span className="text-xl">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: ENGAGEMENT MODELS ── */}
      <section className="bg-[#111112] dark:bg-[#000000] border-t-2 border-[#F9F9FB] dark:border-[#2A2A2C] py-32 transition-colors duration-300">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mb-16">
            <span className="font-sans uppercase font-bold tracking-widest text-sm text-[#111112] mb-6 block bg-accent-volt px-4 py-2 inline-block">
              Flexible Partnerships
            </span>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-[#F9F9FB] mb-6">
              How We Work Together.
            </h2>
            <p className="font-sans text-xl text-[#F9F9FB] opacity-70 leading-relaxed max-w-3xl">
              Whether you need a one-time solution or an ongoing technical partner, we offer flexible engagement models designed to fit your stage and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {[
              {
                title: 'Project-Based',
                desc: 'Perfect for defined scopes and specific deliverables. Fixed price, fixed timeline, no surprises.',
                ideal: 'MVPs, website builds, specific integrations, design projects',
                accent: true,
              },
              {
                title: 'Retainer Partnership',
                desc: 'Ongoing technical support and development. Priority access, monthly hours, strategic guidance.',
                ideal: 'Growing businesses needing continuous development, maintenance, and optimization',
                accent: false,
              },
              {
                title: 'Fractional Tech Lead',
                desc: 'Senior-level expertise without the full-time cost. We act as your CTO or technical advisor on a part-time basis.',
                ideal: 'Startups and small businesses needing strategic direction without hiring a full-time executive',
                accent: false,
              },
            ].map((model, i) => (
              <div
                key={model.title}
                className={`p-8 md:p-12 border-2 border-[#F9F9FB] dark:border-[#2A2A2C] group hover:border-accent-volt transition-colors ${i > 0 ? 'md:-ml-[2px]' : ''} ${model.accent ? 'bg-accent-volt' : 'bg-[#F9F9FB]/5'}`}
              >
                <h3 className={`font-display text-2xl uppercase mb-4 ${model.accent ? 'text-[#111112]' : 'text-[#F9F9FB] group-hover:text-accent-volt'} transition-colors`}>
                  {model.title}
                </h3>
                <p className={`font-sans text-base leading-relaxed mb-6 ${model.accent ? 'text-[#111112]' : 'text-[#F9F9FB] opacity-70'}`}>
                  {model.desc}
                </p>
                <div className={`border-t-2 pt-4 ${model.accent ? 'border-[#111112]' : 'border-[#F9F9FB]/20'}`}>
                  <p className={`font-sans text-xs uppercase tracking-widest mb-1 font-bold ${model.accent ? 'text-[#111112] opacity-60' : 'text-[#F9F9FB] opacity-40'}`}>Ideal For</p>
                  <p className={`font-sans text-sm leading-relaxed ${model.accent ? 'text-[#111112]' : 'text-[#F9F9FB] opacity-70'}`}>{model.ideal}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/contact"
              className="font-bold uppercase tracking-widest border-2 border-[#F9F9FB] bg-accent-volt text-[#111112] hover:bg-[#F9F9FB] hover:text-[#111112] text-base px-8 py-4 rounded-none shadow-[4px_4px_0px_0px_#F9F9FB] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#F9F9FB] transition-all inline-block"
            >
              Let&rsquo;s Discuss Your Needs →
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: TECH STACK ── */}
      <section className="bg-[#F9F9FB] dark:bg-[#0B0B0C] py-32 border-t-2 border-[#111112] dark:border-[#2A2A2C] transition-colors duration-300">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mb-16">
            <span className="font-sans uppercase font-bold tracking-widest text-sm text-accent-volt mb-6 block bg-[#111112] dark:bg-[#2A2A2C] px-4 py-2 inline-block">
              Our Tools
            </span>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-[#111112] dark:text-[#F9F9FB] mb-6">
              Built With the Best.
            </h2>
            <p className="font-sans text-xl text-[#111112] dark:text-[#F9F9FB] opacity-80 leading-relaxed max-w-3xl">
              We use industry-leading technologies to ensure your solutions are scalable, secure, and future-proof.
            </p>
          </div>

          <div className="flex flex-col gap-0">
            {[
              {
                category: 'AI / ML',
                tools: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face'],
              },
              {
                category: 'Frontend',
                tools: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
              },
              {
                category: 'Backend',
                tools: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis'],
              },
              {
                category: 'Cloud / DevOps',
                tools: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
              },
              {
                category: 'Design',
                tools: ['Figma', 'Adobe Creative Suite', 'Framer'],
              },
              {
                category: 'Security',
                tools: ['OWASP', 'Burp Suite', 'Cloudflare', 'Vault'],
              },
            ].map((row, i) => (
              <div
                key={row.category}
                className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 px-6 py-6 border-2 border-[#111112] dark:border-[#2A2A2C] bg-white dark:bg-[#111112]/90 hover:bg-[#F9F9FB] dark:hover:bg-[#111112] transition-colors ${i > 0 ? '-mt-[2px]' : ''}`}
              >
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-accent-volt bg-[#111112] dark:bg-[#2A2A2C] px-3 py-1.5 whitespace-nowrap min-w-[110px]">
                  {row.category}
                </span>
                <div className="flex flex-wrap gap-3">
                  {row.tools.map((t) => (
                    <span
                      key={t}
                      className="font-sans text-sm font-bold uppercase tracking-widest text-[#111112] dark:text-[#F9F9FB] px-3 py-1.5 border-2 border-[#111112] dark:border-[#2A2A2C] hover:border-accent-volt hover:text-accent-volt transition-colors cursor-default"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 9: FINAL CTA ── */}
      <section className="bg-[#111112] dark:bg-[#000000] border-t-2 border-[#F9F9FB] dark:border-[#2A2A2C] py-32 transition-colors duration-300">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-tight text-[#F9F9FB] mb-6">
              Ready to Build Something{' '}
              <span className="text-accent-volt">Exceptional?</span>
            </h2>
            <p className="font-sans text-xl text-[#F9F9FB] opacity-70 mb-12 max-w-2xl leading-relaxed">
              Whether you have a clear vision or just a rough idea, we&rsquo;re here to help you bring it to life. Let&rsquo;s start with a conversation—no pressure, no pitch decks, just honest technical guidance.
            </p>
            <div className="flex flex-wrap gap-6 mb-10">
              <Link
                href="/contact"
                className="font-bold uppercase tracking-widest border-2 border-accent-volt bg-accent-volt hover:bg-[#F9F9FB] hover:border-[#F9F9FB] text-[#111112] text-base md:text-lg px-8 py-4 rounded-none shadow-[4px_4px_0px_0px_#CCFF00] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#CCFF00] transition-all"
              >
                Start Your Project
              </Link>
              <Link
                href="/contact"
                className="font-bold uppercase tracking-widest border-2 border-[#F9F9FB] bg-transparent text-[#F9F9FB] hover:bg-[#F9F9FB] hover:text-[#111112] text-base md:text-lg px-8 py-4 rounded-none shadow-[4px_4px_0px_0px_#F9F9FB] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#F9F9FB] transition-all"
              >
                Book a Free 15-Min Consultation
              </Link>
            </div>
            <div className="flex flex-wrap gap-6">
              {['No obligation consultation', 'Response within 24 hours', 'Transparent pricing from day one'].map((t) => (
                <span key={t} className="font-sans text-sm text-[#F9F9FB] opacity-60 flex items-center gap-2">
                  <span className="text-accent-volt font-bold">✓</span> {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
