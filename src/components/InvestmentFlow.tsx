
import React from 'react';

const timelineSteps = [
  {
    title: 'Sign up + OTP verification',
    description: 'Create your account and verify your identity with a one-time password.'
  },
  {
    title: 'KYC (Tier 1 & 2)',
    description: 'Complete our Know Your Customer process to comply with regulations.'
  },
  {
    title: 'Wallet connection',
    description: 'Connect your cryptocurrency wallet to receive your NFT and future earnings.'
  },
  {
    title: 'Choose fiat or crypto',
    description: 'Select your preferred payment method - traditional currency or cryptocurrency.'
  },
  {
    title: 'Pick % of data center',
    description: 'Choose how much of the data center infrastructure you want to own.'
  },
  {
    title: 'NFT minted = Ownership confirmed',
    description: 'Receive your NFT representing your ownership stake in the infrastructure.'
  },
  {
    title: 'Revenue flows in automatically',
    description: 'Start earning revenue from your infrastructure investment.'
  },
  {
    title: 'Track live earnings in dashboard',
    description: 'Monitor your earnings and infrastructure performance in real-time.'
  }
];

const InvestmentFlow = () => {
  return (
    <section id="investment-flow" className="py-24 bg-dark-accent relative">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-radial from-electric/5 to-transparent opacity-70 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">Investment Flow Timeline</h2>
          <p className="text-xl text-gray-300 mb-12 text-center">
            A simple, streamlined process to start owning AI infrastructure.
          </p>
          
          <div className="pl-4">
            {timelineSteps.map((step, index) => (
              <div key={index} className="timeline-step">
                <div className="dot animate-pulse-glow"></div>
                <div className="timeline-content">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Step {index + 1}: {step.title}
                  </h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentFlow;
