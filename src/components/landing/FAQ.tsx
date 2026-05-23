import { useState } from "react";
import { Plus } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const faqs = [
  { q: "How long does a typical project take?", a: "Most architectural and structural design projects run 4–10 weeks depending on scope. We share a detailed milestone schedule after the initial consultation." },
  { q: "How is pricing determined?", a: "We price by project scope, area, and complexity — not by hours. After a free consultation, you'll receive a fixed-fee proposal with no surprises." },
  { q: "Are your engineers licensed and certified?", a: "Yes. Every project is led by PE-licensed structural and civil engineers, and our office is ISO 9001 certified for quality management." },
  { q: "Do you support building permit applications?", a: "Absolutely. We prepare permit-ready drawings and liaise with local authorities, submitting and revising on your behalf when needed." },
  { q: "How do you ensure structural safety?", a: "We use modern analysis software (ETABS, SAP2000, STAAD), peer-reviewed calculations, and conservative design factors that meet or exceed local code." },
  { q: "What is your revision policy?", a: "Two rounds of design revisions are included in every package. Additional revisions are billed transparently at a flat rate." },
  { q: "How do I book a consultation?", a: "Use the form on this page or call us — we respond within one business day to schedule a free 30-minute consultation." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section-y">
      <div className="container-x grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <SectionTitle
            eyebrow="FAQ"
            title={<>Answers to <span className="text-gradient-gold">common questions</span></>}
            subtitle="Still curious? Our team is one click away."
          />
          <a href="#contact" className="mt-6 inline-flex items-center rounded-md bg-[var(--gradient-gold)] px-5 py-3 text-sm font-semibold text-primary-foreground hover:shadow-[var(--shadow-gold)] transition">
            Talk to an Engineer
          </a>
        </div>
        <div className="lg:col-span-7 divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="py-5">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between text-left gap-4"
                >
                  <span className="font-medium text-base md:text-lg">{f.q}</span>
                  <Plus className={`size-5 shrink-0 text-primary transition-transform ${isOpen ? "rotate-45" : ""}`} />
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="text-sm text-muted-foreground leading-relaxed pr-8">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
