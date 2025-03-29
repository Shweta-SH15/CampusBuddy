
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="text-center space-y-6 max-w-md animate-fade-in">
        <div className="bg-campus-blue/10 p-6 rounded-full inline-flex">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#1a365d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 1L3 5V9C3 14.55 6.84 19.74 12 21C17.16 19.74 21 14.55 21 9V5L12 1Z"></path>
            <path d="M12 12H12.01"></path>
            <path d="M12 17H12.01"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-campus-blue">Page Not Found</h1>
        <p className="text-lg text-campus-gray">Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.</p>
        <div className="pt-4">
          <Link to="/">
            <Button className="gap-2">
              <ChevronLeft size={16} />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
