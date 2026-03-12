import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import WhyExplore from "../components/sections/WhyExplore";
import EditorialSection from "../components/sections/EditorialSection";
import Destinations from "../components/sections/Destinations";
import FinalCTA from "../components/sections/FinalCTA";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-[#07111f] text-slate-50">
      <Navbar />
      <Hero />
      <WhyExplore />
      <EditorialSection />
      <Destinations />
      <FinalCTA />
      <Footer />
    </main>
  );
}
