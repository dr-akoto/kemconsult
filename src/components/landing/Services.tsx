import { ArrowUpRight, Building2, Compass, DraftingCompass, HardHat, Layers3, Pencil, Ruler, Wrench } from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import { motion } from "framer-motion";

const services = [
  { icon: DraftingCompass, title: "AutoCAD Drafting", desc: "Production-grade 2D drafting for architectural, structural, MEP and civil layouts." },
  { icon: Layers3, title: "Structural Drawings", desc: "Stamped structural drawings for foundations, columns, slabs and steel detailing." },
  { icon: Compass, title: "Architectural Design", desc: "Concept-to-permit architectural design rooted in function and aesthetic." },
  { icon: Ruler, title: "Building Planning", desc: "Master plans, zoning analysis and code-compliant site planning." },
  { icon: HardHat, title: "Construction Supervision", desc: "On-site quality control, RFI handling and milestone supervision." },
  { icon: Pencil, title: "Quantity Surveying", desc: "Accurate BOQs, cost estimation and tender documentation." },
  { icon: Wrench, title: "Renovation Planning", desc: "Retrofits, structural upgrades and adaptive reuse strategies." },
  { icon: Building2, title: "3D Visualization", desc: "Photoreal renders and walkthroughs for client and stakeholder buy-in." },
];

export function Services() {
  return (
    <section id="services" className="section-y">
      <div className="container-x">
        <SectionTitle
          eyebrow="What We Do"
          title={<>End-to-end <span className="text-gradient-gold">engineering services</span></>}
          subtitle="A complete civil and structural engineering studio — from the first line on a blueprint to the final inspection."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.a
              key={s.title}
              href="#contact"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="group relative rounded-xl p-6 border border-border bg-[var(--gradient-card)] hover:border-primary/40 transition-all overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-px hairline opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="grid place-items-center size-12 rounded-lg bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <s.icon className="size-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                Learn more <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
