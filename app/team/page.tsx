import Image from 'next/image';

export default function TeamPage() {
  const team = [
    {
      name: "VATHSARAN",
      role: "PRINCIPAL ARCHITECT",
      desc: "Driving the core architectural vision. Specializes in scalable, zero-latency enterprise infrastructure and Next.js ecosystems.",
      image: "/images/team/Vathsaran.jpg"
    },
    {
      name: "RAMNA",
      role: "HEAD OF OPERATIONS",
      desc: "Executing aggressive deployment timelines and managing structural workflows to ensure flawless, continuous delivery.",
      image: "/images/team/Ramna.jpg"
    },
    {
      name: "YAKSHARAN",
      role: "TECHNICAL DIRECTOR",
      desc: "Overseeing backend stability and database architecture. Ensuring absolute type safety and robust threat modeling.",
      image: "/images/team/Yaksharan.jpg"
    }
  ];

  return (
    <div className="flex flex-col bg-[#F9F9FB] dark:bg-[#0B0B0C] transition-colors duration-300 min-h-screen">
      <div className="container mx-auto px-6 pt-40 pb-24">
        <div className="max-w-4xl mb-12">
          <span className="font-sans uppercase font-bold tracking-widest text-sm text-accent-volt mb-6 block bg-[#111112] dark:bg-[#2A2A2C] px-4 py-2 inline-block">
            Human-first expertise
          </span>
          <h1 className="font-display text-5xl md:text-7xl uppercase leading-none tracking-tight mb-8 text-[#111112] dark:text-[#F9F9FB]">
            Meet the multidisciplinary team powering Vortixia
          </h1>
          <p className="text-xl md:text-2xl font-sans text-[#111112] dark:text-[#F9F9FB] opacity-80 max-w-2xl border-l-4 border-accent-volt pl-6">
            From strategic leadership to hands-on delivery, our specialists pair deep technical knowledge with design thinking to ship memorable digital experiences.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="bg-[#F9F9FB]/75 dark:bg-[#0B0B0C]/75 backdrop-blur-md border-2 border-[#111112] dark:border-[#2A2A2C] overflow-hidden flex flex-col group hover:-translate-y-2 hover:translate-x-2 hover:shadow-[-8px_8px_0px_0px_#CCFF00] dark:hover:shadow-[-8px_8px_0px_0px_#CCFF00] transition-transform duration-200 cursor-pointer">
              <div className="aspect-square relative border-b-2 border-[#111112] dark:border-[#2A2A2C] bg-[#111112]">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover grayscale contrast-125 transition-all duration-500 hover:grayscale-0"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h2 className="font-display text-3xl md:text-4xl uppercase tracking-tight mb-4 text-[#111112] dark:text-[#F9F9FB] group-hover:text-accent-volt transition-colors">{member.name}</h2>
                <div className="inline-block px-3 py-1 text-sm font-bold uppercase tracking-widest border-2 border-[#111112] dark:border-[#2A2A2C] bg-[#111112] dark:bg-[#2A2A2C] text-accent-volt w-fit mb-6">
                  {member.role}
                </div>
                <p className="font-sans text-[#111112] dark:text-[#F9F9FB] opacity-80 flex-grow text-lg">
                  {member.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
