
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Cpu, Network, Bot, CubeIcon } from 'lucide-react';

const investmentOptions = [
  {
    title: 'NVIDIA A100 / H100 GPUs',
    description: 'State-of-the-art accelerated computing for AI and HPC workloads.',
    icon: <Cpu className="w-10 h-10 text-electric" />
  },
  {
    title: 'InfiniBand 400Gbps Networking',
    description: 'Ultra-low latency, high-throughput networking for distributed AI.',
    icon: <Network className="w-10 h-10 text-electric" />
  },
  {
    title: 'Realtime AI Model Hosting',
    description: 'Deploy and scale AI models with guaranteed compute resources.',
    icon: <Bot className="w-10 h-10 text-electric" />
  },
  {
    title: 'Immersive 3D Infrastructure',
    description: 'Explore your infrastructure in our interactive 3D environment.',
    icon: <CubeIcon className="w-10 h-10 text-electric" />
  }
];

const InvestmentOptions = () => {
  return (
    <section id="investment-options" className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-violet/20 to-transparent opacity-30 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">What You're Investing In</h2>
        <p className="text-xl text-gray-300 mb-12 text-center max-w-2xl mx-auto">
          Own fractional shares of high-performance computing infrastructure that powers the AI revolution.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {investmentOptions.map((option, index) => (
            <Card key={index} className="glass-card overflow-hidden glow-hover group">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="mb-4 group-hover:scale-110 transition-transform">{option.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-electric transition-colors">{option.title}</h3>
                <p className="text-gray-400 flex-grow">{option.description}</p>
                <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-electric to-violet mt-4 transition-all duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentOptions;
