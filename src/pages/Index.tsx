import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AdvantagesSection from "@/components/AdvantagesSection";
import CTASection from "@/components/CTASection";
import VideoSection from "@/components/VideoSection";
import DetailedServices from "@/components/DetailedServices";
import MoreAdvantagesSection from "@/components/MoreAdvantagesSection";
import HoursSection from "@/components/HoursSection";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AdvantagesSection />
        <CTASection />
        <VideoSection />
        <DetailedServices />
        <MoreAdvantagesSection />
        <HoursSection />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default Index;
