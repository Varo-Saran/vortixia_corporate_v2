"use client";

import Link from 'next/link';
import { useState } from 'react';

// ── DATA ──────────────────────────────────────────────────────────────────────

const phases = [
  {
    num: '01',
    phase: 'Phase One',
    title: 'Discover & Audit',
    headline: 'Deep-Dive Discovery.',
    body: "We don't make assumptions. We start by auditing your current tech stack, analyzing your data, and understanding your business goals at a fundamental level. We identify bottlenecks, surface hidden risks, and define exactly what success looks like before a single line of code is written.",
    deliverables: ['Technical Audit', 'Requirements Document', 'Project Roadmap'],
    dark: false,
  },
  {
    num: '02',
    phase: 'Phase Two',
    title: 'Architect & Strategize',
    headline: 'Blueprinting the Solution.',
    body: "Before writing a single line of code, we architect the entire system. We select the optimal tech stack, design the data pipelines, and create UI/UX wireframes. You'll know exactly what we're building, why we chose each component, and how every decision serves your business objectives.",
    deliverables: ['System Architecture', 'UI/UX Prototypes', 'Tech Stack Selection'],
    dark: true,
  },
  {
    num: '03',
    phase: 'Phase Three',
    title: 'Build & Iterate',
    headline: 'Agile Execution.',
    body: "We build in focused, 2-week sprints. You aren't left in the dark for months—you see continuous progress, test features early, and provide feedback in real time. We build, test, and refine in tight loops, so the final product reflects your vision, not just our interpretation of it.",
    deliverables: ['Bi-Weekly Sprint Demos', 'Staging Environment Access', 'Continuous Code Reviews'],
    dark: false,
  },
  {
    num: '04',
    phase: 'Phase Four',
    title: 'Deploy & Optimize',
    headline: 'Launch & Long-Term Scale.',
    body: "We don't just launch and disappear. We handle secure deployment, monitor performance metrics from day one, and optimize based on real-world user data. We're here to ensure your solution scales as your business grows—not just to the launch milestone.",
    deliverables: ['Production Launch', 'Performance Monitoring', 'Handover Documentation', 'Ongoing Support'],
    dark: true,
  },
];

const qaStandards = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: 'Strict Type Safety',
    body: 'We use TypeScript and strict typing throughout every codebase. Errors are caught at compile time—not in production.',
    tag: 'TypeScript · Strict Mode',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
        <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
      </svg>
    ),
    title: 'Automated Testing',
    body: 'Comprehensive unit and integration tests run automatically on every code commit. Nothing ships without green tests.',
    tag: 'CI/CD · Jest · Pytest',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Security First',
    body: 'Code is scanned for vulnerabilities (SAST/DAST) and follows OWASP guidelines from day one. Security is baked in, never bolted on.',
    tag: 'OWASP · SAST · DAST',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
        <rect x="2" y="3" width="20" height="14" rx="0" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'Performance Budgets',
    body: 'We enforce strict limits on bundle sizes and load times. No bloated code makes it to production—ever.',
    tag: 'Sub-100ms · Core Web Vitals',
  },
];

const commsPillars = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: 'Direct Channel Access',
    body: 'Get added to a dedicated private channel with our core engineering team. Ask questions, share ideas, and get instant feedback from the people actually doing the work—no account managers in the middle.',
    tag: 'Slack · Teams · Discord',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
        <circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" />
      </svg>
    ),
    title: 'Async Video Updates',
    body: 'No soul-sucking status meetings. We send brief recorded video walkthroughs of our progress every week, so you can review updates on your own time and respond when it works for you.',
    tag: 'Weekly · Recorded · Async',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    title: 'Transparent Project Board',
    body: 'You get full read-access to our project board. See exactly what\'s in progress, what\'s blocked, and what\'s shipping next—at any time, without having to ask.',
    tag: 'Linear · Jira · Trello',
  },
];

// ── COMPONENT ─────────────────────────────────────────────────────────────────

