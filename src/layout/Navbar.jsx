import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
// import { Button } from "../components/Button";
const navLinks = [
  { href: "about", label: "About" },
  { href: "projects", label: "Projects" },
  { href: "experience", label: "Experience" },
  { href: "testimonials", label: "Testimonials" },
]

const SCROLL_THRESHOLD = 50;

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    // Use only window/document scroll so navbar stays transparent on hero (no inner-scroll trigger)
    const getScrollY = () => {
      const windowScroll = window.scrollY ?? window.pageYOffset ?? 0;
      const docScroll = Math.max(
        document.documentElement?.scrollTop ?? 0,
        document.body?.scrollTop ?? 0
      );
      return Math.max(windowScroll, docScroll);
    };

    let rafId = null;
    const tick = () => {
      const scrollY = getScrollY();
      const scrolled = scrollY > SCROLL_THRESHOLD;
      header.classList.toggle("glass-strong", scrolled);
      header.classList.toggle("bg-transparent", !scrolled);
      header.setAttribute("data-scroll-y", String(Math.round(scrollY)));
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      if (rafId != null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 transition-[background-color,border,backdrop-filter] duration-300 bg-transparent py-4"
    >
      <nav className="container mx-auto px-6 flex flex-wrap items-center justify-between">
        <a
          href="#"
          className="text-2xl font-bold tracking-tight hover:text-primary">
          HJY<span className="text-primary">.</span>
        </a>
        <div className="hidden md:flex items-center gap-1">
          {/* Desktop Nav */}
          <div className="glass rounded-full px-2 py-1 gap-1 flex items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface transition-colors duration-200">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        {/* CTA Button */}
        <div className="hidden md:block">
          <Button size="sm" href="#contact">
            Contact Me
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          // onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobible Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-strong w-full basis-full mt-2 rounded-xl animate-fade-in">
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={`#${link.href}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg text-muted-foreground hover:text-foreground py-2">
                  {link.label}
                </a>
              ))}
              <Button size="sm" href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact Me
              </Button>
            </div>
          </div>)
        }
      </nav>
    </header >
  );
}
