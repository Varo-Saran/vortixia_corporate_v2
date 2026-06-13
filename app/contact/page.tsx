import ContactForm from './ContactForm';

export default function ContactPage() {
  return (
    <div className="flex flex-col bg-[#F9F9FB] dark:bg-[#0B0B0C] transition-colors duration-300 min-h-screen">
      <div className="container mx-auto px-6 py-32">
        {/* Hero Section */}
        <div className="max-w-4xl mb-24">
          <span className="font-sans uppercase font-bold tracking-widest text-sm text-accent-volt mb-6 block bg-[#111112] dark:bg-[#2A2A2C] px-4 py-2 inline-block">
            Contact Vortixia
          </span>
          <h1 className="font-display text-5xl md:text-7xl uppercase leading-none tracking-tight mb-8 text-[#111112] dark:text-[#F9F9FB]">
            Let's build something exceptional together
          </h1>
          <p className="font-sans text-xl md:text-2xl text-[#111112] dark:text-[#F9F9FB] opacity-80 max-w-2xl border-l-4 border-accent-volt pl-6 mb-12">
            Share your vision and we'll respond within one business day with the next steps to bring it to life. Our specialists tailor every conversation to your goals, challenges, and timeline.
          </p>
        </div>

        {/* Main Terminal Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start">
          {/* Aside */}
          <aside className="bg-[#F9F9FB]/75 dark:bg-[#0B0B0C]/75 backdrop-blur-md border-2 border-[#111112] dark:border-[#2A2A2C] p-8 h-full flex flex-col gap-12">
            <div>
              <h2 className="font-display text-2xl uppercase tracking-tight mb-6 text-[#111112] dark:text-[#F9F9FB]">Prefer a direct introduction?</h2>
              <p className="font-sans text-[#111112] dark:text-[#F9F9FB] opacity-80 mb-8">Choose the channel that works best for you and we'll connect you with the right expert.</p>
              <ul className="flex flex-col gap-6 font-sans">
                <li className="flex flex-col border-l-2 border-transparent hover:border-accent-volt pl-2 transition-colors">
                  <span className="font-bold uppercase tracking-widest text-sm text-[#5A5A62] mb-1">Email us at</span>
                  <a href="mailto:varosaran@gmail.com" className="text-lg hover:text-accent-volt transition-colors font-bold text-[#111112] dark:text-[#F9F9FB]">varosaran@gmail.com</a>
                </li>
                <li className="flex flex-col border-l-2 border-transparent hover:border-accent-volt pl-2 transition-colors">
                  <span className="font-bold uppercase tracking-widest text-sm text-[#5A5A62] mb-1">Call our consultants</span>
                  <a href="tel:+94777275526" className="text-lg hover:text-accent-volt transition-colors font-bold text-[#111112] dark:text-[#F9F9FB]">+94 777 275 526</a>
                </li>
                <li className="flex flex-col border-l-2 border-transparent hover:border-accent-volt pl-2 transition-colors">
                  <span className="font-bold uppercase tracking-widest text-sm text-[#5A5A62] mb-1">Visit our studio</span>
                  <a href="https://www.google.com/maps/search/?api=1&query=Kalubowila,Colombo,Sri+Lanka" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-accent-volt transition-colors font-bold text-[#111112] dark:text-[#F9F9FB]">Kalubowila, Colombo</a>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="bg-[#F9F9FB]/75 dark:bg-[#0B0B0C]/75 backdrop-blur-md border-2 border-[#111112] dark:border-[#2A2A2C] p-6 hover:-translate-y-1 hover:translate-x-1 transition-transform shadow-[4px_4px_0px_0px_#111112] dark:shadow-[4px_4px_0px_0px_#2A2A2C]">
                <span className="block font-bold uppercase tracking-widest text-sm text-[#5A5A62] mb-2">Response Time</span>
                <strong className="text-2xl uppercase text-[#111112] dark:text-[#F9F9FB]">Under 24 hours</strong>
              </div>
              <div className="bg-[#F9F9FB]/75 dark:bg-[#0B0B0C]/75 backdrop-blur-md border-2 border-[#111112] dark:border-[#2A2A2C] p-6 hover:-translate-y-1 hover:translate-x-1 transition-transform shadow-[4px_4px_0px_0px_#111112] dark:shadow-[4px_4px_0px_0px_#2A2A2C]">
                <span className="block font-bold uppercase tracking-widest text-sm text-[#5A5A62] mb-2">Client Satisfaction</span>
                <strong className="text-2xl uppercase text-[#111112] dark:text-[#F9F9FB]">4.9 / 5 rating</strong>
              </div>
            </div>
          </aside>

          {/* Interactive Form */}
          <div className="bg-[#F9F9FB]/75 dark:bg-[#0B0B0C]/75 backdrop-blur-md border-2 border-[#111112] dark:border-[#2A2A2C] p-8 md:p-12 h-full">
            <div className="mb-8 border-b-2 border-[#111112] dark:border-[#2A2A2C] pb-8">
              <span className="font-bold uppercase tracking-widest text-sm text-[#5A5A62] mb-2 block">Get in touch</span>
              <h2 className="font-display text-4xl uppercase tracking-tight mb-4 text-[#111112] dark:text-[#F9F9FB]">Tell us about your idea</h2>
              <p className="font-sans text-lg text-[#111112] dark:text-[#F9F9FB] opacity-80 border-l-4 border-accent-volt pl-4 py-2 pr-2">We’d love to hear from you! Whether you have a question, a project idea, or just want to say hello, let us know how we can help.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
