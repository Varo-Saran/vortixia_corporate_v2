import Link from 'next/link';

// ── DATA ──────────────────────────────────────────────────────────────────────

const capabilities = [
  {
    id: '01',
    category: 'AI & Machine Learning Systems',
    type: 'Intelligent Automation & Predictive Systems',
    headline: 'AI That Learns. Decisions That Scale.',
    body: "Custom AI architectures that automate complex workflows, predict outcomes, and learn from your data. From conversational AI agents to computer vision systems, we deliver production-ready intelligence—not proof-of-concept demos.",
    delivers: [
      'Automated document processing & data extraction',
      'Predictive maintenance & anomaly detection',
      'Natural language processing for customer insights',
      'Recommendation engines & personalization systems',
      'Custom ML model training & deployment',
    ],
    stack: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI API', 'Hugging Face', 'Vector DBs'],
    outcomes: [
      '60–80% reduction in manual processing time',
      '85%+ accuracy in predictive models',
      'Real-time decision-making at scale',
    ],
    cta: 'View AI Capabilities',
    href: '/services',
    dark: true,
    span: 'lg:col-span-2',
  },
  {
    id: '02',
    category: 'Data Analytics & Business Intelligence',
    type: 'Predictive Analytics & Real-Time Dashboards',
    headline: 'From Raw Data to Strategic Clarity.',
    body: "End-to-end data pipelines that transform raw information into actionable intelligence. Custom dashboards and forecasting models that turn complexity into clarity—helping you make decisions backed by evidence, not instinct.",
    delivers: [
      'Real-time analytics dashboards',
      'Market trend prediction models',
      'Customer behavior analysis',
      'Financial forecasting systems',
      'KPI tracking & visualization',
    ],
    stack: ['Python', 'SQL', 'PostgreSQL', 'MongoDB', 'Apache Kafka', 'D3.js'],
    outcomes: [
      'Sub-second query response times',
      '40–60% improvement in decision speed',
      'Unified view across all data sources',
    ],
    cta: 'Explore Data Solutions',
    href: '/services',
    dark: false,
    span: 'lg:col-span-1',
  },
  {
    id: '03',
    category: 'Enterprise Security & Cloud Infrastructure',
    type: 'Zero-Trust Architecture & Scalable Cloud Systems',
    headline: 'Fortress-Grade. Built to Never Sleep.',
    body: "Military-grade security frameworks and cloud architectures that protect your assets while enabling rapid growth. Built for compliance, performance, and peace of mind—so you can scale without sleepless nights.",
    delivers: [
      'Zero-trust network design',
      'Cloud migration & optimization (AWS, Azure, GCP)',
      'Penetration testing & security audits',
      'SOC 2, GDPR, HIPAA compliance',
      'Disaster recovery & business continuity',
    ],
    stack: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker', 'Terraform', 'Vault', 'Cloudflare'],
    outcomes: [
      '99.99% uptime SLA',
      '90%+ reduction in security vulnerabilities',
      'Compliance certification in 6–8 weeks',
    ],
    cta: 'Scale Your Infrastructure',
    href: '/services',
    dark: false,
    span: 'lg:col-span-1',
  },
  {
    id: '04',
    category: 'Custom Web & Mobile Applications',
    type: 'High-Performance Digital Products',
    headline: 'Clean Engineering. Zero Bloat.',
    body: "Type-safe, scalable web and mobile applications built with modern frameworks. No bloat, no legacy code, no template shortcuts—just clean engineering that performs flawlessly at scale and grows with your business.",
    delivers: [
      'Custom web applications (Next.js, React)',
      'Native mobile apps (iOS & Android)',
      'API development & third-party integrations',
      'Legacy system modernization',
      'Performance optimization',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis'],
    outcomes: [
      'Sub-100ms page load times',
      '10x improvement in query performance',
      'Seamless mobile experiences across devices',
    ],
    cta: 'Explore Development',
    href: '/services',
    dark: true,
    span: 'lg:col-span-2',
  },
  {
    id: '05',
    category: 'Premium UI/UX & Brand Design',
    type: 'Conversion-Focused Digital Experiences',
    headline: 'Design That Converts. Not Just Impresses.',
    body: "Bold, intentional designs that don't just look exceptional—they drive results. From brand identities that command attention to complete product design systems, every pixel serves a strategic purpose.",
    delivers: [
      'Brand identity & visual systems',
      'UI/UX design & user research',
      'Design systems & component libraries',
      'Conversion rate optimization',
      'Marketing collateral & digital assets',
    ],
    stack: ['Figma', 'Adobe Creative Suite', 'Framer', 'Principle', 'Miro'],
    outcomes: [
      '30–50% improvement in conversion rates',
      'Consistent brand experience across touchpoints',
      'Accessible, WCAG-compliant interfaces',
    ],
    cta: 'View Design Approach',
    href: '/services',
    dark: false,
    span: 'lg:col-span-3',
  },
];

const trustPillars = [
  {
    num: '01',
    title: 'Senior-Level Expertise',
    body: "Every team member brings deep enterprise experience. We've architected systems at scale, secured critical infrastructure, and shipped AI solutions that generate real ROI. This isn't our first rodeo.",
  },
  {
    num: '02',
    title: 'Technical Depth',
    body: "We don't just use tools—we understand them at a fundamental level. From custom ML model architecture to zero-trust security design, we solve problems that template-driven agencies simply can't touch.",
  },
  {
    num: '03',
    title: 'Transparent Process',
    body: "No black boxes. No junior staff learning on your dime. You work directly with the experts building your solution, with clear communication, regular progress updates, and zero surprises.",
  },
];

// ── COMPONENT ─────────────────────────────────────────────────────────────────

export default function WorkPage() {
  return (
    <div className="flex flex-col bg-[#F9F9FB] dark:bg-[#0B0B0C] transition-colors duration-300">

      {/* ── SECTION 1: HERO ── */}
      <section className="container mx-auto px-6 md:px-12 pt-40 pb-24 border-b-2 border-[#111112] dark:border-[#2A2A2C]">
        <div className="flex flex-col lg:flex-row gap-16 items-end">
          <div className="max-w-4xl lg:flex-1">
            <span className="font-sans uppercase font-bold tracking-widest text-sm text-accent-volt mb-8 block bg-[#111112] dark:bg-[#2A2A2C] px-4 py-2 inline-block">
              Our Work
            </span>
            <h1 className="font-display text-5xl md:text-8xl mb-8 uppercase leading-none tracking-tight text-[#111112] dark:text-[#F9F9FB]">
              Results-Driven{' '}
              <span className="text-accent-volt">Digital Experiences.</span>
            </h1>
            <p className="font-sans text-xl md:text-2xl text-[#111112] dark:text-[#F9F9FB] opacity-80 leading-relaxed max-w-3xl">
              From enterprise AI systems to immersive digital products, we design and ship solutions that feel effortless to use and impossible to ignore. Every project is an opportunity to push boundaries and deliver measurable impact.
            </p>
          </div>

          {/* Capability Indicators */}
          <div className="flex flex-col gap-0 lg:flex-shrink-0 lg:w-72 w-full">
            {[
              { stat: '5', label: 'Core Service Disciplines' },
              { stat: '∞', label: 'Enterprise-Grade — Built to Scale' },
              { stat: '0', label: 'Templates Used. Ever.' },
            ].map((item, i) => (
              <div
                key={item.label}
                className={`flex items-center gap-6 p-6 border-2 border-[#111112] dark:border-[#2A2A2C] ${i > 0 ? '-mt-[2px]' : ''} bg-white dark:bg-[#111112]/90`}
              >
                <span className="font-display text-4xl font-bold text-accent-volt flex-shrink-0 w-14">{item.stat}</span>
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#111112] dark:text-[#F9F9FB] opacity-70 leading-snug">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: CAPABILITY SHOWCASE ── */}
      <section id="capabilities" className="py-32 border-b-2 border-[#111112] dark:border-[#2A2A2C]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mb-20">
            <span className="font-sans uppercase font-bold tracking-widest text-sm text-accent-volt mb-6 block bg-[#111112] dark:bg-[#2A2A2C] px-4 py-2 inline-block">
              What We Deliver
            </span>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-[#111112] dark:text-[#F9F9FB] mb-6">
              Built to Transform. Designed to Scale.
            </h2>
            <p className="font-sans text-xl text-[#111112] dark:text-[#F9F9FB] opacity-80 leading-relaxed max-w-3xl">
              While we&rsquo;re selectively building our public portfolio, here&rsquo;s the type of work we specialize in. Each domain represents our commitment to enterprise-grade quality, technical excellence, and measurable business impact.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {capabilities.map((cap) => (
              <div
                key={cap.id}
                className={`border-2 flex flex-col group hover:-translate-y-1 hover:translate-x-1 transition-transform shadow-[4px_4px_0px_0px_#111112] dark:shadow-[4px_4px_0px_0px_#2A2A2C] hover:shadow-[8px_8px_0px_0px_#CCFF00] ${cap.span} ${cap.dark ? 'bg-[#111112] dark:bg-[#0B0B0C] border-[#111112] dark:border-[#2A2A2C]' : 'bg-white dark:bg-[#111112]/90 border-[#111112] dark:border-[#2A2A2C]'}`}
              >
                {/* Header band */}
                <div className={`px-8 py-6 border-b-2 flex items-center justify-between ${cap.dark ? 'border-[#F9F9FB]/10 bg-[#F9F9FB]/5' : 'border-[#111112] dark:border-[#2A2A2C]'}`}>
                  <span className={`font-display text-5xl font-bold text-accent-volt leading-none`}>{cap.id}</span>
                  <span className={`font-sans text-xs font-bold uppercase tracking-widest px-3 py-1.5 border-2 ${cap.dark ? 'border-accent-volt/30 text-accent-volt' : 'border-[#111112] dark:border-[#2A2A2C] text-[#5A5A62]'}`}>
                    {cap.type.split('&')[0].trim()}
                  </span>
                </div>

                {/* Body */}
                <div className="p-8 flex flex-col flex-grow">
                  {/* Category + headline */}
                  <div className="mb-6">
                    <p className={`font-sans text-xs font-bold uppercase tracking-widest mb-2 ${cap.dark ? 'text-[#F9F9FB] opacity-40' : 'text-[#5A5A62]'}`}>
                      {cap.category}
                    </p>
                    <h3 className={`font-display text-2xl md:text-3xl uppercase mb-2 group-hover:text-accent-volt transition-colors ${cap.dark ? 'text-[#F9F9FB]' : 'text-[#111112] dark:text-[#F9F9FB]'}`}>
                      {cap.headline}
                    </h3>
                    <p className={`font-display text-sm uppercase tracking-tight ${cap.dark ? 'text-accent-volt' : 'text-[#5A5A62]'}`}>
                      {cap.type}
                    </p>
                  </div>

                  <p className={`font-sans text-sm leading-relaxed mb-8 ${cap.dark ? 'text-[#F9F9FB] opacity-60' : 'text-[#111112] dark:text-[#F9F9FB] opacity-70'}`}>
                    {cap.body}
                  </p>

                  {/* Deliverables */}
                  <div className="mb-6">
                    <p className={`font-sans text-xs font-bold uppercase tracking-widest mb-3 ${cap.dark ? 'text-[#F9F9FB] opacity-40' : 'text-[#5A5A62]'}`}>
                      Representative Capabilities
                    </p>
                    <ul className="flex flex-col gap-2">
                      {cap.delivers.map((d) => (
                        <li key={d} className={`font-sans text-sm flex items-start gap-2 ${cap.dark ? 'text-[#F9F9FB] opacity-70' : 'text-[#111112] dark:text-[#F9F9FB] opacity-80'}`}>
                          <span className="w-1.5 h-1.5 bg-accent-volt flex-shrink-0 mt-1.5" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack chips */}
                  <div className={`border-t-2 pt-6 mb-6 ${cap.dark ? 'border-[#F9F9FB]/10' : 'border-[#111112] dark:border-[#2A2A2C]'}`}>
                    <p className={`font-sans text-xs font-bold uppercase tracking-widest mb-3 ${cap.dark ? 'text-[#F9F9FB] opacity-40' : 'text-[#5A5A62]'}`}>
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cap.stack.map((t) => (
                        <span
                          key={t}
                          className={`font-sans text-xs font-bold uppercase tracking-widest px-2 py-1 border ${cap.dark ? 'border-[#F9F9FB]/20 text-[#F9F9FB] opacity-60' : 'border-[#111112] dark:border-[#2A2A2C] text-[#111112] dark:text-[#F9F9FB] opacity-70'}`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div className={`border-t-2 pt-6 mb-8 ${cap.dark ? 'border-[#F9F9FB]/10' : 'border-[#111112] dark:border-[#2A2A2C]'}`}>
                    <p className={`font-sans text-xs font-bold uppercase tracking-widest mb-3 ${cap.dark ? 'text-[#F9F9FB] opacity-40' : 'text-[#5A5A62]'}`}>
                      Typical Outcomes
                    </p>
                    <ul className="flex flex-col gap-2">
                      {cap.outcomes.map((o) => (
                        <li key={o} className={`font-sans text-sm font-bold flex items-center gap-2 ${cap.dark ? 'text-accent-volt' : 'text-[#111112] dark:text-[#F9F9FB]'}`}>
                          <span className="text-accent-volt">→</span> {o}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className={`mt-auto border-t-2 pt-6 ${cap.dark ? 'border-[#F9F9FB]/10' : 'border-[#111112] dark:border-[#2A2A2C]'}`}>
                    <Link
                      href={cap.href}
                      className={`font-sans font-bold uppercase tracking-widest text-sm flex items-center gap-2 w-max border-b-2 border-transparent group-hover:border-accent-volt pb-0.5 transition-colors ${cap.dark ? 'text-[#F9F9FB] group-hover:text-accent-volt' : 'text-[#111112] dark:text-[#F9F9FB] group-hover:text-accent-volt'}`}
                    >
                      {cap.cta} <span className="text-lg">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: CASE STUDY FRAMEWORK ── */}
      <section className="bg-[#111112] dark:bg-[#000000] py-32 border-b-2 border-[#F9F9FB] dark:border-[#2A2A2C] transition-colors duration-300">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mb-16">
            <span className="font-sans uppercase font-bold tracking-widest text-sm text-[#111112] mb-6 block bg-accent-volt px-4 py-2 inline-block">
              Case Study Template
            </span>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-[#F9F9FB] mb-6">
              How We Work: A Case Study Framework.
            </h2>
            <p className="font-sans text-xl text-[#F9F9FB] opacity-70 leading-relaxed max-w-3xl">
              As we complete client engagements, we&rsquo;ll publish detailed case studies following this structure. Here&rsquo;s exactly what you can expect from our work:
            </p>
          </div>

          {/* Template card */}
          <div className="border-2 border-[#F9F9FB]/20">
            {/* Title bar */}
            <div className="px-8 md:px-12 py-6 border-b-2 border-[#F9F9FB]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-sans text-xs font-bold uppercase tracking-widest text-[#F9F9FB] opacity-40 mb-1">Example Case Study</p>
                <h3 className="font-display text-2xl uppercase text-[#F9F9FB]">FinTech Startup — AI-Powered Fraud Detection System</h3>
              </div>
              <span className="font-sans text-xs font-bold uppercase tracking-widest px-3 py-2 border-2 border-accent-volt text-accent-volt whitespace-nowrap self-start">
                Template
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
              {/* Left column: Challenge + Approach */}
              <div className="lg:col-span-2 p-8 md:p-12 border-b-2 lg:border-b-0 lg:border-r-2 border-[#F9F9FB]/10">
                <div className="mb-10">
                  <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-accent-volt mb-4">The Challenge</h4>
                  <p className="font-sans text-base text-[#F9F9FB] opacity-70 leading-relaxed">
                    A rapidly growing fintech company needed to reduce fraudulent transactions by 70% while maintaining sub-second response times for legitimate payments. Their existing rule-based system was generating 40% false positives, damaging customer experience.
                  </p>
                </div>
                <div className="mb-10">
                  <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-accent-volt mb-4">Our Approach</h4>
                  <p className="font-sans text-base text-[#F9F9FB] opacity-70 leading-relaxed">
                    We architected a custom machine learning system combining real-time transaction analysis with behavioral pattern recognition, deployed on a zero-trust cloud infrastructure. The model continuously learns from new fraud patterns without requiring manual rule updates.
                  </p>
                </div>
                <div>
                  <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-accent-volt mb-4">The Solution</h4>
                  <div className="flex flex-wrap gap-3 mb-4">
                    {['Next.js', 'Python', 'TensorFlow', 'PostgreSQL', 'AWS'].map((t) => (
                      <span key={t} className="font-sans text-xs font-bold uppercase tracking-widest px-2 py-1 border border-[#F9F9FB]/20 text-[#F9F9FB] opacity-60">{t}</span>
                    ))}
                  </div>
                  <ul className="flex flex-col gap-2">
                    {['Real-time fraud scoring engine', 'Adaptive learning models', 'Automated alerting & case management', '12-week delivery from discovery to production'].map((f) => (
                      <li key={f} className="font-sans text-sm text-[#F9F9FB] opacity-60 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-accent-volt flex-shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right column: Results */}
              <div className="p-8 md:p-12">
                <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-accent-volt mb-8">The Results</h4>
                <div className="flex flex-col gap-6 mb-10">
                  {[
                    { stat: '92%', label: 'Reduction in fraudulent transactions' },
                    { stat: '<200ms', label: 'Response time for all predictions' },
                    { stat: '$2.3M', label: 'Saved in prevented fraud (6 months)' },
                    { stat: 'SOC 2', label: 'Compliance achieved' },
                  ].map((r) => (
                    <div key={r.stat} className="border-l-2 border-accent-volt pl-4">
                      <div className="font-display text-3xl text-accent-volt font-bold mb-1">{r.stat}</div>
                      <div className="font-sans text-xs text-[#F9F9FB] opacity-50 uppercase tracking-widest">{r.label}</div>
                    </div>
                  ))}
                </div>
                <div className="border-t-2 border-[#F9F9FB]/10 pt-8">
                  <p className="font-sans text-sm text-[#F9F9FB] opacity-50 italic leading-relaxed mb-4">
                    &ldquo;Vortixia transformed our security posture. Their AI system caught threats we didn&rsquo;t even know existed, and their team was a pleasure to work with.&rdquo;
                  </p>
                  <p className="font-sans text-xs font-bold uppercase tracking-widest text-[#F9F9FB] opacity-30">
                    — CTO, FinTech Client
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="font-sans text-xs text-[#F9F9FB] opacity-30 uppercase tracking-widest mt-6 text-center">
            ↑ This is a template structure. Real case studies will be published as client engagements complete.
          </p>
        </div>
      </section>

      {/* ── SECTION 4: TRANSPARENCY ── */}
      <section className="py-32 border-b-2 border-[#111112] dark:border-[#2A2A2C] bg-[#F9F9FB] dark:bg-[#0B0B0C] transition-colors duration-300">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mb-16">
            <span className="font-sans uppercase font-bold tracking-widest text-sm text-accent-volt mb-6 block bg-[#111112] dark:bg-[#2A2A2C] px-4 py-2 inline-block">
              Our Approach
            </span>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-[#111112] dark:text-[#F9F9FB] mb-6">
              Quality Over Quantity. Confidentiality Over Clout.
            </h2>
            <p className="font-sans text-xl text-[#111112] dark:text-[#F9F9FB] opacity-80 leading-relaxed max-w-3xl">
              You might notice we don&rsquo;t have a sprawling public portfolio. Here&rsquo;s why—and why it&rsquo;s a feature, not a bug.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-12">
            {[
              {
                title: "We're Selective",
                body: "We're not here to churn out 50 projects a year. We take on a limited number of engagements to ensure each client receives our full attention and expertise. Quality over volume—always.",
                icon: '◈',
              },
              {
                title: 'We Respect Confidentiality',
                body: "Many of our clients operate in competitive industries where discretion is paramount. We prioritize their security and competitive advantage over our marketing needs. Every engagement is treated with the same confidentiality we&rsquo;d want for our own work.",
                icon: '◈',
              },
              {
                title: "We're Building, Not Boasting",
                body: "As a newly launched collective, we're focused on delivering exceptional results for our founding clients. Public case studies will follow as projects complete and confidentiality agreements allow.",
                icon: '◈',
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`p-8 md:p-12 border-2 border-[#111112] dark:border-[#2A2A2C] bg-white dark:bg-[#111112]/90 ${i > 0 ? 'md:-ml-[2px]' : ''}`}
              >
                <span className="text-accent-volt text-2xl mb-6 block">{item.icon}</span>
                <h3 className="font-display text-xl uppercase mb-4 text-[#111112] dark:text-[#F9F9FB]">{item.title}</h3>
                <p className="font-sans text-sm text-[#111112] dark:text-[#F9F9FB] opacity-70 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          {/* "What This Means For You" callout */}
          <div className="border-2 border-accent-volt p-8 md:p-12">
            <h3 className="font-display text-2xl uppercase mb-6 text-[#111112] dark:text-[#F9F9FB]">What This Means For You</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                'Your project receives senior-level attention from day one',
                'Your data and intellectual property are protected',
                "You're working with a team that cares more about results than resume-building",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-accent-volt font-bold flex-shrink-0 text-lg">✓</span>
                  <p className="font-sans text-sm font-bold text-[#111112] dark:text-[#F9F9FB]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: CREDIBILITY ── */}
      <section className="py-32 border-b-2 border-[#111112] dark:border-[#2A2A2C] bg-[#111112] dark:bg-[#000000] transition-colors duration-300">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mb-16">
            <span className="font-sans uppercase font-bold tracking-widest text-sm text-[#111112] mb-6 block bg-accent-volt px-4 py-2 inline-block">
              Why Trust Us
            </span>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-[#F9F9FB]">
              Experience You Can Verify.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-16">
            {trustPillars.map((p, i) => (
              <div
                key={p.num}
                className={`p-8 md:p-12 border-2 border-[#F9F9FB]/20 group hover:border-accent-volt transition-colors ${i > 0 ? 'md:-ml-[2px]' : ''}`}
              >
                <span className="font-display text-4xl text-accent-volt mb-6 block font-bold">{p.num}</span>
                <h3 className="font-display text-xl uppercase mb-4 text-[#F9F9FB] group-hover:text-accent-volt transition-colors">{p.title}</h3>
                <p className="font-sans text-sm text-[#F9F9FB] opacity-60 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>

          {/* Team credentials strip */}
          <div className="border-2 border-[#F9F9FB]/10 p-8 md:p-10">
            <p className="font-sans text-xs font-bold uppercase tracking-widest text-[#F9F9FB] opacity-40 mb-6">Team Expertise at a Glance</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'Vathsaran', role: 'Founder & CEO', focus: 'AI · ML · Research', depth: 'Specialist in building intelligent systems and ML architectures from the ground up.' },
                { name: 'Ramna', role: 'AI/ML Engineer', focus: 'AI Models · Automation · NLP', depth: 'Focuses on production-grade model training, fine-tuning, and deployment pipelines.' },
                { name: 'Yaksharan', role: 'Cybersecurity Engineer', focus: 'Zero-Trust · Cloud · Compliance', depth: 'Architects hardened infrastructure and leads security audits across cloud providers.' },
              ].map((m) => (
                <div key={m.name} className="border-l-2 border-accent-volt pl-6">
                  <p className="font-display text-lg uppercase text-[#F9F9FB] mb-1">{m.name}</p>
                  <p className="font-sans text-xs font-bold uppercase tracking-widest text-accent-volt mb-2">{m.role}</p>
                  <p className="font-sans text-xs text-[#F9F9FB] opacity-40 uppercase tracking-widest mb-3">{m.focus}</p>
                  <p className="font-sans text-sm text-[#F9F9FB] opacity-50 leading-relaxed">{m.depth}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: NEXT STEPS / SUCCESS STORY ── */}
      <section className="py-32 border-b-2 border-[#111112] dark:border-[#2A2A2C] bg-[#F9F9FB] dark:bg-[#0B0B0C] transition-colors duration-300">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="font-sans uppercase font-bold tracking-widest text-sm text-accent-volt mb-6 block bg-[#111112] dark:bg-[#2A2A2C] px-4 py-2 inline-block">
                Your Project
              </span>
              <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-[#111112] dark:text-[#F9F9FB] mb-6">
                Ready to Be Our Next Success Story?
              </h2>
              <p className="font-sans text-xl text-[#111112] dark:text-[#F9F9FB] opacity-80 leading-relaxed mb-10">
                We&rsquo;re selectively partnering with visionary leaders who value quality over speed, substance over flash, and results over buzzwords. If you have a complex challenge that demands elite expertise, let&rsquo;s talk.
              </p>
              <div className="flex flex-wrap gap-6 mb-8">
                <Link
                  href="/contact"
                  className="font-bold uppercase tracking-widest border-2 border-[#111112] dark:border-[#F9F9FB] bg-accent-volt text-[#111112] hover:bg-[#111112] hover:text-accent-volt hover:border-[#111112] text-base px-8 py-4 rounded-none shadow-[4px_4px_0px_0px_#111112] dark:shadow-[4px_4px_0px_0px_#F9F9FB] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#111112] transition-all"
                >
                  Start Your Project
                </Link>
                <Link
                  href="/contact"
                  className="font-bold uppercase tracking-widest border-2 border-[#111112] dark:border-[#F9F9FB] bg-transparent text-[#111112] dark:text-[#F9F9FB] hover:bg-[#111112] hover:text-[#F9F9FB] dark:hover:bg-[#F9F9FB] dark:hover:text-[#111112] text-base px-8 py-4 rounded-none shadow-[4px_4px_0px_0px_#111112] dark:shadow-[4px_4px_0px_0px_#F9F9FB] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#111112] transition-all"
                >
                  Book a Free Consultation
                </Link>
              </div>
              <div className="flex flex-wrap gap-4">
                {['Free initial consultation', 'No obligation proposal', 'Response within 24 hours', 'Confidentiality guaranteed'].map((t) => (
                  <span key={t} className="font-sans text-xs font-bold text-[#111112] dark:text-[#F9F9FB] opacity-50 uppercase tracking-widest flex items-center gap-2">
                    <span className="text-accent-volt">✓</span> {t}
                  </span>
                ))}
              </div>
            </div>

            {/* What happens next — steps */}
            <div className="flex flex-col gap-0">
              <p className="font-sans text-xs font-bold uppercase tracking-widest text-[#5A5A62] mb-6">What Happens Next</p>
              {[
                { num: '01', title: 'Discovery Call (30 min)', desc: 'We discuss your goals, challenges, and vision. No slides, no pitching—just an honest conversation.' },
                { num: '02', title: 'Technical Assessment', desc: 'We analyze your current state and requirements to understand the full scope of the challenge.' },
                { num: '03', title: 'Solution Proposal', desc: 'Clear scope, timeline, and transparent pricing delivered within 48 hours of our call.' },
                { num: '04', title: 'Kickoff', desc: "Start building within 1 week of approval. No 6-week onboarding. No junior handoffs. Just results." },
              ].map((step, i) => (
                <div
                  key={step.num}
                  className={`flex gap-6 p-6 border-2 border-[#111112] dark:border-[#2A2A2C] bg-white dark:bg-[#111112]/90 group hover:bg-[#111112] dark:hover:bg-[#0B0B0C] transition-colors ${i > 0 ? '-mt-[2px]' : ''}`}
                >
                  <span className="font-display text-2xl text-accent-volt font-bold flex-shrink-0 w-10">{step.num}</span>
                  <div>
                    <h4 className="font-display text-lg uppercase text-[#111112] dark:text-[#F9F9FB] group-hover:text-[#F9F9FB] mb-1 transition-colors">{step.title}</h4>
                    <p className="font-sans text-sm text-[#111112] dark:text-[#F9F9FB] opacity-60 group-hover:text-[#F9F9FB] group-hover:opacity-60 transition-colors leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: FINAL CTA ── */}
      <section className="py-32 bg-[#111112] dark:bg-[#000000] border-t-2 border-[#F9F9FB] dark:border-[#2A2A2C] transition-colors duration-300">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <span className="font-sans uppercase font-bold tracking-widest text-sm text-[#111112] mb-8 block bg-accent-volt px-4 py-2 inline-block">
            Let&rsquo;s Collaborate
          </span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-tight text-[#F9F9FB] mb-8">
            Have a Complex{' '}
            <span className="text-accent-volt">Challenge?</span>
          </h2>
          <p className="font-sans text-xl text-[#F9F9FB] opacity-70 mb-12 max-w-2xl leading-relaxed">
            Bypass legacy bloat and collaborate directly with our senior engineering collective. Let&rsquo;s architect a solution that gives you a real competitive advantage.
          </p>
          <Link
            href="/contact"
            className="font-bold uppercase tracking-widest border-2 border-accent-volt bg-accent-volt text-[#111112] hover:bg-transparent hover:text-accent-volt text-base md:text-lg px-12 py-5 rounded-none shadow-[4px_4px_0px_0px_#CCFF00] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#CCFF00] transition-all inline-block"
          >
            Initialize Project
          </Link>
          <p className="font-sans text-sm text-[#F9F9FB] opacity-40 mt-6 uppercase tracking-widest font-bold">
            Confidentiality respected. Results guaranteed.
          </p>
        </div>
      </section>

    </div>
  );
}
