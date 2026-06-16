"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

// ── DATA ──────────────────────────────────────────────────────────────────────

const services = [
  {
    id: '01',
    title: 'Artificial Intelligence Solutions',
    headline: 'AI That Works. Not Just Demos.',
    body: "We build production-ready AI systems that solve real business problems. From custom machine learning models that predict customer behavior to automated workflow agents that eliminate manual tasks, we deliver AI solutions that generate measurable ROI—not just technical showcases.",
    delivers: [
      'Custom ML Model Development & Training',
      'AI Workflow Automation & Agent Systems',
      'Natural Language Processing (NLP) Applications',
      'Computer Vision & Image Recognition',
      'AI Strategy & Implementation Roadmaps',
      'Integration with Existing Systems',
    ],
    capabilities: [
      'Predictive analytics for sales forecasting',
      'Automated customer support chatbots',
      'Document processing & data extraction',
      'Recommendation engines',
      'Anomaly detection systems',
    ],
    cta: 'Explore AI Solutions',
    span: 'md:col-span-2',
    dark: true,
  },
  {
    id: '02',
    title: 'Data Analysis & Predictions',
    headline: 'Turn Raw Data Into Strategic Advantage.',
    body: "Data without insight is just noise. We transform your raw data pipelines into predictive intelligence systems that help you make decisions backed by evidence, not guesswork. Our custom forecasting models and analytics dashboards turn complexity into actionable clarity.",
    delivers: [
      'Predictive Analytics & Forecasting Models',
      'Business Intelligence Dashboards',
      'Data Pipeline Architecture & Optimization',
      'Statistical Modeling & Analysis',
      'Real-Time Data Processing Systems',
      'Custom Reporting & Visualization',
    ],
    capabilities: [
      'Market trend prediction',
      'Customer behavior analysis',
      'Operational efficiency metrics',
      'Financial forecasting',
      'Risk assessment models',
    ],
    cta: 'Discover Predictive Analytics',
    span: 'md:col-span-1',
    dark: false,
  },
  {
    id: '03',
    title: 'Advanced Security & Infrastructure',
    headline: 'Fortress-Grade Security. Zero Compromise.',
    body: "Your data is your most valuable asset. We design zero-trust cloud architectures and implement military-grade security protocols that protect your business from evolving threats. Our infrastructure solutions are built for absolute uptime, scalability, and compliance—without sacrificing performance.",
    delivers: [
      'Zero-Trust Cloud Architecture Design',
      'Penetration Testing & Security Audits',
      'Network Security & Firewall Configuration',
      'Compliance & Data Protection (SOC 2, GDPR, HIPAA)',
      'Infrastructure Monitoring & Alerting',
      'Disaster Recovery & Backup Systems',
    ],
    capabilities: [
      'AWS, Azure, GCP architecture',
      'Kubernetes & container security',
      'API security & rate limiting',
      'Encryption & key management',
      'Incident response planning',
    ],
    cta: 'Scale Your Infrastructure',
    span: 'md:col-span-1',
    dark: false,
  },
  {
    id: '04',
    title: 'Custom App & Web Development',
    headline: 'High-Performance. Zero Bloat.',
    body: "We build web applications and native mobile apps with modern, type-safe technologies that perform flawlessly at scale. No bloated frameworks, no legacy code, no template shortcuts—just clean, maintainable engineering that delivers exceptional user experiences and business results.",
    delivers: [
      'Custom Web Applications (Next.js, React, TypeScript)',
      'Native Mobile Apps (iOS & Android)',
      'API Development & Third-Party Integrations',
      'Database Architecture & Optimization',
      'Performance Tuning & Scaling',
      'Legacy System Modernization',
    ],
    capabilities: [
      'Frontend: Next.js · React · TypeScript · Tailwind CSS',
      'Backend: Node.js · Python · PostgreSQL · MongoDB',
      'Mobile: React Native · Swift · Kotlin',
      'DevOps: Docker · Kubernetes · CI/CD pipelines',
    ],
    cta: 'Explore Development',
    span: 'md:col-span-2',
    dark: true,
  },
  {
    id: '05',
    title: 'Premium Graphic & UI/UX Design',
    headline: 'Design That Converts. Not Just Impresses.',
    body: "We create bold, intentional digital experiences that don't just look exceptional—they drive results. From brand identities that command attention to user interfaces that maximize conversion, every design decision is strategic, deliberate, and aligned with your business objectives.",
    delivers: [
      'Brand Identity & Logo Design',
      'UI/UX Design & User Research',
      'Design Systems & Component Libraries',
      'Marketing Collateral & Visual Assets',
      'Product Design & Prototyping',
      'Conversion Rate Optimization',
    ],
    capabilities: [
      'High-legibility, accessible interfaces',
      'Bold visual identities that stand out',
      'User-centered design backed by data',
      'Immersive product flows that convert',
      'Consistent design systems for scale',
    ],
    cta: 'View Design Craft',
    span: 'md:col-span-3',
    dark: false,
  },
];

