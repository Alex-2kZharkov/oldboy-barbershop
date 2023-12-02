import { ReactElement } from 'react';
import Image from 'next/image';
import { Layout } from '../../components/Layout';
import { Header } from '../../components/Header/Header';
import { LinkOptions } from '../../types/link';
import { ServicePromo } from '../../components/ServicePromo';
import { ServiceAboutSection } from '../../components/ServiceAboutSection';

interface ShavingProps {
  mainNavList: LinkOptions;
}

export const Shaving = ({ mainNavList }: ShavingProps): ReactElement => {
  return (
    <div>
      <div
        className="flex
        flex-col
        justify-between
        bg-[url('/images/bg/shaving-d.jpg')]
        bg-no-repeat
        bg-[top_-8rem_center]
        bg-[length:100%,_cover]
        relative
        after:bg-[url('/images/bg/white-grunge.svg')]
        after:z-10
        after:h-12
        after:bg-repeat-x
        after:bg-[top_1rem_center]
        after:bg-[length:50rem]
        after:left-0
        after:w-full"
      >
        <Layout>
          <div>
            <Header mainNavList={mainNavList} />
            <ServicePromo
              titleTop="Опасное"
              titleBottom="бритьё"
              iconVariant="shavette"
              iconPosition="forShaving"
            />
          </div>
        </Layout>
      </div>
      <ServiceAboutSection
        aboutSectionSrc="/images/shaving/shaving.jpg"
        aboutSectionAlt="Королевское бритьё в Oldboy Barbershop"
        headline="Опасное бритье: суть и особенности"
        decorationVariant="none"
      >
        <p
          className="
          service__subtitle
          font-button_font
          text-base 
          font-semibold 
          leading-loose 
          tracking-wider 
          text-orange-bg 
          uppercase"
        >
          БРИТЬЁ В OLDBOY – ЭТО САМЫЙ НАСТОЯЩИЙ РИТУАЛ С СОХРАНЕНИЕМ ТРАДИЦИЙ НАШИХ ПРЕДКОВ. ЭТОТ
          ПРОЦЕСС НЕ БЫСТРЫЙ, НО ИМЕННО НЕСПЕШНОСТЬ И АККУРАТНОСТЬ ДЕЛАЕТ ЕГО НАСТОЯЩИМ РЕЛАКСОМ ДЛЯ
          ЭСТЕТОВ.
        </p>
        <Image
          src="/images/shaving/usluga-opasnoe-brite-boroda.jpg"
          alt="Опасное бритье: бритье бороды"
          width="992"
          height="560"
        />
        <p className="service__text">
          В отличие от «Королевского бритья» классическое бритье осуществляется двумя инструментами
          в два приёма: машинкой для бритья или шаветкой; сначала по направлению, а затем против
          направления роста волос, обеспечивая таким образом максимально гладкую кожу.
        </p>
        <Image
          src="/images/shaving/usluga-opasnoe-brite-golova.jpg"
          alt="Опасное бритье: бритье головы"
          width="992"
          height="560"
        />
        <p className="service__text">
          Барберы, работающие в сети барбершопов OldBoy филигранно владеют искусством бритья: отбор
          мастеров очень строгий, обучение каждого барбера проводит ведущий барбер, имеющий
          сертификат «American Crew». Помимо постоянного получения опыта, владельцы филиалов
          работают над прокачкой скилла своих сотрудников. Мастера Oldboy хранят традиции
          классического бритья, тщательно подходят к выбору инструментов и косметики для данной
          процедуры. Для нее используются профессиональные средства для мужчин «American Crew», что
          обеспечивает стопроцентно качественный результат.
        </p>
        <h2 className="service__headline font-rex text-4xl leading-normal mb-1">
          Стоимость опасного бритья в салонах барбершопов OldBoy
        </h2>
        <p className="service__text">
          Цена на услуги бритья бороды и головы в сети барбершопов OldBoy варьируется от 500 рублей,
          в зависимости от города, в котором вы хотите посетить мастера.
        </p>
        <Image
          src="/images/shaving/dangerous.jpg"
          alt="Опасное бритье: логотип OldBoy с бритвой"
          width="992"
          height="560"
        />
        <p
          className="
          service__subtitle
          font-button_font
          text-base 
          font-semibold 
          leading-loose 
          tracking-wider 
          text-orange-bg 
          uppercase"
        >
          СТОИТ ВСЕГО ОДИН РАЗ ОБРАТИТЬСЯ В БАРБЕРШОП OLDBOY ЗА УСЛУГОЙ БРИТЬЯ ОПАСНОЙ БРИТВОЙ, И
          ОЦЕНИТЬ ПРОФЕССИОНАЛИЗМ И ВЫСОКОЕ КАЧЕСТВО БРИТЬЯ, А ТАКЖЕ ОЩУТИТЬ ИСТИННЫЙ КОМФОРТ,
          БРУТАЛЬНУЮ МУЖСКУЮ АТМОСФЕРУ, ХОРОШУЮ КОМПАНИЮ И ПОПРОБОВАТЬ ВКУСНЕЙШИЙ КОФЕ, ИЛИ НАПИТКИ
          ПОКРЕПЧЕ.
        </p>
      </ServiceAboutSection>
    </div>
  );
};
