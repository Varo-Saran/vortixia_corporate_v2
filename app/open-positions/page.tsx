import Link from 'next/link';
import { db } from '../../lib/db';
import { jobs } from '../../lib/db/schema';
import { eq } from 'drizzle-orm';

export default async function OpenPositionsPage() {
  const allJobs = await db.select().from(jobs).where(eq(jobs.status, 'open'));

  return (
    <div className="flex flex-col bg-[#F9F9FB] dark:bg-[#0B0B0C] transition-colors duration-300 min-h-screen">
      <div className="container mx-auto px-6 pt-40 pb-24">
        <div className="max-w-4xl mb-24">
          <h1 className="font-display text-5xl md:text-7xl uppercase leading-none tracking-tight mb-8 text-[#111112] dark:text-[#F9F9FB]">
            OPEN ARCHITECTURES.
          </h1>
          <p className="text-xl md:text-2xl font-sans text-[#111112] dark:text-[#F9F9FB] opacity-80 max-w-2xl border-l-4 border-accent-volt pl-6">
            Join the engineering matrix. We are actively recruiting for the following deployments.
          </p>
        </div>

        <div className="flex flex-col border-t-2 border-[#111112] dark:border-[#2A2A2C]">
          {allJobs.map((job) => (
            <div key={job.id} className="border-b-2 border-[#111112] dark:border-[#2A2A2C] py-12 hover:bg-[#F9F9FB]/50 dark:hover:bg-[#0B0B0C]/50 hover:pl-4 transition-all duration-200 flex flex-col md:flex-row gap-8 justify-between items-start md:items-center group px-4 md:px-0">
              <div className="flex-grow max-w-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest bg-[#111112] dark:bg-[#2A2A2C] text-[#F9F9FB] px-3 py-1 border-2 border-[#111112] dark:border-[#2A2A2C]">
                    {job.department}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-[#5A5A62] font-bold">
                    Status: {job.status}
                  </span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl uppercase mb-4 text-[#111112] dark:text-[#F9F9FB] group-hover:text-accent-volt transition-colors">{job.title}</h3>
                <p className="font-sans text-[#111112] dark:text-[#F9F9FB] opacity-80 mb-6 text-lg">{job.description}</p>
                <div className="font-sans text-sm text-[#111112] dark:text-[#F9F9FB] opacity-80">
                  <strong>Requirements:</strong> {job.requirements}
                </div>
              </div>
              
              <div className="flex-shrink-0 mt-4 md:mt-0">
                <Link href={`/open-positions/${job.id}/apply`} className="inline-block rounded-none border-2 border-accent-volt text-accent-volt px-4 py-2 text-xs font-bold tracking-widest uppercase hover:bg-accent-volt hover:text-[#111112] transition-colors">
                  Apply
                </Link>
              </div>
            </div>
          ))}
          {allJobs.length === 0 && (
            <div className="py-12 border-b-2 border-[#111112] dark:border-[#2A2A2C] text-center">
              <p className="font-sans text-[#5A5A62] uppercase tracking-widest font-bold">No open positions currently available. Please check back later.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
