import { useState } from "react";
import p1 from "@/assets/proj-1.jpg";
import p2 from "@/assets/proj-2.jpg";
import p3 from "@/assets/proj-3.jpg";
import p4 from "@/assets/proj-4.jpg";
import p5 from "@/assets/proj-5.jpg";
import p6 from "@/assets/proj-6.jpg";
import { SectionTitle } from "./SectionTitle";
import { ArrowUpRight } from "lucide-react";

const cats = ["All", "Residential", "Commercial", "Structural Design", "CAD Projects"] as const;
type Cat = typeof cats[number];

const projects: { src: string; title: string; cat: Cat; tall?: boolean }[] = [
  { src: p1, title: "Crestwood Villa", cat: "Residential", tall: true },
  { src: p2, title: "Meridian Tower", cat: "Commercial" },
  { src: p3, title: "Beam Grid Detail", cat: "Structural Design" },
  { src: p4, title: "Atrium Wireframe", cat: "CAD Projects", tall: true },
  { src: p5, title: "Skyline Site", cat: "Commercial" },
  { src: p6, title: "Halden Concrete House", cat: "Residential" },
];

export function Projects() {
  const [active, setActive] = useState<Cat>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.cat === active);

  return (
    <section id="projects" className="section-y bg-[var(--charcoal)]/40">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionTitle
            eyebrow="Selected Work"
            title={<>Engineered with <span className="text-gradient-gold">intent</span>.</>}
            subtitle="A glimpse into recent projects across residential, commercial and structural design."
          />
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`text-xs uppercase tracking-wider px-4 py-2 rounded-full border transition-colors ${
                  active === c
                    ? "bg-[var(--gradient-gold)] text-primary-foreground border-transparent"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[260px] gap-5">
          {filtered.map((p, i) => (
            <a
              key={p.title + i}
              href="#contact"
              className={`group relative overflow-hidden rounded-xl border border-border ${p.tall ? "row-span-2" : ""}`}
            >
              <img
                src={p.src}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-primary">{p.cat}</div>
                  <div className="text-lg font-semibold mt-1">{p.title}</div>
                </div>
                <span className="grid place-items-center size-9 rounded-full bg-[var(--gradient-gold)] text-primary-foreground translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
