import Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import * as schema from '../lib/db/schema';

const sqlite = new Database('sqlite.db');
const db = drizzle(sqlite, { schema });

async function seed() {
  console.log('Seeding jobs...');
  
  const jobs = [
    {
      title: 'Software Developer',
      department: 'Engineering',
      description: 'We are looking for a skilled Software Developer to join our team.',
      requirements: 'Experience with modern JavaScript frameworks, robust problem-solving skills, and a passion for clean code.',
      status: 'open'
    },
    {
      title: 'Graphic Designer',
      department: 'Design',
      description: 'Seeking a creative Graphic Designer to craft stunning visual experiences.',
      requirements: 'Strong portfolio, proficiency in Figma/Adobe CC, and an eye for typography and layout.',
      status: 'open'
    },
    {
      title: 'Data Analyst',
      department: 'Data & Insights',
      description: 'Looking for a Data Analyst to translate complex data into actionable insights.',
      requirements: 'Strong SQL skills, experience with data visualization tools, and analytical mindset.',
      status: 'open'
    },
    {
      title: 'Cybersecurity Specialist',
      department: 'Security',
      description: 'Join us as a Cybersecurity Specialist to protect our infrastructure.',
      requirements: 'Experience in threat modeling, penetration testing, and security compliance.',
      status: 'open'
    },
    {
      title: 'Project Manager',
      department: 'Delivery',
      description: 'We need an organized Project Manager to lead cross-functional teams.',
      requirements: 'Proven experience delivering digital projects, agile methodologies, and excellent communication.',
      status: 'open'
    }
  ];

  for (const job of jobs) {
    db.insert(schema.jobs).values(job).run();
  }

  console.log('Seeding complete.');
}

seed().catch(console.error);
