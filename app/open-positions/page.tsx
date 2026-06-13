import Link from 'next/link';
import { db } from '../../lib/db';
import { jobs } from '../../lib/db/schema';
import { eq } from 'drizzle-orm';

export default async function OpenPositionsPage() {
  const allJobs = await db.select().from(jobs).where(eq(jobs.status, 'open'));

  return (
    <div className="container mx-auto px-6 py-24">
      <div className="max-w-4xl mb-24">
        <span className="inline-block px-4 py-2 border-2 border-stark bg-stark text-primary uppercase text-sm tracking-widest font-bold mb-8">
          Careers at Vortixia
        </span>
        <h1 className="text-5xl md:text-7xl uppercase leading-none tracking-tight mb-8">
          Join a Team Building the Future of Digital Experiences
        </h1>
        <p className="text-xl md:text-2xl font-sans text-muted max-w-2xl border-l-2 border-stark pl-6">
          We bring strategists, designers, engineers, and storytellers together to solve the toughest digital challenges. If you thrive on collaboration and want your work to shape what's next, there's a place for you at Vortixia.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl uppercase mb-4">Open roles crafted for builders, thinkers, and leaders</h2>
        <p className="font-sans text-muted max-w-xl">Explore current opportunities by discipline. Find the role that matches your expertise and aspirations.</p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {allJobs.map((job) => (
          <article key={job.id} className="border-2 border-stark bg-primary p-8 hover:-translate-y-2 hover:translate-x-2 transition-transform hover:shadow-hard-accent flex flex-col md:flex-row gap-8 justify-between items-start md:items-center">
            <div className="flex-grow max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm font-bold uppercase tracking-widest bg-dark text-primary px-3 py-1 border-2 border-stark">
                  {job.department}
                </span>
                <span className="text-xs uppercase tracking-wider text-[#5A5A62]">
                  Status: {job.status}
                </span>
              </div>
              <h3 className="text-4xl uppercase mb-4">{job.title}</h3>
              <p className="font-sans text-muted mb-4">{job.description}</p>
              <div className="font-sans text-sm text-stark bg-[#F9F9FB] p-4 border border-stark">
                <strong>Requirements:</strong> {job.requirements}
              </div>
            </div>
            
            <div className="flex-shrink-0">
              <Link href={`/open-positions/${job.id}/apply`} className="inline-block px-8 py-4 bg-accent-volt border-2 border-stark text-stark font-bold uppercase tracking-widest hover:bg-dark hover:text-accent-volt transition-colors">
                Apply Now
              </Link>
            </div>
          </article>
        ))}
        {allJobs.length === 0 && (
          <div className="p-8 border-2 border-stark border-dashed text-center">
            <p className="font-sans text-muted uppercase tracking-widest">No open positions currently available. Please check back later.</p>
          </div>
        )}
      </div>
    </div>
  );
}
