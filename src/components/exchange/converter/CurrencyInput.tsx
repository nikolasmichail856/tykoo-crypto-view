import React from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CurrencyOption } from "@/hooks/useCurrencyConverter";
import CurrencyIcon from "./CurrencyIcon";

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
  // Format the displayed value to ensure it doesn't overflow
  const formatDisplayValue = (val: string) => {
    if (isLoading) return "...";
    
    // Return the value as is if it's not too long
    if (val.length <= 16) return val;
    
    // Otherwise, ensure we show a reasonable amount of decimals
    const num = parseFloat(val);
    if (isNaN(num)) return val;
    
    // Show up to 10 decimal places for small numbers
    if (Math.abs(num) < 1) {
      return num.toFixed(10).replace(/\.?0+$/, '');
    }
    
    // For larger numbers, show fewer decimals
    return num.toFixed(Math.max(2, 14 - Math.floor(Math.log10(Math.abs(num))) - 1));
  };

  return (
    <div className="bg-tykoo-lightGray rounded-xl shadow-md p-5 h-full border border-gray-200">
      <div className="flex flex-col h-full justify-between">
        <div className="flex items-center gap-3">
          <Input
            type="text"
            value={formatDisplayValue(value)}
            onChange={(e) => !readOnly && onChange(e.target.value)}
            className="text-xl md:text-2xl font-bold border-0 focus:outline-none focus:ring-0 p-2 bg-transparent flex-grow text-tykoo-darkBlue"
            placeholder="0"
            readOnly={readOnly || isLoading}
          />
          
          <Select value={currency} onValueChange={setCurrency} disabled={isLoading}>
            <SelectTrigger className="w-28 border border-gray-300 bg-white rounded-lg text-tykoo-darkBlue">
              <SelectValue 
                placeholder="Select currency" 
                className="flex items-center"
              >
                <div className="flex items-center gap-2">
                  <CurrencyIcon currencyCode={currency} />
                  {currency}
                </div>
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  <div className="flex items-center gap-2">
                    <CurrencyIcon currencyCode={option.value} />
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
