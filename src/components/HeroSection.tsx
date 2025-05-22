
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Animated background */}
      <div className="absolute inset-0 data-grid-bg z-0"></div>
      
      {/* Animated glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-electric opacity-10 blur-3xl animate-pulse z-0"></div>
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-violet opacity-10 blur-3xl animate-pulse z-0"></div>
      
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
            <Button className="btn-primary text-lg py-6 px-10" onClick={() => document.getElementById('investment-flow')?.scrollIntoView({ behavior: 'smooth' })}>
              Start Investing
            </Button>
            
            <Button variant="outline" className="btn-secondary text-lg py-6 px-10">
              Watch Intro Video
            </Button>
          </div>
          
          <div className="mt-16 flex items-center justify-center">
            <div className="flex space-x-2 items-center animate-bounce">
              <span className="text-gray-400">Scroll to discover</span>
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
