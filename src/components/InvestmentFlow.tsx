
import React from 'react';
import { UserCheck, ShieldCheck, Wallet, CreditCard, Percent, Tag, BarChart4, LineChart, Info } from 'lucide-react';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const timelineSteps = [
  {
    id: "signup",
    title: 'Sign up + OTP verification',
    description: 'Create your account and verify your identity with a one-time password.',
    icon: <UserCheck className="w-6 h-6 text-electric" />,
    details: 'Our secure sign-up process includes email verification and a one-time password sent to your mobile device. This ensures your account remains protected from unauthorized access and complies with security standards.'
  },
  {
    id: "kyc",
    title: 'KYC (Tier 1 & 2)',
    description: 'Complete our Know Your Customer process to comply with regulations.',
    icon: <ShieldCheck className="w-6 h-6 text-electric" />,
    details: 'Our KYC process is quick yet thorough. Tier 1 requires basic identification, while Tier 2 includes document verification and proof of address. This multi-tier approach ensures regulatory compliance while providing appropriate access based on your investment level.'
  },
  {
    id: "wallet",
    title: 'Wallet connection',
    description: 'Connect your cryptocurrency wallet to receive your NFT and future earnings.',
    icon: <Wallet className="w-6 h-6 text-electric" />,
    details: 'We support major wallets including MetaMask, Trust Wallet, and Coinbase Wallet. Your wallet connection is secured through industry-standard protocols and is used for receiving your ownership NFT and ongoing revenue distributions.'
  },
  {
    id: "payment",
    title: 'Choose fiat or crypto',
    description: 'Select your preferred payment method - traditional currency or cryptocurrency.',
    icon: <CreditCard className="w-6 h-6 text-electric" />,
    details: 'Make your investment using traditional payment methods (credit card, bank transfer) or cryptocurrencies (BTC, ETH, USDC, and more). All fiat transactions are processed through our secure payment gateway with bank-level encryption.'
  },
  {
    id: "percentage",
    title: 'Pick % of data center',
    description: 'Choose how much of the data center infrastructure you want to own.',
    icon: <Percent className="w-6 h-6 text-electric" />,
    details: 'Ownership options range from 0.01% to 5% of a data center. Our dynamic pricing model adjusts based on current demand and remaining capacity. Lower minimum investments are available during early access periods.'
  },
  {
    id: "nft",
    title: 'NFT minted = Ownership confirmed',
    description: 'Receive your NFT representing your ownership stake in the infrastructure.',
    icon: <Tag className="w-6 h-6 text-electric" />,
    details: 'Your ownership NFT is minted on the Ethereum blockchain and represents your fractional ownership of physical AI infrastructure. Each NFT contains metadata about your specific ownership rights, location of hardware, and smart contract details for revenue distribution.'
  },
  {
    id: "revenue",
    title: 'Revenue flows in automatically',
    description: 'Start earning revenue from your infrastructure investment.',
    icon: <BarChart4 className="w-6 h-6 text-electric" />,
    details: 'Revenue is distributed automatically via smart contracts every 30 days. Income is generated from AI computing services provided to enterprise clients, with typical yields ranging from 8-15% annually depending on market conditions and utilization rates.'
  },
  {
    id: "dashboard",
    title: 'Track live earnings in dashboard',
    description: 'Monitor your earnings and infrastructure performance in real-time.',
    icon: <LineChart className="w-6 h-6 text-electric" />,
    details: 'Our comprehensive dashboard provides real-time metrics including earnings history, hardware utilization, current clients, performance benchmarks, and projected future revenue. Custom alerts can be set for significant events or performance thresholds.'
  }
];

// Form schemas for each step
const signUpSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
});

const kycSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  dateOfBirth: z.string().min(1, { message: "Date of birth is required." }),
  address: z.string().min(5, { message: "Address must be at least 5 characters." }),
  // Additional fields would be here in a real application
});

const paymentSchema = z.object({
  amount: z.string().min(1, { message: "Amount is required." }),
  useCrypto: z.boolean().default(false),
  // Conditional fields based on payment type would be handled in a real application
});

