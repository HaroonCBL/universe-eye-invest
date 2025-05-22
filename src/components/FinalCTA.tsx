
import React from 'react';
import { Button } from '@/components/ui/button';
import { Wallet, LineChart } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-accent to-dark z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop" 
                  alt="GPU Server Farm" 
                  className="rounded-lg shadow-glow-md border border-electric/30 relative z-10"
                />
                <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-r from-electric to-violet opacity-20 rounded-lg blur-md -z-0"></div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                AI is changing the world. Now, you can own the infrastructure that powers it.
              </h2>
              
              <p className="text-xl text-gray-300 mb-10">
                Join the revolution in AI infrastructure ownership with as little as $500.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-primary text-lg py-6 px-10 flex items-center gap-2">
                  <Wallet className="w-5 h-5" />
                  Get Started with $500
                </Button>
                
                <Button variant="outline" className="btn-secondary text-lg py-6 px-10 flex items-center gap-2">
                  <LineChart className="w-5 h-5" />
                  View Demo Dashboard
                </Button>
              </div>
            </div>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16">
            <h3 className="text-sm text-gray-400 uppercase tracking-wider mb-4 text-center">Trusted By</h3>
            <div className="flex flex-wrap justify-center gap-8 opacity-70">
              {['NVIDIA', 'AMD', 'Chainlink', 'Ethereum', 'GPU Alliance'].map((partner, i) => (
                <div key={i} className="text-gray-400 font-medium text-sm">
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
