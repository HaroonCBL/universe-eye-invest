
import React from 'react';
import { Button } from '@/components/ui/button';
import { Wallet, LineChart } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-accent to-dark z-0"></div>
      
      {/* Animated server rack lights */}
      <div className="absolute inset-0 flex justify-center items-center opacity-10 z-0">
        <div className="grid grid-cols-6 gap-2 max-w-4xl">
          {[...Array(24)].map((_, i) => (
            <div key={i} className={`h-2 rounded-full ${i % 3 === 0 ? 'bg-electric' : 'bg-violet'} animate-pulse`}></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
            AI is changing the world. Now, you can own the infrastructure that powers it.
          </h2>
          
          <p className="text-xl text-gray-300 mb-10">
            Join the revolution in AI infrastructure ownership with as little as $500.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-primary text-lg py-6 px-10 flex items-center gap-2">
              <Wallet className="w-5 h-5" />
              Get Started with $500
            </Button>
            
            <Button variant="outline" className="btn-secondary text-lg py-6 px-10 flex items-center gap-2">
              <LineChart className="w-5 h-5" />
              View Demo Dashboard
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16">
            <h3 className="text-sm text-gray-400 uppercase tracking-wider mb-4">Trusted By</h3>
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
