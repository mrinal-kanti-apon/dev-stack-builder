const ContactSection = () => {
  return (
    <section id="contact" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-3xl bg-slate-950 px-6 py-12 text-center shadow-2xl sm:px-10">
          <span className="inline-flex rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-slate-200">
            Contact
          </span>

          <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl">
            Ready to build your{" "}
            <span className="brand-gradient-text">next stack?</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
            Explore the technologies, create your stack, and start turning
            your next development idea into reality.
          </p>

          <a
            href="#technologies"
            className="mt-8 inline-flex rounded-full brand-gradient px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            Explore Technologies →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;