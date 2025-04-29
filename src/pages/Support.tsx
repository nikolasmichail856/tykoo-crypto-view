
import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Form, FormItem, FormLabel, FormControl, FormMessage, FormField } from '@/components/ui/form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FileTextIcon } from 'lucide-react';

// Form schema for validation
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
  resumeFile: z.instanceof(File).optional(),
});

const Support = () => {
  const { toast } = useToast();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const jobParam = searchParams.get('job');
  const jobPosition = searchParams.get('position');
  const jobTitle = location.state?.jobTitle || '';
  
  // State for file input
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  
  // Initialize form with react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: jobParam === 'application' ? `Job Application: ${jobTitle}` : '',
      message: '',
    },
  });

  // Update subject when jobTitle changes
  useEffect(() => {
    if (jobParam === 'application' && jobTitle) {
      form.setValue('subject', `Job Application: ${jobTitle}`);
    }
  }, [jobTitle, jobParam, form]);

  // Handle file change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Check if file is PDF
      if (file.type !== 'application/pdf') {
        setFileError('Please upload a PDF file');
        setSelectedFile(null);
        return;
      }
      
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setFileError('File size should not exceed 5MB');
        setSelectedFile(null);
        return;
      }
      
      setSelectedFile(file);
      setFileError(null);
    }
  };

  // Handle form submission
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Check if CV is required for job applications
    if (jobParam === 'application' && !selectedFile) {
      setFileError('Please attach your CV (PDF format)');
      return;
    }
    
    // Form submission would happen here with the file included
    console.log('Form values:', values);
    console.log('Selected file:', selectedFile);
    
    toast({
      title: jobParam === 'application' ? "Application submitted" : "Support request submitted",
      description: jobParam === 'application' 
        ? "Thank you for applying. We'll review your application and get back to you soon."
        : "We'll get back to you within 24 hours.",
    });
    
    // Reset form
    form.reset();
    setSelectedFile(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-tykoo-darkBlue mb-4">
              {jobParam === 'application' ? 'Apply for a Position' : 'Customer Support'}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {jobParam === 'application' 
                ? 'Submit your application for the selected position. We look forward to reviewing your qualifications.'
                : 'Need help with your account or transactions? Our team is here to assist you.'}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 mb-16">
            <Card className="lg:w-2/3">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-tykoo-darkBlue mb-6">
                  {jobParam === 'application' ? `Apply for: ${jobTitle}` : 'Contact Us'}
                </h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your name" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input 
                                type="email" 
                                placeholder="Enter your email" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="What is your inquiry about?" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel>Your Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder={jobParam === 'application' 
                                ? "Tell us why you're interested in this position and how your skills match our requirements" 
                                : "Please describe your issue in detail"} 
                              rows={6} 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    {/* File upload section - show only for job applications */}
                    {jobParam === 'application' && (
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Upload CV/Resume (PDF only, max 5MB) *</label>
                        <div className="flex items-center gap-2">
                          <div className="relative flex-1">
                            <Input
                              type="file"
                              accept=".pdf"
                              onChange={handleFileChange}
                              className="absolute inset-0 opacity-0 cursor-pointer"
                            />
                            <div className={`flex items-center border rounded-md px-4 py-2 ${selectedFile ? 'border-green-500 bg-green-50' : fileError ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}>
                              <FileTextIcon className={`mr-2 ${selectedFile ? 'text-green-500' : fileError ? 'text-red-500' : 'text-gray-500'}`} size={20} />
                              <span className={`truncate ${selectedFile ? 'text-green-700' : fileError ? 'text-red-700' : 'text-gray-500'}`}>
                                {selectedFile ? selectedFile.name : 'Choose a file...'}
                              </span>
                            </div>
                          </div>
                          {selectedFile && (
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button variant="outline" size="sm" type="button">
                                  Preview
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-80">
                                <div className="text-center p-2">
                                  <p className="font-medium">File: {selectedFile.name}</p>
                                  <p className="text-sm text-gray-500">Size: {(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                                  <p className="text-xs text-gray-400 mt-2">PDF preview not available</p>
                                </div>
                              </PopoverContent>
                            </Popover>
                          )}
                        </div>
                        {fileError && (
                          <p className="text-sm text-red-500">{fileError}</p>
                        )}
                        {selectedFile && (
                          <p className="text-sm text-green-500">File ready to upload</p>
                        )}
                      </div>
                    )}
                    
                    <Button 
                      type="submit" 
                      className="bg-tykoo-blue text-white hover:bg-tykoo-darkBlue w-full md:w-auto"
                    >
                      {jobParam === 'application' ? 'Submit Application' : 'Submit Request'}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            <div className="lg:w-1/3 space-y-6">
              {jobParam === 'application' ? (
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-tykoo-darkBlue mb-4">Application Tips</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex gap-2 items-start">
                        <span className="bg-tykoo-blue text-white rounded-full p-1 flex-shrink-0 mt-1">1</span>
                        <span>Tailor your resume to highlight relevant skills and experience</span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <span className="bg-tykoo-blue text-white rounded-full p-1 flex-shrink-0 mt-1">2</span>
                        <span>Be specific about your achievements and use concrete examples</span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <span className="bg-tykoo-blue text-white rounded-full p-1 flex-shrink-0 mt-1">3</span>
                        <span>Proofread your application carefully before submitting</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              ) : (
                <>
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
                </>
              )}

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
