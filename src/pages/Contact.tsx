
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { MapPin } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a backend
    console.log({ name, email, message });
    
    // Show success toast
    toast({
      title: "Message sent",
      description: "We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-tykoo-darkBlue to-tykoo-blue py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're here to help. Reach out with any questions or concerns.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-tykoo-darkBlue mb-8">Get In Touch</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <Input 
                    id="name" 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                    placeholder="Your email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <Textarea 
                    id="message" 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    required 
                    placeholder="How can we help you?"
                    rows={5}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-tykoo-blue text-white hover:bg-tykoo-darkBlue"
                >
                  Send Message
                </Button>
              </form>
            </div>
            
            <div className="lg:w-1/2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-tykoo-darkBlue mb-8">Our Location</h2>
                {/* Map iframe - replace with a proper map component in a real app */}
                <div className="rounded-lg overflow-hidden shadow-lg h-80">
                  <iframe 
                    title="TYKOO Office Location"
                    width="100%" 
                    height="100%" 
                    frameBorder="0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.808700094421!2d19.4650086!3d51.7731973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471a34d85a7d0c19%3A0x31a2f61f1437ba84!2sPrezydenta%20Gabriela%20Narutowicza%2040%2C%2090-135%20%C5%81%C3%B3d%C5%BA%2C%20Poland!5e0!3m2!1sen!2sus!4v1714578677067!5m2!1sen!2sus"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-tykoo-darkBlue mb-4">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-tykoo-blue mt-1" />
                      <div>
                        <p className="font-medium">Address:</p>
                        <p className="text-gray-600">ul. Prezydenta Gabriela Narutowicza 40 / 1</p>
                        <p className="text-gray-600">90-135 Łódź, Poland</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tykoo-blue">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <div>
                        <p className="font-medium">Phone:</p>
                        <p className="text-gray-600">+48 123 456 789</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tykoo-blue">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      <div>
                        <p className="font-medium">Email:</p>
                        <p className="text-gray-600">contact@tykoo.co</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tykoo-blue">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <div>
                        <p className="font-medium">Business Hours:</p>
                        <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
