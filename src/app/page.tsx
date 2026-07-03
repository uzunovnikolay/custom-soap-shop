import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { IntroSection } from "@/components/IntroSection";
import { ReadySoapsSection } from "@/components/ReadySoapsSection";
import { SoapConfiguratorSection } from "@/components/SoapConfiguratorSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
      <main className="min-h-screen bg-stone-50 text-stone-900">
        <Header />
        <HeroSection />
        <IntroSection />
        <ReadySoapsSection />
        <SoapConfiguratorSection />
        <Footer />
      </main>
  );
}