const faqs = [
  {
    q: 'How long does a typical project take?',
    a: "It depends on scope. A simple website might take 2–3 weeks. A complex AI system could take 2–3 months. We provide clear timelines during our discovery phase and stick to them.",
  },
  {
    q: 'Do you work with startups or only enterprises?',
    a: "Both. We work with visionary founders building MVPs and established companies scaling their operations. Our flexible engagement models are designed to fit different stages and budgets.",
  },
  {
    q: 'What makes you different from a freelance developer?',
    a: "We're a team of senior specialists with enterprise-level experience. You get diverse expertise (AI, security, design, development) in one engagement, plus the reliability and accountability of a professional team—not a solo freelancer juggling multiple clients.",
  },
  {
    q: 'What makes you different from a large agency?',
    a: "No junior staff learning on your project. No account managers acting as middlemen. No 6-week onboarding. You work directly with senior experts who care about your success, at a fraction of agency costs.",
  },
  {
    q: 'Do you offer ongoing support after launch?',
    a: "Yes. We offer retainer packages for continuous development, maintenance, and optimization. We're here for the long term, not just the launch.",
  },
  {
    q: 'How do you handle pricing?',
    a: "We provide transparent, upfront pricing based on scope. Fixed-price for defined projects, or hourly/retainer for ongoing work. No hidden fees. No surprises.",
  },
  {
    q: 'What if the project scope changes?',
    a: "We're flexible. If your needs evolve, we adjust scope and pricing transparently. No rigid contracts that punish you for changing direction.",
  },
];

