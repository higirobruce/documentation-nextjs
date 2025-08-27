import { Sidebar } from "./components/sidebar";
import { SpotlightCard } from "./components/spotlight-card";
import { GuidelineCard } from "./components/guideline-card";
import { Navbar } from "./components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-8 space-y-8">
          <div className="rounded-md bg-green-50 p-4 text-green-900 border border-green-200">
            Explore our guidelines and reference documents to support the adoption and implementation of RISA policies and services.
          </div>
          <section>
            <h2 className="mb-4 text-lg font-semibold">Documentation Spotlight</h2>
            <div className="grid grid-cols-2 gap-4">
              <SpotlightCard title="Latest Releases" />
              <SpotlightCard title="Most Popular Guidelines" />
            </div>
          </section>
          <section>
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
                title="Digital Signature Guidelines"
                description="This guideline aims to provide some guidance in the proper use and application of the electronic signature in line with the laws of the Government of Rwanda."
                image="/guidelines/signature.jpg"
              />
              <GuidelineCard
                title="PKI Service Integration Guidelines"
                description="Ensuring the proper integration of Public Key Infrastructure (PKI) services is essential for maintaining the security and integrity of digital systems."
                image="/guidelines/pki.jpg"
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
