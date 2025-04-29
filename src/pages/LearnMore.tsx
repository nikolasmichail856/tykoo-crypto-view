
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

const LearnMore = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-white to-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-tykoo-darkBlue mb-4">Learn More About Cryptocurrency</h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Understand digital currencies, blockchain technology, and how to safely navigate the world of crypto trading.
            </p>
          </div>
        </div>

        {/* What is Cryptocurrency */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-tykoo-darkBlue mb-6">What is Cryptocurrency?</h2>
                <p className="text-gray-600 mb-4">
                  Cryptocurrency is a digital or virtual form of currency that uses cryptography for security, making it difficult 
                  to counterfeit. Unlike traditional currencies issued by governments (fiat money), cryptocurrencies operate on 
                  decentralized systems based on blockchain technology.
                </p>
                <p className="text-gray-600 mb-6">
                  Bitcoin, created in 2009, was the first cryptocurrency. Since then, thousands of alternative cryptocurrencies 
                  have been created, each with various functions and specifications.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ChevronRight className="mt-1 text-tykoo-blue flex-shrink-0" />
                    <span className="text-gray-600"><strong>Decentralized:</strong> Not controlled by any central authority</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="mt-1 text-tykoo-blue flex-shrink-0" />
                    <span className="text-gray-600"><strong>Secure:</strong> Protected by advanced cryptography</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="mt-1 text-tykoo-blue flex-shrink-0" />
                    <span className="text-gray-600"><strong>Transparent:</strong> All transactions are recorded on a public ledger</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                  alt="Cryptocurrency concept" 
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Understanding Blockchain */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-tykoo-darkBlue mb-6">Understanding Blockchain</h2>
                <p className="text-gray-600 mb-4">
                  Blockchain is the underlying technology behind cryptocurrencies. It's a distributed digital ledger that records 
                  transactions across many computers so that any involved record cannot be altered retroactively.
                </p>
                <p className="text-gray-600 mb-6">
                  Think of blockchain as a chain of blocks, where each block contains a list of transactions. Once a block is completed, 
                  it's added to the chain, creating a permanent and unalterable record.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-tykoo-darkBlue mb-2">Security</h3>
                    <p className="text-sm text-gray-600">Each transaction is encrypted and linked to the previous transaction, making the blockchain highly secure against fraud and hacking.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-tykoo-darkBlue mb-2">Consensus</h3>
                    <p className="text-sm text-gray-600">Blockchain networks use consensus mechanisms like Proof of Work or Proof of Stake to validate transactions without a central authority.</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" 
                  alt="Blockchain technology visualization" 
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Popular Cryptocurrencies */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-tykoo-darkBlue mb-8 text-center">Popular Cryptocurrencies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-tykoo-blue/10 rounded-full p-3 mr-4">
                    <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg" alt="Bitcoin" className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-xl text-tykoo-darkBlue">Bitcoin (BTC)</h3>
                </div>
                <p className="text-gray-600 mb-4">The first and most valuable cryptocurrency, created in 2009 by an unknown person or group using the pseudonym Satoshi Nakamoto.</p>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Market Cap</span>
                  <span className="font-semibold">~$1 trillion</span>
                </div>
              </Card>

              <Card className="p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-tykoo-blue/10 rounded-full p-3 mr-4">
                    <img src="https://cryptologos.cc/logos/ethereum-eth-logo.svg" alt="Ethereum" className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-xl text-tykoo-darkBlue">Ethereum (ETH)</h3>
                </div>
                <p className="text-gray-600 mb-4">A decentralized software platform that enables smart contracts and dApps to be built and run without downtime, fraud, or interference.</p>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Market Cap</span>
                  <span className="font-semibold">~$250 billion</span>
                </div>
              </Card>

              <Card className="p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-tykoo-blue/10 rounded-full p-3 mr-4">
                    <img src="https://cryptologos.cc/logos/usd-coin-usdc-logo.svg" alt="USD Coin" className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-xl text-tykoo-darkBlue">USD Coin (USDC)</h3>
                </div>
                <p className="text-gray-600 mb-4">A stablecoin pegged to the US dollar, designed to maintain a 1:1 value with USD, providing stability in the volatile crypto market.</p>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Market Cap</span>
                  <span className="font-semibold">~$30 billion</span>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-tykoo-darkBlue mb-8 text-center">Getting Started with TYKOO</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-tykoo-blue/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-tykoo-blue font-bold text-xl">1</span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-tykoo-darkBlue">Create an Account</h3>
                <p className="text-gray-600">Sign up with your email address and create a secure password to begin your crypto journey.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-tykoo-blue/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-tykoo-blue font-bold text-xl">2</span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-tykoo-darkBlue">Verify Your Identity</h3>
                <p className="text-gray-600">Complete our simple KYC process by uploading your ID to ensure security and compliance.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-tykoo-blue/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-tykoo-blue font-bold text-xl">3</span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-tykoo-darkBlue">Fund Your Account</h3>
                <p className="text-gray-600">Deposit funds using bank transfer, credit card, or transfer existing cryptocurrencies.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-tykoo-blue/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-tykoo-blue font-bold text-xl">4</span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-tykoo-darkBlue">Start Trading</h3>
                <p className="text-gray-600">Buy, sell, and trade cryptocurrencies with our intuitive and powerful trading platform.</p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button className="bg-tykoo-blue text-white hover:bg-tykoo-darkBlue text-lg px-8 py-6" asChild>
                <Link to="/markets">
                  Start Trading Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Safety Tips */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-tykoo-darkBlue mb-6">Staying Safe in Crypto</h2>
                <p className="text-gray-600 mb-6">
                  While cryptocurrencies offer exciting opportunities, it's important to practice good security habits to protect your investments.
                </p>
                <ul className="space-y-4">
                  <li className="bg-gray-50 p-4 rounded-md flex">
                    <ChevronRight className="text-tykoo-blue flex-shrink-0 mt-1" />
                    <div className="ml-2">
                      <h3 className="font-semibold text-tykoo-darkBlue">Use Strong, Unique Passwords</h3>
                      <p className="text-sm text-gray-600">Create complex passwords and never reuse them across different platforms.</p>
                    </div>
                  </li>
                  
                  <li className="bg-gray-50 p-4 rounded-md flex">
                    <ChevronRight className="text-tykoo-blue flex-shrink-0 mt-1" />
                    <div className="ml-2">
                      <h3 className="font-semibold text-tykoo-darkBlue">Enable Two-Factor Authentication (2FA)</h3>
                      <p className="text-sm text-gray-600">Add an extra layer of security to your account with 2FA.</p>
                    </div>
                  </li>
                  
                  <li className="bg-gray-50 p-4 rounded-md flex">
                    <ChevronRight className="text-tykoo-blue flex-shrink-0 mt-1" />
                    <div className="ml-2">
                      <h3 className="font-semibold text-tykoo-darkBlue">Be Wary of Phishing Attempts</h3>
                      <p className="text-sm text-gray-600">Always verify the website URL and never click on suspicious links.</p>
                    </div>
                  </li>
                  
                  <li className="bg-gray-50 p-4 rounded-md flex">
                    <ChevronRight className="text-tykoo-blue flex-shrink-0 mt-1" />
                    <div className="ml-2">
                      <h3 className="font-semibold text-tykoo-darkBlue">Keep Software Updated</h3>
                      <p className="text-sm text-gray-600">Ensure your devices have the latest security patches and updates.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  alt="Digital security concept" 
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default LearnMore;
