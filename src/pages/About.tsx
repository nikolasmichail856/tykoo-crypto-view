
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Globe, Shield, Users, Rocket, Star } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-tykoo-darkBlue to-tykoo-blue py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About TYKOO</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Building accessible cryptocurrency solutions for everyone, one step at a time.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-tykoo-darkBlue mb-6">Our Story</h2>
              <p className="text-gray-700 mb-6">
                Founded in 2022, TYKOO began as a small team of three friends with a shared vision: 
                to simplify cryptocurrency for everyday users. What started in a co-working space in Łódź, Poland 
                has grown into an exciting startup ready to make its mark on the European crypto scene.
              </p>
              <p className="text-gray-700 mb-6">
                We believe that cryptocurrency shouldn't be complicated. Our founding team combines expertise in 
                blockchain technology, user experience design, and financial compliance to create solutions that 
                bridge the gap between traditional finance and digital assets.
              </p>
              <p className="text-gray-700">
                Today, we're building our platform with a focus on security, transparency, and user-friendliness 
                while connecting with early adopters who share our vision for the future of finance.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <img 
                src="/lovable-uploads/9b337a40-b534-4d13-b11b-d0425a4509f7.png" 
                alt="TYKOO Logo" 
                className="w-3/4 h-auto max-w-md shadow-lg rounded-lg" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-tykoo-darkBlue mb-10 text-center">Our Progress</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { figure: "€250K+", label: "Seed Funding Secured", icon: <Rocket className="h-8 w-8 text-tykoo-blue mb-3" /> },
              { figure: "1,200+", label: "Beta Users", icon: <Users className="h-8 w-8 text-tykoo-blue mb-3" /> },
              { figure: "8", label: "Team Members", icon: <Shield className="h-8 w-8 text-tykoo-blue mb-3" /> },
              { figure: "5+", label: "Cryptocurrencies Supported", icon: <Globe className="h-8 w-8 text-tykoo-blue mb-3" /> }
            ].map((stat, idx) => (
              <Card key={idx} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  {stat.icon}
                  <h3 className="text-3xl font-bold text-tykoo-darkBlue">{stat.figure}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-tykoo-darkBlue mb-10 text-center">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Security",
                description: "We're building with security as our foundation. Even as a startup, we implement industry best practices for the protection of user assets and data, working with security experts to ensure our platform is built to the highest standards."
              },
              {
                title: "Transparency",
                description: "We believe in open communication with our community. We share our development progress, clearly explain how our platform works, and maintain honest dialogue with users about both our achievements and challenges."
              },
              {
                title: "Accessibility",
                description: "Cryptocurrency doesn't need to be complicated. We're designing our platform with intuitive interfaces and clear guidance so that anyone, regardless of their technical background, can confidently participate in the digital economy."
              }
            ].map((value, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow h-full">
                <CardContent className="pt-6 flex flex-col h-full">
                  <h3 className="font-bold text-xl mb-3 text-tykoo-darkBlue">{value.title}</h3>
                  <p className="text-gray-700 flex-grow">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA - Removed waitlist button */}
      <section className="bg-gradient-to-r from-tykoo-blue to-tykoo-darkBlue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            We're just getting started, and we'd love for you to be part of our journey. 
            Explore opportunities to join our growing team.
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="bg-white text-tykoo-blue hover:bg-gray-100" asChild>
              <Link to="/careers">Join Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
