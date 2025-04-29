
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRightLeft } from "lucide-react";

interface SwapButtonProps {
  onSwap: () => void;
}

const SwapButton: React.FC<SwapButtonProps> = ({ onSwap }) => {
  return (
    <Button 
      onClick={onSwap}
      className="bg-lavender-100 hover:bg-lavender-200 text-indigo-600 rounded-full h-12 w-12 flex items-center justify-center"
      variant="outline"
      size="icon"
    >
      <ArrowRightLeft className="h-6 w-6" />
    </Button>
  );
};

export default SwapButton;
