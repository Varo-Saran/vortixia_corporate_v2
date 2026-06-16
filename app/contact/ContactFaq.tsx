'use client';

import { useState } from 'react';

const FAQ_ITEMS = [
  {
    q: 'What information should I include in my inquiry?',
    a: "The more detail, the better. Tell us about your business goals, technical challenges, desired timeline, and budget range if you have one. If you're not sure about technical details, that's completely fine—just describe the problem you're trying to solve and we'll ask the right questions.",
  },
  {
    q: 'Do you sign NDAs?',
    a: "Absolutely. We understand that many projects involve sensitive data and proprietary ideas. We're happy to sign an NDA before our first conversation if needed. Just mention it in your inquiry and we'll prepare one immediately.",
  },
  {
    q: 'What if my budget is limited?',
    a: "We work with startups and enterprises alike. If your budget is tight, tell us upfront. We can often phase projects, suggest MVP approaches, or recommend alternative solutions that fit your constraints. Transparency on budget helps us design the right solution—not an oversized one.",
  },
  {
    q: 'Do you work with international clients?',
    a: "Yes. We work with clients globally via remote collaboration tools (Slack, Zoom, Linear, Notion). Our Sri Lanka location allows us to offer competitive rates while maintaining comfortable overlap with both European (UTC+5:30) and Asian time zones.",
  },
  {
    q: "Can I visit your office?",
    a: "Yes, by appointment only. We're based in Kalubowila, Colombo. If you're local or visiting Sri Lanka, we'd love to meet in person — just mention it in your inquiry and we'll arrange a studio visit.",
  },
  {
    q: "What if I'm not sure what I need?",
    a: "That's completely fine — many of our best projects started with a vague idea. Select 'Not Sure Yet / Consultation' in the project type and describe your business challenge. We'll help you clarify requirements, explore possibilities, and recommend the right approach.",
  },
  {
    q: 'How long does a typical project take?',
    a: 'It depends on scope and complexity. A focused MVP can be delivered in 4–8 weeks. A full enterprise system typically runs 3–6 months. We always define a clear timeline in our proposal before any work begins — no surprises.',
  },
];

export default function ContactFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="border-t-2 border-[#111112] dark:border-[#2A2A2C]">
      {FAQ_ITEMS.map((item, i) => {
        const isOpen = openIdx === i;
        return (
          <div
            key={i}
            className="border-b-2 border-[#111112] dark:border-[#2A2A2C] group"
          >
            <button
              onClick={() => setOpenIdx(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-start justify-between gap-4 sm:gap-6 py-5 sm:py-7 text-left"
            >
              <span
                className={`font-display text-base sm:text-lg md:text-xl uppercase tracking-tight transition-colors ${
                  isOpen
                    ? 'text-accent-volt'
                    : 'text-[#111112] dark:text-[#F9F9FB] group-hover:text-accent-volt'
                }`}
              >
                {item.q}
              </span>
              <span
                className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 border-2 flex items-center justify-center font-bold text-lg sm:text-xl transition-all ${
                  isOpen
                    ? 'bg-accent-volt border-accent-volt text-[#111112] rotate-45'
                    : 'border-[#111112] dark:border-[#2A2A2C] text-[#111112] dark:text-[#F9F9FB] group-hover:border-accent-volt group-hover:text-accent-volt'
                }`}
              >
                +
              </span>
            </button>

            {isOpen && (
              <div className="pb-5 sm:pb-7 pr-4 sm:pr-14 border-l-4 border-accent-volt pl-4 sm:pl-5 -ml-[2px]">
                <p className="font-sans text-sm sm:text-base text-[#111112] dark:text-[#F9F9FB] opacity-70 leading-relaxed">
                  {item.a}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
