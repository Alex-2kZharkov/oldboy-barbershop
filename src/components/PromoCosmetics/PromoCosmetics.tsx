import { ReactElement } from 'react';
import { PromoHeader } from '../PromoHeader';

export const PromoCosmetics = (): ReactElement => {
  return (
    <section className="mt-8">
      <div className="z-10 -mb-36">
        <PromoHeader>
          <h2
            className="section-header__title 
            text-5xl
            mt-2.5 pl-10 pr-12 py-4
            text-white font-rex 
            leading-tight 
            drop-shadow-[-3px_2px_0_rgba(137,99,34)]"
          >
            Услуги <br /> барбершопа
          </h2>
        </PromoHeader>
        <div
          className="section-header__image  
            bg-cover bg-[position:bottom_center] w-[25.5rem] 
            skew-y-15 -mt-10
            after:absolute
            after:top-0
            after:-right-5
           "
        >
          <p
            className="section-header__subtitle 
                relative flex flex-row pt-10 pl-28
                w-full m-0 
                decoration-[#896322] 
                text-3xl font-rex 
                text-orange-title
                before:absolute
                before:top-[2.3rem]
                before:w-auto 
                before:h-[0.17rem] 
                before:mb-2.5 
                before:mt-6
                before:left-2.5
                before:mr-1.5
                before:pl-[5.4rem]
                before:bg-[#896322]
                before:content-['']"
          >
            Стрижем и бреем
          </p>
        </div>
      </div>
      s
    </section>
  );
};
