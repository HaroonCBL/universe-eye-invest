
import React from 'react';
import { Button } from '@/components/ui/button';
import { MonitorSmartphone, PlayCircle, ChevronDown, Server, Database, Cpu, Globe } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Animated background */}
      <div className="absolute inset-0 data-grid-bg z-0"></div>
      
      {/* Animated glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-electric opacity-10 blur-3xl animate-pulse z-0"></div>
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-violet opacity-10 blur-3xl animate-pulse z-0"></div>
      
      {/* Floating tech icons */}
      <div className="absolute top-1/3 right-1/4 animate-float z-0">
        <Server className="w-10 h-10 text-electric opacity-20" />
      </div>
      <div className="absolute bottom-1/3 left-1/4 animate-float z-0" style={{ animationDelay: "1s" }}>
        <Database className="w-10 h-10 text-violet opacity-20" />
      </div>
      <div className="absolute top-2/4 right-1/3 animate-float z-0" style={{ animationDelay: "2s" }}>
        <Cpu className="w-12 h-12 text-electric opacity-20" />
      </div>
      <div className="absolute bottom-2/5 left-1/3 animate-float z-0" style={{ animationDelay: "3s" }}>
        <Globe className="w-10 h-10 text-violet opacity-20" />
      </div>
      
      <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              This isn't just cloud. 
              <span className="text-electric block mt-2">It's infrastructure you can own.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10">
              Powered by blockchain. Built for real AI.
              Get fractional ownership of high-performance GPU infrastructure.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4">
              <Button className="btn-primary text-lg py-6 px-10 flex items-center gap-2" onClick={() => document.getElementById('investment-flow')?.scrollIntoView({ behavior: 'smooth' })}>
                <MonitorSmartphone className="w-5 h-5" />
                Start Investing
              </Button>
              
              <Button variant="outline" className="btn-secondary text-lg py-6 px-10 flex items-center gap-2">
                <PlayCircle className="w-5 h-5" />
                Watch Intro Video
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                alt="AI Supercomputer" 
                className="rounded-lg shadow-glow-md relative z-10 border border-electric/30"
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-r from-electric to-violet opacity-20 rounded-lg blur-md -z-0"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-dark/50 to-transparent rounded-lg z-10"></div>
              <div className="absolute bottom-4 left-4 bg-dark/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-violet/30 text-white text-sm z-20">
                Next-gen AI compute infrastructure
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 flex items-center justify-center">
          <div className="flex space-x-2 items-center animate-bounce">
            <span className="text-gray-400">Scroll to discover</span>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
