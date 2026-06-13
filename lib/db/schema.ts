import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

export const contacts = sqliteTable('contacts', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull(),
  message: text('message').notNull(),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
});

export const jobs = sqliteTable('jobs', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  department: text('department').notNull(),
  description: text('description').notNull(),
  requirements: text('requirements').notNull(),
  status: text('status').notNull().default('open'),
});

export const applications = sqliteTable('applications', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  jobId: integer('job_id').references(() => jobs.id).notNull(),
  candidateName: text('candidate_name').notNull(),
  candidateEmail: text('candidate_email').notNull(),
  resumeUrl: text('resume_url').notNull(),
  portfolioUrl: text('portfolio_url'),
  coverLetter: text('cover_letter').notNull(),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
});
