
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeftRight } from "lucide-react";

interface SwapButtonProps {
  onSwap: () => void;
}

const SwapButton: React.FC<SwapButtonProps> = ({ onSwap }) => {
  return (
    <div className="flex justify-center">
      <Button 
        variant="outline" 
        size="icon"
        onClick={onSwap}
        className="rounded-full"
      >
        <ArrowLeftRight className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default SwapButton;
