
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <div className="bg-tykoo-darkBlue py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to start your crypto journey?
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Join over 2 million users who trust TYKOO for their cryptocurrency trading needs. Get started today and trade with confidence.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button className="bg-tykoo-blue text-white hover:bg-white hover:text-tykoo-blue text-lg px-8 py-6">
            Create Account
          </Button>
          <Button variant="outline" className="border-white text-black bg-white hover:bg-white hover:text-black text-lg px-8 py-6">
            View Markets
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
