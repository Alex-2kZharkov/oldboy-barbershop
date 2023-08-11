import React from 'react';

export const PromoHeader = () => {
  return (
    <header
      className="section-header z-10 max-w-[23rem] w-11/12 flex relative skew-y-15 bg-orange-title 
                shadow-[-15px_10px_40px_-10px_rgba(19,19,19,.5)]
                after:absolute
                after:top-0
                after:-right-5
                after:bg-[url('/images/bg/gold-v-grunge.svg')]
                after:bg-repeat-y
                after:bg-[position:center_center]
                after:bg-cover
                after:w-10
                after:h-full
                after:content-['']"
    >
      <h2
        className="section-header__title 
                text-5xl
                mt-2.5 pl-10 pr-12 py-4
                text-white font-rex 
                leading-tight 
                drop-shadow-[-3px_2px_0_rgba(137,99,34)]"
      >
        О нашем <br /> барбершопе
      </h2>
    </header>
  );
};
