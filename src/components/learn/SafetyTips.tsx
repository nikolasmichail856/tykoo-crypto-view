
import { ChevronRight } from 'lucide-react';

const SafetyTips = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-tykoo-darkBlue mb-6">Staying Safe in Crypto</h2>
            <p className="text-gray-600 mb-6">
              While cryptocurrencies offer exciting opportunities, it's important to practice good security habits to protect your investments.
            </p>
            <ul className="space-y-4">
              <li className="bg-gray-50 p-4 rounded-md flex">
                <ChevronRight className="text-tykoo-blue flex-shrink-0 mt-1" />
                <div className="ml-2">
                  <h3 className="font-semibold text-tykoo-darkBlue">Use Strong, Unique Passwords</h3>
                  <p className="text-sm text-gray-600">Create complex passwords and never reuse them across different platforms.</p>
                </div>
              </li>
              
              <li className="bg-gray-50 p-4 rounded-md flex">
                <ChevronRight className="text-tykoo-blue flex-shrink-0 mt-1" />
                <div className="ml-2">
                  <h3 className="font-semibold text-tykoo-darkBlue">Enable Two-Factor Authentication (2FA)</h3>
                  <p className="text-sm text-gray-600">Add an extra layer of security to your account with 2FA.</p>
                </div>
              </li>
              
              <li className="bg-gray-50 p-4 rounded-md flex">
                <ChevronRight className="text-tykoo-blue flex-shrink-0 mt-1" />
                <div className="ml-2">
                  <h3 className="font-semibold text-tykoo-darkBlue">Be Wary of Phishing Attempts</h3>
                  <p className="text-sm text-gray-600">Always verify the website URL and never click on suspicious links.</p>
                </div>
              </li>
              
              <li className="bg-gray-50 p-4 rounded-md flex">
                <ChevronRight className="text-tykoo-blue flex-shrink-0 mt-1" />
                <div className="ml-2">
                  <h3 className="font-semibold text-tykoo-darkBlue">Keep Software Updated</h3>
                  <p className="text-sm text-gray-600">Ensure your devices have the latest security patches and updates.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
              alt="Digital security concept" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyTips;
