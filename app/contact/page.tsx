import ContactForm from './ContactForm';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-6 py-24">
      {/* Hero Section */}
      <div className="max-w-4xl mb-24">
        <span className="inline-block px-4 py-2 border-2 border-stark bg-stark text-primary uppercase text-sm tracking-widest font-bold mb-8">
          Contact Vortixia
        </span>
        <h1 className="text-5xl md:text-7xl uppercase leading-none tracking-tight mb-8">
          Let's build something exceptional together
        </h1>
        <p className="text-xl md:text-2xl font-sans text-muted max-w-2xl border-l-2 border-stark pl-6 mb-12">
          Share your vision and we'll respond within one business day with the next steps to bring it to life. Our specialists tailor every conversation to your goals, challenges, and timeline.
        </p>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="border-2 border-stark p-6 bg-primary flex-1 hover:-translate-y-1 hover:translate-x-1 transition-transform shadow-hard-accent">
            <span className="block font-bold uppercase tracking-widest text-sm text-muted mb-2">Response Time</span>
            <strong className="text-2xl uppercase">Under 24 hours</strong>
          </div>
          <div className="border-2 border-stark p-6 bg-primary flex-1 hover:-translate-y-1 hover:translate-x-1 transition-transform shadow-hard-accent">
            <span className="block font-bold uppercase tracking-widest text-sm text-muted mb-2">Client Satisfaction</span>
            <strong className="text-2xl uppercase">4.9 / 5 rating</strong>
          </div>
        </div>
      </div>

      {/* Main Terminal Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start">
        {/* Aside */}
        <aside className="border-2 border-stark p-8 bg-primary h-full">
          <h2 className="text-2xl uppercase tracking-tight mb-6">Prefer a direct introduction?</h2>
          <p className="font-sans text-muted mb-8">Choose the channel that works best for you and we'll connect you with the right expert.</p>
          <ul className="flex flex-col gap-6 font-sans">
            <li className="flex flex-col border-l-2 border-transparent hover:border-accent-volt pl-2 transition-colors">
              <span className="font-bold uppercase tracking-widest text-sm text-muted mb-1">Email us at</span>
              <a href="mailto:varosaran@gmail.com" className="text-lg hover:text-accent-volt transition-colors font-bold">varosaran@gmail.com</a>
            </li>
            <li className="flex flex-col border-l-2 border-transparent hover:border-accent-volt pl-2 transition-colors">
              <span className="font-bold uppercase tracking-widest text-sm text-muted mb-1">Call our consultants</span>
              <a href="tel:+94777275526" className="text-lg hover:text-accent-volt transition-colors font-bold">+94 777 275 526</a>
            </li>
            <li className="flex flex-col border-l-2 border-transparent hover:border-accent-volt pl-2 transition-colors">
              <span className="font-bold uppercase tracking-widest text-sm text-muted mb-1">Visit our studio</span>
              <a href="https://www.google.com/maps/search/?api=1&query=Kalubowila,Colombo,Sri+Lanka" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-accent-volt transition-colors font-bold">Kalubowila, Colombo</a>
            </li>
          </ul>

          <div className="h-0.5 w-full bg-stark my-8"></div>

          <h3 className="text-xl uppercase tracking-tight mb-6">What happens next?</h3>
          <ul className="flex flex-col gap-6 font-sans">
            <li className="flex flex-col border-l-2 border-stark pl-4">
              <strong className="uppercase tracking-widest mb-1">Discovery Call</strong>
              <span className="text-muted text-sm">We clarify objectives, scope, and success metrics.</span>
            </li>
            <li className="flex flex-col border-l-2 border-stark pl-4">
              <strong className="uppercase tracking-widest mb-1">Custom Proposal</strong>
              <span className="text-muted text-sm">Receive an actionable plan with transparent timelines.</span>
            </li>
            <li className="flex flex-col border-l-2 border-stark pl-4">
              <strong className="uppercase tracking-widest mb-1">Kickoff Support</strong>
              <span className="text-muted text-sm">We assemble the right experts to get started immediately.</span>
            </li>
          </ul>
        </aside>

        {/* Interactive Form */}
        <div className="border-2 border-stark bg-primary p-8 md:p-12 h-full">
          <div className="mb-8 border-b-2 border-stark pb-8">
            <span className="font-bold uppercase tracking-widest text-sm text-muted mb-2 block">Get in touch</span>
            <h2 className="text-4xl uppercase tracking-tight mb-4">Tell us about your idea</h2>
            <p className="font-sans text-lg text-muted border-l-2 border-accent-volt pl-4 bg-[#F9F9FB] py-2 pr-2">We’d love to hear from you! Whether you have a question, a project idea, or just want to say hello, let us know how we can help.</p>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
