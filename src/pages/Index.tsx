
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MarketOverview from '@/components/MarketOverview';
import Features from '@/components/Features';
import GetStarted from '@/components/GetStarted';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <MarketOverview />
      <Features />
      <GetStarted />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
