
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Bell, Globe, Home, HelpCircle, Cube, LineChart } from "lucide-react";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <span className="text-xl font-bold text-foreground">Quantum</span>
              <span className="ml-2 text-sm font-medium text-violet">AI</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-foreground transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" /> Home
            </a>
            <a href="#how-it-works" className="text-gray-400 hover:text-foreground transition-colors flex items-center gap-1">
              <HelpCircle className="w-4 h-4" /> How It Works
            </a>
            <a href="#universe-eye" className="text-gray-400 hover:text-foreground transition-colors flex items-center gap-1">
              <Cube className="w-4 h-4" /> Universe Eye
            </a>
            <a href="#dashboard" className="text-gray-400 hover:text-foreground transition-colors flex items-center gap-1">
              <LineChart className="w-4 h-4" /> Dashboard
            </a>
            <a href="#faq" className="text-gray-400 hover:text-foreground transition-colors">FAQ</a>
          </nav>
          
          {/* Account, Language and Notifications */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="border-violet text-violet hover:bg-violet hover:text-white transition-colors">
              <Globe className="h-4 w-4 mr-1" />
              <span>EN</span>
            </Button>
            
            <Button variant="outline" size="sm" className="border-violet text-violet hover:bg-violet hover:text-white transition-colors">
              <Bell className="h-4 w-4" />
            </Button>
            
            <Button className="bg-electric hover:bg-electric-hover text-white">
              Connect Wallet
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 pt-2 pb-4 space-y-3">
            <a href="#" className="block text-gray-400 hover:text-foreground transition-colors py-2 flex items-center gap-2">
              <Home className="w-4 h-4" /> Home
            </a>
            <a href="#how-it-works" className="block text-gray-400 hover:text-foreground transition-colors py-2 flex items-center gap-2">
              <HelpCircle className="w-4 h-4" /> How It Works
            </a>
            <a href="#universe-eye" className="block text-gray-400 hover:text-foreground transition-colors py-2 flex items-center gap-2">
              <Cube className="w-4 h-4" /> Universe Eye
            </a>
            <a href="#dashboard" className="block text-gray-400 hover:text-foreground transition-colors py-2 flex items-center gap-2">
              <LineChart className="w-4 h-4" /> Dashboard
            </a>
            <a href="#faq" className="block text-gray-400 hover:text-foreground transition-colors py-2">FAQ</a>
            
            <div className="pt-2 flex items-center space-x-3">
              <Button variant="outline" size="sm" className="border-violet text-violet hover:bg-violet hover:text-white transition-colors">
                <Globe className="h-4 w-4 mr-1" />
                <span>EN</span>
              </Button>
              
              <Button variant="outline" size="sm" className="border-violet text-violet hover:bg-violet hover:text-white transition-colors">
                <Bell className="h-4 w-4" />
              </Button>
            </div>
            
            <Button className="w-full bg-electric hover:bg-electric-hover text-white">
              Connect Wallet
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
