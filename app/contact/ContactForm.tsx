'use client';

import { useActionState } from 'react';
import { submitContact } from './actions';

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, null);

  if (state?.success) {
    return (
      <div className="border-2 border-accent-volt bg-[#111112] p-8 shadow-[-8px_8px_0px_0px_#CCFF00] flex flex-col justify-center h-full">
        <h3 className="font-display text-4xl uppercase tracking-tight mb-4 text-[#F9F9FB]">Message Received</h3>
        <p className="font-sans text-xl mb-2 border-l-2 border-[#F9F9FB] pl-4 text-[#F9F9FB]">Thank you for reaching out to Vortixia.</p>
        <p className="font-sans text-lg text-[#F9F9FB] opacity-80">One of our dedicated strategists will review your message and respond within 24 hours to schedule a discovery call.</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-6">
      {state?.error && (
        <div className="border-2 border-red-500 bg-red-500/10 text-red-500 p-4 font-sans font-bold uppercase tracking-widest text-sm">
          {state.error}
        </div>
      )}

      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-sans font-bold uppercase tracking-widest text-xs text-[#5A5A62]">Full Name</label>
        <input type="text" id="name" name="name" required className="rounded-none border-2 border-[#111112] dark:border-[#2A2A2C] bg-transparent p-4 font-sans text-[#111112] dark:text-[#F9F9FB] focus:outline-none focus:border-accent-volt focus:ring-1 focus:ring-accent-volt transition-colors" placeholder="Your Name" />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-sans font-bold uppercase tracking-widest text-xs text-[#5A5A62]">Email Address</label>
        <input type="email" id="email" name="email" required className="rounded-none border-2 border-[#111112] dark:border-[#2A2A2C] bg-transparent p-4 font-sans text-[#111112] dark:text-[#F9F9FB] focus:outline-none focus:border-accent-volt focus:ring-1 focus:ring-accent-volt transition-colors" placeholder="Your Email" />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-sans font-bold uppercase tracking-widest text-xs text-[#5A5A62]">Message</label>
        <textarea id="message" name="message" required rows={5} className="rounded-none border-2 border-[#111112] dark:border-[#2A2A2C] bg-transparent p-4 font-sans text-[#111112] dark:text-[#F9F9FB] focus:outline-none focus:border-accent-volt focus:ring-1 focus:ring-accent-volt transition-colors" placeholder="Tell us about your idea..."></textarea>
      </div>

      <button type="submit" disabled={isPending} className="mt-4 w-full bg-accent-volt text-[#111112] font-bold tracking-widest uppercase py-4 hover:translate-y-[2px] transition-transform shadow-[4px_4px_0px_0px_#111112] dark:shadow-[4px_4px_0px_0px_#2A2A2C] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none disabled:opacity-50 disabled:cursor-not-allowed">
        {isPending ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
