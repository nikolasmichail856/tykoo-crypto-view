
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, ShieldCheck, ShieldAlert, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Security = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-tykoo-darkBlue to-tykoo-blue py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Security at TYKOO</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Your assets and data are our top priority. Discover how we're building
            the most secure cryptocurrency platform in the world.
          </p>
        </div>
      </section>

      {/* Security Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-tykoo-darkBlue mb-6">Our Security Approach</h2>
            <p className="text-gray-600">
              At TYKOO, security isn't just a feature—it's the foundation of everything we build.
              We employ multiple layers of protection to ensure your assets remain safe.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield size={48} className="text-tykoo-blue" />,
                title: "Asset Protection",
                description: "95% of user assets are stored in cold wallets isolated from internet access."
              },
              {
                icon: <ShieldCheck size={48} className="text-tykoo-blue" />,
                title: "Secure Infrastructure",
                description: "State-of-the-art data encryption and multi-location server redundancy."
              },
              {
                icon: <Lock size={48} className="text-tykoo-blue" />,
                title: "Account Safety",
                description: "Multi-factor authentication and advanced fraud detection systems."
              },
              {
                icon: <ShieldAlert size={48} className="text-tykoo-blue" />,
                title: "24/7 Monitoring",
                description: "Continuous surveillance of all platform activities to detect suspicious behavior."
              }
            ].map((item, idx) => (
              <Card key={idx} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-tykoo-darkBlue mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cold Storage */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1639152201720-5e536d254d81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                alt="Cold storage vault" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-tykoo-darkBlue mb-6">Advanced Cold Storage</h2>
              <p className="text-gray-600 mb-6">
                Cold storage is the most secure way to store cryptocurrency, as it keeps the majority of assets offline and away from potential online threats. At TYKOO, we store 95% of user assets in cold storage facilities.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ShieldCheck className="text-tykoo-green mt-1 mr-3 flex-shrink-0" />
                  <p>Physical vaults secured with military-grade encryption in undisclosed locations</p>
                </li>
                <li className="flex items-start">
                  <ShieldCheck className="text-tykoo-green mt-1 mr-3 flex-shrink-0" />
                  <p>Multi-signature technology requiring multiple approvals for asset movement</p>
                </li>
                <li className="flex items-start">
                  <ShieldCheck className="text-tykoo-green mt-1 mr-3 flex-shrink-0" />
                  <p>Geographically distributed storage across multiple continents for redundancy</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-tykoo-darkBlue mb-12 text-center">Account Security Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border border-gray-100 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="bg-tykoo-lightBlue p-3 rounded-full mr-4">
                    <Lock className="text-tykoo-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Two-Factor Authentication</h3>
                    <p className="text-gray-600">
                      Secure your account with an additional layer of security beyond just a password. Enable 2FA via authenticator app or SMS.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-100 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="bg-tykoo-lightBlue p-3 rounded-full mr-4">
                    <Shield className="text-tykoo-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Withdrawal Whitelist</h3>
                    <p className="text-gray-600">
                      Create a list of pre-approved addresses for withdrawals, preventing unauthorized transfers to unknown addresses.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-100 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="bg-tykoo-lightBlue p-3 rounded-full mr-4">
                    <ShieldAlert className="text-tykoo-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Anti-Phishing Code</h3>
                    <p className="text-gray-600">
                      Create a unique code that appears in all legitimate emails from TYKOO, helping you identify potential phishing attempts.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-100 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="bg-tykoo-lightBlue p-3 rounded-full mr-4">
                    <Lock className="text-tykoo-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Device Management</h3>
                    <p className="text-gray-600">
                      View and manage all devices that have accessed your account, with the ability to revoke access from any device.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Compliance */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-tykoo-darkBlue mb-8 text-center">Industry Compliance & Certifications</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl mb-2">ISO 27001 Certified</h3>
                <p className="text-gray-600">
                  TYKOO maintains ISO 27001 certification, the international standard for information security management.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl mb-2">SOC 2 Type II Compliant</h3>
                <p className="text-gray-600">
                  Our platform undergoes regular SOC 2 Type II audits, verifying our controls for security, availability, and confidentiality.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl mb-2">Bug Bounty Program</h3>
                <p className="text-gray-600">
                  We collaborate with ethical hackers worldwide through our bug bounty program to identify and address potential security issues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-tykoo-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Digital Assets?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Join millions of users who trust TYKOO with their cryptocurrency investments.
            Our security-first approach gives you peace of mind.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-tykoo-blue hover:bg-gray-100" asChild>
              <Link to="/">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-tykoo-blue" asChild>
              <Link to="/support">Contact Support</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Security;
