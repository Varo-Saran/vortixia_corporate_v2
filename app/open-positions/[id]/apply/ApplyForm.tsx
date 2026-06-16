'use client';

import { useActionState, useState } from 'react';
import { submitApplication } from './actions';
import Link from 'next/link';

// ── SHARED INPUT STYLES ───────────────────────────────────────────────────────

const inputCls =
  'rounded-none border-2 border-[#2A2A2C] bg-[#0B0B0C] p-4 font-sans text-[#F9F9FB] ' +
  'placeholder:text-[#5A5A62] focus:outline-none focus:border-accent-volt focus:ring-1 ' +
  'focus:ring-accent-volt transition-colors w-full text-base';

const selectCls =
  'rounded-none border-2 border-[#2A2A2C] bg-[#0B0B0C] p-4 font-sans text-[#F9F9FB] ' +
  'focus:outline-none focus:border-accent-volt focus:ring-1 focus:ring-accent-volt ' +
  'transition-colors w-full text-base appearance-none cursor-pointer';

const labelCls = 'font-sans font-bold uppercase tracking-widest text-xs text-[#F9F9FB] opacity-40 mb-2 block';

const MAX_COVER = 2000;
const MIN_COVER = 100;

// ── COMPONENT ─────────────────────────────────────────────────────────────────

