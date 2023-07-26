'use client';

<<<<<<< Updated upstream
import { Header } from '@/components/Header/Header';
import type { RootState } from './store/store';
import { displayFunction } from './store/Features/OldboyBarbershop/OldBoySlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
  const oldboy = useSelector((state: RootState) => state.oldboy.value);
  const dispatch = useDispatch();
  return (
    <main className="overflow-hidden">
      <Header />
      <button onClick={() => dispatch(displayFunction('Hi!'))}>Click to display state value</button>
=======
import { Header } from '@/components/Header';
import { PromoBanner } from '@/components/PromoBanner';
import { barbsershopData } from '@/components/PromoBanner/PromoData';
import { useAppSelector, AppDispatch } from '@/store/store';
import oldBoyReducer, {
  displayFunction,
  createFunction,
  clearValueFunction,
} from '@/Features/oldBoyBarbershop/oldBoySlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const oldBoy = useAppSelector((state) => state.oldBoyReducer.value.myInput);
  const dispatch = useDispatch<AppDispatch>();

  const alertOnClick = () => {
    dispatch(createFunction(inputValue));
    console.log(inputValue);
  };

  return (
    <main className="overflow-hidden flex md:container md:max-w-screen-2xl mx-auto flex-col bg-header-bg">
      <div
        className="flex flex-col justify-between bg-[url('/images/bg/hero.jpg')] bg-no-repeat bg-[left_-3.4rem_bottom_0.4rem]
        relative
        bg-cover
        after:bg-[url('/images/bg/white-grunge.svg')]
        after:z-10
        after:h-32
        after:bg-repeat-x
        after:bg-[top_5rem_center]
        after:bg-[length:50rem]
        after:left-0
        after:w-full"
      >
        <Header />
        <PromoBanner barbershopCount={barbsershopData.barbershopCount} />
        <div className="block bg-[url('/images/hero_overlay.png')] w-full h-full bg-no-repeat bg-[center_bottom] bg-[length:85%] z-10 absolute" />
      </div>
      <input
        type="text"
        placeholder="Enter any value here..."
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="rounded-full w-40 bg-orange-300 px-1" type="button" onClick={alertOnClick}>
        Click to display state value
      </button>
>>>>>>> Stashed changes
    </main>
  );
}
