import Link from 'next/link';
import React, { ReactElement, useState } from 'react';
import { LocationSelector } from '@/components/RegionSelect/LocationSelector';
import { useSetSelectedEntity } from '@/hooks/useSetSelectedEntity';
import { Cookies } from '@/constants';
import { Modal } from '../../../../../components/Modal/Modal';

export const CitySelect = (): ReactElement => {
  const [showModal, setShowModal] = useState(false);
  const { selectedEntity: selectedCity } = useSetSelectedEntity('', Cookies.City);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setShowModal(true);
    return showModal;
  };

  return (
    <>
      <Link
        href="/"
        className="city-select relative z-20 block pl-12 text-left mr-3
        cursor-pointer transition-all ease-out duration-200
        before:absolute
        before:bg-[url('/images/icons/place.svg')]
        before:w-8
        before:h-full
        before:bg-no-repeat
        before:bg-[position:top_right]
        before:translate-x-[-110%]
        before:content-['']"
      >
        <p
          onClick={handleOpen}
          className="city-select__title m-0 text-orange-title font-rex text-xs"
        >
          Выбери свой <br /> барбершоп:
          <span className="m-0 text-orange-title font-rex text-[8.5px]">&#x25BC;</span>
        </p>
        <p className="city-select__city font-rex m-0 text-base">{selectedCity}</p>
      </Link>
      {showModal ? (
        <Modal showModal={showModal} onClose={() => setShowModal(false)}>
          <LocationSelector />
        </Modal>
      ) : null}
    </>
  );
};
