'use client';

import { useActionState } from 'react';
import { submitContact } from './actions';

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, null);

  if (state?.success) {
    return (
      <div className="border-2 border-stark bg-accent-volt text-dark p-8 shadow-hard-accent flex flex-col justify-center h-full">
        <h3 className="text-4xl uppercase tracking-tight mb-4">Message Received</h3>
        <p className="font-sans text-xl mb-2 border-l-2 border-stark pl-4">Thank you for reaching out to Vortixia.</p>
        <p className="font-sans text-lg">One of our dedicated strategists will review your message and respond within 24 hours to schedule a discovery call.</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-6">
      {state?.error && (
        <div className="border-2 border-red-900 bg-red-100 text-red-900 p-4 font-sans font-bold uppercase tracking-widest">
          {state.error}
        </div>
      )}

      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-bold uppercase tracking-widest text-sm">Full Name</label>
        <input type="text" id="name" name="name" required className="border-2 border-stark bg-primary p-4 font-sans focus:outline-none focus:border-accent-volt focus:ring-0 transition-colors" placeholder="Your Name" />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-bold uppercase tracking-widest text-sm">Email Address</label>
        <input type="email" id="email" name="email" required className="border-2 border-stark bg-primary p-4 font-sans focus:outline-none focus:border-accent-volt focus:ring-0 transition-colors" placeholder="Your Email" />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-bold uppercase tracking-widest text-sm">Message</label>
        <textarea id="message" name="message" required rows={5} className="border-2 border-stark bg-primary p-4 font-sans focus:outline-none focus:border-accent-volt focus:ring-0 transition-colors" placeholder="Tell us about your idea..."></textarea>
      </div>

      <button type="submit" disabled={isPending} className="mt-4 px-8 py-4 bg-stark border-2 border-stark text-primary font-bold uppercase tracking-widest hover:bg-accent-volt hover:text-stark transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto self-start">
        {isPending ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
