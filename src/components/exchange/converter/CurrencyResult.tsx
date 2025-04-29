
import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { formatCurrency } from "@/utils/formatters";
import { CurrencyOption } from "@/hooks/useCurrencyConverter";

interface CurrencyResultProps {
  toCurrency: string;
  setToCurrency: (currency: string) => void;
  toOptions: CurrencyOption[];
  convertedAmount: number;
  isLoading: boolean;
}

const CurrencyResult: React.FC<CurrencyResultProps> = ({
  toCurrency,
  setToCurrency,
  toOptions,
  convertedAmount,
  isLoading
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <label htmlFor="toCurrency" className="block text-sm font-medium text-gray-700">
          To Currency
        </label>
        <Select value={toCurrency} onValueChange={setToCurrency}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select currency" />
          </SelectTrigger>
          <SelectContent>
            {toOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Converted Amount
        </label>
        <div className="flex items-center">
          <div className="border rounded-md px-3 py-2 bg-gray-50 w-full">
            {isLoading ? (
              <div className="animate-pulse h-6 bg-gray-200 rounded"></div>
            ) : (
              <div className="font-semibold">
                {toCurrency === "BTC" || toCurrency === "ETH" ? 
                  convertedAmount.toFixed(8) : 
                  formatCurrency(convertedAmount)}
                &nbsp;{toCurrency}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyResult;
