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
          textColor="white"
          borderColor="orange-title"
          height="h-2"
          width="w-44"
          onHover="bg-white"
          textSize="xs"
          onClickAction={() => setIsOpen((prevState) => !prevState)}
        />
        <Link href="/">
          <Button
            background="transparent"
            buttonText="купить косметику"
            textColor="btn-blue"
            borderColor="btn-blue"
            height="22"
            width="44"
            textSize="xs"
            onHover="bg-white"
            opacity="70"
            shadow="boxShadow.btn"
          />
        </Link>
        {/* </div> */}
      </div>
      {isOpen && <Sidebar setIsOpen={() => setIsOpen((prevState) => !prevState)} />}
    </>
  );
};
