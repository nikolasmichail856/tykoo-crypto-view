
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, BriefcaseIcon, UsersIcon, GraduationCap } from 'lucide-react';

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-tykoo-darkBlue to-tykoo-blue py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Build the future of finance with us. Discover career opportunities at TYKOO and help us revolutionize the cryptocurrency industry.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-tykoo-darkBlue mb-12 text-center">Why Join TYKOO?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <UsersIcon size={32} className="text-tykoo-blue" />,
                title: "Collaborative Culture",
                description: "Work with talented individuals from diverse backgrounds in an environment that values teamwork and mutual support."
              },
              {
                icon: <GraduationCap size={32} className="text-tykoo-blue" />,
                title: "Growth Opportunities",
                description: "Continuous learning is part of our DNA. We provide resources and support for professional development."
              },
              {
                icon: <BriefcaseIcon size={32} className="text-tykoo-blue" />,
                title: "Meaningful Impact",
                description: "Your work directly contributes to making cryptocurrency accessible to millions worldwide."
              }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-tykoo-darkBlue mb-12 text-center">Our Benefits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Competitive salary and equity packages",
              "Flexible work arrangements with remote options",
              "Comprehensive health insurance coverage",
              "Generous vacation policy",
              "Retirement savings plan with company match",
              "Professional development budget"
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-center">
                <CheckCircle2 className="text-tykoo-green mr-3 flex-shrink-0" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-tykoo-darkBlue mb-12 text-center">Open Positions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Cybersecurity Specialist",
                department: "Security",
                location: "Remote",
                type: "Full-time"
              },
              {
                title: "Customer Support Specialist",
                department: "Operations",
                location: "London / Remote",
                type: "Full-time"
              }
            ].map((position, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2">{position.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-tykoo-lightGray text-tykoo-darkBlue px-3 py-1 rounded-full text-sm">{position.department}</span>
                    <span className="bg-tykoo-lightGray text-tykoo-darkBlue px-3 py-1 rounded-full text-sm">{position.location}</span>
                    <span className="bg-tykoo-lightGray text-tykoo-darkBlue px-3 py-1 rounded-full text-sm">{position.type}</span>
                  </div>
                  <Button className="w-full bg-tykoo-blue hover:bg-tykoo-lightBlue">View Position</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-tykoo-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Can't Find What You're Looking For?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            We're always looking for talented individuals to join our team. Send us your resume and we'll be in touch.
          </p>
          <Button size="lg" className="bg-white text-tykoo-blue hover:bg-gray-100">
            Contact Us
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
