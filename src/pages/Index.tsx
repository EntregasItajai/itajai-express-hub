import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import CTASection from "@/components/CTASection";
import VideoSection from "@/components/VideoSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MoreAdvantagesSection from "@/components/MoreAdvantagesSection";
import MotoboyAnimationSection from "@/components/MotoboyAnimationSection";
import HoursSection from "@/components/HoursSection";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <IntroSection />
        <MoreAdvantagesSection />
        <AdvantagesSection />
        <CTASection />
        <VideoSection />
        <TestimonialsSection />
        <HoursSection />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default Index;
