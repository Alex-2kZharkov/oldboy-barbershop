import React from 'react';
import Image from 'next/image';

type AboutUsIconProps = {
  src: string;
  alt?: string;
  text: string;
  width: number;
  height: number;
};

export const AboutUsIcon: React.FC<AboutUsIconProps> = ({ src, alt = 'About Us', text, width, height }) => {
  return (
    <div className="flex-col items-center justify-center py-5">
      <div className="relative w-20 h-auto mx-auto mb-5">
        <Image src={src} alt={alt} layout="fill" objectFit="contain" />
      </div>
      <p
        className="text-center  
        text-orange-bg 
        font-open-sans 
        text-tiny
        font-medium
        leading-loose
        font-open-sans"
      >
        {text}
      </p>
    </div>
  );
};
