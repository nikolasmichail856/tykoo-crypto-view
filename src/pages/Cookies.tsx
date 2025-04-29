
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Cookies = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold text-tykoo-darkBlue mb-6">Cookie Policy</h1>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              This Cookie Policy explains how Finvault Exchange spółka z ograniczoną odpowiedzialnością ("TYKOO", "we", "us", or "our") uses cookies and similar technologies on our website. This policy should be read alongside our Privacy Policy, which explains how we use your personal data.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">2. What Are Cookies?</h2>
            <p className="text-gray-700 mb-4">
              Cookies are small text files that are stored on your browser or device by websites, apps, online media, and advertisements. They are used to remember your preferences, maintain your session, and provide us with information about how you use our website.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">3. Types of Cookies We Use</h2>
            <p className="text-gray-700 mb-4">
              We use the following types of cookies on our platform:
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
              <li><strong>Strictly Necessary Cookies:</strong> These cookies are essential for you to browse our website and use its features, such as accessing secure areas of the site and making transactions. Without these cookies, our services cannot be provided.</li>
              <li><strong>Performance Cookies:</strong> These cookies collect information about how you use our website, such as which pages you visit most frequently and if you encounter any errors. The data collected is aggregated and anonymous.</li>
              <li><strong>Functionality Cookies:</strong> These cookies allow our website to remember choices you make (such as your preferred language or the region you are in) and provide enhanced, more personal features.</li>
              <li><strong>Targeting/Advertising Cookies:</strong> These cookies are used to deliver advertisements more relevant to you and your interests, limit the number of times you see an advertisement, and help measure the effectiveness of advertising campaigns.</li>
              <li><strong>Analytics Cookies:</strong> These cookies collect information that helps us understand how our website is being used, how effective marketing campaigns are, and how to improve our services.</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">4. Third-Party Cookies</h2>
            <p className="text-gray-700 mb-4">
              We may allow third parties to place cookies on your device for advertising and analytics purposes. These third parties include:
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
              <li>Google Analytics (for website analytics)</li>
              <li>Social media platforms (to enable features like "Share" or "Like" buttons)</li>
              <li>Advertising networks (to deliver targeted advertisements)</li>
              <li>Security providers (to ensure the security of our platform)</li>
            </ul>
            <p className="text-gray-700 mb-4">
              These third parties may use cookies, web beacons, and similar technologies to collect information about your activities on our website and other sites. They may use this information to provide measurement services and target advertisements.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">5. Legal Basis for Processing</h2>
            <p className="text-gray-700 mb-4">
              Under the EU ePrivacy Directive and the General Data Protection Regulation (GDPR), we process cookies based on the following legal grounds:
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
              <li><strong>Consent:</strong> For non-essential cookies, we rely on your explicit consent, which you provide through our cookie banner or preference center.</li>
              <li><strong>Legitimate Interests:</strong> For essential cookies, we may rely on our legitimate interests in operating and securing our website, as permitted under applicable law.</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">6. Cookie Management</h2>
            <p className="text-gray-700 mb-4">
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences in the following ways:
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
              <li><strong>Cookie Banner:</strong> Our website displays a cookie banner when you first visit, allowing you to choose which types of cookies you want to allow.</li>
              <li><strong>Browser Settings:</strong> You can set your browser to refuse all or some cookies or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of our website may become inaccessible or not function properly.</li>
              <li><strong>Cookie Preference Center:</strong> You can change your cookie preferences at any time by visiting our Cookie Preference Center.</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">7. Retention Period</h2>
            <p className="text-gray-700 mb-4">
              The cookies we use have varying retention periods:
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
              <li>Session cookies: These expire when you close your browser and do not remain on your device.</li>
              <li>Persistent cookies: These remain on your device until they expire or are deleted. The duration varies depending on the cookie's purpose and can range from a few minutes to several years.</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">8. International Transfers</h2>
            <p className="text-gray-700 mb-4">
              Information collected by cookies may be transferred and stored outside the European Economic Area (EEA). Whenever we transfer your personal data outside the EEA, we ensure a similar degree of protection is afforded to it by implementing appropriate safeguards, such as using standard contractual clauses approved by the European Commission.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">9. Changes to This Cookie Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes will be posted on this page, and if the changes are significant, we will provide a more prominent notice.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">10. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about our use of cookies or this Cookie Policy, please contact our Data Protection Officer at:
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

export default Cookies;
