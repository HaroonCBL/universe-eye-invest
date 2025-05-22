
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import InvestmentOptions from '@/components/InvestmentOptions';
import InvestmentFlow from '@/components/InvestmentFlow';
import DashboardPreview from '@/components/DashboardPreview';
import UniverseEye from '@/components/UniverseEye';
import BlockchainBenefits from '@/components/BlockchainBenefits';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main>
        <HeroSection />
        <InvestmentOptions />
        <InvestmentFlow />
        <DashboardPreview />
        <UniverseEye />
        <BlockchainBenefits />
        <FinalCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
