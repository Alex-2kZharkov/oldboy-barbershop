import { ReactElement } from 'react';

import { PromoHeader } from '../PromoHeader';

export const PromoServices = (): ReactElement => {
  return (
    <section className="mt-8">
      <div className="flex flex-col ">
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
        <div className="px-10 py-12">
          <div className="lg:flex lg:justify-between z-0">
            <article
              className="
            bg-[url('/images/bg/beard-section1.jpeg')] 
            relative
            w-full
          bg-orange-bg 
            bg-cover
            h-[calc(56.25vw-40px)]     
            lg:mr-5 
            rounded-md 
            box-border
            basis-2/4
            mb-10
            min-h-[180px]
            max-h-[22rem]	

          "
            />
            <article
              className="
            bg-[url('/images/bg/beard-section2.jpeg')] 
            bg-cover 
            relative
            basis-2/4 
            w-full
          bg-orange-bg 
            h-[calc(56.25vw-40px)] 
            lg:ml-5
            rounded-md 
            box-borde
            min-h-[180px]
            max-h-[22rem]
            "
            />
          </div>
          <div className="flex flex-wrap justify-between">
            <article
              className="
      bg-[url('/images/bg/services-icon1.svg')] bg-no-repeat py-3.5 px-1 bg-[length:200px_100px] bg-left-bottom basis-[23%]	
      "
            >
              <div className="font-rex">
                <p className="text-xs text-orange-title">СТИЛЬ И ПРОФЕССИОНАЛИЗМ</p>
                <h3 className="text-2xl">
                  <strong className="text-4xl">Бритьё</strong>
                  <br />
                  бороды и головы
                </h3>
              </div>
              <div className="block text-right ">
                <button className="h-8 w-32 bg-slate-500" type="button">
                  Услуги бритья
                </button>
              </div>
            </article>
            <article
              className="
      bg-[url('/images/bg/services-icon2.svg')] bg-no-repeat py-3.5 px-1 bg-[length:200px_100px] bg-left-bottom basis-[23%]"
            >
              <div className="font-rex">
                <p className="text-xs text-orange-title">ДЛЯ НАСТОЯЩИХ ЦЕНИТЕЛЕЙ</p>
                <h3 className="text-2xl">
                  <strong className="text-4xl">Королевское</strong>
                  <br />
                  бритье
                </h3>
              </div>
              <div className="block text-right ">
                <button className="h-8 w-32 bg-slate-500" type="button">
                  Услуги бритья
                </button>
              </div>
            </article>
            <article
              className="
      bg-[url('/images/bg/services-icon3.svg')] bg-no-repeat py-3.5 px-1 bg-[length:200px_100px] bg-left-bottom basis-[23%]"
            >
              <div className="font-rex">
                <p className="text-xs text-orange-title">ЛУЧШИЕ МАСТЕРА</p>
                <h3 className="text-2xl">
                  <strong className="text-4xl">Бритьё</strong>
                  <br />
                  бороды и головы
                </h3>
              </div>
              <div className="block text-right ">
                <button className="h-8 w-32 bg-slate-500" type="button">
                  Услуги бритья
                </button>
              </div>
            </article>
            <article
              className="
      bg-[url('/images/bg/services-icon4.png')] bg-no-repeat py-3.5 px-1 bg-[length:200px_100px] bg-left-bottom basis-[23%]"
            >
              <div className="font-rex">
                <p className="text-xs text-orange-title">СТИЛЬ И ПРОФЕССИОНАЛИЗМ</p>
                <h3 className="text-2xl">
                  <strong className="text-4xl">Бритьё</strong>
                  <br />
                  бороды и головы
                </h3>
              </div>
              <div className="block text-right ">
                <button className="h-8 w-32 bg-slate-500" type="button">
                  Услуги бритья
                </button>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
