
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Support = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Support request submitted",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-tykoo-darkBlue mb-4">Customer Support</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Need help with your account or transactions? Our team is here to assist you.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 mb-16">
            <Card className="lg:w-2/3">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-tykoo-darkBlue mb-6">Contact Us</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        placeholder="Enter your name" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        placeholder="Enter your email" 
                        required 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      value={formData.subject} 
                      onChange={handleChange} 
                      placeholder="What is your inquiry about?" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Your Message</label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange} 
                      placeholder="Please describe your issue in detail" 
                      required 
                      rows={6} 
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="bg-tykoo-blue text-white hover:bg-tykoo-darkBlue w-full md:w-auto"
                  >
                    Submit Request
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="lg:w-1/3 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-tykoo-darkBlue mb-4">Support Hours</h3>
                  <p className="text-gray-600 mb-4">Our support team is available:</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Monday - Friday:</span>
                      <span>9:00 AM - 8:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Saturday:</span>
                      <span>10:00 AM - 6:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-tykoo-darkBlue mb-4">Response Time</h3>
                  <p className="text-gray-600">
                    We strive to respond to all inquiries within 24 hours. For urgent matters, please indicate in your subject line.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-tykoo-darkBlue mb-4">Visit FAQ</h3>
                  <p className="text-gray-600 mb-4">
                    Save time by checking our frequently asked questions for quick answers.
                  </p>
                  <Button variant="outline" className="w-full border-tykoo-blue text-tykoo-blue hover:bg-tykoo-blue hover:text-white" asChild>
                    <a href="/faq">View FAQ</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Support;
