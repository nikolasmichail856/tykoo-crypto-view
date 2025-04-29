
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
        return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1.5L18 12L12 15.75L6 12L12 1.5Z" fill="#627EEA" />
          <path d="M12 22.5L18 13.5L12 17.25L6 13.5L12 22.5Z" fill="#627EEA" />
          <path d="M12 15.75V1.5L18 12L12 15.75Z" fill="#627EEA" fillOpacity="0.8" />
          <path d="M12 17.25V22.5L18 13.5L12 17.25Z" fill="#627EEA" fillOpacity="0.8" />
          <path d="M12 1.5V15.75L6 12L12 1.5Z" fill="#627EEA" fillOpacity="0.6" />
          <path d="M12 17.25V22.5L6 13.5L12 17.25Z" fill="#627EEA" fillOpacity="0.6" />
        </svg>;
      case "USDC":
        return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10.5" fill="#2775CA" />
          <path d="M15.09 13.6598C15.09 12.1198 14.18 11.5498 12.36 11.2698C11.14 11.0698 10.89 10.7898 10.89 10.3198C10.89 9.84976 11.29 9.53976 12.08 9.53976C12.82 9.53976 13.22 9.78976 13.44 10.3898C13.47 10.4698 13.55 10.5198 13.63 10.5198H14.35C14.46 10.5198 14.54 10.4398 14.54 10.3298C14.34 9.32976 13.55 8.66976 12.45 8.54976V7.52976C12.45 7.41976 12.36 7.32976 12.24 7.32976H11.75C11.64 7.32976 11.55 7.41976 11.55 7.52976V8.53976C10.34 8.65976 9.45 9.40976 9.45 10.3398C9.45 11.8198 10.35 12.4098 12.17 12.6898C13.31 12.9098 13.65 13.1598 13.65 13.6798C13.65 14.2298 13.15 14.5998 12.34 14.5998C11.31 14.5998 10.91 14.1798 10.75 13.5598C10.73 13.4698 10.65 13.4198 10.56 13.4198H9.83C9.72 13.4198 9.64 13.4998 9.64 13.6098C9.82 14.7398 10.56 15.4198 11.56 15.5898V16.6098C11.56 16.7198 11.65 16.8098 11.77 16.8098H12.26C12.37 16.8098 12.46 16.7198 12.46 16.6098V15.5898C13.67 15.4498 15.09 14.7398 15.09 13.6598Z" fill="white" />
        </svg>;
      default:
        return <DollarSign className="h-5 w-5 text-blue-500" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-5 h-full">
      <div className="flex flex-col h-full justify-between">
        <div className="flex items-center gap-3">
          <Input
            type="text"
            value={isLoading ? "..." : value}
            onChange={(e) => !readOnly && onChange(e.target.value)}
            className="text-3xl md:text-4xl font-bold border-0 focus:outline-none focus:ring-0 p-2 bg-transparent flex-grow"
            placeholder="0"
            readOnly={readOnly || isLoading}
          />
          
          <Select value={currency} onValueChange={setCurrency} disabled={isLoading}>
            <SelectTrigger className="w-28 border bg-gray-50 rounded-lg">
              <SelectValue 
                placeholder="Select currency" 
                className="flex items-center"
              >
                <div className="flex items-center gap-2">
                  {getCurrencyIcon(currency)}
                  {currency}
                </div>
              </SelectValue>
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
