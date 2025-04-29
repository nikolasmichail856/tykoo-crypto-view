
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold text-tykoo-darkBlue mb-6">Terms and Conditions</h1>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              These Terms and Conditions govern your use of TYKOO's services, provided by Finvault Exchange spółka z ograniczoną odpowiedzialnością, a company registered in Poland with its registered address at ul. Prezydenta Gabriela Narutowicza 40 / 1, 90-135 Łódź. By accessing or using our services, you agree to be bound by these Terms.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">2. Regulatory Compliance</h2>
            <p className="text-gray-700 mb-4">
              TYKOO operates as a virtual asset service provider (VASP) authorized and regulated under Polish law. We comply with all applicable regulations, including:
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
              <li>Polish Act on Counteracting Money Laundering and Terrorist Financing</li>
              <li>Regulation of the Minister of Finance on the Register of Virtual Currency Activities</li>
              <li>EU regulations concerning the prevention of money laundering (AML) and combating the financing of terrorism (CFT)</li>
              <li>General Data Protection Regulation (GDPR)</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">3. Eligibility</h2>
            <p className="text-gray-700 mb-4">
              To use our services, you must be at least 18 years of age and have the legal capacity to enter into binding contracts. You must not be a resident of or located in any jurisdiction where the use of our services would be prohibited by applicable laws or regulations.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">4. Account Registration and Security</h2>
            <p className="text-gray-700 mb-4">
              When registering for an account, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. We implement strict KYC (Know Your Customer) and AML procedures in accordance with Polish and EU regulations.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">5. Trading Rules</h2>
            <p className="text-gray-700 mb-4">
              All trading activities on our platform are conducted according to Polish financial regulations. You acknowledge that cryptocurrency trading involves significant risks, including market volatility and potential loss of funds. We do not provide investment advice, and all trading decisions are made at your own risk.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">6. Fees</h2>
            <p className="text-gray-700 mb-4">
              We charge fees for our services as specified in our Fee Schedule, which may be updated from time to time. By using our services, you agree to pay all applicable fees. All fees are displayed in the currency of the transaction.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">7. Privacy Policy</h2>
            <p className="text-gray-700 mb-4">
              Our Privacy Policy governs the collection, use, and disclosure of your personal information. By using our services, you consent to our privacy practices as described in our Privacy Policy.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">8. Prohibited Activities</h2>
            <p className="text-gray-700 mb-4">
              You agree not to use our services for any illegal purposes, including money laundering, terrorist financing, tax evasion, or fraudulent activities. Violation of these prohibitions may result in immediate termination of your account and potential reporting to relevant authorities as required by Polish law.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">9. Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              All content on our platform, including text, graphics, logos, and software, is our property or the property of our licensors and is protected by Polish and international intellectual property laws.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">10. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              To the maximum extent permitted by applicable law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, arising from your use of our services.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">11. Amendments</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting on our website. Your continued use of our services after such posting constitutes your acceptance of the modified Terms.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">12. Governing Law</h2>
            <p className="text-gray-700 mb-4">
              These Terms shall be governed by and construed in accordance with the laws of Poland. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the Polish courts.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">13. Contact</h2>
            <p className="text-gray-700">
              If you have any questions about these Terms, please contact us at: 
              <a href="mailto:contact@tykoo.co" className="text-tykoo-blue hover:underline ml-1">contact@tykoo.co</a>
            </p>
            <p className="text-gray-700 mt-4">
              Last updated: April 29, 2025
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
