import Link from 'next/link';
import { ReactElement, useState } from 'react';
import { Button } from '@/components/Button';
import { Header } from '../../components/Header';
import { Promo } from './components/Promo';
import { Sidebar } from './components/Sidebar';

export const HeaderPage = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        <Header />
        <Promo />
        <Button
          background="orange-title"
          buttonText="запись онлайн"
          textColor="text-white"
          borderColor="border-orange-title"
          height="h-2"
          width="w-44"
          onHover="hover:bg-white"
          textSize="text-xs"
          onClickAction={() => setIsOpen((prevState) => !prevState)}
        />
        <Link href="/">
          <Button
            background="transparent"
            buttonText="купить косметику"
            textColor="text-btn-blue"
            borderColor="border-btn-blue"
            height="h-22"
            width="w-44"
            textSize="text-xs"
            onHover="hover:bg-white"
            opacity="opacity-70"
            shadow="shadow-btn"
          />
        </Link>
        {/* </div> */}
      </div>
      {isOpen && <Sidebar setIsOpen={() => setIsOpen((prevState) => !prevState)} />}
    </>
  );
};
