
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { CheckCircle2, BriefcaseIcon, UsersIcon, GraduationCap, MapPinIcon, FileTextIcon, ExternalLink } from 'lucide-react';

interface JobPosition {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const jobPositions: JobPosition[] = [
    {
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "Lodz, Poland",
      type: "Full-time",
      description: "Join our security team to help protect our platform and user assets from evolving cyber threats in the cryptocurrency space.",
      responsibilities: [
        "Implement and maintain security systems to protect sensitive customer and company data",
        "Conduct regular security assessments and penetration testing",
        "Develop security protocols and best practices for the organization",
        "Monitor systems for security breaches and investigate incidents",
        "Stay updated with latest cybersecurity trends and threats in blockchain technology"
      ],
      requirements: [
        "Bachelor's degree in Computer Science, Cybersecurity, or related field",
        "3+ years of experience in cybersecurity, particularly in financial or blockchain sectors",
        "Proficiency in security tools and frameworks",
        "Knowledge of blockchain security best practices",
        "Relevant certifications (CISSP, CEH, Security+) preferred"
      ],
      benefits: [
        "Competitive salary and equity packages",
        "Flexible work arrangements with remote options",
        "Comprehensive health insurance coverage",
        "Generous vacation policy",
        "Professional development budget",
        "Company-sponsored events and team building activities"
      ]
    },
    {
      title: "Customer Support Specialist",
      department: "Operations",
      location: "Lodz, Poland",
      type: "Full-time",
      description: "Help our users navigate the cryptocurrency world by providing exceptional support and resolving their inquiries efficiently.",
      responsibilities: [
        "Respond to customer inquiries via email, chat, and phone in a timely manner",
        "Troubleshoot and resolve customer issues related to our platform",
        "Document customer interactions and maintain support records",
        "Identify common issues and suggest process improvements",
        "Collaborate with other teams to enhance customer experience"
      ],
      requirements: [
        "Bachelor's degree or equivalent experience",
        "1+ years of customer service experience, preferably in fintech or crypto",
        "Excellent communication skills in English (additional languages are a plus)",
        "Basic understanding of cryptocurrency concepts",
        "Strong problem-solving abilities and patient demeanor"
      ],
      benefits: [
        "Competitive salary and performance bonuses",
        "Flexible work arrangements with remote options",
        "Comprehensive health insurance coverage",
        "Generous vacation policy",
        "Continuous learning and development opportunities",
        "Cryptocurrency benefits package"
      ]
    }
  ];

  const handleViewPosition = (job: JobPosition) => {
    setSelectedJob(job);
    setIsDialogOpen(true);
  };

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
            {jobPositions.map((position, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2">{position.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-tykoo-lightGray text-tykoo-darkBlue px-3 py-1 rounded-full text-sm flex items-center gap-1">
                      <BriefcaseIcon size={14} />
                      {position.department}
                    </span>
                    <span className="bg-tykoo-lightGray text-tykoo-darkBlue px-3 py-1 rounded-full text-sm flex items-center gap-1">
                      <MapPinIcon size={14} />
                      {position.location}
                    </span>
                    <span className="bg-tykoo-lightGray text-tykoo-darkBlue px-3 py-1 rounded-full text-sm flex items-center gap-1">
                      <FileTextIcon size={14} />
                      {position.type}
                    </span>
                  </div>
                  <p className="mb-4 text-gray-600 line-clamp-2">{position.description}</p>
                  <Button 
                    className="w-full bg-tykoo-blue hover:bg-tykoo-lightBlue flex items-center justify-center gap-2" 
                    onClick={() => handleViewPosition(position)}
                  >
                    View Position
                    <ExternalLink size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          {selectedJob && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-tykoo-darkBlue">{selectedJob.title}</DialogTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-tykoo-lightGray text-tykoo-darkBlue px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <BriefcaseIcon size={14} />
                    {selectedJob.department}
                  </span>
                  <span className="bg-tykoo-lightGray text-tykoo-darkBlue px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <MapPinIcon size={14} />
                    {selectedJob.location}
                  </span>
                  <span className="bg-tykoo-lightGray text-tykoo-darkBlue px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <FileTextIcon size={14} />
                    {selectedJob.type}
                  </span>
                </div>
              </DialogHeader>
              <DialogDescription className="mt-4">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg text-tykoo-darkBlue mb-2">About the Role</h3>
                    <p className="text-gray-700">{selectedJob.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg text-tykoo-darkBlue mb-2">Responsibilities</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      {selectedJob.responsibilities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg text-tykoo-darkBlue mb-2">Requirements</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      {selectedJob.requirements.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg text-tykoo-darkBlue mb-2">Benefits</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      {selectedJob.benefits.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4">
                    <Button className="w-full bg-tykoo-blue hover:bg-tykoo-lightBlue">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </DialogDescription>
            </>
          )}
        </DialogContent>
      </Dialog>

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
