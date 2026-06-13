'use client';

import { useActionState } from 'react';
import { submitApplication } from './actions';
import Link from 'next/link';

export default function ApplyForm({ jobId, jobTitle }: { jobId: number, jobTitle: string }) {
  const [state, formAction, isPending] = useActionState(submitApplication, null);

  if (state?.success) {
    return (
      <div className="border-2 border-accent-volt bg-[#111112] p-8 shadow-[-8px_8px_0px_0px_#CCFF00]">
        <h3 className="font-display text-3xl uppercase tracking-tight mb-4 text-[#F9F9FB]">Transmission Successful</h3>
        <p className="font-sans text-lg mb-8 text-[#F9F9FB] opacity-80">Thank you for applying for the <strong>{jobTitle}</strong> position. Our team will review your payload and respond shortly.</p>
        <Link href="/open-positions" className="inline-block px-8 py-4 bg-accent-volt text-[#111112] font-bold uppercase tracking-widest hover:translate-y-[2px] transition-transform w-full text-center">
          Return to Open Positions
        </Link>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-6">
      <input type="hidden" name="jobId" value={jobId} />
      
      {state?.error && (
        <div className="border-2 border-red-500 bg-red-500/10 text-red-500 p-4 font-sans font-bold uppercase tracking-widest text-sm">
          {state.error}
        </div>
      )}

      <div className="flex flex-col gap-2">
        <label htmlFor="candidateName" className="font-sans font-bold uppercase tracking-widest text-xs text-[#5A5A62]">Full Name</label>
        <input type="text" id="candidateName" name="candidateName" required className="rounded-none border-2 border-[#111112] dark:border-[#2A2A2C] bg-transparent p-4 font-sans text-[#111112] dark:text-[#F9F9FB] focus:outline-none focus:border-accent-volt focus:ring-1 focus:ring-accent-volt transition-colors" placeholder="Jane Doe" />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="candidateEmail" className="font-sans font-bold uppercase tracking-widest text-xs text-[#5A5A62]">Email Address</label>
        <input type="email" id="candidateEmail" name="candidateEmail" required className="rounded-none border-2 border-[#111112] dark:border-[#2A2A2C] bg-transparent p-4 font-sans text-[#111112] dark:text-[#F9F9FB] focus:outline-none focus:border-accent-volt focus:ring-1 focus:ring-accent-volt transition-colors" placeholder="jane@example.com" />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="resumeUrl" className="font-sans font-bold uppercase tracking-widest text-xs text-[#5A5A62]">Resume Link (URL)</label>
        <input type="url" id="resumeUrl" name="resumeUrl" required className="rounded-none border-2 border-[#111112] dark:border-[#2A2A2C] bg-transparent p-4 font-sans text-[#111112] dark:text-[#F9F9FB] focus:outline-none focus:border-accent-volt focus:ring-1 focus:ring-accent-volt transition-colors" placeholder="https://linkedin.com/in/jane-doe" />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="portfolioUrl" className="font-sans font-bold uppercase tracking-widest text-xs text-[#5A5A62]">Portfolio/GitHub Link (Optional)</label>
        <input type="url" id="portfolioUrl" name="portfolioUrl" className="rounded-none border-2 border-[#111112] dark:border-[#2A2A2C] bg-transparent p-4 font-sans text-[#111112] dark:text-[#F9F9FB] focus:outline-none focus:border-accent-volt focus:ring-1 focus:ring-accent-volt transition-colors" placeholder="https://github.com/janedoe" />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="coverLetter" className="font-sans font-bold uppercase tracking-widest text-xs text-[#5A5A62]">Cover Letter</label>
        <textarea id="coverLetter" name="coverLetter" required rows={6} className="rounded-none border-2 border-[#111112] dark:border-[#2A2A2C] bg-transparent p-4 font-sans text-[#111112] dark:text-[#F9F9FB] focus:outline-none focus:border-accent-volt focus:ring-1 focus:ring-accent-volt transition-colors" placeholder="Tell us why you're a great fit..."></textarea>
      </div>

      <button type="submit" disabled={isPending} className="mt-6 w-full rounded-none bg-accent-volt text-[#111112] font-bold tracking-widest uppercase py-4 hover:translate-y-[2px] transition-transform disabled:opacity-50 disabled:cursor-not-allowed">
        {isPending ? 'Transmitting...' : 'Submit Application'}
      </button>
    </form>
  );
}
