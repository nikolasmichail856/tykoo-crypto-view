
import React from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CurrencyOption } from "@/hooks/useCurrencyConverter";
import { Euro, Bitcoin, DollarSign } from "lucide-react";

interface CurrencyInputProps {
  value: string;
  onChange: (value: string) => void;
  currency: string;
  setCurrency: (currency: string) => void;
  options: CurrencyOption[];
  readOnly?: boolean;
  isLoading?: boolean;
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({
  value,
  onChange,
  currency,
  setCurrency,
  options,
  readOnly = false,
  isLoading = false
}) => {
  const getCurrencyIcon = (currencyCode: string) => {
    switch(currencyCode) {
      case "EUR":
        return <Euro className="h-5 w-5 text-blue-500" />;
      case "BTC":
        return <Bitcoin className="h-5 w-5 text-orange-500" />;
      case "ETH":
        return <DollarSign className="h-5 w-5 text-purple-500" />;
      case "USDC":
        return <DollarSign className="h-5 w-5 text-green-500" />;
      default:
        return <DollarSign className="h-5 w-5 text-blue-500" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-5 h-full">
      <div className="flex flex-col h-full justify-between">
        <Input
          type="text"
          value={isLoading ? "..." : value}
          onChange={(e) => !readOnly && onChange(e.target.value)}
          className="text-3xl md:text-4xl font-bold border-0 focus:outline-none focus:ring-0 p-2 bg-transparent"
          placeholder="0"
          readOnly={readOnly || isLoading}
        />
        
        <div className="mt-4">
          <Select value={currency} onValueChange={setCurrency} disabled={isLoading}>
            <SelectTrigger className="w-full border-0 bg-transparent">
              <div className="flex items-center gap-2">
                {getCurrencyIcon(currency)}
                <SelectValue placeholder="Select currency" />
              </div>
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  <div className="flex items-center gap-2">
                    {getCurrencyIcon(option.value)}
                    {option.label}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default CurrencyInput;
