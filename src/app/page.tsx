import { SpotlightCard } from "./components/spotlight-card";
import { GuidelineCard } from "./components/guideline-card";
import { Navbar } from "./components/navbar";
import { Lightbulb } from "lucide-react";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        <main className="flex-1 p-8 mt-18 space-y-8">
          <div className="rounded-md bg-green-50 p-4 text-green-900 border border-green-200 flex">
            <Lightbulb className="text-green mx-2"/> Explore our guidelines and reference documents to support the adoption and implementation of RISA policies and services.
          </div>
          <section id="spotlight">
            <h2 className="mb-4 text-lg font-semibold">Documentation Spotlight</h2>
            <div className="grid grid-cols-2 gap-4">
              <SpotlightCard title="Latest Releases" />
              <SpotlightCard title="Most Popular Guidelines" />
            </div>
          </section>
          <section id="guidelines">
            <h2 className="mb-4 text-lg font-semibold">Guidelines</h2>
            <div className="grid grid-cols-2 gap-6">
              <GuidelineCard
                title="Digital Signature Guidelines"
                description="This guideline aims to provide some guidance in the proper use and application of the electronic signature in line with the laws of the Government of Rwanda."
                image="/guidelines/signature.jpg"
              />
              <GuidelineCard
                title="PKI Service Integration Guidelines"
                description="Ensuring the proper integration of Public Key Infrastructure (PKI) services is essential for maintaining the security and integrity of digital systems."
                image="/guidelines/pki.jpg"
              />
              <GuidelineCard
                title="Operational Guidelines"
                description="Operational Guidelines provide standardized procedures and best practices to ensure consistency, efficiency, and accountability in daily operations."
                image="/guidelines/operational.png"
              />
              <GuidelineCard
                title="Strategy Guidelines"
                description="Strategy Guidelines define the principles and frameworks that guide long-term planning, decision-making, and sustainable development."
                image="/guidelines/strategy.jpg"
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
