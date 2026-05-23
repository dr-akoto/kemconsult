import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { TrustBar } from "@/components/landing/TrustBar";
import { Services } from "@/components/landing/Services";
import { WhyUs } from "@/components/landing/WhyUs";
import { Projects } from "@/components/landing/Projects";
import { Process } from "@/components/landing/Process";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppFab } from "@/components/landing/WhatsAppFab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KEM Engineering & Design — Civil Engineering & Construction Design, Kasoa Ghana" },
      {
        name: "description",
        content:
          "KEM Engineering & Design — premium civil engineering studio in Iron-City, Kasoa, Ghana. AutoCAD drafting, structural drawings, architectural planning and construction supervision. Book a free consultation.",
      },
      { property: "og:title", content: "KEM Engineering & Design — Civil Engineering & Construction" },
      { property: "og:description", content: "AutoCAD drafting, structural engineering, architectural planning and on-site supervision in Kasoa, Ghana." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground overflow-x-clip">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <WhyUs />
      <Projects />
      <Process />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
      <WhatsAppFab />
    </main>
  );
}
