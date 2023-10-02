import { ReactElement } from 'react';
import { Button } from '../Button';
import { PromoHeader } from '../PromoHeader';

export const PromoCosmetics = (): ReactElement => {
  return (
    <section className="mt-8">
      <div className="-mb-32">
        <PromoHeader>
          <h2
            className="section-header__title 
            text-5xl
            leading-9
            mt-2.5 pl-10 pr-12 py-4
            text-white font-rex 
            drop-shadow-[-3px_2px_0_rgba(137,99,34)]"
          >
            Косметика <br /> <span className="text-2xl">Oldboy barbershop</span>
          </h2>
        </PromoHeader>
        <div
          className="section-header__image  
            bg-cover bg-[position:bottom_center] w-[25.5rem] 
            ml-3
            skew-y-15 -mt-10
            after:absolute
            after:top-0
            after:-right-5
           "
        >
          <p
            className="section-header__subtitle 
                relative flex flex-row pt-10
                w-full m-0 
                decoration-[#896322] 
                text-4xl font-rex 
                leading-9
                text-orange-title
                before:absolute
                before:top-[2.3rem]
                before:mb-2.5 
                before:mt-6
                before:left-2.5
                before:mr-1.5
                before:pl-[5.4rem]
                before:bg-[#896322]
                before:content-['']
                "
          >
            Для эксклюзивного <br /> ухода
          </p>
        </div>
      </div>
      <div className="pb-12">
        <article
          className="
            bg-[url('/images/bg/background-cosmetics.jpg')] 
            w-full
            bg-[position:center_top,_left_bottom_0.2rem]
            bg-[length:100%,_cover]
            h-[calc(56.25vw-40px)]     
            min-h-[160px]
            max-h-[32rem]	
            after:bg-[url('/images/bg/white-grunge.svg')]
            after:bg-repeat-x
            after:w-full
            after:h-20
            after:absolute
            after:bg-[length:400px]
            after:-bottom-5  
            
          "
        >
          <div className="h-full backdrop-brightness-50">
            <div className="relative w-11/12 pt-10 pr-12 pb-10 pl-[430px] lg:w-8/12">
              <h2 className="font-rex text-2xl lg:text-3xl text-white my-7 leading-9">
                НОВАЯ ЛИНЕЙКА МУЖСКОЙ КОСМЕТИКИ ПРЕМИУМ-КЛАССА ОТ БРЕНДА С МИРОВЫМ ИМЕНЕМ <br />
                <span className="font-rex text-xl lg:text-2xl text-orange-light">
                  OLDBOY BARBERSHOP × BARBER WILD
                </span>
              </h2>

              <p className="text-white font-button_font text-base font-semibold lg:text-lg">
                Спрашивайте во всех салонах сети OldBoy Barbershop нашу новую линейку стайлинговых
                средств, созданных для профессионального ухода
              </p>
              <div className="pt-12">
                <Button variant="accentLink">Узнать подробнее</Button>
              </div>
            </div>
            <div
              className="  
            absolute
            -bottom-6
            bg-[url('/images/logo/cosmetics-logo.png'),_url('/images/logo/cosmetics-logo-crown.svg')]
            bg-[contain,auto]
            h-72
            w-6/12
            bg-no-repeat
            z-20
           "
            />
          </div>
        </article>
      </div>
    </section>
  );
};
