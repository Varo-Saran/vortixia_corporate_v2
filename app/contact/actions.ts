'use server';

import { db } from '../../lib/db';
import { contacts } from '../../lib/db/schema';

export async function submitContact(prevState: any, formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    return { error: 'Please fill out all required fields.' };
  }

  try {
    await db.insert(contacts).values({
      name,
      email,
      message,
    });

    return { success: true };
  } catch (err) {
    console.error('Failed to submit contact:', err);
    return { error: 'Failed to send message. Please try again or use direct contact methods.' };
  }
}
