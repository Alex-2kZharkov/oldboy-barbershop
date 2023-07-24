'use client';

import Link from 'next/link';
import { useState } from 'react';

import { Header } from '../Header';
import { PromoBanner } from '../PromoBanner';
import { barbsershopData } from '../PromoBanner/PromoData';
import { Sidebar } from './sidebar';

export function HeaderPage(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header />
      <PromoBanner barbershopCount={barbsershopData.barbershopCount} />
      {isOpen ? <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} /> : <div />}
      <div className="display: inline-grid absolute top-96 mt-44 ml-12">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="text-white bg-orange-title border-2 border-orange-title h-10 w-44 m-2 rounded-3xl font-button_font uppercase text-xs font-medium hover:bg-white hover:text-black"
        >
          запись онлайн
        </button>

        <Link href="/">
          <button
            type="button"
            className="text-btn-blue bg-transparent border-2 border-btn-blue h-10 w-44 m-2 rounded-3xl font-button_font uppercase text-xs font-medium shadow-btn opacity-70 hover:opacity-100"
          >
            купить косметику
          </button>
        </Link>
      </div>
    </>
  );
}