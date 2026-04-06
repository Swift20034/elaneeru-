import SeoHead from "@/components/SeoHead";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import OwnerSection from "@/components/OwnerSection";
import FoodSection from "@/components/FoodSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import AttractionsSection from "@/components/AttractionsSection";
import StayGallerySection from "@/components/StayGallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <SeoHead />
    <div className="overflow-x-hidden min-h-dvh flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <HeroSection />
        <AboutSection />
        <OwnerSection />
        <FoodSection />
        <ExperiencesSection />
        <AttractionsSection />
        <StayGallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  </>
);

export default Index;
