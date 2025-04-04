
import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface NextSectionProps {
  text: string;
}

export const NextSection: React.FC<NextSectionProps> = ({ text }) => {
  const [selectedOption, setSelectedOption] = useState<string>("1");
  
  return (
    <section
      className="bg-[rgba(217,217,217,1)] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] self-center w-[405px] max-w-full text-black font-normal tracking-[-0.36px] mt-[29px] pt-3 px-[19px] rounded-[11px]"
      role="complementary"
    >
      <p className="text-lg leading-none mb-4">{text}</p>
      
      <div className="mb-6">
        <RadioGroup
          defaultValue="1"
          value={selectedOption}
          onValueChange={setSelectedOption}
          className="flex flex-col space-y-2"
        >
          {[1, 2, 3, 4].map((option) => (
            <div key={option} className="flex items-center space-x-2">
              <RadioGroupItem value={option.toString()} id={`option-${option}`} />
              <Label htmlFor={`option-${option}`} className="text-base">{option}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </section>
  );
};
