'use server';

import { db } from '../../lib/db';
import { contacts } from '../../lib/db/schema';

export async function submitContact(prevState: unknown, formData: FormData) {
  const name        = (formData.get('name') as string)?.trim();
  const email       = (formData.get('email') as string)?.trim();
  const company     = (formData.get('company') as string)?.trim() || null;
  const projectType = (formData.get('projectType') as string)?.trim() || null;
  const timeline    = (formData.get('timeline') as string)?.trim() || null;
  const budget      = (formData.get('budget') as string)?.trim() || null;
  const message     = (formData.get('message') as string)?.trim();
  const source      = (formData.get('source') as string)?.trim() || null;

  // ── Validation ────────────────────────────────────────────────────────────
  if (!name || name.length < 2)
    return { error: 'Please enter your full name (minimum 2 characters).' };
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return { error: 'Please enter a valid email address.' };
  if (!projectType)
    return { error: 'Please select a project type so we can route your inquiry correctly.' };
  if (!message || message.length < 20)
    return { error: 'Please describe your project in at least 20 characters — the more detail, the better we can help.' };

  try {
    await db.insert(contacts).values({
      name,
      email,
      company,
      projectType,
      timeline,
      budget,
      message,
      source,
    });

    return { success: true, name };
  } catch (err) {
    console.error('Contact submission failed:', err);
    return { error: 'Something went wrong on our end. Please try again or reach us directly at hello@vortixia.com.' };
  }
}
