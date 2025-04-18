
import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

interface NextSectionProps {
  text: string;
}

export const NextSection: React.FC<NextSectionProps> = ({ text }) => {
  const [selectedOption, setSelectedOption] = useState<string>("1");
  const [inputText, setInputText] = useState<string>("");
  
  const options = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
    { value: "4", label: "Option 4" }
  ];
  
  return (
    <section
      className="self-center w-[405px] max-w-full text-black font-normal tracking-[-0.36px] mt-[29px] pt-3 px-[19px] rounded-[11px]"
      role="complementary"
    >
      <p className="text-lg leading-none mb-4">{text}</p>
      
      <div className="flex gap-2 mb-6">
        <Textarea 
          placeholder="I would like to..." 
          className="bg-white"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <Button variant="outline" className="p-2 h-auto" aria-label="Send">
          <Send className="h-5 w-5" />
        </Button>
      </div>
      
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
                    {option.label}
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