const InvestmentFlow = () => {
  const [otp, setOtp] = React.useState("");
  const [sliderValue, setSliderValue] = React.useState([1]);
  const [useCrypto, setUseCrypto] = React.useState(false);
  
  // Form setup for sign up
  const signUpForm = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });
  
  // Form setup for KYC
  const kycForm = useForm({
    resolver: zodResolver(kycSchema),
    defaultValues: {
      fullName: "",
      dateOfBirth: "",
      address: "",
    },
  });
  
  // Form setup for payment
  const paymentForm = useForm({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      amount: "",
      useCrypto: false,
    },
  });
  
  const onSignUpSubmit = (values: z.infer<typeof signUpSchema>) => {
    console.log(values);
    // In a real application, this would handle the sign up process
  };
  
  const onKYCSubmit = (values: z.infer<typeof kycSchema>) => {
    console.log(values);
    // In a real application, this would handle the KYC verification
  };
  
  const onPaymentSubmit = (values: z.infer<typeof paymentSchema>) => {
    console.log(values);
    // In a real application, this would handle the payment process
  };

  const handleConnectWallet = () => {
    console.log("Connect wallet clicked");
    // In a real application, this would trigger wallet connection
  };

  return (
    <section id="investment-flow" className="py-24 bg-dark-accent relative">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-radial from-electric/5 to-transparent opacity-70 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">Investment Flow Timeline</h2>
          <p className="text-xl text-gray-300 mb-12 text-center">
            A simple, streamlined process to start owning AI infrastructure.
          </p>
          
          <div className="pl-4">
            {timelineSteps.map((step, index) => (
              <div key={index} className="timeline-step relative mb-10 last:mb-0">
                <div className="dot animate-pulse-glow"></div>
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="timeline-content group cursor-pointer hover:bg-dark-highlight/20 p-3 rounded-lg transition-all">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2 group-hover:text-electric transition-colors">
                          {step.icon}
                          <span>Step {index + 1}: {step.title}</span>
                        </h3>
                      </div>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="bg-dark border border-electric/30 text-white w-full max-w-md sm:max-w-lg md:max-w-xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl flex items-center gap-2 text-electric">
                        {step.icon}
                        <span>{step.title}</span>
                      </DialogTitle>
                      <DialogDescription className="text-gray-300 text-base">
                        {step.details}
                      </DialogDescription>
                    </DialogHeader>
                    
                    {/* Step specific content */}
                    {step.id === "signup" && (
                      <div className="mt-4">
                        <Form {...signUpForm}>
                          <form onSubmit={signUpForm.handleSubmit(onSignUpSubmit)} className="space-y-4">
                            <FormField
                              control={signUpForm.control}
                              name="name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-white">Full Name</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Enter your full name" {...field} className="bg-dark-highlight border-electric/30 text-white" />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={signUpForm.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-white">Email Address</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Enter your email" {...field} className="bg-dark-highlight border-electric/30 text-white" />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={signUpForm.control}
                              name="phone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-white">Phone Number</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Enter your phone number" {...field} className="bg-dark-highlight border-electric/30 text-white" />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <div className="space-y-2">
                              <p className="text-white">Enter OTP sent to your phone</p>
                              <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                                <InputOTPGroup>
                                  <InputOTPSlot index={0} className="bg-dark-highlight border-electric/30 text-white" />
                                  <InputOTPSlot index={1} className="bg-dark-highlight border-electric/30 text-white" />
                                  <InputOTPSlot index={2} className="bg-dark-highlight border-electric/30 text-white" />
                                  <InputOTPSlot index={3} className="bg-dark-highlight border-electric/30 text-white" />
                                  <InputOTPSlot index={4} className="bg-dark-highlight border-electric/30 text-white" />
                                  <InputOTPSlot index={5} className="bg-dark-highlight border-electric/30 text-white" />
                                </InputOTPGroup>
                              </InputOTP>
                            </div>
                            <Button type="submit" className="w-full bg-electric hover:bg-electric/80 text-black">
                              Create Account
                            </Button>
                          </form>
                        </Form>
                      </div>
                    )}
                    
                    {step.id === "kyc" && (
                      <div className="mt-4">
                        <Form {...kycForm}>
                          <form onSubmit={kycForm.handleSubmit(onKYCSubmit)} className="space-y-4">
                            <FormField
                              control={kycForm.control}
                              name="fullName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-white">Legal Full Name</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Enter your legal full name" {...field} className="bg-dark-highlight border-electric/30 text-white" />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={kycForm.control}
                              name="dateOfBirth"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-white">Date of Birth</FormLabel>
                                  <FormControl>
                                    <Input type="date" {...field} className="bg-dark-highlight border-electric/30 text-white" />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={kycForm.control}
                              name="address"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-white">Residential Address</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Enter your residential address" {...field} className="bg-dark-highlight border-electric/30 text-white" />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <div className="space-y-2">
                              <p className="text-white">Upload Identification Documents</p>
                              <div className="grid grid-cols-2 gap-3">
                                <div className="border-2 border-dashed border-electric/40 rounded-lg p-4 text-center cursor-pointer hover:bg-electric/10 transition-colors">
                                  <p className="text-electric">Upload ID</p>
                                  <p className="text-xs text-gray-400">Passport, Driver's License, etc.</p>
                                </div>
                                <div className="border-2 border-dashed border-electric/40 rounded-lg p-4 text-center cursor-pointer hover:bg-electric/10 transition-colors">
                                  <p className="text-electric">Take Selfie</p>
                                  <p className="text-xs text-gray-400">For identity verification</p>
                                </div>
                              </div>
                            </div>
                            <Button type="submit" className="w-full bg-electric hover:bg-electric/80 text-black">
                              Submit KYC Information
                            </Button>
                          </form>
                        </Form>
                      </div>
                    )}
                    
                    {step.id === "wallet" && (
                      <div className="mt-4 space-y-4">
                        <p className="text-white">Connect your crypto wallet to receive your ownership NFT and future earnings.</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          <Button onClick={handleConnectWallet} variant="outline" className="border-electric text-electric hover:bg-electric/10 flex flex-col items-center p-4 h-auto">
                            <img src="https://seeklogo.com/images/M/metamask-logo-531EE39009-seeklogo.com.png" alt="MetaMask" className="w-12 h-12 mb-2" />
                            <span>MetaMask</span>
                          </Button>
                          <Button onClick={handleConnectWallet} variant="outline" className="border-electric text-electric hover:bg-electric/10 flex flex-col items-center p-4 h-auto">
                            <img src="https://trustwallet.com/assets/images/media/assets/TWT.png" alt="Trust Wallet" className="w-12 h-12 mb-2" />
                            <span>Trust Wallet</span>
                          </Button>
                          <Button onClick={handleConnectWallet} variant="outline" className="border-electric text-electric hover:bg-electric/10 flex flex-col items-center p-4 h-auto">
                            <img src="https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0" alt="Coinbase Wallet" className="w-12 h-12 mb-2" />
                            <span>Coinbase</span>
                          </Button>
                        </div>
                      </div>
                    )}
                    
                    {step.id === "payment" && (
                      <div className="mt-4">
                        <Form {...paymentForm}>
                          <form onSubmit={paymentForm.handleSubmit(onPaymentSubmit)} className="space-y-4">
                            <div className="flex items-center justify-between px-2 py-3 bg-dark-highlight rounded-md">
                              <span className="text-white">Pay with Cryptocurrency</span>
                              <Switch 
                                checked={useCrypto} 
                                onCheckedChange={setUseCrypto} 
                                className="data-[state=checked]:bg-electric" 
                              />
                            </div>
                            
                            {!useCrypto ? (
                              <div className="space-y-4">
                                <FormField
                                  control={paymentForm.control}
                                  name="amount"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel className="text-white">Investment Amount (USD)</FormLabel>
                                      <FormControl>
                                        <Input placeholder="Enter amount" {...field} className="bg-dark-highlight border-electric/30 text-white" />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                                <div className="space-y-2">
                                  <p className="text-white">Payment Details</p>
                                  <Input placeholder="Card Number" className="bg-dark-highlight border-electric/30 text-white" />
                                  <div className="grid grid-cols-2 gap-2">
                                    <Input placeholder="MM/YY" className="bg-dark-highlight border-electric/30 text-white" />
                                    <Input placeholder="CVC" className="bg-dark-highlight border-electric/30 text-white" />
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div className="space-y-4">
                                <FormField
                                  control={paymentForm.control}
                                  name="amount"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel className="text-white">Investment Amount (ETH)</FormLabel>
                                      <FormControl>
                                        <Input placeholder="Enter amount" {...field} className="bg-dark-highlight border-electric/30 text-white" />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                                <p className="text-white">Select Cryptocurrency</p>
                                <div className="grid grid-cols-3 gap-2">
                                  <Button type="button" variant="outline" className="border-electric text-electric hover:bg-electric/10">ETH</Button>
                                  <Button type="button" variant="outline" className="border-electric/50 text-white/70 hover:bg-electric/10">BTC</Button>
                                  <Button type="button" variant="outline" className="border-electric/50 text-white/70 hover:bg-electric/10">USDC</Button>
                                </div>
                              </div>
                            )}
                            
                            <Button type="submit" className="w-full bg-electric hover:bg-electric/80 text-black">
                              {useCrypto ? "Connect & Pay" : "Process Payment"}
                            </Button>
                          </form>
                        </Form>
                      </div>
                    )}
                    
                    {step.id === "percentage" && (
                      <div className="mt-4 space-y-6">
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <p className="text-white">Ownership Percentage</p>
                            <p className="text-electric font-bold">{sliderValue[0]}%</p>
                          </div>
                          <Slider 
                            value={sliderValue}
                            onValueChange={setSliderValue}
                            min={0.01}
                            max={5}
                            step={0.01}
                            className="py-4"
                          />
                          <div className="flex justify-between text-sm text-gray-400">
                            <span>0.01%</span>
                            <span>5%</span>
                          </div>
                        </div>
                        
                        <div className="bg-dark-highlight p-4 rounded-lg">
                          <div className="flex justify-between mb-1">
                            <span className="text-gray-300">Estimated Cost:</span>
                            <span className="text-white font-bold">${(sliderValue[0] * 10000).toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between mb-1">
                            <span className="text-gray-300">Est. Monthly Revenue:</span>
                            <span className="text-electric font-bold">${(sliderValue[0] * 100).toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-300">Est. Annual Yield:</span>
                            <span className="text-electric font-bold">12%</span>
                          </div>
                        </div>
                        
                        <Button className="w-full bg-electric hover:bg-electric/80 text-black">
                          Confirm Selection
                        </Button>
                      </div>
                    )}
                    
                    {step.id === "nft" && (
                      <div className="mt-4 flex flex-col items-center space-y-4">
                        <div className="relative w-64 h-64 rounded-xl overflow-hidden border-4 border-electric">
                          <div className="absolute inset-0 bg-gradient-to-br from-dark-accent to-electric/30"></div>
                          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                            <img src="https://cryptologos.cc/logos/ethereum-eth-logo.png" alt="ETH Logo" className="w-16 h-16 mb-2" />
                            <h4 className="text-xl font-bold text-white">Data Center #42</h4>
                            <p className="text-electric font-bold text-lg">{sliderValue[0]}% Ownership</p>
                            <p className="text-gray-300 text-sm mt-2">Token ID: #ETH-89271</p>
                            <div className="absolute bottom-3 left-0 right-0 text-center">
                              <p className="text-xs text-gray-300">Minted on May 23, 2025</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <h4 className="text-xl font-bold text-white">Ownership Confirmed!</h4>
                          <p className="text-gray-300 mt-1">Your NFT has been successfully minted and sent to your wallet.</p>
                        </div>
                        
                        <div className="flex gap-2 w-full">
                          <Button variant="outline" className="flex-1 border-electric text-electric hover:bg-electric/10">
                            View on Etherscan
                          </Button>
                          <Button className="flex-1 bg-electric hover:bg-electric/80 text-black">
                            Continue
                          </Button>
                        </div>
                      </div>
                    )}
                    
                    {step.id === "revenue" && (
                      <div className="mt-4 space-y-4">
                        <div className="bg-dark-highlight p-4 rounded-lg">
                          <h4 className="text-lg font-bold text-white mb-3">Revenue Distribution Cycle</h4>
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <div className="w-3 h-3 rounded-full bg-electric mr-2"></div>
                              <span className="text-white">Earnings calculated daily based on computing usage</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-3 h-3 rounded-full bg-electric mr-2"></div>
                              <span className="text-white">Smart contracts execute distributions every 30 days</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-3 h-3 rounded-full bg-electric mr-2"></div>
                              <span className="text-white">Funds sent automatically to your connected wallet</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-3 h-3 rounded-full bg-electric mr-2"></div>
                              <span className="text-white">No manual claim process required</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-dark-highlight p-4 rounded-lg">
                          <h4 className="text-lg font-bold text-white mb-2">Estimated Returns</h4>
                          <div className="flex justify-between mb-1">
                            <span className="text-gray-300">Monthly:</span>
                            <span className="text-electric font-bold">${(sliderValue[0] * 100).toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between mb-1">
                            <span className="text-gray-300">Annual:</span>
                            <span className="text-electric font-bold">${(sliderValue[0] * 1200).toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-300">Expected Yield:</span>
                            <span className="text-electric font-bold">8-15%</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 text-sm">
                          * Actual returns may vary based on market conditions, data center utilization, and client demand.
                        </p>
                        
                        <Button className="w-full bg-electric hover:bg-electric/80 text-black">
                          View First Payment Estimate
                        </Button>
                      </div>
                    )}
                    
                    {step.id === "dashboard" && (
                      <div className="mt-4 space-y-4">
                        <div className="rounded-lg overflow-hidden border border-electric/30">
                          <img 
                            src="https://cdn.dribbble.com/users/2144073/screenshots/15491409/media/6962b5e43e758f2aa72bee309952aa26.png" 
                            alt="Dashboard Preview" 
                            className="w-full h-auto"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <h4 className="text-lg font-bold text-white">Dashboard Features</h4>
                          <ul className="space-y-1 text-gray-300">
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-electric"></div>
                              <span>Real-time earnings tracker</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-electric"></div>
                              <span>Hardware utilization metrics</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-electric"></div>
                              <span>Revenue history and projections</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-electric"></div>
                              <span>Transaction records and statements</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-electric"></div>
                              <span>Customizable alerts and notifications</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button variant="outline" className="flex-1 border-electric text-electric hover:bg-electric/10">
                            Take a Tour
                          </Button>
                          <Button className="flex-1 bg-electric hover:bg-electric/80 text-black">
                            Go to Dashboard
                          </Button>
                        </div>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .timeline-step {
          position: relative;
          padding-left: 30px;
          margin-bottom: 2.5rem;
        }
        .timeline-step:last-child {
          margin-bottom: 0;
        }
        .dot {
          position: absolute;
          left: 0;
          top: 8px;
          width: 12px;
          height: 12px;
          background-color: var(--electric);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--electric);
        }
        .timeline-step:not(:last-child)::before {
          content: "";
          position: absolute;
          left: 5px;
          top: 20px;
          bottom: -25px;
          width: 2px;
          background: linear-gradient(to bottom, var(--electric), rgba(52, 211, 153, 0.1));
        }
        @keyframes pulse-glow {
          0%, 100% {
            opacity: 1;
            box-shadow: 0 0 5px var(--electric);
          }
          50% {
            opacity: 0.6;
            box-shadow: 0 0 15px var(--electric);
          }
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default InvestmentFlow;
