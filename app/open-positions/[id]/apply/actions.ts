'use server';

import { db } from '../../../../lib/db';
import { applications } from '../../../../lib/db/schema';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function submitApplication(prevState: any, formData: FormData) {
  const jobId = parseInt(formData.get('jobId') as string, 10);
  const candidateName = formData.get('candidateName') as string;
  const candidateEmail = formData.get('candidateEmail') as string;
  const resumeUrl = formData.get('resumeUrl') as string;
  const portfolioUrl = formData.get('portfolioUrl') as string;
  const coverLetter = formData.get('coverLetter') as string;

  if (!jobId || !candidateName || !candidateEmail || !resumeUrl || !coverLetter) {
    return { error: 'Please fill out all required fields.' };
  }

  try {
    db.insert(applications).values({
      jobId,
      candidateName,
      candidateEmail,
      resumeUrl,
      portfolioUrl,
      coverLetter,
    }).run();

    return { success: true };
  } catch (err) {
    console.error('Failed to submit application:', err);
    return { error: 'Failed to submit application. Please try again.' };
  }
}
