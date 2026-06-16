import Link from 'next/link';
import { db } from '../../lib/db';
import { jobs } from '../../lib/db/schema';
import { eq } from 'drizzle-orm';
import JobsBoard from './JobsBoard';

export const dynamic = 'force-dynamic';

// ── STATIC DATA ───────────────────────────────────────────────────────────────

const whyJoin = [
  {
    num: '01',
    title: 'Direct Impact, No Bureaucracy',
    body: "Your work doesn't get diluted through layers of management. You architect solutions, make decisions, and see immediate results. No committee approvals. No corporate politics. Just pure technical excellence.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Elite Peer Group',
    body: "Work alongside senior engineers and designers who challenge you to grow. No junior staff to manage, no skill gaps to fill. A curated collective of specialists who raise the bar every single day.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Entrepreneurial Freedom',
    body: "You're not a cog in a machine. You shape our technical direction, choose our tools, and define our processes. We're building this together—with the agility of a startup and the ambition of an enterprise.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

const benefits = [
  {
    emoji: '🏠',
    title: 'Remote-First + Flexible On-Site',
    body: 'Work from anywhere. When you want face-to-face collaboration, our Colombo studio is available by appointment. No commute requirements. No rigid office hours.',
  },
  {
    emoji: '💰',
    title: 'Competitive Compensation',
    body: 'Top-tier talent deserves top-tier pay. We offer competitive rates plus project bonuses based on impact—not hours logged.',
  },
  {
    emoji: '📚',
    title: 'Continuous Learning Budget',
    body: 'Annual budget for courses, certifications, conferences, and tools. Your growth is our growth. We invest in you without conditions.',
  },
  {
    emoji: '⚡',
    title: 'Cutting-Edge Tech Stack',
    body: 'No legacy code. No outdated frameworks. We use modern, type-safe technologies that make development enjoyable and scalable.',
  },
  {
    emoji: '🎯',
    title: 'Meaningful Projects',
    body: 'Work directly with visionary clients on complex challenges. No boring maintenance work. No template sites. Every project pushes your skills.',
  },
  {
    emoji: '🤝',
    title: 'Direct Client Access',
    body: 'No account managers. You work directly with clients, understand their vision, and build relationships that matter.',
  },
];

const hiringSteps = [
  {
    num: '01',
    title: 'Submit Your Application',
    body: 'Send us your resume, portfolio, and a brief note about why Vortixia interests you. No generic cover letters—we want to hear your authentic voice.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Technical Conversation (30–45 min)',
    body: "If we're intrigued, we'll schedule a direct call with our technical lead. We'll discuss your experience, explore your thinking, and assess mutual fit. No whiteboard coding.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Paid Trial Project (Optional)',
    body: 'For some roles, we propose a small, paid trial project. This lets us work together risk-free and see if the collaboration clicks—no commitment required.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Offer & Onboarding',
    body: "If it's a match, we'll make a fair, competitive offer. If you accept, we'll onboard you quickly and get you building immediately. No 6-week onboarding ceremonies.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

// ── PAGE ──────────────────────────────────────────────────────────────────────

export default async function CareersPage() {
  let allJobs: (typeof jobs.$inferSelect)[] = [];
  try {
    allJobs = await db.select().from(jobs).where(eq(jobs.status, 'open'));
  } catch (err) {
    console.error('[CareersPage] DB query failed:', err);
    // Fall through with empty array — JobsBoard will render empty state
  }

  return (
    <div className="flex flex-col bg-[#F9F9FB] dark:bg-[#0B0B0C] transition-colors duration-300">

      {/* ── SECTION 1: HERO ── */}
      <section className="bg-[#111112] dark:bg-[#000000] border-b-2 border-[#F9F9FB] dark:border-[#2A2A2C]">
        <div className="container mx-auto px-6 md:px-12 pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left */}
            <div>
              <span className="font-sans uppercase font-bold tracking-widest text-sm text-[#111112] mb-6 sm:mb-8 block bg-accent-volt px-4 py-2 inline-block">
                Join the Collective
              </span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-7xl uppercase leading-none tracking-tight text-[#F9F9FB] mb-6 sm:mb-8">
                Build the Future.{' '}
                <span className="text-accent-volt">Not Just Code It.</span>
              </h1>
              <p className="font-sans text-base sm:text-xl text-[#F9F9FB] opacity-70 leading-relaxed mb-4 border-l-2 border-accent-volt pl-4 sm:pl-6">
                Vortixia isn&rsquo;t a company. It&rsquo;s a collective of elite engineers, designers, and visionaries who refused to compromise.
              </p>
              <p className="font-sans text-base sm:text-xl text-[#F9F9FB] opacity-70 leading-relaxed mb-8 sm:mb-12 border-l-2 border-accent-volt pl-4 sm:pl-6">
                If you&rsquo;re tired of bureaucracy, junior handoffs, and template-driven work—you&rsquo;ve found your people.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-0">
                {[
                  { stat: '2026', label: 'Founded' },
                  { stat: '5', label: 'Disciplines' },
                  { stat: '3', label: 'Core Members' },
                ].map((s, i) => (
                  <div key={s.label} className={`p-4 sm:p-6 border-2 border-[#F9F9FB]/20 ${i > 0 ? '-ml-[2px]' : ''}`}>
                    <div className="font-display text-2xl sm:text-3xl md:text-4xl text-accent-volt font-bold mb-1">{s.stat}</div>
                    <div className="font-sans text-xs uppercase tracking-widest text-[#F9F9FB] opacity-40">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — abstract node grid */}
            <div className="hidden lg:block">
              <div className="relative w-full h-[400px]">
                {/* Connection lines (SVG) */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
                  <line x1="80" y1="80" x2="200" y2="200" stroke="#CCFF00" strokeWidth="1" strokeOpacity="0.3" />
                  <line x1="320" y1="80" x2="200" y2="200" stroke="#CCFF00" strokeWidth="1" strokeOpacity="0.3" />
                  <line x1="80" y1="320" x2="200" y2="200" stroke="#CCFF00" strokeWidth="1" strokeOpacity="0.3" />
                  <line x1="320" y1="320" x2="200" y2="200" stroke="#CCFF00" strokeWidth="1" strokeOpacity="0.3" />
                  <line x1="200" y1="50" x2="200" y2="200" stroke="#CCFF00" strokeWidth="1" strokeOpacity="0.2" />
                  <line x1="50" y1="200" x2="200" y2="200" stroke="#CCFF00" strokeWidth="1" strokeOpacity="0.2" />
                  <line x1="350" y1="200" x2="200" y2="200" stroke="#CCFF00" strokeWidth="1" strokeOpacity="0.2" />
                  <line x1="200" y1="350" x2="200" y2="200" stroke="#CCFF00" strokeWidth="1" strokeOpacity="0.2" />
                </svg>
                {/* Nodes */}
                {[
                  { x: 'left-[15%]', y: 'top-[15%]', label: 'AI / ML', size: 'w-16 h-16' },
                  { x: 'left-[75%]', y: 'top-[15%]', label: 'Security', size: 'w-14 h-14' },
                  { x: 'left-[40%]', y: 'top-[40%]', label: 'Core', size: 'w-20 h-20', accent: true },
                  { x: 'left-[15%]', y: 'top-[70%]', label: 'Design', size: 'w-12 h-12' },
                  { x: 'left-[75%]', y: 'top-[70%]', label: 'Data', size: 'w-14 h-14' },
                  { x: 'left-[40%]', y: 'top-[5%]', label: 'Dev', size: 'w-10 h-10' },
                ].map((node) => (
                  <div
                    key={node.label}
                    className={`absolute ${node.x} ${node.y} -translate-x-1/2 -translate-y-1/2 ${node.size} border-2 flex items-center justify-center ${node.accent ? 'bg-accent-volt border-accent-volt' : 'border-[#F9F9FB]/20 bg-[#F9F9FB]/5'}`}
                  >
                    <span className={`font-sans text-xs font-bold uppercase tracking-widest ${node.accent ? 'text-[#111112]' : 'text-[#F9F9FB] opacity-60'}`}>
                      {node.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: WHY JOIN ── */}
      <section className="py-20 sm:py-32 border-b-2 border-[#111112] dark:border-[#2A2A2C] bg-[#F9F9FB] dark:bg-[#0B0B0C] transition-colors duration-300">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mb-10 sm:mb-16">
            <span className="font-sans uppercase font-bold tracking-widest text-sm text-accent-volt mb-6 block bg-[#111112] dark:bg-[#2A2A2C] px-4 py-2 inline-block">
              The Vortixia Difference
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl uppercase tracking-tight text-[#111112] dark:text-[#F9F9FB] mb-4">
              Why Top Talent Chooses Us.
            </h2>
            <p className="font-sans text-base sm:text-xl text-[#111112] dark:text-[#F9F9FB] opacity-80 leading-relaxed max-w-2xl">
              We&rsquo;re not offering &ldquo;jobs.&rdquo; We&rsquo;re offering founding roles in a movement. Here&rsquo;s what makes Vortixia different:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {whyJoin.map((item, i) => (
              <div
                key={item.num}
                className={`p-6 sm:p-8 md:p-12 border-2 border-[#111112] dark:border-[#2A2A2C] bg-white dark:bg-[#111112]/90 group hover:bg-[#111112] dark:hover:bg-[#0B0B0C] hover:border-accent-volt transition-all ${i > 0 ? 'md:-ml-[2px]' : ''}`}
              >
                <div className="text-[#111112] dark:text-[#F9F9FB] group-hover:text-accent-volt transition-colors mb-6">
                  {item.icon}
                </div>
                <span className="font-display text-4xl font-bold text-accent-volt mb-4 block">{item.num}</span>
                <h3 className="font-display text-xl uppercase mb-4 text-[#111112] dark:text-[#F9F9FB] group-hover:text-[#F9F9FB] transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-[#111112] dark:text-[#F9F9FB] opacity-70 group-hover:text-[#F9F9FB] group-hover:opacity-60 leading-relaxed transition-colors">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: LIFE AT VORTIXIA ── */}
      <section className="bg-[#111112] dark:bg-[#000000] py-32 border-b-2 border-[#F9F9FB] dark:border-[#2A2A2C] transition-colors duration-300">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mb-16">
            <span className="font-sans uppercase font-bold tracking-widest text-sm text-[#111112] mb-6 block bg-accent-volt px-4 py-2 inline-block">
              Life at Vortixia
            </span>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-[#F9F9FB] mb-4">
              Work That Fits Your Life. Not the Other Way Around.
            </h2>
            <p className="font-sans text-xl text-[#F9F9FB] opacity-70 leading-relaxed max-w-2xl">
              We don&rsquo;t believe in corporate perks that distract from real work. We believe in removing friction so you can do your best work—on your terms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className={`p-8 border-2 border-[#F9F9FB]/10 group hover:border-accent-volt hover:bg-[#F9F9FB]/5 transition-all ${i >= 3 ? '-mt-[2px]' : ''} ${i % 3 !== 0 ? 'md:-ml-[2px]' : ''}`}
              >
                <span className="text-3xl mb-5 block">{b.emoji}</span>
                <h3 className="font-display text-lg uppercase text-[#F9F9FB] mb-3 group-hover:text-accent-volt transition-colors">
                  {b.title}
                </h3>
                <p className="font-sans text-sm text-[#F9F9FB] opacity-60 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: OPEN ROLES (client component for filtering) ── */}
      <section id="roles" className="py-32 border-b-2 border-[#111112] dark:border-[#2A2A2C] bg-[#F9F9FB] dark:bg-[#0B0B0C] transition-colors duration-300">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mb-16">
            <span className="font-sans uppercase font-bold tracking-widest text-sm text-accent-volt mb-6 block bg-[#111112] dark:bg-[#2A2A2C] px-4 py-2 inline-block">
              Current Opportunities
            </span>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-[#111112] dark:text-[#F9F9FB] mb-4">
              Founding Roles. Maximum Impact.
            </h2>
            <p className="font-sans text-xl text-[#111112] dark:text-[#F9F9FB] opacity-80 leading-relaxed max-w-3xl">
              We&rsquo;re selectively adding elite talent to our core collective. These aren&rsquo;t just jobs—they&rsquo;re founding opportunities to shape Vortixia&rsquo;s future.
            </p>
          </div>

          <JobsBoard jobs={allJobs} />
        </div>
      </section>

      {/* ── SECTION 5: SPECULATIVE APPLICATIONS ── */}
      <section className="bg-[#111112] dark:bg-[#000000] py-32 border-b-2 border-[#F9F9FB] dark:border-[#2A2A2C] transition-colors duration-300">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="font-sans uppercase font-bold tracking-widest text-sm text-[#111112] mb-6 block bg-accent-volt px-4 py-2 inline-block">
                Future Talent Network
              </span>
              <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tight text-[#F9F9FB] mb-6">
                Your Dream Role Doesn&rsquo;t Exist Yet?{' '}
                <span className="text-accent-volt">Let&rsquo;s Create It.</span>
              </h2>
              <p className="font-sans text-lg text-[#F9F9FB] opacity-70 leading-relaxed mb-10">
                Exceptional talent doesn&rsquo;t always fit into neat job descriptions. If you&rsquo;re elite at what you do but don&rsquo;t see the perfect role listed, we want to hear from you.
              </p>

              <div className="mb-10">
                <p className="font-sans text-xs font-bold uppercase tracking-widest text-[#F9F9FB] opacity-40 mb-4">
                  We&rsquo;re Always Looking For
                </p>
                <ul className="flex flex-col gap-3">
                  {[
                    'Senior AI Engineers with production ML experience',
                    'Full-Stack Architects who obsess over performance',
                    'Security Experts with zero-trust expertise',
                    'Product Designers who prioritize conversion over trends',
                    'Technical Writers who explain complex systems clearly',
                  ].map((item) => (
                    <li key={item} className="font-sans text-sm text-[#F9F9FB] opacity-70 flex items-start gap-3">
                      <span className="text-accent-volt font-bold flex-shrink-0">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t-2 border-[#F9F9FB]/10 pt-8">
                <p className="font-sans text-xs font-bold uppercase tracking-widest text-[#F9F9FB] opacity-40 mb-4">
                  Why Join Our Talent Network
                </p>
                {[
                  'Be first to know when new roles open',
                  'Direct line to our founding team',
                  'Early access to projects and opportunities',
                  'We review every submission personally',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 mb-3">
                    <span className="text-accent-volt font-bold">✓</span>
                    <span className="font-sans text-sm text-[#F9F9FB] opacity-60">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact card */}
            <div className="border-2 border-[#F9F9FB]/20 p-8 md:p-12">
              <h3 className="font-display text-2xl uppercase text-[#F9F9FB] mb-2">Submit Your Portfolio</h3>
              <p className="font-sans text-sm text-[#F9F9FB] opacity-50 mb-8">
                Reach out directly. We read everything.
              </p>
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:hello@vortixia.com?subject=Speculative Application — [Your Name] — [Your Discipline]"
                  className="font-bold uppercase tracking-widest border-2 border-accent-volt bg-accent-volt text-[#111112] hover:bg-transparent hover:text-accent-volt text-sm px-8 py-4 rounded-none shadow-[4px_4px_0px_0px_#CCFF00] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#CCFF00] transition-all text-center"
                >
                  Email Us Directly →
                </a>
                <p className="font-sans text-xs text-[#F9F9FB] opacity-30 uppercase tracking-widest text-center">
                  hello@vortixia.com
                </p>
              </div>
              <div className="border-t-2 border-[#F9F9FB]/10 pt-8 mt-8">
                <p className="font-sans text-xs font-bold uppercase tracking-widest text-[#F9F9FB] opacity-40 mb-4">
                  Include in your message
                </p>
                {['Your name + location', 'Your discipline / specialization', 'Link to portfolio or GitHub', 'Brief note on why Vortixia (2–3 sentences)'].map((item) => (
                  <div key={item} className="flex items-center gap-3 mb-2.5">
                    <span className="w-1.5 h-1.5 bg-accent-volt flex-shrink-0" />
                    <span className="font-sans text-sm text-[#F9F9FB] opacity-50">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: HOW WE HIRE ── */}
      <section className="py-32 border-b-2 border-[#111112] dark:border-[#2A2A2C] bg-[#F9F9FB] dark:bg-[#0B0B0C] transition-colors duration-300">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mb-16">
            <span className="font-sans uppercase font-bold tracking-widest text-sm text-accent-volt mb-6 block bg-[#111112] dark:bg-[#2A2A2C] px-4 py-2 inline-block">
              How We Hire
            </span>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-[#111112] dark:text-[#F9F9FB] mb-4">
              Fast. Direct. No Games.
            </h2>
            <p className="font-sans text-xl text-[#111112] dark:text-[#F9F9FB] opacity-80 leading-relaxed max-w-3xl">
              We respect your time. Our hiring process is designed to be efficient, transparent, and respectful. No multiple rounds of HR interviews. No take-home projects that take 20 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {hiringSteps.map((step, i) => (
              <div
                key={step.num}
                className={`p-8 border-2 border-[#111112] dark:border-[#2A2A2C] bg-white dark:bg-[#111112]/90 group hover:bg-[#111112] dark:hover:bg-[#0B0B0C] transition-colors ${i > 0 ? 'md:-ml-[2px]' : ''}`}
              >
                <div className="text-[#111112] dark:text-[#F9F9FB] group-hover:text-accent-volt transition-colors mb-6">
                  {step.icon}
                </div>
                <span className="font-display text-5xl font-bold text-accent-volt mb-4 block leading-none">{step.num}</span>
                <h3 className="font-display text-lg uppercase mb-3 text-[#111112] dark:text-[#F9F9FB] group-hover:text-[#F9F9FB] transition-colors">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-[#111112] dark:text-[#F9F9FB] opacity-60 group-hover:text-[#F9F9FB] group-hover:opacity-50 leading-relaxed transition-colors">
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-0 -mt-[2px] border-2 border-[#111112] dark:border-[#2A2A2C] p-6 md:p-8 bg-[#111112] dark:bg-[#0B0B0C] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="font-sans text-sm text-[#F9F9FB] opacity-60">
              Typical timeline from application to offer:
            </p>
            <span className="font-display text-2xl text-accent-volt font-bold">1–2 weeks</span>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: CTA ── */}
      <section className="py-32 bg-accent-volt border-t-2 border-[#111112]">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-tight text-[#111112] mb-8">
            Ready to Build Something Exceptional?
          </h2>
          <p className="font-sans text-xl text-[#111112] opacity-70 mb-12 max-w-2xl leading-relaxed">
            Stop settling for corporate bureaucracy. Join a collective that values your expertise, respects your time, and trusts your judgment.
          </p>
          <div className="flex flex-wrap gap-6">
            <a
              href="#roles"
              className="font-bold uppercase tracking-widest border-2 border-[#111112] bg-[#111112] text-[#F9F9FB] hover:bg-[#F9F9FB] hover:text-[#111112] text-base md:text-lg px-10 py-5 rounded-none shadow-[4px_4px_0px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#000000] transition-all"
            >
              View Open Roles →
            </a>
            <a
              href="mailto:hello@vortixia.com?subject=Speculative Application"
              className="font-bold uppercase tracking-widest border-2 border-[#111112] bg-transparent text-[#111112] hover:bg-[#111112] hover:text-accent-volt text-base md:text-lg px-10 py-5 rounded-none shadow-[4px_4px_0px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#000000] transition-all"
            >
              Submit Speculative Application →
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
