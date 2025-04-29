
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold text-tykoo-darkBlue mb-6">Privacy Policy</h1>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              This Privacy Policy details how Finvault Exchange spółka z ograniczoną odpowiedzialnością ("TYKOO", "we", "us", or "our") collects, uses, and processes your personal data when you use our services. We are committed to protecting your privacy in accordance with the General Data Protection Regulation (GDPR), the Polish Act on the Protection of Personal Data, and other applicable privacy laws.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">2. Data Controller</h2>
            <p className="text-gray-700 mb-4">
              Finvault Exchange spółka z ograniczoną odpowiedzialnością, with its registered address at ul. Prezydenta Gabriela Narutowicza 40 / 1, 90-135 Łódź, Poland, is the data controller responsible for processing your personal data. Our Data Protection Officer can be contacted at privacy@tykoo.co.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">3. Data We Collect</h2>
            <p className="text-gray-700 mb-4">
              We collect and process the following categories of personal data:
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
              <li><strong>Identity and Contact Information:</strong> Name, date of birth, nationality, address, email address, phone number, and identification documents (passport, ID card, etc.).</li>
              <li><strong>Financial Information:</strong> Bank account details, transaction history, source of funds, and tax identification number.</li>
              <li><strong>Technical Data:</strong> IP address, browser type and version, location data, operating system, device information, and other technology identifiers on the devices you use to access our platform.</li>
              <li><strong>Usage Data:</strong> Information about how you use our website, products, and services.</li>
              <li><strong>Communication Data:</strong> Information contained in our communications with you, including emails, chat messages, and phone calls.</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">4. Legal Basis for Processing</h2>
            <p className="text-gray-700 mb-4">
              We process your personal data based on the following legal grounds:
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
              <li><strong>Contract Performance:</strong> Processing necessary for the performance of our contract with you or to take steps at your request before entering into a contract.</li>
              <li><strong>Legal Obligations:</strong> Processing necessary for compliance with legal obligations, particularly those related to anti-money laundering (AML), combating financing of terrorism (CFT), and know-your-customer (KYC) requirements under Polish and EU law.</li>
              <li><strong>Legitimate Interests:</strong> Processing necessary for our legitimate interests, such as preventing fraud, ensuring network security, and improving our services.</li>
              <li><strong>Consent:</strong> Where you have given consent to the processing of your personal data for specific purposes.</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">5. Purposes of Processing</h2>
            <p className="text-gray-700 mb-4">
              We process your personal data for the following purposes:
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
              <li>To verify your identity and establish and manage your account.</li>
              <li>To provide our cryptocurrency exchange services and process transactions.</li>
              <li>To comply with legal and regulatory obligations, including AML/CFT requirements.</li>
              <li>To detect and prevent fraud, unauthorized transactions, and other illegal activities.</li>
              <li>To improve our website, products, and services.</li>
              <li>To communicate with you regarding your account, transactions, and customer support.</li>
              <li>To send you marketing communications, where permitted by law and based on your preferences.</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">6. Data Retention</h2>
            <p className="text-gray-700 mb-4">
              We retain your personal data for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, regulatory, tax, accounting, or reporting requirements. In particular, under Polish AML regulations, we are required to retain certain customer data for at least 5 years from the end of our business relationship.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">7. Data Sharing</h2>
            <p className="text-gray-700 mb-4">
              We may share your personal data with the following categories of recipients:
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
              <li><strong>Service Providers:</strong> Third-party service providers who help us operate our business, such as cloud hosting providers, payment processors, and customer support services.</li>
              <li><strong>Regulatory Authorities:</strong> Financial regulatory bodies, law enforcement agencies, and other public authorities when required by law or to protect our rights.</li>
              <li><strong>Professional Advisors:</strong> Lawyers, auditors, and consultants who provide professional services to us.</li>
              <li><strong>Business Partners:</strong> Trusted partners who assist us in providing our services or who partner with us for joint marketing activities.</li>
            </ul>
            <p className="text-gray-700 mt-4">
              When we transfer your personal data outside the European Economic Area (EEA), we ensure appropriate safeguards are in place in accordance with GDPR requirements.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">8. Your Rights</h2>
            <p className="text-gray-700 mb-4">
              Under the GDPR and Polish data protection law, you have the following rights:
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
              <li><strong>Right of Access:</strong> The right to request information about your personal data we process.</li>
              <li><strong>Right to Rectification:</strong> The right to request correction of inaccurate data or completion of incomplete data.</li>
              <li><strong>Right to Erasure:</strong> The right to request deletion of your personal data in certain circumstances.</li>
              <li><strong>Right to Restriction of Processing:</strong> The right to request restriction of processing of your personal data in certain circumstances.</li>
              <li><strong>Right to Data Portability:</strong> The right to receive your personal data in a structured, commonly used, and machine-readable format.</li>
              <li><strong>Right to Object:</strong> The right to object to processing based on legitimate interests or for direct marketing purposes.</li>
              <li><strong>Right to Withdraw Consent:</strong> The right to withdraw consent where processing is based on consent.</li>
              <li><strong>Right to Lodge a Complaint:</strong> The right to lodge a complaint with the Polish Data Protection Authority (Urząd Ochrony Danych Osobowych) or another relevant supervisory authority.</li>
            </ul>
            <p className="text-gray-700 mt-4">
              To exercise your rights, please contact us at privacy@tykoo.co.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">9. Cookies and Similar Technologies</h2>
            <p className="text-gray-700 mb-4">
              Our website uses cookies and similar technologies to enhance user experience, analyze website traffic, and personalize content. For detailed information, please refer to our <a href="/cookies" className="text-tykoo-blue hover:underline">Cookie Policy</a>.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">10. Security Measures</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage. These measures include encryption, access controls, and regular security assessments.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">11. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes through our website or by other appropriate means.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">12. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy or our data processing practices, please contact our Data Protection Officer at:
            </p>
            <p className="text-gray-700">
              Email: <a href="mailto:privacy@tykoo.co" className="text-tykoo-blue hover:underline">privacy@tykoo.co</a>
            </p>
            <p className="text-gray-700">
              Address: ul. Prezydenta Gabriela Narutowicza 40 / 1, 90-135 Łódź, Poland
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

export default Privacy;