export default function ApplyForm({ jobId, jobTitle }: { jobId: number; jobTitle: string }) {
  const [state, formAction, isPending] = useActionState(submitApplication, null);
  const [coverLen, setCoverLen] = useState(0);

  // ── Success state ──────────────────────────────────────────────────────────
  if (state?.success) {
    return (
      <div className="border-2 border-accent-volt bg-[#0B0B0C] shadow-[-8px_8px_0px_0px_#CCFF00]">
        {/* Terminal bar */}
        <div className="flex items-center gap-2 px-6 py-3 border-b-2 border-accent-volt/30 bg-accent-volt/5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-accent-volt/80" />
          <span className="font-mono text-xs text-[#F9F9FB] opacity-30 ml-2">status: 200 OK</span>
        </div>

        <div className="p-8 md:p-12">
          <div className="w-16 h-16 border-2 border-accent-volt flex items-center justify-center mb-8">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#CCFF00" strokeWidth="2.5" strokeLinecap="square">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3 className="font-display text-3xl md:text-4xl uppercase tracking-tight text-[#F9F9FB] mb-4">
            Application Received.
          </h3>
          <p className="font-sans text-lg text-[#F9F9FB] opacity-70 leading-relaxed mb-2">
            Thanks, <strong className="text-[#F9F9FB] opacity-100">{state.name}</strong>. We&rsquo;ve received your application for{' '}
            <strong className="text-accent-volt">{jobTitle}</strong>.
          </p>
          <p className="font-sans text-base text-[#F9F9FB] opacity-60 leading-relaxed mb-10">
            Our technical lead reviews every application personally — no AI screening, no HR filters. You&rsquo;ll hear from us within 48 hours, one way or another.
          </p>

          {/* Next steps mini strip */}
          <div className="border-t-2 border-[#F9F9FB]/10 pt-8 mb-10">
            <p className="font-sans text-xs font-bold uppercase tracking-widest text-[#F9F9FB] opacity-30 mb-6">What happens next</p>
            <div className="flex flex-col gap-4">
              {[
                { num: '01', text: 'We review your application within 48 hours' },
                { num: '02', text: "If there's a match, we'll schedule a 30-min technical call" },
                { num: '03', text: "You'll hear back within 2 days of that call — guaranteed" },
              ].map((s) => (
                <div key={s.num} className="flex items-start gap-4">
                  <span className="font-display text-lg text-accent-volt font-bold flex-shrink-0 w-8">{s.num}</span>
                  <span className="font-sans text-sm text-[#F9F9FB] opacity-60">{s.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/open-positions"
              className="font-bold uppercase tracking-widest border-2 border-[#F9F9FB] bg-transparent text-[#F9F9FB] hover:bg-[#F9F9FB] hover:text-[#111112] text-sm px-8 py-4 rounded-none transition-all text-center"
            >
              ← Back to Careers
            </Link>
            <Link
              href="/projects"
              className="font-bold uppercase tracking-widest border-2 border-accent-volt bg-accent-volt text-[#111112] hover:bg-transparent hover:text-accent-volt text-sm px-8 py-4 rounded-none transition-all text-center"
            >
              View Our Work →
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ── Form ───────────────────────────────────────────────────────────────────
  return (
    <div className="border-2 border-[#2A2A2C] bg-[#0B0B0C]">
      {/* Terminal header bar */}
      <div className="flex items-center gap-2 px-6 py-3 border-b-2 border-[#2A2A2C] bg-[#F9F9FB]/3">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        <span className="font-mono text-xs text-[#F9F9FB] opacity-30 ml-2">vortixia:~/application_terminal</span>
      </div>

      <div className="p-6 md:p-10">
        <div className="mb-8">
          <h2 className="font-display text-2xl md:text-3xl uppercase text-[#F9F9FB] mb-2">Application Terminal</h2>
          <p className="font-sans text-sm text-[#F9F9FB] opacity-50 leading-relaxed">
            We review every application personally and respond within 48 hours. No AI screening — just real humans who care about your work.
          </p>
        </div>

        {/* Error banner */}
        {state?.error && (
          <div className="border-2 border-red-500 bg-red-500/10 text-red-400 p-4 font-sans text-sm mb-6 flex items-start gap-3">
            <span className="flex-shrink-0 font-bold">✗</span>
            {state.error}
          </div>
        )}

        <form action={formAction} className="flex flex-col gap-6">
          <input type="hidden" name="jobId" value={jobId} />

          {/* Row 1: Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="candidateName" className={labelCls}>
                Full Name <span className="text-accent-volt">*</span>
              </label>
              <input
                type="text"
                id="candidateName"
                name="candidateName"
                required
                minLength={2}
                className={inputCls}
                placeholder="Jane Doe"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="candidateEmail" className={labelCls}>
                Email Address <span className="text-accent-volt">*</span>
              </label>
              <input
                type="email"
                id="candidateEmail"
                name="candidateEmail"
                required
                className={inputCls}
                placeholder="jane@example.com"
              />
            </div>
          </div>

          {/* Row 2: Phone */}
          <div className="flex flex-col">
            <label htmlFor="phone" className={labelCls}>
              Phone Number <span className="text-[#5A5A62]">(optional — for urgent comms only)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className={inputCls}
              placeholder="+94 77 123 4567"
            />
          </div>

          {/* Row 3: Resume URL */}
          <div className="flex flex-col">
            <label htmlFor="resumeUrl" className={labelCls}>
              Resume Link <span className="text-accent-volt">*</span>
            </label>
            <input
              type="url"
              id="resumeUrl"
              name="resumeUrl"
              required
              className={inputCls}
              placeholder="https://linkedin.com/in/jane-doe  or  Google Drive / Dropbox link"
            />
            <p className="font-sans text-xs text-[#5A5A62] mt-2">LinkedIn profile, Google Drive, Dropbox, or any public link works.</p>
          </div>

          {/* Row 4: Portfolio URL */}
          <div className="flex flex-col">
            <label htmlFor="portfolioUrl" className={labelCls}>
              Portfolio / GitHub <span className="text-[#5A5A62]">(optional — show us your code)</span>
            </label>
            <input
              type="url"
              id="portfolioUrl"
              name="portfolioUrl"
              className={inputCls}
              placeholder="https://github.com/janedoe"
            />
          </div>

          {/* Row 5: Cover Letter with live counter */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="coverLetter" className={`${labelCls} mb-0`}>
                Cover Letter <span className="text-accent-volt">*</span>
              </label>
              <span className={`font-mono text-xs font-bold transition-colors ${
                coverLen < MIN_COVER
                  ? 'text-red-400'
                  : coverLen > MAX_COVER * 0.9
                  ? 'text-yellow-400'
                  : 'text-accent-volt'
              }`}>
                {coverLen} / {MAX_COVER}
              </span>
            </div>
            <textarea
              id="coverLetter"
              name="coverLetter"
              required
              rows={8}
              minLength={MIN_COVER}
              maxLength={MAX_COVER}
              onChange={(e) => setCoverLen(e.target.value.length)}
              className={`${inputCls} resize-none`}
              placeholder={`Tell us why you're a great fit for this role.\n\nWhat excites you about Vortixia? What relevant experience do you have? Any notable projects or achievements?\n\n(Minimum ${MIN_COVER} characters — we want your authentic voice, not a generic template.)`}
            />
            {coverLen > 0 && coverLen < MIN_COVER && (
              <p className="font-sans text-xs text-red-400 mt-1.5">
                {MIN_COVER - coverLen} more characters needed
              </p>
            )}
          </div>

          {/* Row 6: Availability + Source */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="availability" className={labelCls}>
                Availability <span className="text-accent-volt">*</span>
              </label>
              <div className="relative">
                <select id="availability" name="availability" required defaultValue="" className={selectCls}>
                  <option value="" disabled>When can you start?</option>
                  <option value="Immediately">Immediately</option>
                  <option value="2 weeks notice">2 weeks notice</option>
                  <option value="1 month notice">1 month notice</option>
                  <option value="3 months notice">3 months notice</option>
                  <option value="Flexible">Flexible</option>
                </select>
                {/* Custom chevron */}
                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#CCFF00" strokeWidth="2.5" strokeLinecap="square">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="source" className={labelCls}>
                How did you hear about us? <span className="text-[#5A5A62]">(optional)</span>
              </label>
              <div className="relative">
                <select id="source" name="source" className={selectCls}>
                  <option value="">Select one</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Referral">Referral</option>
                  <option value="Twitter / X">Twitter / X</option>
                  <option value="GitHub">GitHub</option>
                  <option value="Google Search">Google Search</option>
                  <option value="Other">Other</option>
                </select>
                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#CCFF00" strokeWidth="2.5" strokeLinecap="square">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="font-sans text-xs text-[#F9F9FB] opacity-30 leading-relaxed border-t-2 border-[#2A2A2C] pt-4">
            By submitting this application you confirm the information provided is accurate. We treat all applications with confidentiality and will never share your details with third parties.
          </p>

          {/* Submit */}
          <button
            type="submit"
            disabled={isPending}
            className="w-full font-bold uppercase tracking-widest border-2 border-accent-volt bg-accent-volt text-[#111112] hover:bg-transparent hover:text-accent-volt text-base py-5 rounded-none shadow-[4px_4px_0px_0px_#CCFF00] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#CCFF00] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none flex items-center justify-center gap-3"
          >
            {isPending ? (
              <>
                <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10" strokeOpacity="0.2" />
                  <path d="M12 2a10 10 0 0 1 10 10" />
                </svg>
                Submitting Application…
              </>
            ) : (
              'Submit Application →'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
