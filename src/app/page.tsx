'use client';

import { Footer } from '../components/Footer/Footer';
import { HeaderPage } from '../Features/header';
import { PromoCard } from '../components/PromoCard';
import { PromoServices } from '../components/PromoServices';
import { PromoCosmetics } from '../components/PromoCosmetics';

const Home = async () => {
  const [barbershopsInfoResponse, footerListsResponse] = await Promise.all([
    fetch('http://localhost:3000/api/barbershopsInfo'),
    fetch('http://localhost:3000/api/footerLists'),
  ]);
  const [
    { branchesTotal, countriesTotal, capitalsTotal },
    { footerMainList, footerServicesList, footerInfoList },
  ] = await Promise.all([barbershopsInfoResponse.json(), footerListsResponse.json()]);
  // className=" overflow-hidden flex md:container max-w-{1700px}  mx-auto flex-col">
  return (
    <main className="overflow-hidden mx-auto max-w-1800">
      <div
        className="flex
        flex-col
        justify-between
        bg-[url('/images/hero_overlay.png'),_url('/images/bg/hero.jpg')]
        bg-no-repeat
        bg-[position:center_bottom,_left_bottom_0.4rem]
        bg-[length:90%,_cover]
        mb-20
        relative
        after:bg-[url('/images/bg/white-grunge.svg')]
        after:z-10
        after:h-12
        after:bg-repeat-x
        after:bg-[top_1rem_center]
        after:bg-[length:50rem]
        after:left-0
        after:w-full
        "
      >
        <HeaderPage branchesTotal={branchesTotal} />
      </div>
      <PromoCard />
      <PromoServices />
      <PromoCosmetics />

      <Footer
        branchesTotal={branchesTotal}
        countriesTotal={countriesTotal}
        capitalsTotal={capitalsTotal}
        footerMainTitle="Меню"
        footerServicesTitle="Услуги"
        footerInfoTitle="Информация"
        footerMainList={footerMainList}
        footerServicesList={footerServicesList}
        footerInfoList={footerInfoList}
      />
    </main>
  );
};

export default Home;
