
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Globe, Shield, Users, Award, Star } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-tykoo-darkBlue to-tykoo-blue py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About TYKOO</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Building the future of digital finance through secure, accessible cryptocurrency solutions since 2018.
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
                Founded in 2018, TYKOO began as a small team of blockchain enthusiasts with a big vision: 
                to make cryptocurrency accessible to everyone. What started in a small office in Łódź, Poland 
                has grown into a trusted platform serving clients across Europe.
              </p>
              <p className="text-gray-700 mb-6">
                Through market volatility and regulatory changes, we've remained committed to our core 
                principles of security, transparency, and user-focused design. Today, TYKOO processes 
                over €75 million in monthly trading volume with over 350,000 registered users.
              </p>
              <p className="text-gray-700">
                Our mission continues: to create a secure, transparent, and user-friendly platform that 
                bridges the gap between traditional finance and the crypto economy of tomorrow.
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
          <h2 className="text-3xl font-bold text-tykoo-darkBlue mb-10 text-center">Our Impact</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { figure: "€75M+", label: "Monthly Trading Volume", icon: <Globe className="h-8 w-8 text-tykoo-blue mb-3" /> },
              { figure: "350,000+", label: "Registered Users", icon: <Users className="h-8 w-8 text-tykoo-blue mb-3" /> },
              { figure: "24/7", label: "Customer Support", icon: <Shield className="h-8 w-8 text-tykoo-blue mb-3" /> },
              { figure: "20+", label: "Cryptocurrencies Supported", icon: <Award className="h-8 w-8 text-tykoo-blue mb-3" /> }
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
                description: "We implement the highest standards of security to protect our users' assets and data. Our multi-layered security infrastructure includes cold storage for 95% of assets, regular security audits, and advanced encryption protocols."
              },
              {
                title: "Transparency",
                description: "We believe in complete transparency in all our operations and communications. We provide real-time trading data, clear fee structures, and regular updates about our operations and regulatory compliance."
              },
              {
                title: "Accessibility",
                description: "We're committed to making cryptocurrency accessible to everyone, regardless of background. Our platform is designed to be intuitive for beginners while offering advanced features for experienced traders."
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

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-tykoo-darkBlue mb-10 text-center">Our Leadership Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Aleksander Nowak",
                title: "Chief Executive Officer",
                bio: "Former fintech executive with 15+ years of experience in digital banking and blockchain technologies.",
                image: "https://source.unsplash.com/random/300x300/?portrait&man"
              },
              {
                name: "Marta Kowalska",
                title: "Chief Technology Officer",
                bio: "Blockchain developer and security expert with previous experience at major European tech companies.",
                image: "https://source.unsplash.com/random/300x300/?portrait&woman"
              },
              {
                name: "Tomasz Wójcik",
                title: "Chief Financial Officer",
                bio: "Certified financial analyst with extensive experience in regulatory compliance and financial operations.",
                image: "https://source.unsplash.com/random/300x300/?portrait&man&2"
              }
            ].map((person, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={person.image} 
                    alt={person.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-1 text-tykoo-darkBlue">{person.name}</h3>
                  <p className="text-tykoo-blue font-medium mb-3">{person.title}</p>
                  <p className="text-gray-700">{person.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-tykoo-darkBlue mb-10 text-center">Achievements & Recognition</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                year: "2023",
                achievement: "Named 'Most Secure Cryptocurrency Exchange' by European Fintech Awards",
                icon: <Star className="h-8 w-8 text-yellow-500" />
              },
              {
                year: "2022",
                achievement: "Received Polish Financial Technology Innovation Award",
                icon: <Award className="h-8 w-8 text-blue-500" />
              },
              {
                year: "2021",
                achievement: "Expanded services to 12 European countries",
                icon: <Globe className="h-8 w-8 text-green-500" />
              },
              {
                year: "2020",
                achievement: "Reached 100,000 user milestone",
                icon: <Users className="h-8 w-8 text-purple-500" />
              }
            ].map((achievement, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 flex items-start">
                  <div className="mr-4 mt-1">{achievement.icon}</div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-tykoo-darkBlue">{achievement.year}</h3>
                    <p className="text-gray-700">{achievement.achievement}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-gradient-to-r from-tykoo-blue to-tykoo-darkBlue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us on Our Journey</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Be part of the financial revolution and help us build a more inclusive, 
            accessible future for digital finance in Europe and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-tykoo-blue hover:bg-gray-100" asChild>
              <Link to="/careers">Join Our Team</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-tykoo-blue" asChild>
              <a href="https://app.tykoo.co/register" target="_blank" rel="noopener noreferrer">
                Create an Account
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
