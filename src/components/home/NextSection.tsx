import React from "react";

interface NextSectionProps {
  text: string;
}

export const NextSection: React.FC<NextSectionProps> = ({ text }) => {
  return (
    <section
      className="bg-[rgba(217,217,217,1)] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] self-center w-[405px] max-w-full text-lg text-black font-normal tracking-[-0.36px] leading-none mt-[29px] pt-3 pb-20 px-[19px] rounded-[11px] max-md:pr-5"
      role="complementary"
    >
      {text}
    </section>
  );
};
