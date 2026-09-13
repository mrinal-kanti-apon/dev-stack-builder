const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-pink-50 px-4 py-1.5 text-sm font-semibold text-pink-600">
            Projects
          </span>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Choose a stack.{" "}
            <span className="brand-gradient-text">Build something.</span>
          </h2>

          <p className="mt-4 text-slate-600">
            Use your selected technologies as a starting point for real-world
            projects.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <span className="text-3xl">💻</span>

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              Web Application
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Create a modern full-stack application using your preferred
              frontend, backend, and database technologies.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                Frontend
              </span>

              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                Backend
              </span>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <span className="text-3xl">📊</span>

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              Dashboard
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Build a responsive dashboard that turns complex information
              into a clean and useful interface.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-600">
                React
              </span>

              <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">
                API
              </span>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <span className="text-3xl">🤖</span>

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              AI Product
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Combine a modern interface with APIs and developer tools to
              create useful AI-powered experiences.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold text-pink-600">
                AI
              </span>

              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                Full Stack
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;