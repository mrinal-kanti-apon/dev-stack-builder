import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo-text.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Technologies", href: "#technologies" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="btn btn-ghost btn-circle lg:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Brand */}
        <a
          href="#home"
          className="flex items-center gap-2"
          aria-label="Dev Stack home"
        >
          <img
            src={logo}
            alt="Dev Stack"
            className="h-10 w-auto object-contain"
          />
          
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Auth buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="text-xs font-semibold text-slate-700 transition hover:text-slate-950 sm:text-sm"
          >
            Sign In
          </button>

          <button
            type="button"
            className="brand-gradient rounded-full px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg sm:px-5"
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav className="border-t border-slate-200 bg-white px-5 py-4 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
              >
                {link.label}
              </a>
            ))}

            <button
              type="button"
              className="mt-2 rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-700"
            >
              Sign In
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}