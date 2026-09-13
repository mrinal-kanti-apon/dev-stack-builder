import bannerImage from "../assets/banner-stack.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-orange-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-200/30 blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-20">
        {/* Content */}
        <div className="text-center lg:text-left">
          <div className="mb-5 inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-bold text-orange-600">
            🚀 Build • Explore • Grow
          </div>

          <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl xl:text-7xl">
            Build Your Ideal
            <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Developer Stack
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg lg:mx-0">
            Explore frontend,backend,database and tooling options.<br></br>
            Compare them side by side and put together the stack that fits your next project.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="#technologies"
              className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-7 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-pink-200 transition hover:-translate-y-1 hover:shadow-xl"
            >
              Explore Technologies →
            </a>

            <a
              href="#about"
              className="rounded-full border-2 border-slate-200 bg-white px-7 py-3 text-center text-sm font-bold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              Learn More
            </a>
          </div>

          {/* Small stats */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 lg:justify-start">
            <div>
              <p className="text-2xl font-black text-slate-900">14+</p>
              <p className="text-xs font-medium text-slate-500">
                Technologies
              </p>
            </div>

            <div className="h-10 w-px bg-slate-200" />

            <div>
              <p className="text-2xl font-black text-slate-900">7</p>
              <p className="text-xs font-medium text-slate-500">
                Categories
              </p>
            </div>

            <div className="h-10 w-px bg-slate-200" />

            <div>
              <p className="text-2xl font-black text-slate-900">100%</p>
              <p className="text-xs font-medium text-slate-500">
                Responsive
              </p>
            </div>
          </div>
        </div>

        {/* Banner image */}
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="absolute inset-6 rounded-[2rem] bg-gradient-to-r from-orange-400/20 via-pink-400/20 to-violet-500/20 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-3 shadow-2xl shadow-slate-200/70">
            <img
              src={bannerImage}
              alt="Developer technology stack illustration"
              className="h-auto w-full rounded-[1.5rem] object-cover"
            />
          </div>

          {/* Floating card */}
          <div className="absolute -bottom-5 -left-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-xl sm:-left-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 text-lg">
                ⚡
              </div>

              <div>
                <p className="text-xs font-medium text-slate-500">
                  Your stack
                </p>
                <p className="text-sm font-black text-slate-900">
                  Ready to build
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}