// ── COMPONENT ─────────────────────────────────────────────────────────────────

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b-2 border-[#111112] dark:border-[#2A2A2C]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-6 text-left gap-6 group"
        aria-expanded={open}
      >
        <span className="font-display text-lg md:text-xl uppercase text-[#111112] dark:text-[#F9F9FB] group-hover:text-accent-volt transition-colors">
          {q}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 border-2 border-[#111112] dark:border-[#2A2A2C] flex items-center justify-center font-bold text-[#111112] dark:text-[#F9F9FB] transition-all ${open ? 'bg-accent-volt border-accent-volt rotate-45' : 'group-hover:border-accent-volt group-hover:text-accent-volt'}`}
        >
          +
        </span>
      </button>
      {open && (
        <p className="font-sans text-base text-[#111112] dark:text-[#F9F9FB] opacity-70 leading-relaxed pb-6 max-w-3xl">
          {a}
        </p>
      )}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col bg-[#F9F9FB] dark:bg-[#0B0B0C] transition-colors duration-300">

      {/* ── SECTION 1: HERO ── */}
      <section className="container mx-auto px-6 md:px-12 pt-40 pb-24 border-b-2 border-[#111112] dark:border-[#2A2A2C]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="flex flex-col">
            <span className="font-sans uppercase font-bold tracking-widest text-sm text-accent-volt mb-8 block bg-[#111112] dark:bg-[#2A2A2C] px-4 py-2 inline-block self-start">
              What We Deliver
            </span>
            <h1 className="font-display text-5xl md:text-7xl uppercase tracking-tighter leading-none font-bold text-[#111112] dark:text-[#F9F9FB] mb-8">
              Engineered for Scale.{' '}
              <span className="text-accent-volt">Built for Impact.</span>
            </h1>
            <p className="font-sans text-xl text-[#111112] dark:text-[#F9F9FB] opacity-80 mb-6 leading-relaxed max-w-xl">
              We don&rsquo;t just build technology—we architect solutions that grow with your ambition. From AI systems that learn and adapt to secure infrastructures that never sleep, every solution we deliver is precision-engineered for performance, scalability, and real-world impact.
            </p>
            <p className="font-sans text-sm text-[#111112] dark:text-[#F9F9FB] opacity-50 leading-relaxed max-w-lg border-l-2 border-accent-volt pl-4">
              Zero boilerplate. Zero technical debt. Only uncompromising, custom-built environments designed to give you a competitive edge.
            </p>
          </div>

          {/* Right */}
          <div className="w-full h-[420px] relative border-2 border-[#111112] dark:border-[#2A2A2C] p-2 bg-[#F9F9FB]/75 dark:bg-[#0B0B0C]/75 shadow-[8px_8px_0px_0px_#111112] dark:shadow-[8px_8px_0px_0px_#2A2A2C]">
            <div className="relative w-full h-full border-2 border-[#111112] dark:border-[#2A2A2C] overflow-hidden">
              <Image
                src="/images/services/services-hero.png"
                alt="Precision-engineered tech architecture"
                fill
                priority={true}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover grayscale hover:grayscale-0 contrast-110 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: SERVICE OVERVIEW ── */}
      <section id="services" className="py-32 border-b-2 border-[#111112] dark:border-[#2A2A2C]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mb-20">
            <span className="font-sans uppercase font-bold tracking-widest text-sm text-accent-volt mb-6 block bg-[#111112] dark:bg-[#2A2A2C] px-4 py-2 inline-block">
              Core Capabilities
            </span>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-[#111112] dark:text-[#F9F9FB] mb-6">
              Flexible Engagements. Tailored to Your Business Goals.
            </h2>
            <p className="font-sans text-xl text-[#111112] dark:text-[#F9F9FB] opacity-80 leading-relaxed max-w-3xl">
              Whether you need a complete AI transformation, a secure cloud migration, or a premium digital experience, we offer specialized services that work independently or as an integrated ecosystem. Every engagement is customized to your specific challenges and objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((svc) => (
              <div
                key={svc.id}
                className={`border-2 border-[#111112] dark:border-[#2A2A2C] flex flex-col group hover:-translate-y-1 hover:translate-x-1 transition-transform shadow-[4px_4px_0px_0px_#111112] dark:shadow-[4px_4px_0px_0px_#2A2A2C] hover:shadow-[8px_8px_0px_0px_#CCFF00] ${svc.span} ${svc.dark ? 'bg-[#111112] dark:bg-[#0B0B0C]' : 'bg-white dark:bg-[#111112]/90'}`}
              >
                {/* Card header */}
                <div className={`p-6 md:p-10 border-b-2 ${svc.dark ? 'border-[#F9F9FB]/10' : 'border-[#111112] dark:border-[#2A2A2C]'}`}>
                  <div className="flex items-start justify-between mb-6">
                    <span className={`font-display text-4xl font-bold text-accent-volt`}>{svc.id}</span>
                    <span className={`font-sans text-xs font-bold uppercase tracking-widest px-3 py-1.5 border-2 ${svc.dark ? 'border-[#F9F9FB]/20 text-[#F9F9FB]/40' : 'border-[#111112] dark:border-[#2A2A2C] text-[#5A5A62]'}`}>
                      Service
                    </span>
                  </div>
                  <h3 className={`font-display text-2xl md:text-3xl uppercase mb-3 group-hover:text-accent-volt transition-colors ${svc.dark ? 'text-[#F9F9FB]' : 'text-[#111112] dark:text-[#F9F9FB]'}`}>
                    {svc.title}
                  </h3>
                  <p className={`font-display text-base uppercase tracking-tight mb-0 ${svc.dark ? 'text-accent-volt' : 'text-[#5A5A62]'}`}>
                    {svc.headline}
                  </p>
                </div>

                {/* Card body */}
                <div className="p-6 md:p-10 flex flex-col flex-grow">
                  <p className={`font-sans text-base leading-relaxed mb-8 ${svc.dark ? 'text-[#F9F9FB] opacity-60' : 'text-[#111112] dark:text-[#F9F9FB] opacity-70'}`}>
                    {svc.body}
                  </p>

                  {/* What We Deliver */}
                  <div className="mb-8">
                    <p className={`font-sans text-xs font-bold uppercase tracking-widest mb-4 ${svc.dark ? 'text-[#F9F9FB] opacity-40' : 'text-[#5A5A62]'}`}>
                      What We Deliver
                    </p>
                    <ul className="grid grid-cols-1 gap-2">
                      {svc.delivers.map((d) => (
                        <li key={d} className={`font-sans text-sm flex items-start gap-2 ${svc.dark ? 'text-[#F9F9FB] opacity-70' : 'text-[#111112] dark:text-[#F9F9FB] opacity-80'}`}>
                          <span className="w-1.5 h-1.5 bg-accent-volt flex-shrink-0 mt-1.5 inline-block" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Capabilities */}
                  <div className={`border-t-2 pt-6 mb-8 ${svc.dark ? 'border-[#F9F9FB]/10' : 'border-[#111112] dark:border-[#2A2A2C]'}`}>
                    <p className={`font-sans text-xs font-bold uppercase tracking-widest mb-4 ${svc.dark ? 'text-[#F9F9FB] opacity-40' : 'text-[#5A5A62]'}`}>
                      Capabilities Include
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {svc.capabilities.map((c) => (
                        <li
                          key={c}
                          className={`font-sans text-xs font-bold uppercase tracking-widest px-2.5 py-1 border-2 ${svc.dark ? 'border-[#F9F9FB]/20 text-[#F9F9FB] opacity-60' : 'border-[#111112] dark:border-[#2A2A2C] text-[#111112] dark:text-[#F9F9FB] opacity-70'}`}
                        >
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className={`mt-auto border-t-2 pt-6 ${svc.dark ? 'border-[#F9F9FB]/10' : 'border-[#111112] dark:border-[#2A2A2C]'}`}>
                    <Link
                      href="/contact"
                      className={`font-sans font-bold uppercase tracking-widest text-sm flex items-center gap-2 w-max border-b-2 border-transparent group-hover:border-accent-volt pb-0.5 transition-colors ${svc.dark ? 'text-[#F9F9FB] group-hover:text-accent-volt' : 'text-[#111112] dark:text-[#F9F9FB] group-hover:text-accent-volt'}`}
                    >
                      {svc.cta} <span className="text-lg">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: METHODOLOGY ── */}
      <section className="bg-[#111112] dark:bg-[#000000] py-32 border-b-2 border-[#F9F9FB] dark:border-[#2A2A2C] transition-colors duration-300">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mb-16">
            <span className="font-sans uppercase font-bold tracking-widest text-sm text-[#111112] mb-6 block bg-accent-volt px-4 py-2 inline-block">
              Our Methodology
            </span>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-[#F9F9FB] mb-6">
              Every Service. Same Uncompromising Standard.
            </h2>
            <p className="font-sans text-xl text-[#F9F9FB] opacity-70 leading-relaxed max-w-3xl">
              While each service requires different expertise, our approach remains consistent: deep understanding, strategic planning, precision execution, and ongoing optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {[
              {
                num: '01',
                title: 'Discovery & Audit',
                body: "We start by understanding your current state, challenges, and goals. For AI projects, this means analyzing your data. For security, it's assessing vulnerabilities. For design, it's researching your users.",
              },
              {
                num: '02',
                title: 'Strategy & Architecture',
                body: "We design a tailored solution roadmap with clear milestones, tech stack recommendations, and success metrics. You'll know exactly what we're building and why.",
              },
              {
                num: '03',
                title: 'Build & Iterate',
                body: "Our team executes with precision, providing regular updates and incorporating your feedback. We build in sprints, so you see progress continuously—not just at the end.",
              },
              {
                num: '04',
                title: 'Launch & Optimize',
                body: "We don't just deliver and disappear. We monitor performance, gather user feedback, and optimize continuously to ensure your solution delivers maximum value.",
              },
            ].map((step, i) => (
              <div
                key={step.num}
                className={`p-8 md:p-10 border-2 border-[#F9F9FB]/20 group hover:border-accent-volt hover:bg-[#F9F9FB]/5 transition-colors ${i > 0 ? 'md:-ml-[2px]' : ''}`}
              >
                <span className="font-display text-5xl text-accent-volt mb-6 block font-bold">{step.num}</span>
                <h3 className="font-display text-xl uppercase mb-4 text-[#F9F9FB] group-hover:text-accent-volt transition-colors">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-[#F9F9FB] opacity-60 leading-relaxed group-hover:opacity-80 transition-opacity">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: SERVICE PACKAGES ── */}
      <section className="py-32 border-b-2 border-[#111112] dark:border-[#2A2A2C] bg-[#F9F9FB] dark:bg-[#0B0B0C] transition-colors duration-300">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mb-16">
            <span className="font-sans uppercase font-bold tracking-widest text-sm text-accent-volt mb-6 block bg-[#111112] dark:bg-[#2A2A2C] px-4 py-2 inline-block">
              Engagement Models
            </span>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-[#111112] dark:text-[#F9F9FB] mb-6">
              Flexible Options. Clear Pricing.
            </h2>
            <p className="font-sans text-xl text-[#111112] dark:text-[#F9F9FB] opacity-80 leading-relaxed max-w-3xl">
              We offer three engagement models designed to fit different needs and budgets. No hidden fees. No scope creep surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {[
              {
                tier: 'Starter',
                tagline: 'Perfect for MVPs & Small Projects',
                features: [
                  'Single service focus',
                  'Fixed scope, fixed timeline',
                  'Direct collaboration with senior team',
                  '2–4 week delivery',
                ],
                ideal: 'MVPs, website builds, basic AI integration, design projects',
                cta: 'Get a Quote',
                accent: false,
              },
              {
                tier: 'Growth',
                tagline: 'Ideal for Scaling Businesses',
                features: [
                  'Multi-service integration',
                  'Ongoing development & support',
                  'Monthly retainer or milestone-based',
                  'Priority response times',
                ],
                ideal: 'AI + web app + design bundles, maintenance, and continuous optimization',
                cta: 'Start Growing',
                accent: true,
              },
              {
                tier: 'Enterprise',
                tagline: 'For Complex, Large-Scale Projects',
                features: [
                  'Full-service engagement',
                  'Dedicated team allocation',
                  'Custom SLAs & support',
                  'Long-term partnership model',
                ],
                ideal: 'Enterprise transformations, complex AI systems, long-term technical partnerships',
                cta: 'Talk to Us',
                accent: false,
              },
            ].map((pkg, i) => (
              <div
                key={pkg.tier}
                className={`border-2 flex flex-col ${i > 0 ? 'md:-ml-[2px]' : ''} ${pkg.accent ? 'border-accent-volt bg-[#111112] dark:bg-[#0B0B0C]' : 'border-[#111112] dark:border-[#2A2A2C] bg-white dark:bg-[#111112]/90'}`}
              >
                {/* Tier header */}
                <div className={`p-8 border-b-2 ${pkg.accent ? 'border-accent-volt/30 bg-accent-volt' : 'border-[#111112] dark:border-[#2A2A2C]'}`}>
                  <p className={`font-sans text-xs font-bold uppercase tracking-widest mb-2 ${pkg.accent ? 'text-[#111112] opacity-60' : 'text-[#5A5A62]'}`}>
                    Engagement Model
                  </p>
                  <h3 className={`font-display text-3xl uppercase ${pkg.accent ? 'text-[#111112]' : 'text-[#111112] dark:text-[#F9F9FB]'}`}>
                    {pkg.tier}
                  </h3>
                  <p className={`font-sans text-sm mt-1 font-bold uppercase tracking-widest ${pkg.accent ? 'text-[#111112] opacity-70' : 'text-[#5A5A62]'}`}>
                    {pkg.tagline}
                  </p>
                </div>

                {/* Features */}
                <div className="p-8 flex-grow">
                  <ul className="flex flex-col gap-3 mb-8">
                    {pkg.features.map((f) => (
                      <li key={f} className={`font-sans text-sm flex items-start gap-3 ${pkg.accent ? 'text-[#F9F9FB]' : 'text-[#111112] dark:text-[#F9F9FB]'}`}>
                        <span className="text-accent-volt font-bold flex-shrink-0">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className={`border-t-2 pt-6 ${pkg.accent ? 'border-[#F9F9FB]/10' : 'border-[#111112] dark:border-[#2A2A2C]'}`}>
                    <p className={`font-sans text-xs font-bold uppercase tracking-widest mb-2 ${pkg.accent ? 'text-[#F9F9FB] opacity-40' : 'text-[#5A5A62]'}`}>
                      Ideal For
                    </p>
                    <p className={`font-sans text-sm leading-relaxed ${pkg.accent ? 'text-[#F9F9FB] opacity-60' : 'text-[#111112] dark:text-[#F9F9FB] opacity-70'}`}>
                      {pkg.ideal}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="p-8 pt-0">
                  <Link
                    href="/contact"
                    className={`font-bold uppercase tracking-widest text-sm px-6 py-3 border-2 inline-block w-full text-center transition-all ${pkg.accent ? 'border-accent-volt bg-accent-volt text-[#111112] hover:bg-transparent hover:text-accent-volt' : 'border-[#111112] dark:border-[#F9F9FB] bg-[#111112] dark:bg-[#F9F9FB] text-[#F9F9FB] dark:text-[#111112] hover:bg-accent-volt hover:text-[#111112] hover:border-accent-volt'}`}
                  >
                    {pkg.cta} →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <p className="font-sans text-sm text-[#111112] dark:text-[#F9F9FB] opacity-50 uppercase tracking-widest font-bold">
              All pricing is provided upfront based on your specific scope — no hidden fees, no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: FAQ ── */}
      <section className="py-32 border-b-2 border-[#111112] dark:border-[#2A2A2C] bg-[#111112] dark:bg-[#000000] transition-colors duration-300">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mb-16">
            <span className="font-sans uppercase font-bold tracking-widest text-sm text-[#111112] mb-6 block bg-accent-volt px-4 py-2 inline-block">
              Common Questions
            </span>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-[#F9F9FB]">
              Everything You Need to Know.
            </h2>
          </div>

          <div className="max-w-4xl">
            {faqs.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: CTA ── */}
      <section className="py-32 bg-[#111112] dark:bg-[#000000] border-t-2 border-[#F9F9FB] dark:border-[#2A2A2C] transition-colors duration-300">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <span className="font-sans uppercase font-bold tracking-widest text-sm text-[#111112] mb-8 block bg-accent-volt px-4 py-2 inline-block">
            Let&rsquo;s Collaborate
          </span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-tight text-[#F9F9FB] mb-8">
            Ready to Build Something{' '}
            <span className="text-accent-volt">Exceptional?</span>
          </h2>
          <p className="font-sans text-xl text-[#F9F9FB] opacity-70 mb-12 max-w-2xl leading-relaxed">
            Stop settling for template-driven solutions and bloated agency processes. Bring your complex challenge directly to our senior engineering collective, and let&rsquo;s architect a solution that gives you a real competitive advantage.
          </p>
          <div className="flex flex-wrap gap-6 mb-10">
            <Link
              href="/contact"
              className="font-bold uppercase tracking-widest border-2 border-[#F9F9FB] bg-[#F9F9FB] text-[#111112] hover:bg-accent-volt hover:border-accent-volt text-base md:text-lg px-10 py-5 rounded-none shadow-[4px_4px_0px_0px_#F9F9FB] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#F9F9FB] transition-all"
            >
              Start Your Project
            </Link>
            <Link
              href="/contact"
              className="font-bold uppercase tracking-widest border-2 border-[#F9F9FB] bg-transparent text-[#F9F9FB] hover:bg-[#F9F9FB] hover:text-[#111112] text-base md:text-lg px-10 py-5 rounded-none shadow-[4px_4px_0px_0px_#F9F9FB] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#F9F9FB] transition-all"
            >
              Book a Free Consultation
            </Link>
          </div>
          <div className="flex flex-wrap gap-6">
            {[
              'Free 30-minute technical consultation',
              'Response within 24 hours',
              'No obligation. No pressure.',
            ].map((t) => (
              <span key={t} className="font-sans text-sm text-[#F9F9FB] opacity-50 flex items-center gap-2">
                <span className="text-accent-volt font-bold">✓</span> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
