
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/learn/HeroSection';
import WhatIsCrypto from '@/components/learn/WhatIsCrypto';
import UnderstandingBlockchain from '@/components/learn/UnderstandingBlockchain';
import PopularCryptocurrencies from '@/components/learn/PopularCryptocurrencies';
import GettingStarted from '@/components/learn/GettingStarted';
import SafetyTips from '@/components/learn/SafetyTips';

const LearnMore = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow bg-gray-50">
        <HeroSection />
        <WhatIsCrypto />
        <UnderstandingBlockchain />
        <PopularCryptocurrencies />
        <GettingStarted />
        <SafetyTips />
      </div>
      <Footer />
    </div>
  );
};

export default LearnMore;
