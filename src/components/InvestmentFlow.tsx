
import React from 'react';
import { UserCheck, ShieldCheck, Wallet, CreditCard, Percent, Tag, BarChart4, LineChart, Info } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';

const timelineSteps = [
  {
    title: 'Sign up + OTP verification',
    description: 'Create your account and verify your identity with a one-time password.',
    icon: <UserCheck className="w-6 h-6 text-electric" />,
    details: 'Our secure sign-up process includes email verification and a one-time password sent to your mobile device. This ensures your account remains protected from unauthorized access and complies with security standards.'
  },
  {
    title: 'KYC (Tier 1 & 2)',
    description: 'Complete our Know Your Customer process to comply with regulations.',
    icon: <ShieldCheck className="w-6 h-6 text-electric" />,
    details: 'Our KYC process is quick yet thorough. Tier 1 requires basic identification, while Tier 2 includes document verification and proof of address. This multi-tier approach ensures regulatory compliance while providing appropriate access based on your investment level.'
  },
  {
    title: 'Wallet connection',
    description: 'Connect your cryptocurrency wallet to receive your NFT and future earnings.',
    icon: <Wallet className="w-6 h-6 text-electric" />,
    details: 'We support major wallets including MetaMask, Trust Wallet, and Coinbase Wallet. Your wallet connection is secured through industry-standard protocols and is used for receiving your ownership NFT and ongoing revenue distributions.'
  },
  {
    title: 'Choose fiat or crypto',
    description: 'Select your preferred payment method - traditional currency or cryptocurrency.',
    icon: <CreditCard className="w-6 h-6 text-electric" />,
    details: 'Make your investment using traditional payment methods (credit card, bank transfer) or cryptocurrencies (BTC, ETH, USDC, and more). All fiat transactions are processed through our secure payment gateway with bank-level encryption.'
  },
  {
    title: 'Pick % of data center',
    description: 'Choose how much of the data center infrastructure you want to own.',
    icon: <Percent className="w-6 h-6 text-electric" />,
    details: 'Ownership options range from 0.01% to 5% of a data center. Our dynamic pricing model adjusts based on current demand and remaining capacity. Lower minimum investments are available during early access periods.'
  },
  {
    title: 'NFT minted = Ownership confirmed',
    description: 'Receive your NFT representing your ownership stake in the infrastructure.',
    icon: <Tag className="w-6 h-6 text-electric" />,
    details: 'Your ownership NFT is minted on the Ethereum blockchain and represents your fractional ownership of physical AI infrastructure. Each NFT contains metadata about your specific ownership rights, location of hardware, and smart contract details for revenue distribution.'
  },
  {
    title: 'Revenue flows in automatically',
    description: 'Start earning revenue from your infrastructure investment.',
    icon: <BarChart4 className="w-6 h-6 text-electric" />,
    details: 'Revenue is distributed automatically via smart contracts every 30 days. Income is generated from AI computing services provided to enterprise clients, with typical yields ranging from 8-15% annually depending on market conditions and utilization rates.'
  },
  {
    title: 'Track live earnings in dashboard',
    description: 'Monitor your earnings and infrastructure performance in real-time.',
    icon: <LineChart className="w-6 h-6 text-electric" />,
    details: 'Our comprehensive dashboard provides real-time metrics including earnings history, hardware utilization, current clients, performance benchmarks, and projected future revenue. Custom alerts can be set for significant events or performance thresholds.'
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
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                      {step.icon}
                      <span>Step {index + 1}: {step.title}</span>
                    </h3>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full">
                          <Info className="h-4 w-4 text-electric" />
                          <span className="sr-only">More information</span>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-80 p-4 bg-dark border border-electric/30">
                        <div className="space-y-2">
                          <h4 className="font-medium text-white text-lg">{step.title}</h4>
                          <p className="text-gray-300">{step.details}</p>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
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
