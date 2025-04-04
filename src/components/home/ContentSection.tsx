import React from "react";

interface ContentSectionProps {
  text: string;
  imageSrc: string;
  imageCaption: string;
}

export const ContentSection: React.FC<ContentSectionProps> = ({
  text,
  imageSrc,
  imageCaption,
}) => {
  return (
    <section className="mt-1.5 max-md:max-w-full">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <article className="w-6/12 max-md:w-full max-md:ml-0">
          <p className="text-black text-lg font-medium leading-[22px] tracking-[-0.36px] mt-[11px] max-md:mt-10">
            {text}
          </p>
        </article>

        <figure className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col items-stretch text-base text-black font-medium tracking-[-0.32px] leading-none max-md:mt-10">
            <img
              src={imageSrc}
              alt={imageCaption}
              className="aspect-[1.09] object-contain w-full"
            />
            <figcaption className="self-center mt-[22px]">
              {imageCaption}
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
};
