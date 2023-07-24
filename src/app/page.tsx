import { Header } from '@/components/Header';
import { PromoBanner } from '@/components/PromoBanner';
import { barbsershopData } from '@/components/PromoBanner/PromoData';

export default function Home() {
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
        after:bg-[top_0.125rem_center]
        after:bg-[length:50rem]
        after:left-0
        after:w-full"
      >
        <Header />
        <PromoBanner barbershopCount={barbsershopData.barbershopCount} />
        <div className="bg-[url('/images/4_1.png')] w-full h-full bg-[center_top] scale-75 bg-cover z-10 absolute" />
      </div>
    </main>
  );
}
