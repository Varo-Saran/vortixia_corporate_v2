import { pgTable, text, serial, timestamp, integer } from 'drizzle-orm/pg-core';

export const contacts = pgTable('contacts', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  company: text('company'),
  projectType: text('project_type'),
  timeline: text('timeline'),
  budget: text('budget'),
  message: text('message').notNull(),
  source: text('source'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const jobs = pgTable('jobs', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  department: text('department').notNull(),
  description: text('description').notNull(),
  requirements: text('requirements').notNull(),
  status: text('status').notNull().default('open'),
});

export const applications = pgTable('applications', {
  id: serial('id').primaryKey(),
  jobId: integer('job_id').references(() => jobs.id).notNull(),
  candidateName: text('candidate_name').notNull(),
  candidateEmail: text('candidate_email').notNull(),
  phone: text('phone'),
  resumeUrl: text('resume_url').notNull(),
  portfolioUrl: text('portfolio_url'),
  coverLetter: text('cover_letter').notNull(),
  availability: text('availability'),
  source: text('source'),
  applicationStatus: text('application_status').notNull().default('pending'),
  createdAt: timestamp('created_at').defaultNow(),
});
