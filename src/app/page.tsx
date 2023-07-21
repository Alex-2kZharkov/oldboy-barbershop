import Image from 'next/image';
import { Header } from '@/components/Header';
import { PromoBanner } from '@/components/PromoBanner';
import Logo from '../assets/logo/logo.svg';
import { barbsershopData } from '@/components/PromoBanner/PromoData';

export default function Home() {
  return (
    <main className="overflow-hidden flex min-h-screen flex-col p-24 bg-header-bg">
      <div className="flex">
        <Image src={Logo} alt="Logo" width={100} height={30} className="mt-12" />
        <Header />
      </div>
      <PromoBanner barbershopCount={barbsershopData.barbershopCount} />
    </main>
  );
}
