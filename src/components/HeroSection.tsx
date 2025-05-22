
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
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
            This isn't just cloud. 
            <span className="text-electric block mt-2">It's infrastructure you can own.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Powered by blockchain. Built for real AI.
            Get fractional ownership of high-performance GPU infrastructure.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button className="btn-primary text-lg py-6 px-10 flex items-center gap-2" onClick={() => document.getElementById('investment-flow')?.scrollIntoView({ behavior: 'smooth' })}>
              <MonitorSmartphone className="w-5 h-5" />
              Start Investing
            </Button>
            
            <Button variant="outline" className="btn-secondary text-lg py-6 px-10 flex items-center gap-2">
              <PlayCircle className="w-5 h-5" />
              Watch Intro Video
            </Button>
          </div>
          
          <div className="mt-16 flex items-center justify-center">
            <div className="flex space-x-2 items-center animate-bounce">
              <span className="text-gray-400">Scroll to discover</span>
              <ChevronDown className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
