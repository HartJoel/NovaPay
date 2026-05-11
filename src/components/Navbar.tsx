import { useEffect, useState } from "react";
import { NAV_LINKS } from "../constants/index";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-6 lg:px-16 py-6 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-2xl bg-[#0B0B0C]/50 border-b border-[#C6A972]/20 shadow-2xl shadow-[#C6A972]/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between text-white">
          {/* Logo Section  */}
          <div className="flex items-center gap-4 group">
            <div className="relative w-12 h-12 rounded-3xl bg-linear-to-br from-[#C6A972]/25 to-[#E0C48A]/10 border border-[#C6A972]/30 flex items-center justify-center backdrop-blur-xl transition-all duration-500 group-hover:border-[#C6A972]/60 group-hover:shadow-lg group-hover:shadow-[#C6A972]/20">
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "conic-gradient(from 0deg, #C6A972/20, transparent)",
                  animation: "spin 3s linear infinite",
                }}
              />
              <div className="relative w-6 h-6 rounded-full border-2 border-[#E0C48A] shadow-lg shadow-[#E0C48A]/30" />
            </div>

            <div>
              <h2 className="text-xl font-light tracking-widest">
                Nova<span className="text-[#C6A972] font-medium">Pay</span>
              </h2>
              <p className="text-[10px] text-[#B4B7BC]/60 tracking-widest uppercase mt-0.5">
                Premium Payments
              </p>
            </div>

            <style>{`
              @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
            `}</style>
          </div>

          {/* Navigation Links - Desktop only */}
          <div className="hidden lg:flex gap-2 text-sm">
            {NAV_LINKS.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={() => setActiveLink(link.key)}
                onMouseEnter={() => setHoveredLink(link.key)}
                onMouseLeave={() => setHoveredLink(null)}
                className={`px-4 py-2 rounded-full transition-all duration-300 relative group ${
                  activeLink === link.key ? "text-[#E0C48A]" : "text-[#B4B7BC]"
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {link.label}
                </span>

                {/* Underline animation */}
                <div
                  className={`absolute bottom-1 left-4 right-4 h-px bg-linear-to-r from-transparent via-[#E0C48A] to-transparent transition-all duration-300 ${
                    hoveredLink === link.key ? "opacity-100" : "opacity-0"
                  }`}
                />
              </a>
            ))}
          </div>

          {/* Action Buttons - Premium styling */}

          <div className="flex gap-4 items-center">
            {/* Login Button - Glass morphism */}
            <button className="hidden sm:block px-6 py-2.5 rounded-full border border-[#C6A972]/30 text-sm bg-white/5 backdrop-blur-xl text-[#B4B7BC] font-light transition-all duration-300 hover:border-[#C6A972]/60 hover:bg-white/10 hover:text-[#E0C48A] hover:shadow-lg hover:shadow-[#C6A972]/10 group relative overflow-hidden">
              <span className="relative z-10">Log In</span>
              <div className="absolute inset-0 bg-linear-to-r from-[#C6A972]/0 via-[#C6A972]/10 to-[#C6A972]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
            </button>

            {/* Sign Up Button - Premium gradient */}
            <button className="px-6 py-2.5 rounded-full bg-linear-to-r from-[#C6A972] to-[#E0C48A] text-sm text-black font-semibold tracking-wide transition-all duration-300 hover:shadow-2xl hover:shadow-[#C6A972]/40 hover:scale-105 relative overflow-hidden group">
              <span className="relative z-10">Sign Up</span>
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-full border border-[#C6A972]/30 flex items-center justify-center hover:bg-white/5 transition-all duration-300 relative z-50"
            >
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${mobileMenuOpen ? "rotate-90" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-[#0B0B0C] border-l border-[#C6A972]/20 z-60 lg:hidden transition-all duration-300 overflow-y-auto ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="sticky top-0 px-6 py-6 border-b border-[#C6A972]/10 bg-[#0B0B0C]/95 backdrop-blur">
          <h3 className="text-white font-light tracking-widest">Menu</h3>
        </div>

        {/* Navigation Links */}
        <div className="px-4 py-8 space-y-2">
          {NAV_LINKS.map((link, index) => (
            <a
              key={link.key}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-lg text-[#B4B7BC] hover:text-[#E0C48A] hover:bg-[#C6A972]/10 transition-all duration-300 border border-transparent hover:border-[#C6A972]/30 font-light"
              style={{
                animation: mobileMenuOpen
                  ? `slideIn 0.3s ease-out ${index * 0.05}s both`
                  : "none",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Sidebar Footer - Auth Buttons */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-[#C6A972]/10 bg-linear-to-t from-[#0B0B0C] to-transparent space-y-3">
          <button className="w-full px-4 py-2.5 rounded-full border border-[#C6A972]/30 text-sm bg-white/5 backdrop-blur-xl text-[#B4B7BC] font-light transition-all duration-300 hover:border-[#C6A972]/60 hover:bg-white/10 hover:text-[#E0C48A]">
            Log In
          </button>

          <button className="w-full px-4 py-2.5 rounded-full bg-linear-to-r from-[#C6A972] to-[#E0C48A] text-sm text-black font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#C6A972]/40">
            Sign Up
          </button>
        </div>

        <style>{`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default Navbar;
