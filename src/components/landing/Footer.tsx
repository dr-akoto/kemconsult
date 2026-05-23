import { Facebook, Hammer, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[var(--charcoal)]/60">
      <div className="container-x py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <a href="#top" className="flex items-center gap-2.5">
            <span className="grid place-items-center size-9 rounded-md bg-[var(--gradient-gold)] text-primary-foreground">
              <Hammer className="size-5" strokeWidth={2.4} />
            </span>
            <div className="leading-tight">
              <div className="font-display font-bold text-lg">KEM <span className="text-gradient-gold">ENGINEERING</span></div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Engineering & Design</div>
            </div>
          </a>
          <p className="mt-5 text-sm text-muted-foreground leading-relaxed max-w-xs">
            A premium civil engineering and construction design studio. Engineering landmark projects with precision and care.
          </p>
          <div className="mt-5 flex gap-2">
            {[Linkedin, Twitter, Instagram, Facebook].map((I, i) => (
              <a key={i} href="#" className="grid place-items-center size-9 rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition">
                <I className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h4>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {["Services", "Projects", "Why Us", "Process", "FAQ", "Contact"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase().replace(" ", "")}`} className="hover:text-primary transition">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider">Services</h4>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {["AutoCAD Drafting", "Structural Drawings", "Architectural Design", "Construction Supervision", "3D Visualization"].map((l) => (
              <li key={l}><a href="#services" className="hover:text-primary transition">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider">Visit Us</h4>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3"><MapPin className="size-4 text-primary mt-0.5 shrink-0" /> Iron-City, Kasoa, Accra, Ghana</li>
            <li className="flex gap-3"><Phone className="size-4 text-primary mt-0.5 shrink-0" /> 020 845 0327</li>
            <li className="flex gap-3"><Mail className="size-4 text-primary mt-0.5 shrink-0" /> kemclassic7@icloud.com</li>
          </ul>
          <div className="mt-5 rounded-lg overflow-hidden border border-border">
            <iframe
              title="Office location — Iron-City, Kasoa, Ghana"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-0.4400%2C5.5200%2C-0.4000%2C5.5500&layer=mapnik&marker=5.5350%2C-0.4200"
              className="w-full h-32 grayscale-[40%] opacity-90"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-x py-6 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} KEM Engineering & Design. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-primary">Privacy</a>
            <a href="#" className="hover:text-primary">Terms</a>
            <a href="#" className="hover:text-primary">Licenses</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
