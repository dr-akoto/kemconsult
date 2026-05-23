import { useEffect, useState } from "react";
import { Menu, X, Hammer } from "lucide-react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#projects", label: "Projects" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-[0_8px_30px_-12px_oklch(0_0_0/0.5)]" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 md:h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid place-items-center size-9 rounded-md bg-[var(--gradient-gold)] text-primary-foreground">
            <Hammer className="size-5" strokeWidth={2.4} />
          </span>
          <div className="leading-tight">
            <div className="font-display font-bold text-base md:text-lg tracking-tight">KEM <span className="text-gradient-gold">ENGINEERING</span></div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Engineering & Design</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group">
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="#contact" className="inline-flex items-center rounded-md bg-[var(--gradient-gold)] px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:shadow-[var(--shadow-gold)] transition-shadow">
            Get a Quote
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-foreground" aria-label="menu">
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden glass border-t border-border">
          <div className="container-x py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 text-sm text-muted-foreground hover:text-foreground">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex justify-center items-center rounded-md bg-[var(--gradient-gold)] px-5 py-3 text-sm font-semibold text-primary-foreground">
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
