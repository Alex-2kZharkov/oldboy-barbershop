import React from 'react';

type AboutUsIconProps = {
  src: string;
  alt?: string;
  text: string;
};

export const AboutUsIcon: React.FC<AboutUsIconProps> = ({ src, alt = 'About Us', text }) => {
  return (
    <div className="flex-col items-center justify-center py-5">
      <img src={src} alt={alt} className="w-20 mx-auto mb-5" />
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
