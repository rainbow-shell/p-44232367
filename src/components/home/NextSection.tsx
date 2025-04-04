
import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface NextSectionProps {
  text: string;
}

export const NextSection: React.FC<NextSectionProps> = ({ text }) => {
  const [selectedOption, setSelectedOption] = useState<string>("1");
  const [inputText, setInputText] = useState<string>("");
  
  const options = [
    { value: "1", label: "What happened next?" },
    { value: "2", label: "Who was in the lab?" },
    { value: "3", label: "You mentioned a smell?" },
    { value: "4", label: "End conversation" }
  ];
  
  return (
    <section
      className="self-center w-[405px] max-w-full text-black font-normal tracking-[-0.36px] mt-[29px] pt-3 px-[19px] rounded-[11px]"
      role="complementary"
    >
      <p className="text-lg leading-none mb-4">{text}</p>
      
      <Textarea 
        placeholder="Enter your response..." 
        className="mb-6 bg-white"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      
      <div className="mb-6">
        <RadioGroup
          defaultValue="1"
          value={selectedOption}
          onValueChange={setSelectedOption}
          className="flex flex-col space-y-4"
        >
          {options.map((option) => (
            <div key={option.value} className="flex items-center space-x-3">
              <div className="relative flex items-center">
                <RadioGroupItem value={option.value} id={`option-${option.value}`} className="sr-only" />
                <Label 
                  htmlFor={`option-${option.value}`}
                  className="flex items-center cursor-pointer text-base"
                >
                  <span className="flex items-center justify-center w-8 h-8 border-2 border-black rounded-full mr-3 font-medium">
                    {option.value}
                  </span>
                  <span className="text-lg font-normal">
                    {option.value === "4" ? (
                      option.label
                    ) : (
                      <>&quot;{option.label}&quot;</>
                    )}
                  </span>
                </Label>
              </div>
            </div>
          ))}
        </RadioGroup>
      </div>
    </section>
  );
};
