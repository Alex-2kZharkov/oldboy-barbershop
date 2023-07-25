'use client';

import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { PromoBanner } from '@/components/PromoBanner';
import { barbsershopData } from '@/components/PromoBanner/PromoData';
import { displayFunction } from './store/Features/OldboyBarbershop/OldBoySlice';
import type { RootState } from './store/store';
import Logo from '../assets/logo/logo.svg';

export default function Home() {
  const oldboy = useSelector((state: RootState) => state.oldboy.value);
  const dispatch = useDispatch();
  console.log(oldboy);
  return (
    <main className="overflow-hidden">
      <Header />
      <div className="flex">
        <Image src={Logo} alt="Logo" width={100} height={30} className="mt-12" />
        <Header />
      </div>
      <PromoBanner barbershopCount={barbsershopData.barbershopCount} />
      <button type="button" onClick={() => dispatch(displayFunction('Hi!'))}>
        Click to display state value
      </button>
    </main>
  );
}
