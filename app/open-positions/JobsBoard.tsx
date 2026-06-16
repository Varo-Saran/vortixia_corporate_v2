"use client";

import Link from 'next/link';
import { useState } from 'react';

// ── TYPES ─────────────────────────────────────────────────────────────────────

interface Job {
  id: number;
  title: string;
  department: string;
  description: string;
  requirements: string;
  status: string;
}

// ── FILTER GROUPS ─────────────────────────────────────────────────────────────

const FILTER_GROUPS: { label: string; match: (dept: string) => boolean }[] = [
  { label: 'All',         match: () => true },
  { label: 'Engineering', match: (d) => d.toLowerCase().includes('engineering') || d.toLowerCase().includes('software') || d.toLowerCase().includes('developer') },
  { label: 'AI & Data',   match: (d) => d.toLowerCase().includes('ai') || d.toLowerCase().includes('data') || d.toLowerCase().includes('ml') || d.toLowerCase().includes('analytics') || d.toLowerCase().includes('intelligence') },
  { label: 'Security',    match: (d) => d.toLowerCase().includes('security') || d.toLowerCase().includes('cyber') || d.toLowerCase().includes('infra') || d.toLowerCase().includes('cloud') },
  { label: 'Design',      match: (d) => d.toLowerCase().includes('design') || d.toLowerCase().includes('ux') || d.toLowerCase().includes('ui') || d.toLowerCase().includes('graphic') },
  { label: 'Delivery',    match: (d) => d.toLowerCase().includes('delivery') || d.toLowerCase().includes('project') || d.toLowerCase().includes('product') || d.toLowerCase().includes('manager') },
];

const OFFER = [
  'Competitive rate + project bonuses',
  'Remote-first flexibility',
  'Direct client collaboration',
  'Cutting-edge tech stack',
];

// ── COMPONENT ─────────────────────────────────────────────────────────────────

