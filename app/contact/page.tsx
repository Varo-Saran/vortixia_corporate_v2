import ContactForm from './ContactForm';
import ContactFaq from './ContactFaq';

// ── DATA ──────────────────────────────────────────────────────────────────────

const nextSteps = [
  {
    num: '01',
    title: 'We Review Your Inquiry',
    body: 'Within 24 hours, our senior team reviews your project details, technical requirements, and goals. No AI screening, no junior staff — real experts read every message.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Initial Consultation (30 min)',
    body: "We schedule a free, no-obligation call to discuss your vision, ask clarifying questions, and assess technical feasibility. You talk directly to the engineers who will build it.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
        <rect x="3" y="4" width="18" height="18" rx="0" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Technical Proposal',
    body: 'Within 48 hours of our call, you receive a detailed proposal including scope, timeline, tech stack, and transparent pricing. No vague estimates, no hidden fees.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Decision & Kickoff',
    body: "You decide if we're the right fit. If yes, we start building within 1 week. If not — no hard feelings — we'll point you in the right direction.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
        <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
      </svg>
    ),
  },
];

// ── PAGE ──────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <div className="flex flex-col bg-[#F9F9FB] dark:bg-[#0B0B0C] transition-colors duration-300">

      {/* ── SECTION 1: HERO ── */}
      <section className="container mx-auto px-6 md:px-12 pt-28 sm:pt-36 md:pt-40 pb-14 sm:pb-20 border-b-2 border-[#111112] dark:border-[#2A2A2C]">
        <div className="max-w-4xl">
          <span className="font-sans uppercase font-bold tracking-widest text-sm text-accent-volt mb-6 sm:mb-8 block bg-[#111112] dark:bg-[#2A2A2C] px-4 py-2 inline-block">
            Contact Vortixia
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl uppercase leading-none tracking-tight mb-6 sm:mb-8 text-[#111112] dark:text-[#F9F9FB]">
            Let&rsquo;s Build Something{' '}
            <span className="text-accent-volt">Exceptional Together.</span>
          </h1>
          <p className="font-sans text-base sm:text-xl text-[#111112] dark:text-[#F9F9FB] opacity-80 max-w-2xl border-l-4 border-accent-volt pl-4 sm:pl-6 leading-relaxed">
            Share your vision and we&rsquo;ll respond within one business day with clear next steps. Our specialists tailor every conversation to your specific goals, technical challenges, and timeline. No generic responses. No sales pressure. Just honest technical guidance.
          </p>
        </div>
      </section>

      {/* ── SECTION 2: SIDEBAR + FORM ── */}
      <section id="contact-form" className="container mx-auto px-6 md:px-12 py-12 sm:py-20 border-b-2 border-[#111112] dark:border-[#2A2A2C]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start">

          {/* ── LEFT: Contact Info Sidebar ── */}
          <aside className="flex flex-col gap-4 lg:sticky lg:top-28">

            {/* Direct contact card */}
            <div className="border-2 border-[#111112] dark:border-[#2A2A2C] bg-white dark:bg-[#111112]/90">
              <div className="p-6 md:p-8 border-b-2 border-[#111112] dark:border-[#2A2A2C]">
                <h2 className="font-display text-2xl uppercase tracking-tight text-[#111112] dark:text-[#F9F9FB] mb-2">
                  Prefer a Direct Introduction?
                </h2>
                <p className="font-sans text-sm text-[#111112] dark:text-[#F9F9FB] opacity-60 leading-relaxed">
                  Choose the channel that works best for you. We&rsquo;ll connect you directly with the right expert — no account managers, no runaround.
                </p>
              </div>

              <div className="p-6 md:p-8">
                <ul className="flex flex-col gap-6">
                  {/* Email */}
                  <li className="flex flex-col border-l-2 border-transparent hover:border-accent-volt pl-3 transition-colors group">
                    <span className="font-sans font-bold uppercase tracking-widest text-xs text-[#5A5A62] mb-1">Email Us At</span>
                    <a
                      href="mailto:hello@vortixia.com"
                      className="font-display text-lg text-[#111112] dark:text-[#F9F9FB] group-hover:text-accent-volt transition-colors font-bold"
                    >
                      hello@vortixia.com
                    </a>
                  </li>

                  {/* Phone */}
                  <li className="flex flex-col border-l-2 border-transparent hover:border-accent-volt pl-3 transition-colors group">
                    <span className="font-sans font-bold uppercase tracking-widest text-xs text-[#5A5A62] mb-1">Call or WhatsApp</span>
                    <a
                      href="tel:+94777275526"
                      className="font-display text-lg text-[#111112] dark:text-[#F9F9FB] group-hover:text-accent-volt transition-colors font-bold"
                    >
                      +94 77 275 526
                    </a>
                  </li>

                  {/* Studio */}
                  <li className="flex flex-col border-l-2 border-transparent hover:border-accent-volt pl-3 transition-colors group">
                    <span className="font-sans font-bold uppercase tracking-widest text-xs text-[#5A5A62] mb-1">Visit Our Studio</span>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Kalubowila,Colombo,Sri+Lanka"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-lg text-[#111112] dark:text-[#F9F9FB] group-hover:text-accent-volt transition-colors font-bold"
                    >
                      Kalubowila, Colombo
                    </a>
                    <span className="font-sans text-xs text-[#5A5A62] mt-1">By appointment only</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Response time */}
            <div className="border-2 border-[#111112] dark:border-[#2A2A2C] p-6 bg-white dark:bg-[#111112]/90 flex items-center gap-4 shadow-[4px_4px_0px_0px_#111112] dark:shadow-[4px_4px_0px_0px_#2A2A2C] hover:-translate-y-1 hover:translate-x-1 transition-transform">
              <span className="text-accent-volt text-2xl flex-shrink-0">⚡</span>
              <div>
                <span className="font-sans font-bold uppercase tracking-widest text-xs text-[#5A5A62] block mb-1">Response Commitment</span>
                <strong className="font-display text-xl uppercase text-[#111112] dark:text-[#F9F9FB]">Under 24 Hours</strong>
              </div>
            </div>

            {/* Why work with us */}
            <div className="border-2 border-accent-volt p-6 bg-white dark:bg-[#111112]/90">
              <h3 className="font-display text-lg uppercase text-[#111112] dark:text-[#F9F9FB] mb-5">Why Work With Us</h3>
              <ul className="flex flex-col gap-4">
                {[
                  'Direct senior-level expertise',
                  'No junior staff handoffs',
                  'Transparent pricing from day one',
                  'NDA available before first call',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-accent-volt font-bold flex-shrink-0">→</span>
                    <span className="font-sans text-sm text-[#111112] dark:text-[#F9F9FB] opacity-70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Book a call card */}
            <div className="border-2 border-[#111112] dark:border-[#2A2A2C] p-6 bg-[#111112] dark:bg-[#000000]">
              <p className="font-sans text-xs font-bold uppercase tracking-widest text-[#F9F9FB] opacity-40 mb-3">Skip the form</p>
              <h3 className="font-display text-xl uppercase text-[#F9F9FB] mb-3">Prefer to Book Directly?</h3>
              <p className="font-sans text-sm text-[#F9F9FB] opacity-60 leading-relaxed mb-5">
                Skip the back-and-forth. Email us with &ldquo;BOOK A CALL&rdquo; in the subject and we&rsquo;ll send you a calendar link within 4 hours.
              </p>
              <a
                href="mailto:hello@vortixia.com?subject=BOOK A CALL — [Your Name]"
                className="font-bold uppercase tracking-widest border-2 border-accent-volt bg-accent-volt text-[#111112] hover:bg-transparent hover:text-accent-volt text-xs px-5 py-3 rounded-none transition-all inline-block"
              >
                Book a Free 15-Min Call →
              </a>
            </div>
          </aside>

          {/* ── RIGHT: Form ── */}
          <div className="border-2 border-[#111112] dark:border-[#2A2A2C] bg-white dark:bg-[#111112]/90">
            <div className="p-6 md:p-10 border-b-2 border-[#111112] dark:border-[#2A2A2C]">
              <span className="font-sans font-bold uppercase tracking-widest text-xs text-[#5A5A62] mb-2 block">Get in Touch</span>
              <h2 className="font-display text-3xl md:text-4xl uppercase tracking-tight mb-4 text-[#111112] dark:text-[#F9F9FB]">
                Initialize Discovery
              </h2>
              <p className="font-sans text-base text-[#111112] dark:text-[#F9F9FB] opacity-70 border-l-4 border-accent-volt pl-4 py-1 leading-relaxed">
                Connect directly with our core engineering team. Whether you&rsquo;re pitching a complex enterprise challenge or exploring a custom AI integration, share your parameters and we&rsquo;ll formulate a technical approach within 24 hours.
              </p>
            </div>
            <div className="p-6 md:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: WHAT HAPPENS NEXT ── */}
      <section className="bg-[#111112] dark:bg-[#000000] py-32 border-b-2 border-[#F9F9FB] dark:border-[#2A2A2C] transition-colors duration-300">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mb-16">
            <span className="font-sans uppercase font-bold tracking-widest text-sm text-[#111112] mb-6 block bg-accent-volt px-4 py-2 inline-block">
              Next Steps
            </span>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-[#F9F9FB]">
              What Happens After You Reach Out?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {nextSteps.map((step, i) => (
              <div
                key={step.num}
                className={`p-6 sm:p-8 border-2 border-[#F9F9FB]/10 group hover:border-accent-volt transition-colors ${i > 0 ? 'sm:first:border-t-0 lg:-ml-[2px]' : ''} ${i >= 2 ? 'sm:-mt-[2px] lg:mt-0' : ''}`}
              >
                <div className="text-[#F9F9FB] opacity-30 group-hover:text-accent-volt group-hover:opacity-100 transition-all mb-5">
                  {step.icon}
                </div>
                <span className="font-display text-4xl sm:text-5xl font-bold text-accent-volt mb-3 block leading-none">{step.num}</span>
                <h3 className="font-display text-base sm:text-lg uppercase text-[#F9F9FB] mb-3 group-hover:text-accent-volt transition-colors">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-[#F9F9FB] opacity-60 leading-relaxed group-hover:opacity-80 transition-opacity">
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          <div className="border-2 border-[#F9F9FB]/10 -mt-[2px] px-8 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <p className="font-sans text-sm text-[#F9F9FB] opacity-50">
              Typical timeline from first contact to kickoff:
            </p>
            <span className="font-display text-2xl text-accent-volt font-bold">7–10 days</span>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: FAQ ── */}
      <section className="py-20 sm:py-32 border-b-2 border-[#111112] dark:border-[#2A2A2C] bg-[#F9F9FB] dark:bg-[#0B0B0C] transition-colors duration-300">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mb-10 sm:mb-16">
            <span className="font-sans uppercase font-bold tracking-widest text-sm text-accent-volt mb-6 block bg-[#111112] dark:bg-[#2A2A2C] px-4 py-2 inline-block">
              FAQ
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl uppercase tracking-tight text-[#111112] dark:text-[#F9F9FB]">
              Common Questions Before You Reach Out.
            </h2>
          </div>
          <div className="max-w-4xl">
            <ContactFaq />
          </div>
        </div>
      </section>

      {/* ── SECTION 5: FINAL CTA ── */}
      <section className="py-20 sm:py-32 bg-accent-volt border-t-2 border-[#111112]">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight text-[#111112] mb-6 sm:mb-8">
            Ready to Begin?
          </h2>
          <p className="font-sans text-base sm:text-xl text-[#111112] opacity-70 mb-8 sm:mb-12 max-w-2xl leading-relaxed">
            Stop navigating bloated agencies and overcrowded freelance platforms. Bring your challenge directly to our senior engineering collective.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a
              href="#contact-form"
              className="font-bold uppercase tracking-widest border-2 border-[#111112] bg-[#111112] text-[#F9F9FB] hover:bg-[#F9F9FB] hover:text-[#111112] text-sm sm:text-base md:text-lg px-8 sm:px-10 py-4 sm:py-5 rounded-none shadow-[4px_4px_0px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#000000] transition-all text-center"
            >
              Send a Message ↑
            </a>
            <a
              href="mailto:hello@vortixia.com"
              className="font-bold uppercase tracking-widest border-2 border-[#111112] bg-transparent text-[#111112] hover:bg-[#111112] hover:text-accent-volt text-sm sm:text-base md:text-lg px-8 sm:px-10 py-4 sm:py-5 rounded-none shadow-[4px_4px_0px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#000000] transition-all text-center"
            >
              Email Us Directly →
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
