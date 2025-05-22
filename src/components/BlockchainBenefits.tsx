
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Eye, Lock, Link } from 'lucide-react';

const benefits = [
  {
    title: 'Smart Contract Revenue Sharing',
    description: 'Automatic revenue distribution based on your ownership percentage.',
    icon: <FileText className="w-10 h-10 text-violet" />
  },
  {
    title: 'Transparent Transactions',
    description: 'All transactions are recorded on the blockchain for complete transparency.',
    icon: <Eye className="w-10 h-10 text-violet" />
  },
  {
    title: 'GDPR/GCC Compliance',
    description: 'Fully compliant with global data protection regulations.',
    icon: <Lock className="w-10 h-10 text-violet" />
  },
  {
    title: 'NFT-backed Fractional Ownership',
    description: 'Your ownership is secured by NFTs on the blockchain.',
    icon: <Link className="w-10 h-10 text-violet" />
  }
];

const BlockchainBenefits = () => {
  return (
    <section id="how-it-works" className="py-24 bg-dark-accent relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-data-grid opacity-10 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">Why Blockchain Ownership?</h2>
        <p className="text-xl text-gray-300 mb-12 text-center max-w-2xl mx-auto">
          Leveraging blockchain technology for transparent, secure, and efficient infrastructure ownership.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="glass-card glow-violet-hover">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center">
          <Button variant="outline" className="btn-secondary">
            View Smart Contract Code
          </Button>
        </div>
        
        {/* Contract address display */}
        <div className="mt-8 flex justify-center">
          <div className="glass-card px-6 py-3 inline-flex items-center space-x-2">
            <span className="text-sm text-gray-400">Smart Contract:</span>
            <span className="text-sm font-mono text-electric">0xF3e778cb6...43a97</span>
            <svg className="w-4 h-4 text-gray-400 cursor-pointer hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockchainBenefits;
