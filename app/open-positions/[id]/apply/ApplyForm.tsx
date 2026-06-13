'use client';

import { useActionState } from 'react';
import { submitApplication } from './actions';
import Link from 'next/link';

export default function ApplyForm({ jobId, jobTitle }: { jobId: number, jobTitle: string }) {
  const [state, formAction, isPending] = useActionState(submitApplication, null);

  if (state?.success) {
    return (
      <div className="border-2 border-stark bg-accent-volt text-dark p-8 shadow-hard-accent">
        <h3 className="text-3xl uppercase tracking-tight mb-4">Application Submitted</h3>
        <p className="font-sans text-lg mb-8">Thank you for applying for the <strong>{jobTitle}</strong> position. Our team will review your application and get back to you shortly.</p>
        <Link href="/open-positions" className="inline-block px-8 py-4 bg-dark text-primary border-2 border-stark font-bold uppercase tracking-widest hover:bg-stark transition-colors">
          Return to Open Positions
        </Link>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-6">
      <input type="hidden" name="jobId" value={jobId} />
      
      {state?.error && (
        <div className="border-2 border-red-900 bg-red-100 text-red-900 p-4 font-sans font-bold uppercase tracking-widest">
          {state.error}
        </div>
      )}

      <div className="flex flex-col gap-2">
        <label htmlFor="candidateName" className="font-bold uppercase tracking-widest text-sm">Full Name</label>
        <input type="text" id="candidateName" name="candidateName" required className="border-2 border-stark bg-[#F9F9FB] p-4 font-sans focus:outline-none focus:border-accent-volt focus:ring-0" placeholder="Jane Doe" />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="candidateEmail" className="font-bold uppercase tracking-widest text-sm">Email Address</label>
        <input type="email" id="candidateEmail" name="candidateEmail" required className="border-2 border-stark bg-[#F9F9FB] p-4 font-sans focus:outline-none focus:border-accent-volt focus:ring-0" placeholder="jane@example.com" />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="resumeUrl" className="font-bold uppercase tracking-widest text-sm">Resume Link (URL)</label>
        <input type="url" id="resumeUrl" name="resumeUrl" required className="border-2 border-stark bg-[#F9F9FB] p-4 font-sans focus:outline-none focus:border-accent-volt focus:ring-0" placeholder="https://linkedin.com/in/jane-doe or GDrive link" />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="portfolioUrl" className="font-bold uppercase tracking-widest text-sm">Portfolio/GitHub Link (Optional)</label>
        <input type="url" id="portfolioUrl" name="portfolioUrl" className="border-2 border-stark bg-[#F9F9FB] p-4 font-sans focus:outline-none focus:border-accent-volt focus:ring-0" placeholder="https://github.com/janedoe" />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="coverLetter" className="font-bold uppercase tracking-widest text-sm">Cover Letter</label>
        <textarea id="coverLetter" name="coverLetter" required rows={6} className="border-2 border-stark bg-[#F9F9FB] p-4 font-sans focus:outline-none focus:border-accent-volt focus:ring-0" placeholder="Tell us why you're a great fit..."></textarea>
      </div>

      <button type="submit" disabled={isPending} className="mt-4 px-8 py-4 bg-accent-volt border-2 border-stark text-stark font-bold uppercase tracking-widest hover:bg-dark hover:text-accent-volt transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
        {isPending ? 'Submitting...' : 'Submit Application'}
      </button>
    </form>
  );
}
