import { db } from '../../../../lib/db';
import { jobs } from '../../../../lib/db/schema';
import { eq } from 'drizzle-orm';
import { notFound } from 'next/navigation';
import ApplyForm from './ApplyForm';
import Link from 'next/link';

// ── DB ERROR FALLBACK ─────────────────────────────────────────────────────────

function DbErrorFallback({ jobId }: { jobId: number }) {
  return (
    <div className="flex flex-col bg-[#0B0B0C] min-h-screen">
      <div className="container mx-auto px-6 md:px-12 pt-40 pb-24 max-w-3xl">
        <Link
          href="/open-positions"
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#5A5A62] hover:text-accent-volt transition-colors mb-12"
        >
          ← Back to Careers
        </Link>

        <div className="border-2 border-[#2A2A2C] p-8 md:p-12">
          {/* Terminal bar */}
          <div className="flex items-center gap-2 mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
            <span className="font-mono text-xs text-[#F9F9FB] opacity-20 ml-2">status: connection_error</span>
          </div>

          <div className="w-14 h-14 border-2 border-yellow-500/60 flex items-center justify-center mb-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EAB308" strokeWidth="2" strokeLinecap="square">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </div>

          <h1 className="font-display text-3xl md:text-4xl uppercase text-[#F9F9FB] mb-4">
            Temporarily Unavailable
          </h1>
          <p className="font-sans text-base text-[#F9F9FB] opacity-60 leading-relaxed mb-8">
            We&rsquo;re having trouble connecting to our database right now. This is usually a brief, temporary issue.
          </p>

          <div className="border-t-2 border-[#2A2A2C] pt-8 mb-8">
            <p className="font-sans text-xs font-bold uppercase tracking-widest text-[#F9F9FB] opacity-30 mb-4">
              In the meantime, apply directly:
            </p>
            <a
              href={`mailto:hello@vortixia.com?subject=Application for Role #${jobId}&body=Hi Vortixia team,%0D%0A%0D%0AI'd like to apply for the role listed at /open-positions/${jobId}/apply.%0D%0A%0D%0AMy details:%0D%0A- Name: %0D%0A- Resume: %0D%0A- Portfolio: %0D%0A- Cover letter: `}
              className="font-bold uppercase tracking-widest border-2 border-accent-volt bg-accent-volt text-[#111112] hover:bg-transparent hover:text-accent-volt text-sm px-8 py-4 rounded-none shadow-[4px_4px_0px_0px_#CCFF00] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#CCFF00] transition-all inline-block"
            >
              Apply via Email Instead →
            </a>
            <p className="font-sans text-xs text-[#5A5A62] mt-3 uppercase tracking-widest">hello@vortixia.com</p>
          </div>

          <div className="flex gap-4">
            <Link
              href="/open-positions"
              className="font-bold uppercase tracking-widest border-2 border-[#F9F9FB]/20 bg-transparent text-[#F9F9FB] hover:border-[#F9F9FB] text-sm px-6 py-3 rounded-none transition-all opacity-60 hover:opacity-100"
            >
              ← All Careers
            </Link>
            <button
              onClick={undefined}
              className="font-bold uppercase tracking-widest border-2 border-[#F9F9FB]/20 bg-transparent text-[#F9F9FB] hover:border-[#F9F9FB] text-sm px-6 py-3 rounded-none transition-all opacity-60 hover:opacity-100"
            >
              Try Again ↻
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── PAGE ──────────────────────────────────────────────────────────────────────

export default async function ApplyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const jobId = parseInt(id, 10);

  if (isNaN(jobId)) notFound();

  // ── Guarded DB fetch ───────────────────────────────────────────────────────
  let job: typeof jobs.$inferSelect | undefined;
  try {
    const jobResults = await db.select().from(jobs).where(eq(jobs.id, jobId));
    job = jobResults[0];
  } catch (err) {
    // DB unreachable (e.g. Supabase hibernating) — show graceful fallback
    console.error(`[ApplyPage] DB query failed for job ${jobId}:`, err);
    return <DbErrorFallback jobId={jobId} />;
  }

  if (!job || job.status !== 'open') notFound();

  // ── Parse requirements ─────────────────────────────────────────────────────
  const requirementsList = job.requirements
    .split(/[,;]\s*/)
    .map((r) => r.trim())
    .filter(Boolean);

  return (
    <div className="flex flex-col bg-[#0B0B0C] transition-colors duration-300 min-h-screen">

      {/* ── HEADER ── */}
      <section className="border-b-2 border-[#2A2A2C] bg-[#0B0B0C]">
        <div className="container mx-auto px-6 md:px-12 pt-28 sm:pt-36 pb-10 sm:pb-12">
          {/* Breadcrumb */}
          <Link
            href="/open-positions"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#5A5A62] hover:text-accent-volt transition-colors mb-8"
          >
            ← Back to Careers
          </Link>

          {/* Department + Status */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <span className="font-sans text-xs font-bold uppercase tracking-widest px-3 py-1.5 bg-accent-volt text-[#111112]">
              {job.department}
            </span>
            <span className="font-sans text-xs font-bold uppercase tracking-widest px-3 py-1.5 border-2 border-accent-volt text-accent-volt">
              ● Open
            </span>
            <span className="font-sans text-xs text-[#5A5A62] uppercase tracking-widest font-bold hidden sm:inline">
              Remote / Colombo (Hybrid)
            </span>
          </div>

          {/* Job title */}
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl uppercase leading-none tracking-tight text-[#F9F9FB] mb-4 sm:mb-6">
            Apply for{' '}
            <span className="text-accent-volt">{job.title}</span>
          </h1>

          {/* Description */}
          <p className="font-sans text-base text-[#F9F9FB] opacity-70 leading-relaxed max-w-3xl border-l-2 border-accent-volt pl-4 sm:pl-6">
            {job.description}
          </p>
        </div>
      </section>

      {/* ── TWO-COLUMN: SIDEBAR + FORM ── */}
      <section className="container mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start">

          {/* ── LEFT: ROLE REQUIREMENTS (sticky) ── */}
          <div className="lg:sticky lg:top-28 flex flex-col gap-4">

            <div className="border-2 border-[#2A2A2C] bg-[#111112]">
              <div className="p-6 border-b-2 border-[#2A2A2C]">
                <h2 className="font-display text-xl uppercase text-[#F9F9FB]">Role Requirements</h2>
              </div>
              <div className="p-6">
                <ul className="flex flex-col gap-3">
                  {requirementsList.map((req, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-accent-volt flex-shrink-0 mt-1.5" />
                      <span className="font-sans text-sm text-[#F9F9FB] opacity-70 leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-2 border-[#2A2A2C] bg-[#111112] p-6">
              <div className="flex flex-col gap-4">
                {[
                  {
                    icon: <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>,
                    extra: <circle cx="12" cy="10" r="3"/>,
                    label: 'Remote / Colombo (Hybrid)',
                  },
                  {
                    icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
                    label: 'Full-Time / Contract',
                  },
                  {
                    icon: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>,
                    label: 'Founding-team opportunity',
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#CCFF00" strokeWidth="2" strokeLinecap="square">
                      {item.icon}
                      {item.extra}
                    </svg>
                    <span className="font-sans text-sm text-[#F9F9FB] opacity-60">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-2 border-[#2A2A2C] bg-[#111112] p-6">
              <p className="font-sans text-xs font-bold uppercase tracking-widest text-[#F9F9FB] opacity-40 mb-4">What We Offer</p>
              {[
                'Competitive rate + project bonuses',
                'Remote-first flexibility',
                'Direct client collaboration',
                'Cutting-edge tech stack',
                'Continuous learning budget',
              ].map((o) => (
                <div key={o} className="flex items-center gap-3 mb-2.5">
                  <span className="text-accent-volt font-bold text-xs">✓</span>
                  <span className="font-sans text-sm text-[#F9F9FB] opacity-60">{o}</span>
                </div>
              ))}
            </div>

            <div className="border-2 border-[#2A2A2C] p-5">
              <p className="font-sans text-xs text-[#5A5A62] uppercase tracking-widest font-bold mb-2">Not the right role?</p>
              <Link
                href="/open-positions"
                className="font-sans text-sm text-[#F9F9FB] opacity-60 hover:text-accent-volt transition-colors"
              >
                View all open positions →
              </Link>
            </div>
          </div>

          {/* ── RIGHT: APPLICATION FORM ── */}
          <ApplyForm jobId={job.id} jobTitle={job.title} />
        </div>
      </section>

      {/* ── WHAT HAPPENS NEXT ── */}
      <section className="border-t-2 border-[#2A2A2C] bg-[#111112] py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mb-12">
            <h2 className="font-display text-3xl md:text-5xl uppercase tracking-tight text-[#F9F9FB]">
              What Happens Next?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {[
              {
                num: '01',
                title: 'Review (24–48 hours)',
                body: 'Our technical lead reviews your application personally. No AI screening, no HR filters — just real humans who care about your work.',
                iconPath: <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>,
              },
              {
                num: '02',
                title: 'Technical Call (30–45 min)',
                body: 'If we are intrigued, we schedule a direct conversation about your experience and vision. No whiteboard coding. No trick questions.',
                iconPath: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>,
              },
              {
                num: '03',
                title: 'Decision (48 hours)',
                body: "We move fast. You'll hear back within 2 days of our call — one way or another. We respect your time too much to ghost you.",
                iconPath: <polyline points="20 6 9 17 4 12"/>,
              },
            ].map((step, i) => (
              <div
                key={step.num}
                className={`p-8 md:p-10 border-2 border-[#F9F9FB]/10 group hover:border-accent-volt transition-colors ${i > 0 ? 'md:-ml-[2px]' : ''}`}
              >
                <svg className="text-[#F9F9FB] opacity-40 group-hover:text-accent-volt group-hover:opacity-100 transition-all mb-6" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                  {step.iconPath}
                </svg>
                <span className="font-display text-5xl font-bold text-accent-volt mb-4 block leading-none">{step.num}</span>
                <h3 className="font-display text-lg uppercase text-[#F9F9FB] mb-3 group-hover:text-accent-volt transition-colors">{step.title}</h3>
                <p className="font-sans text-sm text-[#F9F9FB] opacity-60 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>

          <div className="border-2 border-[#F9F9FB]/10 -mt-[2px] px-8 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <p className="font-sans text-sm text-[#F9F9FB] opacity-50">
              Typical timeline from application to offer:
            </p>
            <span className="font-display text-2xl text-accent-volt font-bold">1–2 weeks</span>
          </div>
        </div>
      </section>

      {/* ── QUESTIONS SECTION ── */}
      <section className="py-24 border-t-2 border-[#2A2A2C] bg-[#0B0B0C]">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <div className="border-2 border-[#2A2A2C] p-8 md:p-12">
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-accent-volt mb-4 block">Questions?</span>
            <h2 className="font-display text-2xl md:text-4xl uppercase text-[#F9F9FB] mb-4">
              Have Questions About the Role?
            </h2>
            <p className="font-sans text-base text-[#F9F9FB] opacity-60 leading-relaxed mb-8">
              Can&rsquo;t find what you&rsquo;re looking for? Reach out directly and we&rsquo;ll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="font-bold uppercase tracking-widest border-2 border-accent-volt bg-accent-volt text-[#111112] hover:bg-transparent hover:text-accent-volt text-sm px-8 py-4 rounded-none shadow-[4px_4px_0px_0px_#CCFF00] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#CCFF00] transition-all text-center"
              >
                Contact Us →
              </Link>
              <a
                href="mailto:hello@vortixia.com"
                className="font-bold uppercase tracking-widest border-2 border-[#F9F9FB]/20 bg-transparent text-[#F9F9FB] hover:border-[#F9F9FB] text-sm px-8 py-4 rounded-none transition-all text-center opacity-60 hover:opacity-100"
              >
                hello@vortixia.com
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
