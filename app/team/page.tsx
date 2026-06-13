import Image from 'next/image';

export default function TeamPage() {
  const team = [
    {
      name: "Vathsaran Yasotharan",
      role: "CEO & Founder",
      desc: "Vathsaran sets the vision for Vortixia, orchestrating product strategy and nurturing the high-performing teams that bring bold ideas to market.",
      tags: ["Product Strategy", "Enterprise Delivery", "Innovation Ops"],
      image: "/images/team/Vathsaran.jpg"
    },
    {
      name: "Fathi Ramna",
      role: "Data & Insights Lead",
      desc: "Ramna translates complex datasets into confident decisions, guiding clients with predictive analytics and KPI intelligence.",
      tags: ["Data Strategy", "Predictive Models", "Dashboards"],
      image: "/images/team/Ramna.jpg"
    },
    {
      name: "Yaksharan Yasotharan",
      role: "Cybersecurity Architect",
      desc: "Yaksharan fortifies mission-critical infrastructure with proactive threat modeling, governance frameworks, and remediation roadmaps.",
      tags: ["Zero Trust", "Risk Management", "Compliance"],
      image: "/images/team/Yaksharan.jpg"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-24">
      <div className="max-w-4xl mb-24">
        <span className="inline-block px-4 py-2 border-2 border-stark bg-stark text-primary uppercase text-sm tracking-widest font-bold mb-8">
          Human-first expertise
        </span>
        <h1 className="text-5xl md:text-7xl uppercase leading-none tracking-tight mb-8">
          Meet the multidisciplinary team powering Vortixia
        </h1>
        <p className="text-xl md:text-2xl font-sans text-muted max-w-2xl border-l-2 border-stark pl-6">
          From strategic leadership to hands-on delivery, our specialists pair deep technical knowledge with design thinking to ship memorable digital experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member) => (
          <div key={member.name} className="flex flex-col border-2 border-stark bg-primary hover:-translate-y-2 hover:translate-x-2 transition-transform hover:shadow-hard-accent">
            <div className="aspect-square relative border-b-2 border-stark bg-[#111112]">
              <Image 
                src={member.image} 
                alt={member.name} 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h2 className="text-3xl uppercase tracking-tight mb-2">{member.name}</h2>
              <div className="inline-block px-3 py-1 text-sm font-bold uppercase tracking-widest border-2 border-stark bg-accent-volt text-stark w-fit mb-6">
                {member.role}
              </div>
              <p className="font-sans text-muted mb-8 flex-grow">
                {member.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t-2 border-stark">
                {member.tags.map(tag => (
                  <span key={tag} className="text-xs uppercase tracking-wider text-[#5A5A62] border border-stark px-2 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
