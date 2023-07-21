'use client';

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
    </main>
  );
}
