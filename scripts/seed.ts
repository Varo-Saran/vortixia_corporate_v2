import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from '../lib/db/schema';
import { config } from 'dotenv';

// Load environment variables
config({ path: '.env' });

if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL is not set in .env');
  process.exit(1);
}

const queryClient = postgres(process.env.DATABASE_URL);
const db = drizzle(queryClient, { schema });

async function seed() {
  console.log('Clearing existing jobs from Postgres...');
  // Clear any existing jobs to prevent duplicates and remove obsolete placeholders
  await db.delete(schema.jobs);

  console.log('Seeding premium jobs...');
  
  const jobs = [
    {
      title: 'AI Research & Automation Engineer',
      department: 'Artificial Intelligence',
      description: 'We are seeking an elite AI engineer to design bespoke machine learning architectures and automate complex enterprise workflows. You will build highly scalable neural integrations that bypass traditional computational overhead.',
      requirements: 'Experience with deep learning models, workflow automation pipelines, Python/PyTorch, and type-safe backend integrations.',
      status: 'open'
    },
    {
      title: 'Predictive Analytics Architect',
      department: 'Data & Analytics',
      description: 'Seeking a lead data scientist to translate complex raw data pipelines into predictive intelligence. You will deploy custom data models and forecasting algorithms that turn complexity into actionable clarity.',
      requirements: 'Expertise in predictive modeling, statistical forecasting, deep SQL, Python/pandas/scikit-learn, and data orchestration frameworks.',
      status: 'open'
    },
    {
      title: 'Infrastructure Security Architect',
      department: 'Security & Cloud',
      description: 'Join us to build zero-trust cloud architectures and perimeter defenses. You will fortify our clients\' enterprise environments, optimizing for absolute global uptime and threat mitigation.',
      requirements: 'Proven track record in secure cloud architectures (AWS/GCP), zero-trust networking, threat modeling, and Kubernetes/terraform container security.',
      status: 'open'
    },
    {
      title: 'Principal Frontend Engineer',
      department: 'Engineering',
      description: 'We are looking for a precision-driven frontend engineer to architect high-velocity web and native interfaces. You will leverage Next.js, React, and strict TypeScript to build zero-bloat, template-free digital experiences.',
      requirements: 'Deep proficiency in Next.js App Router, React 19, TypeScript, state management, and custom Tailwind/CSS layout optimization.',
      status: 'open'
    },
    {
      title: 'Lead UI/UX & Brand Designer',
      department: 'Design',
      description: 'Seeking a visionary UI/UX designer to craft stark, intentional digital interfaces and bold visual identities. You will define and maintain the high-contrast Neo-Brutalist design language optimized for user conversion.',
      requirements: 'Extensive portfolio showing premium typography, Figma mastery, user journey modeling, and custom web interface design principles.',
      status: 'open'
    }
  ];

  for (const job of jobs) {
    await db.insert(schema.jobs).values(job);
  }

  console.log('Seeding complete successfully.');
  await queryClient.end();
}

seed().catch(async (err) => {
  console.error('Error during seeding:', err);
  await queryClient.end();
  process.exit(1);
});