export default function ProcessPage() {
  const [openPhase, setOpenPhase] = useState<number | null>(null);

  return (
    <div className="flex flex-col bg-[#F9F9FB] dark:bg-[#0B0B0C] transition-colors duration-300">

      {/* ── SECTION 1: HERO ── */}
      <section className="container mx-auto px-6 md:px-12 pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-24 border-b-2 border-[#111112] dark:border-[#2A2A2C]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <span className="font-sans uppercase font-bold tracking-widest text-sm text-accent-volt mb-6 sm:mb-8 block bg-[#111112] dark:bg-[#2A2A2C] px-4 py-2 inline-block">
              How We Work
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl uppercase leading-none tracking-tight text-[#111112] dark:text-[#F9F9FB] mb-6 sm:mb-8">
              Precision Engineering.{' '}
              <span className="text-accent-volt">Zero Bureaucracy.</span>
            </h1>
            <p className="font-sans text-base sm:text-xl text-[#111112] dark:text-[#F9F9FB] opacity-80 leading-relaxed max-w-xl">
              Great technology isn&rsquo;t built by accident; it&rsquo;s built by design. We&rsquo;ve stripped away the bloated agency protocols, middlemen, and rigid red tape to create a streamlined, transparent process. You get enterprise-grade execution with startup speed.
            </p>

            {/* Jump-to nav pills */}
            <div className="flex flex-wrap gap-3 mt-10">
              {[
                { label: 'Methodology', href: '#methodology' },
                { label: 'Communication', href: '#communication' },
                { label: 'Quality Assurance', href: '#qa' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-sans text-xs font-bold uppercase tracking-widest px-4 py-2 border-2 border-[#111112] dark:border-[#2A2A2C] text-[#111112] dark:text-[#F9F9FB] hover:bg-accent-volt hover:text-[#111112] hover:border-accent-volt transition-colors"
                >
                  {item.label} ↓
                </a>
              ))}
            </div>
          </div>

          {/* Right — abstract precision grid */}
          <div className="hidden lg:grid grid-cols-4 gap-2 h-[420px]">
            {Array.from({ length: 32 }).map((_, i) => {
              const isAccent = [0, 5, 10, 15, 21, 26, 31].includes(i);
              const isBig = [2, 11, 20, 29].includes(i);
              return (
                <div
                  key={i}
                  className={`border border-[#111112] dark:border-[#2A2A2C] transition-all duration-300 hover:bg-accent-volt hover:border-accent-volt ${
                    isAccent ? 'bg-accent-volt' : 'bg-transparent'
                  } ${isBig ? 'row-span-2' : ''}`}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: CONTRAST TABLE ── */}
      <section className="bg-[#111112] dark:bg-[#000000] py-32 border-b-2 border-[#F9F9FB] dark:border-[#2A2A2C] transition-colors duration-300">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mb-16">
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-[#F9F9FB] mb-4">
              The Traditional Agency vs. The Vortixia Collective.
            </h2>
            <p className="font-sans text-xl text-[#F9F9FB] opacity-60 max-w-2xl leading-relaxed">
              We believe your time and budget should be spent on building your product—not navigating corporate bureaucracy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Traditional Agency */}
            <div className="p-8 md:p-12 border-2 border-[#F9F9FB]/10 bg-[#F9F9FB]/3">
              <div className="mb-8">
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#F9F9FB] opacity-30 block mb-2">Option A</span>
                <h3 className="font-display text-2xl uppercase text-[#F9F9FB] opacity-40">Traditional Agency</h3>
              </div>
              <ul className="flex flex-col gap-5">
                {[
                  '6-week onboarding and discovery.',
                  'You pitch to sales, then get handed to juniors.',
                  'Rigid contracts that punish scope changes.',
                  '"Black box" development with monthly status meetings.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="w-5 h-5 flex-shrink-0 mt-0.5 border border-red-500/50 text-red-500/70 flex items-center justify-center text-xs font-bold">✗</span>
                    <span className="font-sans text-base text-[#F9F9FB] opacity-40 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vortixia */}
            <div className="p-8 md:p-12 border-2 border-accent-volt md:-ml-[2px] bg-[#F9F9FB]/5">
              <div className="mb-8">
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-accent-volt block mb-2">Option B</span>
                <h3 className="font-display text-2xl uppercase text-accent-volt">The Vortixia Way</h3>
              </div>
              <ul className="flex flex-col gap-5">
                {[
                  'Kickoff within 7 days.',
                  'You work directly with the senior engineers building your product.',
                  'Agile sprints that adapt to your evolving needs.',
                  'Transparent, continuous collaboration via shared workspaces.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="w-5 h-5 flex-shrink-0 mt-0.5 border border-accent-volt text-accent-volt flex items-center justify-center text-xs font-bold">✓</span>
                    <span className="font-sans text-base text-[#F9F9FB] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: 4-PHASE METHODOLOGY ── */}
      <section id="methodology" className="py-32 border-b-2 border-[#111112] dark:border-[#2A2A2C] bg-[#F9F9FB] dark:bg-[#0B0B0C] transition-colors duration-300">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mb-20">
            <span className="font-sans uppercase font-bold tracking-widest text-sm text-accent-volt mb-6 block bg-[#111112] dark:bg-[#2A2A2C] px-4 py-2 inline-block">
              Our Methodology
            </span>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-[#111112] dark:text-[#F9F9FB] mb-6">
              A Streamlined Path from Concept to Scale.
            </h2>
            <p className="font-sans text-xl text-[#111112] dark:text-[#F9F9FB] opacity-80 leading-relaxed max-w-3xl">
              Every engagement follows our proven four-phase framework, ensuring nothing falls through the cracks while maintaining the agility to pivot when needed.
            </p>
          </div>

          {/* Vertical timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-volt via-accent-volt to-transparent hidden sm:block" />

            <div className="flex flex-col gap-0">
              {phases.map((phase, idx) => (
                <div key={phase.num} className="relative sm:pl-20 md:pl-28">
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-5 top-8 w-4 h-4 sm:w-5 sm:h-5 bg-accent-volt border-2 border-[#111112] dark:border-[#2A2A2C] hidden sm:block z-10" />

                  <div
                    className={`border-2 border-[#111112] dark:border-[#2A2A2C] ${idx > 0 ? '-mt-[2px]' : ''} ${phase.dark ? 'bg-[#111112] dark:bg-[#0B0B0C]' : 'bg-white dark:bg-[#111112]/90'} group`}
                  >
                    {/* Phase header — always visible */}
                    <button
                      onClick={() => setOpenPhase(openPhase === idx ? null : idx)}
                      className="w-full text-left flex items-start gap-4 sm:gap-6 md:gap-10 p-5 sm:p-8 md:p-12"
                      aria-expanded={openPhase === idx}
                    >
                      {/* Giant number */}
                      <span className="font-display text-5xl sm:text-7xl md:text-9xl font-bold text-accent-volt leading-none flex-shrink-0">
                        {phase.num}
                      </span>

                      <div className="flex-1 min-w-0 pt-1 sm:pt-2">
                        <p className={`font-sans text-xs font-bold uppercase tracking-widest mb-2 ${phase.dark ? 'text-[#F9F9FB] opacity-40' : 'text-[#5A5A62]'}`}>
                          {phase.phase}
                        </p>
                        <h3 className={`font-display text-xl sm:text-3xl md:text-4xl uppercase mb-2 leading-tight ${phase.dark ? 'text-[#F9F9FB] group-hover:text-accent-volt' : 'text-[#111112] dark:text-[#F9F9FB] group-hover:text-accent-volt'} transition-colors`}>
                          {phase.title}
                        </h3>
                        <p className={`font-display text-sm sm:text-base md:text-xl uppercase tracking-tight ${phase.dark ? 'text-accent-volt' : 'text-[#5A5A62]'}`}>
                          {phase.headline}
                        </p>
                      </div>

                      {/* Expand toggle */}
                      <div className={`flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 border-2 flex items-center justify-center font-bold text-xl transition-all mt-1 sm:mt-2 ${openPhase === idx ? 'bg-accent-volt border-accent-volt text-[#111112] rotate-45' : `${phase.dark ? 'border-[#F9F9FB]/20 text-[#F9F9FB]' : 'border-[#111112] dark:border-[#2A2A2C] text-[#111112] dark:text-[#F9F9FB]'} group-hover:border-accent-volt group-hover:text-accent-volt`}`}>
                        +
                      </div>
                    </button>

                    {/* Expanded content */}
                    {openPhase === idx && (
                      <div className={`px-5 sm:px-8 md:px-12 pb-8 sm:pb-10 border-t-2 ${phase.dark ? 'border-[#F9F9FB]/10' : 'border-[#111112] dark:border-[#2A2A2C]'}`}>
                        <div className="pt-6 sm:pt-8 flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:gap-8">
                          <div className="lg:col-span-2">
                            <p className={`font-sans text-base sm:text-lg leading-relaxed ${phase.dark ? 'text-[#F9F9FB] opacity-70' : 'text-[#111112] dark:text-[#F9F9FB] opacity-80'}`}>
                              {phase.body}
                            </p>
                          </div>
                          <div>
                            <p className={`font-sans text-xs font-bold uppercase tracking-widest mb-4 ${phase.dark ? 'text-[#F9F9FB] opacity-40' : 'text-[#5A5A62]'}`}>
                              Deliverables
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {phase.deliverables.map((d) => (
                                <span
                                  key={d}
                                  className={`font-sans text-xs font-bold uppercase tracking-widest px-3 py-2 border-2 ${phase.dark ? 'border-accent-volt text-accent-volt' : 'border-[#111112] dark:border-[#2A2A2C] bg-accent-volt text-[#111112]'}`}
                                >
                                  {d}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="font-sans text-xs text-[#5A5A62] uppercase tracking-widest mt-8 sm:pl-20 md:pl-28">
            ↑ Click each phase to expand full details and deliverables
          </p>
        </div>
      </section>

      {/* ── SECTION 4: COMMUNICATION & COLLABORATION ── */}
      <section id="communication" className="bg-[#111112] dark:bg-[#000000] py-32 border-b-2 border-[#F9F9FB] dark:border-[#2A2A2C] transition-colors duration-300">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mb-16">
            <span className="font-sans uppercase font-bold tracking-widest text-sm text-[#111112] mb-6 block bg-accent-volt px-4 py-2 inline-block">
              Stay in the Loop
            </span>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-[#F9F9FB] mb-6">
              Direct Access. Zero Middlemen.
            </h2>
            <p className="font-sans text-xl text-[#F9F9FB] opacity-70 leading-relaxed max-w-3xl">
              The biggest frustration with large agencies is the &ldquo;telephone game&rdquo; between you and the developers. We eliminate the account managers entirely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {commsPillars.map((item, i) => (
              <div
                key={item.title}
                className={`p-8 md:p-12 border-2 border-[#F9F9FB]/20 group hover:border-accent-volt transition-all duration-200 ${i > 0 ? 'md:-ml-[2px]' : ''}`}
              >
                <div className={`text-[#F9F9FB] opacity-40 group-hover:text-accent-volt group-hover:opacity-100 transition-all mb-8`}>
                  {item.icon}
                </div>
                <h3 className="font-display text-xl uppercase text-[#F9F9FB] mb-4 group-hover:text-accent-volt transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-[#F9F9FB] opacity-60 leading-relaxed mb-6">
                  {item.body}
                </p>
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-accent-volt bg-[#F9F9FB]/5 border border-accent-volt/30 px-3 py-1.5 inline-block">
                  {item.tag}
                </span>
              </div>
            ))}
          </div>

          {/* Response time promise strip */}
          <div className="mt-12 border-2 border-[#F9F9FB]/10 px-8 md:px-12 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="font-sans text-[#F9F9FB] opacity-60 text-base">
              We commit to responding to all client messages within <strong className="text-[#F9F9FB] opacity-100">4 business hours</strong> during active engagements.
            </p>
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-accent-volt px-4 py-2 border-2 border-accent-volt whitespace-nowrap">
              Guaranteed
            </span>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: QA & SECURITY ── */}
      <section id="qa" className="py-32 border-b-2 border-[#111112] dark:border-[#2A2A2C] bg-[#F9F9FB] dark:bg-[#0B0B0C] transition-colors duration-300">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mb-16">
            <span className="font-sans uppercase font-bold tracking-widest text-sm text-accent-volt mb-6 block bg-[#111112] dark:bg-[#2A2A2C] px-4 py-2 inline-block">
              Built to Last
            </span>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-[#111112] dark:text-[#F9F9FB] mb-6">
              Enterprise-Grade Quality is Non-Negotiable.
            </h2>
            <p className="font-sans text-xl text-[#111112] dark:text-[#F9F9FB] opacity-80 leading-relaxed max-w-3xl">
              Because we target enterprise clients, our internal quality standards are uncompromising. Here is how we ensure your product is secure, scalable, and production-ready before it ever reaches your users.
            </p>
          </div>

          {/* 2×2 QA grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {qaStandards.map((item, i) => (
              <div
                key={item.title}
                className={`p-6 sm:p-8 md:p-12 border-2 border-[#111112] dark:border-[#2A2A2C] group ${
                  i === 0 ? '' :
                  i === 1 ? 'md:-ml-[2px]' :
                  i === 2 ? '-mt-[2px]' :
                  '-mt-[2px] md:-ml-[2px]'
                } bg-white dark:bg-[#111112]/90 hover:bg-[#111112] dark:hover:bg-[#0B0B0C] transition-colors`}
              >
                {/* Terminal-style header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                  <span className="font-sans text-xs text-[#5A5A62] group-hover:text-[#F9F9FB]/40 font-mono transition-colors">
                    vortixia:~/{item.title.toLowerCase().replace(/ /g, '_')}
                  </span>
                </div>

                {/* Icon */}
                <div className="text-[#111112] dark:text-[#F9F9FB] group-hover:text-accent-volt transition-colors mb-6">
                  {item.icon}
                </div>

                <h3 className="font-display text-xl md:text-2xl uppercase mb-4 text-[#111112] dark:text-[#F9F9FB] group-hover:text-accent-volt transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-[#111112] dark:text-[#F9F9FB] opacity-70 group-hover:text-[#F9F9FB] group-hover:opacity-60 leading-relaxed mb-6 transition-colors">
                  {item.body}
                </p>
                <div className="border-t-2 border-[#111112] dark:border-[#2A2A2C] group-hover:border-[#F9F9FB]/20 pt-4 transition-colors">
                  <span className="font-mono text-xs font-bold text-accent-volt">
                    $ {item.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Full-width non-negotiables bar */}
          <div className="mt-0 border-2 border-[#111112] dark:border-[#2A2A2C] -mt-[2px] p-8 md:p-10 bg-[#111112] dark:bg-[#0B0B0C]">
            <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
              <h4 className="font-display text-xl uppercase text-[#F9F9FB]">Our Non-Negotiables</h4>
              <div className="flex flex-wrap gap-4">
                {['Zero downtime deploys', 'Code review on every PR', 'Secrets management', 'GDPR-ready by default', 'Audit logs on all systems'].map((item) => (
                  <span key={item} className="font-sans text-xs font-bold uppercase tracking-widest text-[#F9F9FB] opacity-60 flex items-center gap-2">
                    <span className="text-accent-volt font-bold">◈</span> {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: CTA ── */}
      <section className="py-20 sm:py-32 bg-accent-volt border-t-2 border-[#111112]">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight text-[#111112] mb-6 sm:mb-8">
            Ready to Build Something Exceptional?
          </h2>
          <p className="font-sans text-base sm:text-xl text-[#111112] opacity-70 mb-8 sm:mb-12 max-w-2xl leading-relaxed">
            Stop navigating agency bureaucracy. Let&rsquo;s start with a direct, honest conversation about your goals—no pitch decks, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-10">
            <Link
              href="/contact"
              className="font-bold uppercase tracking-widest border-2 border-[#111112] bg-[#111112] text-[#F9F9FB] hover:bg-[#F9F9FB] hover:text-[#111112] text-sm sm:text-base md:text-lg px-8 sm:px-10 py-4 sm:py-5 rounded-none shadow-[4px_4px_0px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#000000] transition-all text-center"
            >
              Start Your Project
            </Link>
            <Link
              href="/contact"
              className="font-bold uppercase tracking-widest border-2 border-[#111112] bg-transparent text-[#111112] hover:bg-[#111112] hover:text-accent-volt text-sm sm:text-base md:text-lg px-8 sm:px-10 py-4 sm:py-5 rounded-none shadow-[4px_4px_0px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#000000] transition-all text-center"
            >
              Book a Free Consultation
            </Link>
          </div>
          <div className="flex flex-wrap gap-6">
            {['Free initial consultation', 'Response within 24 hours', 'No obligation. No pressure.'].map((t) => (
              <span key={t} className="font-sans text-sm text-[#111112] opacity-60 flex items-center gap-2 font-bold uppercase tracking-widest">
                <span className="text-[#111112] font-bold">✓</span> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
