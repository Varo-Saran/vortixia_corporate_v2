'use server';

import { db } from '../../../../lib/db';
import { applications } from '../../../../lib/db/schema';

export async function submitApplication(prevState: unknown, formData: FormData) {
  const jobId         = parseInt(formData.get('jobId') as string, 10);
  const candidateName = (formData.get('candidateName') as string)?.trim();
  const candidateEmail= (formData.get('candidateEmail') as string)?.trim();
  const phone         = (formData.get('phone') as string)?.trim() || null;
  const resumeUrl     = (formData.get('resumeUrl') as string)?.trim();
  const portfolioUrl  = (formData.get('portfolioUrl') as string)?.trim() || null;
  const coverLetter   = (formData.get('coverLetter') as string)?.trim();
  const availability  = (formData.get('availability') as string)?.trim() || null;
  const source        = (formData.get('source') as string)?.trim() || null;

  // ── Validation ────────────────────────────────────────────────────────────
  if (!jobId || isNaN(jobId))          return { error: 'Invalid job reference. Please return to the careers page and try again.' };
  if (!candidateName || candidateName.length < 2) return { error: 'Please enter your full name (minimum 2 characters).' };
  if (!candidateEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(candidateEmail)) return { error: 'Please enter a valid email address.' };
  if (!resumeUrl)                       return { error: 'A resume link is required. Please provide a LinkedIn, Google Drive, or Dropbox URL.' };
  if (!coverLetter || coverLetter.length < 100) return { error: 'Your cover letter must be at least 100 characters. We want to hear your authentic voice.' };
  if (coverLetter.length > 2000)        return { error: 'Cover letter must be under 2000 characters.' };
  if (!availability)                    return { error: 'Please select your availability.' };

  try {
    await db.insert(applications).values({
      jobId,
      candidateName,
      candidateEmail,
      phone,
      resumeUrl,
      portfolioUrl,
      coverLetter,
      availability,
      source,
      applicationStatus: 'pending',
    });

    return { success: true, name: candidateName };
  } catch (err) {
    console.error('Application submission failed:', err);
    return { error: 'Something went wrong on our end. Please try again or email us directly at hello@vortixia.com.' };
  }
}
