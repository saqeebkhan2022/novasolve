import About from "@/components/about";
import Contact from "@/components/contact";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import RealEstate from "@/components/real-estate";
import Services from "@/components/services";
import Stats from "@/components/stats";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Stats />
        <CTASection />
        <RealEstate />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
