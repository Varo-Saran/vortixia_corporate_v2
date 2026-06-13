import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="container mx-auto px-6 py-32">
        <div className="max-w-4xl">
          <h1 className="font-display text-6xl md:text-8xl mb-8 uppercase leading-none tracking-tight text-main">
            Digital Excellence Reimagined
          </h1>
          <p className="font-sans text-2xl text-muted mb-12 max-w-3xl leading-relaxed">
            Elevating businesses through innovative digital solutions and strategic transformation.
            Delivering enterprise-grade solutions with cutting-edge technology and proven expertise.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link href="/services" className="neo-btn neo-btn-primary text-lg px-8 py-4 rounded-none">
              Explore Solutions
            </Link>
            <Link href="/projects" className="neo-btn text-lg px-8 py-4 rounded-none bg-primary">
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-dark border-t-2 border-stark py-32">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-5xl md:text-6xl uppercase mb-16 text-[#F9F9FB] tracking-tight">
            Our Services
          </h2>
          <div className="bento-grid">
            <div className="bento-item-large border-2 border-stark p-10 bg-[#111112]">
              <div className="w-12 h-12 bg-accent-volt mb-8 border-2 border-stark flex items-center justify-center">
                <span className="font-bold text-xl text-main">01</span>
              </div>
              <h3 className="font-display text-3xl uppercase mb-6 text-accent-volt">Software & Web Development</h3>
              <p className="font-sans text-xl text-[#F9F9FB] leading-relaxed max-w-2xl">
                We create cutting-edge software and web solutions tailored to your specific business requirements.
              </p>
            </div>
            <div className="bento-item-small neo-card p-10 rounded-none bg-primary border-2 border-stark">
              <div className="w-12 h-12 bg-dark text-[#F9F9FB] mb-8 border-2 border-stark flex items-center justify-center">
                <span className="font-bold text-xl">02</span>
              </div>
              <h3 className="font-display text-2xl uppercase mb-6 text-main">Data Analysis</h3>
              <p className="font-sans text-lg text-muted">
                Transform your raw data into actionable insights that drive informed decision-making.
              </p>
            </div>
            <div className="bento-item-small neo-card p-10 rounded-none bg-primary border-2 border-stark">
              <div className="w-12 h-12 bg-dark text-[#F9F9FB] mb-8 border-2 border-stark flex items-center justify-center">
                <span className="font-bold text-xl">03</span>
              </div>
              <h3 className="font-display text-2xl uppercase mb-6 text-main">Cybersecurity</h3>
              <p className="font-sans text-lg text-muted">
                Protect your digital assets and ensure the integrity of your business operations.
              </p>
            </div>
            <div className="bento-item-large border-2 border-stark p-10 bg-[#111112]">
              <div className="w-12 h-12 bg-accent-volt mb-8 border-2 border-stark flex items-center justify-center">
                <span className="font-bold text-xl text-main">04</span>
              </div>
              <h3 className="font-display text-3xl uppercase mb-6 text-accent-volt">Graphic Design</h3>
              <p className="font-sans text-xl text-[#F9F9FB] leading-relaxed max-w-2xl">
                Elevate your brand with visually stunning designs that captivate your audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-32 border-t-2 border-stark">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-display text-5xl md:text-6xl uppercase tracking-tight text-main mb-6">
                Featured Projects
              </h2>
              <p className="font-sans text-xl text-muted">
                Explore some of our recent work and see how we’ve helped businesses achieve their goals through innovative digital solutions.
              </p>
            </div>
            <Link href="/projects" className="neo-btn rounded-none px-8 py-4 whitespace-nowrap bg-primary text-main">
              All Projects
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { id: 1, title: 'E-Commerce Platform', text: 'We developed a fully customized e-commerce platform for a retail client, featuring seamless payment integration and a user-friendly interface.' },
              { id: 2, title: 'Data Analytics Dashboard', text: 'Created a data analytics dashboard for a financial services company, enabling real-time insights and decision-making.' },
              { id: 3, title: 'Mobile App Development', text: 'Designed and developed a mobile app for a fitness startup, offering workout tracking and personalized recommendations.' }
            ].map(proj => (
              <div key={proj.id} className="neo-card p-0 border-2 border-stark flex flex-col group rounded-none">
                <div className="h-64 border-b-2 border-stark relative overflow-hidden bg-dark">
                  <Image 
                    src={`/images/projects/project${proj.id}.png`} 
                    alt={proj.title} 
                    fill 
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 border-b-8 border-accent-volt transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </div>
                <div className="p-8 flex flex-col flex-grow bg-primary">
                  <h3 className="font-display text-2xl uppercase mb-4 text-main">{proj.title}</h3>
                  <p className="font-sans text-muted mb-8 flex-grow">{proj.text}</p>
                  <Link href="/projects" className="text-sm font-bold uppercase tracking-widest hover:text-accent-volt flex items-center gap-2 text-main">
                    Learn More <span className="text-xl">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
