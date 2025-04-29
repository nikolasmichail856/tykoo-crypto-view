
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Search, HelpCircle, AlertCircle, PlusCircle } from "lucide-react";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategories = [
    {
      name: "Account",
      icon: <HelpCircle className="h-6 w-6 text-tykoo-blue" />,
      questions: [
        {
          question: "How do I create a TYKOO account?",
          answer: "To create a TYKOO account, click on the 'Sign Up' button in the top right corner of our homepage. Follow the prompts to provide your email, set a secure password, and complete the verification process."
        },
        {
          question: "How do I verify my identity on TYKOO?",
          answer: "Identity verification requires submitting a government-issued photo ID and proof of address. Navigate to the 'Account' section after logging in, select 'Verification', and follow the instructions to upload the required documents."
        },
        {
          question: "I forgot my password. How do I reset it?",
          answer: "Click on 'Sign In' and then select 'Forgot Password'. Enter the email associated with your account, and we'll send you a password reset link. Follow the instructions in the email to create a new password."
        }
      ]
    },
    {
      name: "Deposits & Withdrawals",
      questions: [
        {
          question: "How do I deposit cryptocurrency to my TYKOO account?",
          answer: "Log in to your account, navigate to 'Wallet', select 'Deposit', and choose the cryptocurrency you wish to deposit. You'll be provided with a unique wallet address for that specific cryptocurrency. Send your funds to that address."
        },
        {
          question: "How long do deposits take to process?",
          answer: "Cryptocurrency deposits typically require a certain number of blockchain confirmations before they appear in your account. For Bitcoin, this generally takes about 30-60 minutes (3 confirmations), Ethereum around 5 minutes (15 confirmations), and USDC about 5 minutes (15 confirmations on Ethereum)."
        },
        {
          question: "What are the withdrawal fees?",
          answer: "Withdrawal fees vary by cryptocurrency and network conditions. Bitcoin withdrawals typically cost around 0.0005 BTC, Ethereum withdrawals around 0.005 ETH, and USDC withdrawals around $1-2 worth of the token. You can view the exact fee before confirming your withdrawal."
        }
      ]
    },
    {
      name: "Trading",
      questions: [
        {
          question: "What cryptocurrencies can I trade on TYKOO?",
          answer: "TYKOO currently supports trading for Bitcoin (BTC), Ethereum (ETH), and USD Coin (USDC). We focus on providing reliable and secure trading for these major cryptocurrencies."
        },
        {
          question: "How are trading fees calculated?",
          answer: "TYKOO uses a maker-taker fee model. Maker fees (adding liquidity to the order book) are 0.20%, and taker fees (removing liquidity from the order book) are 0.30%. High-volume traders may qualify for fee discounts."
        },
        {
          question: "Is there a minimum trade amount?",
          answer: "Yes, the minimum trade amount is 0.001 BTC for Bitcoin pairs, 0.01 ETH for Ethereum pairs, and 10 USDC for USDC pairs. These minimums help ensure efficient transaction processing."
        }
      ]
    },
    {
      name: "Security",
      questions: [
        {
          question: "How does TYKOO keep my funds secure?",
          answer: "TYKOO employs industry-leading security measures including 95% cold storage of user funds, two-factor authentication, address whitelisting, and regular security audits by third-party experts."
        },
        {
          question: "How can I enable two-factor authentication?",
          answer: "Log in to your account, go to 'Account' > 'Security' > 'Two-Factor Authentication'. Follow the instructions to set up 2FA using an authenticator app like Google Authenticator or Authy."
        },
        {
          question: "What should I do if I notice suspicious activity on my account?",
          answer: "If you notice any suspicious activity, immediately change your password, ensure 2FA is enabled, and contact our support team through the Support page. We recommend also reviewing your API keys and revoking any that you don't recognize."
        }
      ]
    }
  ];

  const filteredFAQs = searchTerm 
    ? faqCategories.map(category => ({
        ...category,
        questions: category.questions.filter(q => 
          q.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
          q.answer.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })).filter(category => category.questions.length > 0)
    : faqCategories;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Enhanced Hero Section */}
      <div className="bg-gradient-to-r from-tykoo-darkBlue to-tykoo-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Frequently Asked Questions
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-gray-100 opacity-90">
            Find quick answers to common questions about TYKOO's cryptocurrency exchange services.
          </p>
          
          {/* Improved Search Bar */}
          <div className="relative max-w-md mx-auto bg-white rounded-full shadow-lg overflow-hidden">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-tykoo-blue" />
            <Input
              type="text"
              placeholder="Search for answers..."
              className="pl-12 pr-4 py-6 border-none focus-visible:ring-tykoo-blue"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
      
      <div className="flex-grow bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <AlertCircle className="h-16 w-16 text-tykoo-blue mx-auto mb-4 opacity-70" />
              <p className="text-xl text-gray-600">No results found for "{searchTerm}"</p>
              <p className="mt-2 text-gray-500">Try a different search term or browse all categories</p>
            </div>
          ) : (
            <div className="space-y-12">
              {filteredFAQs.map((category, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex items-center space-x-3 mb-4">
                    {category.icon || <HelpCircle className="h-6 w-6 text-tykoo-blue" />}
                    <h2 className="text-2xl font-bold text-tykoo-darkBlue">{category.name}</h2>
                  </div>
                  <Card className="shadow-md rounded-xl overflow-hidden border-t-4 border-t-tykoo-blue">
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((faq, faqIndex) => (
                        <AccordionItem value={`${index}-${faqIndex}`} key={faqIndex} className="border-b border-gray-200 last:border-0">
                          <AccordionTrigger className="px-6 py-5 text-left font-medium hover:bg-gray-50 hover:no-underline text-tykoo-darkBlue">
                            <div className="flex items-center">
                              <PlusCircle className="h-5 w-5 text-tykoo-blue mr-3 flex-shrink-0" />
                              <span>{faq.question}</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-5 pt-2 text-gray-600 bg-gray-50">
                            <div className="pl-8">
                              {faq.answer}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </Card>
                </div>
              ))}
            </div>
          )}
          
          {/* Enhanced CTA Section */}
          <div className="mt-16 text-center bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-tykoo-darkBlue">Can't find what you're looking for?</h3>
            <p className="mb-6 text-gray-600">Our support team is ready to help you with any questions you might have.</p>
            <Button 
              className="bg-tykoo-blue text-white hover:bg-tykoo-darkBlue px-8 py-6 text-lg rounded-full transition-all shadow-lg hover:shadow-xl" 
              asChild
            >
              <a href="/support" className="flex items-center">
                <HelpCircle className="mr-2" />
                Contact Support
              </a>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
