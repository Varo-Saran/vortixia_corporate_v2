'use client';

import { useActionState } from 'react';
import { submitContact } from './actions';
import Link from 'next/link';

// ── SHARED STYLES ─────────────────────────────────────────────────────────────

const inputCls =
  'w-full rounded-none border-2 border-[#111112] dark:border-[#2A2A2C] bg-transparent p-4 ' +
  'font-sans text-[#111112] dark:text-[#F9F9FB] placeholder:text-[#5A5A62] ' +
  'focus:outline-none focus:border-accent-volt focus:ring-1 focus:ring-accent-volt transition-colors text-base';

const selectCls =
  'w-full rounded-none border-2 border-[#111112] dark:border-[#2A2A2C] bg-[#F9F9FB] dark:bg-[#0B0B0C] p-4 ' +
  'font-sans text-[#111112] dark:text-[#F9F9FB] focus:outline-none focus:border-accent-volt ' +
  'focus:ring-1 focus:ring-accent-volt transition-colors text-base appearance-none cursor-pointer';

const labelCls =
  'font-sans font-bold uppercase tracking-widest text-xs text-[#5A5A62] mb-2 block';

function SelectWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {children}
      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#CCFF00" strokeWidth="2.5" strokeLinecap="square">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </div>
  );
}

// ── COMPONENT ─────────────────────────────────────────────────────────────────

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, null);

  // ── Success state ──────────────────────────────────────────────────────────
  if (state?.success) {
    return (
      <div className="border-2 border-accent-volt bg-[#111112] dark:bg-[#000000] shadow-[-8px_8px_0px_0px_#CCFF00]">
        <div className="p-8 md:p-12">
          <div className="w-16 h-16 border-2 border-accent-volt flex items-center justify-center mb-8">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#CCFF00" strokeWidth="2.5" strokeLinecap="square">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <h3 className="font-display text-3xl md:text-4xl uppercase tracking-tight text-[#F9F9FB] mb-3">
            Message Received.
          </h3>
          <p className="font-sans text-lg text-[#F9F9FB] opacity-70 leading-relaxed mb-2">
            Thanks, <strong className="text-[#F9F9FB] opacity-100">{state.name}</strong>. We&rsquo;ve received your inquiry and our team is reviewing it now.
          </p>
          <p className="font-sans text-base text-[#F9F9FB] opacity-50 leading-relaxed mb-10">
            Expect a personalized response within <strong className="text-accent-volt opacity-100">24 hours</strong> — not a bot reply, a real senior engineer.
          </p>

          {/* What happens next strip */}
          <div className="border-t-2 border-[#F9F9FB]/10 pt-8 mb-10">
            <p className="font-sans text-xs font-bold uppercase tracking-widest text-[#F9F9FB] opacity-30 mb-5">What happens next</p>
            <div className="flex flex-col gap-4">
              {[
                { num: '01', text: 'Senior team review within 24 hours' },
                { num: '02', text: 'Free 30-min consultation to discuss your vision' },
                { num: '03', text: 'Detailed proposal within 48 hours of our call' },
              ].map((s) => (
                <div key={s.num} className="flex items-center gap-4">
                  <span className="font-display text-base text-accent-volt font-bold flex-shrink-0 w-8">{s.num}</span>
                  <span className="font-sans text-sm text-[#F9F9FB] opacity-60">{s.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/process"
              className="font-bold uppercase tracking-widest border-2 border-accent-volt bg-accent-volt text-[#111112] hover:bg-transparent hover:text-accent-volt text-sm px-8 py-4 rounded-none shadow-[4px_4px_0px_0px_#CCFF00] transition-all text-center"
            >
              See How We Work →
            </Link>
            <Link
              href="/projects"
              className="font-bold uppercase tracking-widest border-2 border-[#F9F9FB]/20 bg-transparent text-[#F9F9FB] hover:border-[#F9F9FB] text-sm px-8 py-4 rounded-none transition-all text-center opacity-60 hover:opacity-100"
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
    <form action={formAction} className="flex flex-col gap-6">

      {/* Error */}
      {state?.error && (
        <div className="border-2 border-red-500 bg-red-500/10 text-red-400 p-4 font-sans text-sm flex items-start gap-3">
          <span className="font-bold flex-shrink-0">✗</span>
          {state.error}
        </div>
      )}

      {/* Row 1: Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label htmlFor="name" className={labelCls}>
            Full Name <span className="text-accent-volt">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            minLength={2}
            className={inputCls}
            placeholder="Your full name"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className={labelCls}>
            Email Address <span className="text-accent-volt">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={inputCls}
            placeholder="your.email@company.com"
          />
        </div>
      </div>

      {/* Row 2: Company */}
      <div className="flex flex-col">
        <label htmlFor="company" className={labelCls}>
          Company / Organization <span className="text-[#5A5A62]">(optional)</span>
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className={inputCls}
          placeholder="Your company name (or 'Individual Project')"
        />
      </div>

      {/* Row 3: Project Type (required) */}
      <div className="flex flex-col">
        <label htmlFor="projectType" className={labelCls}>
          Project Type <span className="text-accent-volt">*</span>
        </label>
        <SelectWrapper>
          <select id="projectType" name="projectType" required className={selectCls} defaultValue="">
            <option value="" disabled>Select your project type</option>
            <option value="AI & Machine Learning Solutions">AI &amp; Machine Learning Solutions</option>
            <option value="Data Analytics & Predictions">Data Analytics &amp; Predictions</option>
            <option value="Cybersecurity & Infrastructure">Cybersecurity &amp; Infrastructure</option>
            <option value="Web & App Development">Web &amp; App Development</option>
            <option value="UI/UX & Brand Design">UI/UX &amp; Brand Design</option>
            <option value="Multiple Services">Multiple Services</option>
            <option value="Not Sure Yet / Consultation">Not Sure Yet / Consultation</option>
          </select>
        </SelectWrapper>
      </div>

      {/* Row 4: Timeline + Budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label htmlFor="timeline" className={labelCls}>
            Project Timeline <span className="text-[#5A5A62]">(optional)</span>
          </label>
          <SelectWrapper>
            <select id="timeline" name="timeline" className={selectCls} defaultValue="">
              <option value="">Select a timeline</option>
              <option value="ASAP (Within 2 weeks)">ASAP (Within 2 weeks)</option>
              <option value="1–3 months">1–3 months</option>
              <option value="3–6 months">3–6 months</option>
              <option value="Just exploring / No rush">Just exploring / No rush</option>
            </select>
          </SelectWrapper>
        </div>

        <div className="flex flex-col">
          <label htmlFor="budget" className={labelCls}>
            Budget Range <span className="text-[#5A5A62]">(optional)</span>
          </label>
          <SelectWrapper>
            <select id="budget" name="budget" className={selectCls} defaultValue="">
              <option value="">Select a range</option>
              <option value="Under $5,000">Under $5,000</option>
              <option value="$5,000 – $15,000">$5,000 – $15,000</option>
              <option value="$15,000 – $50,000">$15,000 – $50,000</option>
              <option value="$50,000+">$50,000+</option>
              <option value="Prefer to discuss privately">Prefer to discuss privately</option>
            </select>
          </SelectWrapper>
        </div>
      </div>

      {/* Row 5: Message */}
      <div className="flex flex-col">
        <label htmlFor="message" className={labelCls}>
          Tell Us About Your Project <span className="text-accent-volt">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={20}
          rows={6}
          className={`${inputCls} resize-none`}
          placeholder="Describe your vision, technical challenges, and desired outcomes. The more detail you provide, the better we can assist you."
        />
      </div>

      {/* Row 6: Source */}
      <div className="flex flex-col">
        <label htmlFor="source" className={labelCls}>
          How did you hear about us? <span className="text-[#5A5A62]">(optional)</span>
        </label>
        <SelectWrapper>
          <select id="source" name="source" className={selectCls} defaultValue="">
            <option value="">Select one</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Referral">Referral</option>
            <option value="Google Search">Google Search</option>
            <option value="Twitter / X">Twitter / X</option>
            <option value="GitHub">GitHub</option>
            <option value="Other">Other</option>
          </select>
        </SelectWrapper>
      </div>

      {/* Confidentiality note */}
      <p className="font-sans text-xs text-[#5A5A62] leading-relaxed border-t-2 border-[#111112] dark:border-[#2A2A2C] pt-4">
        🔒 Your information is kept strictly confidential. We never share your details with third parties. NDA available upon request.
      </p>

      {/* Submit */}
      <button
        type="submit"
        disabled={isPending}
        className="w-full font-bold uppercase tracking-widest border-2 border-accent-volt bg-accent-volt text-[#111112] hover:bg-transparent hover:text-accent-volt dark:hover:text-accent-volt text-base py-5 rounded-none shadow-[4px_4px_0px_0px_#111112] dark:shadow-[4px_4px_0px_0px_#2A2A2C] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none flex items-center justify-center gap-3"
      >
        {isPending ? (
          <>
            <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="12" r="10" strokeOpacity="0.2" />
              <path d="M12 2a10 10 0 0 1 10 10" />
            </svg>
            Sending Message…
          </>
        ) : (
          'Send Message →'
        )}
      </button>
    </form>
  );
}
