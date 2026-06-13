import { db } from '../../../../lib/db';
import { jobs } from '../../../../lib/db/schema';
import { eq } from 'drizzle-orm';
import { notFound } from 'next/navigation';
import ApplyForm from './ApplyForm';
import Link from 'next/link';

export default async function ApplyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const jobId = parseInt(id, 10);

  if (isNaN(jobId)) {
    notFound();
  }

  const jobResults = await db.select().from(jobs).where(eq(jobs.id, jobId));
  const job = jobResults[0];

  if (!job) {
    notFound();
  }

  return (
    <div className="flex flex-col bg-[#F9F9FB] dark:bg-[#0B0B0C] transition-colors duration-300 min-h-screen">
      <div className="container mx-auto px-6 py-32">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <Link href="/open-positions" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#5A5A62] hover:text-accent-volt transition-colors mb-8">
              &larr; Back to Open Architectures
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs font-bold uppercase tracking-widest bg-[#111112] dark:bg-[#2A2A2C] text-[#F9F9FB] px-3 py-1 border-2 border-[#111112] dark:border-[#2A2A2C]">
                {job.department}
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl uppercase leading-none tracking-tight mb-6 text-[#111112] dark:text-[#F9F9FB]">
              Apply for {job.title}
            </h1>
            <p className="font-sans text-xl text-[#111112] dark:text-[#F9F9FB] opacity-80 border-l-4 border-accent-volt pl-6">
              {job.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start mt-16">
            <div className="bg-[#F9F9FB]/75 dark:bg-[#0B0B0C]/75 backdrop-blur-md border-2 border-[#111112] dark:border-[#2A2A2C] p-8">
              <h3 className="font-display text-2xl uppercase tracking-tight mb-6 text-[#111112] dark:text-[#F9F9FB]">Role Requirements</h3>
              <p className="font-sans text-[#111112] dark:text-[#F9F9FB] opacity-80 text-sm leading-relaxed">{job.requirements}</p>
            </div>

            <div className="bg-[#F9F9FB]/75 dark:bg-[#0B0B0C]/75 backdrop-blur-md border-2 border-[#111112] dark:border-[#2A2A2C] p-8 md:p-12">
              <h2 className="font-display text-3xl uppercase tracking-tight mb-8 text-[#111112] dark:text-[#F9F9FB]">Application Terminal</h2>
              <ApplyForm jobId={job.id} jobTitle={job.title} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
