
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="text-center px-4 py-12">
          <h1 className="text-6xl font-bold text-tykoo-darkBlue mb-6">404</h1>
          <p className="text-2xl text-gray-600 mb-8">Oops! Page not found</p>
          <p className="text-gray-500 max-w-md mx-auto mb-8">
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </p>
          <Button asChild className="bg-tykoo-blue text-white hover:bg-tykoo-darkBlue">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
