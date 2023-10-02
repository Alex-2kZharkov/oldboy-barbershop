'use client';

import { Shaving } from '@/Features/Shaving';
import { Footer } from '@/components/Footer';

const ShavingPage = async () => {
  const [headerListResponse, barbershopsInfoResponse, footerListsResponse] = await Promise.all([
    fetch('http://localhost:3000/api/headerList'),
    fetch('http://localhost:3000/api/barbershopsInfo'),
    fetch('http://localhost:3000/api/footerLists'),
  ]);
  const [
    { headerMainList },
    { branchesTotal, countriesTotal, capitalsTotal },
    { footerMainList, footerServicesList, footerInfoList },
  ] = await Promise.all([
    headerListResponse.json(),
    barbershopsInfoResponse.json(),
    footerListsResponse.json(),
  ]);

  return (
    <div className="overflow-hidden flex md:container md:max-w-screen-2xl mx-auto flex-col">
      <Shaving mainNavList={headerMainList} />
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
    </div>
  );
};

export default ShavingPage;
