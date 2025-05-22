
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LineChart, BarChart4, Database, Server } from 'lucide-react';

const DashboardPreview = () => {
  return (
    <section id="dashboard" className="py-24 bg-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-data-grid opacity-10 z-0"></div>
      <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-electric opacity-5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Live Dashboard Preview</h2>
            <p className="text-xl text-gray-300 mb-6">
              Monitor your infrastructure investments and earnings in real-time.
            </p>
            <p className="text-gray-400 mb-8">
              Our comprehensive dashboard gives you complete visibility into your AI infrastructure performance, revenue generation, and utilization metrics, all secured by blockchain technology.
            </p>
            <Button className="btn-primary flex items-center gap-2">
              <LineChart className="w-5 h-5" />
              Try Demo Dashboard
            </Button>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" 
                alt="Analytics Dashboard" 
                className="rounded-lg shadow-glow-md border border-electric/30 relative z-10"
              />
              <div className="absolute -bottom-4 -left-4 w-full h-full bg-gradient-to-r from-electric to-violet opacity-20 rounded-lg blur-md -z-0"></div>
            </div>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Card className="bg-dark-card border border-muted rounded-xl overflow-hidden shadow-glow-sm">
            <div className="p-2 bg-gradient-to-r from-electric to-violet">
              <div className="flex items-center space-x-2 px-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="flex-1 text-xs text-white/80 text-center">Investor Dashboard</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
              {/* Earnings Card */}
              <div className="glass-card p-6">
                <h3 className="text-lg font-medium text-gray-300 mb-2 flex items-center gap-2">
                  <LineChart className="w-5 h-5 text-electric" /> Live Earnings
                </h3>
                <div className="flex items-center space-x-2">
                  <span className="text-3xl font-bold text-white">$1,248.67</span>
                  <span className="text-green-400 text-sm">+2.4%</span>
                </div>
                <div className="h-24 mt-4 bg-gradient-to-r from-transparent via-electric/20 to-transparent rounded flex items-end">
                  <div className="flex items-end justify-between w-full px-2">
                    {[40, 65, 45, 70, 55, 80, 60].map((height, i) => (
                      <div 
                        key={i} 
                        className="w-3 bg-gradient-to-t from-electric to-violet rounded-t"
                        style={{height: `${height}%`}}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="mt-2 text-xs text-gray-400 flex justify-between">
                  <span>Mon</span>
                  <span>Wed</span>
                  <span>Fri</span>
                  <span>Sun</span>
                </div>
              </div>
              
              {/* NFT Ownership */}
              <div className="glass-card p-6">
                <h3 className="text-lg font-medium text-gray-300 mb-4 flex items-center gap-2">
                  <Database className="w-5 h-5 text-electric" /> NFT Ownership
                </h3>
                <div className="flex items-center space-x-4">
                  <div className="h-20 w-20 rounded bg-gradient-to-br from-electric to-violet p-0.5">
                    <div className="h-full w-full rounded bg-dark-accent flex items-center justify-center">
                      <span className="text-xs text-white">NFT #1024</span>
                    </div>
                  </div>
                  <div>
                    <div className="mb-2">
                      <div className="text-sm text-gray-400">Ownership</div>
                      <div className="text-xl font-bold text-white">2.5%</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Data Center</div>
                      <div className="text-lg font-medium text-white">GCC-01</div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-muted">
                  <div className="text-sm text-gray-400">GPU Units</div>
                  <div className="text-lg font-medium text-white">12 x NVIDIA H100</div>
                </div>
              </div>
              
              {/* Transaction Log */}
              <div className="glass-card p-6 col-span-1 md:col-span-2">
                <h3 className="text-lg font-medium text-gray-300 mb-4 flex items-center gap-2">
                  <BarChart4 className="w-5 h-5 text-electric" /> Blockchain Transaction Log
                </h3>
                <div className="space-y-3">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex justify-between items-center py-2 border-b border-muted/50">
                      <div>
                        <div className="text-white font-medium">Revenue Distribution</div>
                        <div className="text-xs text-gray-400">May {22 - item}, 2025 14:3{item}:12</div>
                      </div>
                      <div className="text-right">
                        <div className="text-green-400 font-medium">+0.04{item} ETH</div>
                        <div className="text-xs text-gray-400 underline cursor-pointer">View on Etherscan</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex justify-center p-6 pt-2">
              <Button className="btn-primary flex items-center gap-2">
                <Server className="w-5 h-5" />
                Explore Full Dashboard
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
