
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark border-t border-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-xl font-bold text-white">Lovable</span>
              <span className="ml-2 text-sm font-medium text-violet">AI</span>
            </div>
            <p className="text-gray-400 mb-4">
              Own the future of AI infrastructure through NFT-based fractional ownership.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'Discord', 'LinkedIn'].map((social, i) => (
                <a key={i} href="#" className="text-gray-400 hover:text-white transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-white font-medium mb-4">Explore</h3>
            <ul className="space-y-2">
              {['How It Works', 'Universe Eye', 'Dashboard', 'FAQ'].map((link, i) => (
                <li key={i}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-white font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              {['Documentation', 'API', 'Whitepaper', 'Press Kit'].map((resource, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-white font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              {['Terms & Conditions', 'Privacy Policy', 'GDPR | GCC Compliant', 'Smart Contract'].map((legal, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {legal}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-muted flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 Lovable AI. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-2 text-gray-500 text-sm">
            <span>Smart Contract Address:</span>
            <span className="font-mono">0xF3e778cb6...43a97</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
