const AboutSection = () => {
  return (
    <section id="about" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-violet-50 px-4 py-1.5 text-sm font-semibold text-violet-600">
            About Dev Stack
          </span>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Build with the{" "}
            <span className="brand-gradient-text">right tools</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Dev Stack helps developers explore modern technologies, compare
            their strengths, and create a personalized technology stack for
            their next project.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-xl">
              🔎
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-900">
              Explore
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Discover frontend, backend, database, language, styling, DevOps,
              and developer tools in one place.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-100 text-xl">
              ⚙️
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-900">
              Compare
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Understand technology categories, difficulty levels, ratings,
              and badges before choosing your tools.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-xl">
              🚀
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-900">
              Build
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Add technologies to your personal stack and prepare the
              foundation for your next development project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;