
import React from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ArrowLeftRight } from "lucide-react";
import { CurrencyOption } from "@/hooks/useCurrencyConverter";

interface CurrencyFormProps {
  amount: string;
  setAmount: (amount: string) => void;
  fromCurrency: string;
  setFromCurrency: (currency: string) => void;
  fromOptions: CurrencyOption[];
  handleSwapCurrencies: () => void;
}

const CurrencyForm: React.FC<CurrencyFormProps> = ({
  amount,
  setAmount,
  fromCurrency,
  setFromCurrency,
  fromOptions,
  handleSwapCurrencies
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
          Amount
        </label>
        <Input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full"
          placeholder="Enter amount"
          min="0"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="fromCurrency" className="block text-sm font-medium text-gray-700">
          From Currency
        </label>
        <Select value={fromCurrency} onValueChange={setFromCurrency}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select currency" />
          </SelectTrigger>
          <SelectContent>
            {fromOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default CurrencyForm;
