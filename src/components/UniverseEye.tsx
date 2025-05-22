
import React from 'react';
import { Button } from '@/components/ui/button';
import { Server, Plus, Minus } from 'lucide-react';

const UniverseEye = () => {
  return (
    <section id="universe-eye" className="py-24 bg-dark relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark-accent z-0"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-violet/20 to-transparent opacity-30 blur-3xl z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Explore "The Universe Eye"</h2>
            <p className="text-xl text-gray-300 mb-6">
              Walk through what you own in our immersive 3D environment.
            </p>
            <p className="text-gray-400 mb-8">
              Claim racks, inspect hardware, and watch your infrastructure scale in real-time.
              Our interactive 3D view lets you experience your investment like never before.
            </p>
            
            <Button className="btn-primary flex items-center gap-2">
              <Server className="w-5 h-5" />
              Launch Universe Eye
            </Button>
          </div>
          
          {/* 3D Preview Image */}
          <div className="lg:w-1/2">
            <div className="relative">
              {/* Main image with glow effect */}
              <div className="rounded-lg overflow-hidden shadow-glow-lg bg-dark-accent border border-violet p-2">
                <div className="aspect-[16/9] bg-gradient-to-br from-dark-accent to-dark rounded-md flex flex-col items-center justify-center">
                  {/* 3D server representation */}
                  <div className="grid grid-cols-3 gap-3 max-w-xs animate-float">
                    {[...Array(9)].map((_, i) => (
                      <div 
                        key={i}
                        className="h-8 w-full bg-gradient-to-r from-electric to-violet rounded-sm flex items-center justify-center"
                      >
                        <div className="h-6 w-10/12 bg-dark-card rounded-sm flex items-center justify-center">
                          <div className="h-1 w-4 bg-electric rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-sm text-gray-400 mt-4">Interactive 3D Preview</p>
                </div>
                
                {/* Control overlay */}
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
                  <div className="glass-card px-3 py-1 text-xs text-gray-300 rounded-full">
                    Rack #24 • GCC-01
                  </div>
                  <div className="flex space-x-2">
                    <div className="glass-card p-1 rounded-full">
                      <div className="h-6 w-6 rounded-full bg-electric flex items-center justify-center">
                        <Plus className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div className="glass-card p-1 rounded-full">
                      <div className="h-6 w-6 rounded-full bg-dark-accent flex items-center justify-center">
                        <Minus className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 h-12 w-12 rounded-lg border border-violet bg-dark-accent animate-pulse-glow"></div>
              <div className="absolute -bottom-4 -left-4 h-8 w-8 rounded-lg border border-electric bg-dark-accent animate-pulse-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniverseEye;
