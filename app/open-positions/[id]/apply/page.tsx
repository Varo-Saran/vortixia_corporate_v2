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
    <div className="container mx-auto px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 border-b-2 border-stark pb-12">
          <Link href="/open-positions" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-accent-volt transition-colors mb-8">
            &larr; Back to Roles
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm font-bold uppercase tracking-widest bg-dark text-primary px-3 py-1 border-2 border-stark">
              {job.department}
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl uppercase leading-none tracking-tight mb-6">
            Apply for {job.title}
          </h1>
          <p className="font-sans text-xl text-muted border-l-2 border-stark pl-6">
            {job.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start">
          <div className="border-2 border-stark p-6 bg-primary">
            <h3 className="text-xl uppercase tracking-tight mb-4">Role Requirements</h3>
            <p className="font-sans text-muted text-sm">{job.requirements}</p>
          </div>

          <div className="border-2 border-stark p-8 bg-primary">
            <h2 className="text-3xl uppercase tracking-tight mb-8">Application Form</h2>
            <ApplyForm jobId={job.id} jobTitle={job.title} />
          </div>
        </div>
      </div>
    </div>
  );
}