export default function JobsBoard({ jobs }: { jobs: Job[] }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filtered = jobs.filter((j) => {
    const group = FILTER_GROUPS.find((g) => g.label === activeFilter);
    return group ? group.match(j.department) : true;
  });

  // ── Empty state ────────────────────────────────────────────────────────────
  if (jobs.length === 0) {
    return (
      <div className="border-2 border-[#111112] dark:border-[#2A2A2C] p-10 sm:p-16 text-center">
        <p className="font-display text-xl sm:text-2xl uppercase text-[#111112] dark:text-[#F9F9FB] opacity-40 mb-4">
          No open roles right now.
        </p>
        <p className="font-sans text-sm text-[#5A5A62] uppercase tracking-widest font-bold mb-8">
          We post new opportunities as our collective grows. Check back soon.
        </p>
        <a
          href="mailto:hello@vortixia.com?subject=Speculative Application"
          className="font-bold uppercase tracking-widest border-2 border-[#111112] dark:border-[#F9F9FB] bg-accent-volt text-[#111112] hover:bg-[#111112] hover:text-accent-volt hover:border-accent-volt text-xs sm:text-sm px-6 sm:px-8 py-3 rounded-none transition-all inline-block"
        >
          Submit a Speculative Application →
        </a>
      </div>
    );
  }

  return (
    <div>
      {/* ── Filter bar ── */}
      {/* Mobile: scrollable row. Desktop: single bordered row */}
      <div className="mb-8 overflow-x-auto pb-px">
        <div className="flex w-max sm:w-auto border-2 border-[#111112] dark:border-[#2A2A2C] min-w-full sm:min-w-0">
          {FILTER_GROUPS.map((g) => (
            <button
              key={g.label}
              onClick={() => { setActiveFilter(g.label); setExpandedId(null); }}
              className={`font-sans text-xs font-bold uppercase tracking-widest whitespace-nowrap px-4 sm:px-5 py-3 border-r-2 last:border-r-0 border-[#111112] dark:border-[#2A2A2C] transition-all flex-1 sm:flex-none ${
                activeFilter === g.label
                  ? 'bg-accent-volt text-[#111112]'
                  : 'bg-transparent text-[#111112] dark:text-[#F9F9FB] hover:bg-[#111112] dark:hover:bg-[#F9F9FB] hover:text-[#F9F9FB] dark:hover:text-[#111112]'
              }`}
            >
              {g.label}
            </button>
          ))}
        </div>
      </div>

      {/* Result count */}
      <p className="font-sans text-xs font-bold uppercase tracking-widest text-[#5A5A62] mb-5">
        {filtered.length} role{filtered.length !== 1 ? 's' : ''} found
      </p>

      {/* ── Job list ── */}
      <div className="flex flex-col">
        {filtered.length === 0 ? (
          <div className="border-2 border-[#111112] dark:border-[#2A2A2C] p-10 text-center">
            <p className="font-sans text-sm uppercase tracking-widest font-bold text-[#5A5A62]">
              No roles in this category right now.
            </p>
          </div>
        ) : (
          filtered.map((job, idx) => {
            const isOpen = expandedId === job.id;
            return (
              <div
                key={job.id}
                className={`border-2 border-[#111112] dark:border-[#2A2A2C] bg-white dark:bg-[#111112]/90 group ${idx > 0 ? '-mt-[2px]' : ''}`}
              >
                {/* ── Card header ── */}
                <button
                  onClick={() => setExpandedId(isOpen ? null : job.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-8 flex items-start justify-between gap-4"
                >
                  <div className="flex-1 min-w-0">
                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="font-sans text-xs font-bold uppercase tracking-widest px-2.5 py-1 bg-accent-volt text-[#111112] leading-none">
                        {job.department}
                      </span>
                      <span className="font-sans text-xs font-bold uppercase tracking-widest px-2.5 py-1 border-2 border-accent-volt text-accent-volt leading-none">
                        ● Open
                      </span>
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl md:text-3xl uppercase text-[#111112] dark:text-[#F9F9FB] group-hover:text-accent-volt transition-colors leading-tight">
                      {job.title}
                    </h3>
                    <p className="font-sans text-xs text-[#5A5A62] uppercase tracking-widest font-bold mt-2">
                      Remote / Colombo (Hybrid)
                    </p>
                  </div>

                  {/* Expand toggle */}
                  <span className={`flex-shrink-0 w-9 h-9 border-2 flex items-center justify-center font-bold text-xl transition-all mt-1 ${isOpen ? 'bg-accent-volt border-accent-volt text-[#111112] rotate-45' : 'border-[#111112] dark:border-[#2A2A2C] text-[#111112] dark:text-[#F9F9FB] group-hover:border-accent-volt group-hover:text-accent-volt'}`}>
                    +
                  </span>
                </button>

                {/* ── Expanded content ── */}
                {isOpen && (
                  <div className="border-t-2 border-[#111112] dark:border-[#2A2A2C] p-5 sm:p-8">
                    {/* Mobile: stacked. Desktop: 3-col */}
                    <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:gap-8">

                      {/* Left: role detail */}
                      <div className="lg:col-span-2 flex flex-col gap-6">
                        <div>
                          <p className="font-sans text-xs font-bold uppercase tracking-widest text-[#5A5A62] mb-3">About This Role</p>
                          <p className="font-sans text-sm sm:text-base text-[#111112] dark:text-[#F9F9FB] opacity-80 leading-relaxed">
                            {job.description}
                          </p>
                        </div>
                        <div>
                          <p className="font-sans text-xs font-bold uppercase tracking-widest text-[#5A5A62] mb-3">Key Requirements</p>
                          <ul className="flex flex-col gap-2">
                            {job.requirements.split(/[,;]\s*/).filter(Boolean).map((req) => (
                              <li key={req} className="font-sans text-sm text-[#111112] dark:text-[#F9F9FB] opacity-80 flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-accent-volt flex-shrink-0 mt-1.5" />
                                {req.trim()}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Right: offer + CTA */}
                      <div className="flex flex-col gap-4">
                        <div className="border-2 border-[#111112] dark:border-[#2A2A2C] p-5">
                          <p className="font-sans text-xs font-bold uppercase tracking-widest text-[#5A5A62] mb-3">What We Offer</p>
                          <ul className="flex flex-col gap-2">
                            {OFFER.map((o) => (
                              <li key={o} className="font-sans text-sm text-[#111112] dark:text-[#F9F9FB] flex items-center gap-2">
                                <span className="text-accent-volt font-bold">✓</span>
                                {o}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Link
                          href={`/open-positions/${job.id}/apply`}
                          className="font-bold uppercase tracking-widest border-2 border-[#111112] dark:border-[#F9F9FB] bg-[#111112] dark:bg-[#F9F9FB] text-[#F9F9FB] dark:text-[#111112] hover:bg-accent-volt hover:text-[#111112] hover:border-accent-volt text-sm px-6 py-4 rounded-none shadow-[4px_4px_0px_0px_#111112] dark:shadow-[4px_4px_0px_0px_#F9F9FB] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#111112] transition-all text-center"
                        >
                          Initialize Application →
                        </Link>
                        <p className="font-sans text-xs text-[#5A5A62] uppercase tracking-widest text-center font-bold">
                          Response within 48 hours
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
