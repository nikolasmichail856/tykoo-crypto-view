
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-tykoo-darkBlue to-tykoo-blue py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About TYKOO</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Building the future of digital finance through secure, accessible cryptocurrency solutions.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-tykoo-darkBlue mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-6">
                At TYKOO, we believe in a world where financial freedom is accessible to everyone. 
                Our mission is to create a secure, transparent, and user-friendly platform that bridges 
                the gap between traditional finance and the crypto economy.
              </p>
              <p className="text-gray-700">
                We're dedicated to demystifying cryptocurrency and making it accessible to people from 
                all walks of life, regardless of their technical expertise or financial background.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <img 
                src="/lovable-uploads/3f59da82-63ec-42e5-8290-b796258d700c.png" 
                alt="TYKOO Logo" 
                className="h-auto w-auto max-w-full rounded-lg shadow-lg" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-tykoo-darkBlue mb-10 text-center">Our Leadership Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Chen",
                role: "CEO & Co-founder",
                bio: "Former fintech executive with 15+ years experience in digital payment systems.",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              },
              {
                name: "Sarah Johnson",
                role: "CTO",
                bio: "Blockchain developer since 2013, previously led engineering at major crypto exchanges.",
                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              },
              {
                name: "Michael Lee",
                role: "Chief Security Officer",
                bio: "Cybersecurity expert with background in financial services protection.",
                avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              }
            ].map((member, idx) => (
              <Card key={idx} className="overflow-hidden">
                <div className="flex justify-center pt-6">
                  <img 
                    src={member.avatar} 
                    alt={member.name} 
                    className="h-32 w-32 rounded-full object-cover" 
                  />
                </div>
                <CardContent className="text-center pt-4">
                  <h3 className="font-bold text-xl">{member.name}</h3>
                  <p className="text-tykoo-blue font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-tykoo-darkBlue mb-10 text-center">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Security",
                description: "We implement the highest standards of security to protect our users' assets and data."
              },
              {
                title: "Transparency",
                description: "We believe in complete transparency in all our operations and communications."
              },
              {
                title: "Accessibility",
                description: "We're committed to making cryptocurrency accessible to everyone, regardless of background."
              }
            ].map((value, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl mb-3 text-tykoo-darkBlue">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-tykoo-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us on Our Journey</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Be part of the financial revolution and help us build a more inclusive, accessible future.
          </p>
          <Button size="lg" className="bg-white text-tykoo-blue hover:bg-gray-100">
            Join Our Team
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
