import React from "react";
import { Logo } from "@/components/home/Logo";
import { ContentSection } from "@/components/home/ContentSection";
import { Divider } from "@/components/home/Divider";
import { NextSection } from "@/components/home/NextSection";

const Index = () => {
  const mainText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

  return (
    <main className="bg-white flex w-full flex-col items-center pt-[15px] pb-56 px-20 max-md:max-w-full max-md:pb-[100px] max-md:px-5">
      <div className="flex mb-[-45px] w-full max-w-[870px] flex-col items-stretch max-md:max-w-full max-md:mb-2.5">
        <Logo />
        <ContentSection
          text={mainText}
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/e22c390c02211a2d7a175428dbda757886457979?placeholderIfAbsent=true"
          imageCaption="Davos, Switzerland"
        />
        <Divider />
        <NextSection text="What's next..." />
      </div>
    </main>
  );
};

export default Index;
