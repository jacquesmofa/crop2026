import Navigation from '../../components/feature/Navigation';
import Footer from '../../components/feature/Footer';
import HeroSection from './components/HeroSection';
import CountdownSection from './components/CountdownSection';
import VisionPreview from './components/VisionPreview';
import PillarsPreview from './components/PillarsPreview';
import PartnersSection from './components/PartnersSection';
import StatsSection from './components/StatsSection';
import CTASection from './components/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <VisionPreview />
      <StatsSection />
      <PillarsPreview />
      <CountdownSection />
      <PartnersSection />
      <CTASection />
      <Footer />
    </div>
  );
}