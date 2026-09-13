const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a
              href="#home"
              className="inline-flex items-center"
              aria-label="Dev Stack home"
            >
              <span className="text-2xl font-black brand-gradient-text">
                Dev Stack
              </span>
            </a>

            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
              Explore modern technologies and build a development stack that
              fits your next project.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-700 px-3 py-2 text-xs font-semibold transition hover:border-slate-500 hover:text-white"
              >
                GitHub
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-700 px-3 py-2 text-xs font-semibold transition hover:border-slate-500 hover:text-white"
              >
                Twitter
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-700 px-3 py-2 text-xs font-semibold transition hover:border-slate-500 hover:text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-bold text-white">Product</h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#technologies" className="transition hover:text-white">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#projects" className="transition hover:text-white">
                  Projects
                </a>
              </li>
              <li>
                <a href="#home" className="transition hover:text-white">
                  Features
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold text-white">Company</h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#about" className="transition hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="transition hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#home" className="transition hover:text-white">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-bold text-white">Legal</h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#privacy" className="transition hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="transition hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#contact" className="transition hover:text-white">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-800 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <a href="#privacy" className="transition hover:text-white">
              Privacy
            </a>

            <a href="#terms" className="transition hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;