import { ReactElement } from 'react';
import { AboutUsIcon } from '../AboutUsIcons/AboutUsIcons';

export const AboutUs = (): ReactElement => {
  return (
    <section className="py-15 px-20 ">
      <div className="about__caption ">
        <h3
          className="about__headline 
          text-4xl
          font-rex 
          text-left 
          font-bold"
        >
          Oldboy — Барбершоп c твоим характером
        </h3>
        <p
          className="about__subtitle 
          text-orange-bg 
          font-open-sans 
          text-m 
          leading-loose 
          font-medium 
          uppercase
          font-rex-inline 
          tracking-wider 
          py-5"
        >
          У нас есть всё, что требуется настоящему мужчине:&nbsp;атмосфера брутальности и мужского
          духа, профессионализм барберов и сохранение европейских традиций барберинга, а также
          отличный кофе и хорошая компания
        </p>
        <p
          className="about__text
        leading-8
        text-lg
        py-3
        font-open-sans
        "
        >
          OldBoy Barbershop — намного больше, чем просто мужская парикмахерская. Это место, где Вам
          помогут найти свой&nbsp;собственный, неповторимый стиль. Стоит довериться мастерам OldBoy
          один раз, и, поверьте, новый образ не&nbsp;оставит Вас равнодушным. Мужские стрижки и
          опасное бритье — это наш профиль, и мы уверены, что наши барберы делают это лучше всех.
          Как сказал однажды знаменитый Ральф Лорен: «Какой бы Вы образ жизни ни вели, у вас должен
          быть свой собственный стиль, свой собственный мир». Обещать, конечно, что мы сделаем из
          Вас Кэри Гранта мы не будем, но Вы можете быть уверены в 3-х вещах:
        </p>
      </div>
      <div className="flex space-x-20">
        <AboutUsIcon
          src="/images/icons/coffee-cup.svg"
          alt="coffee cup"
          text="ВАМ ОБЯЗАТЕЛЬНО ПРЕДЛОЖАТ ЧАШЕЧКУ АРОМАТНОГО КОФЕ ИЛИ ЧАЯ"
        />
        <AboutUsIcon
          src="/images/icons/medal.svg"
          alt="medal"
          text="МЫ ПОСТРИЖЕМ И ПОБРЕЕМ ВАС НА ВЫСШЕМ УРОВНЕ ПО ВСЕМ ЕВРОПЕЙСКИМ ТРАДИЦИЯМ"
        />
        <AboutUsIcon
          src="/images/icons/best-friend.svg"
          alt="best friend"
          text="ВЫ НЕ УСПЕЕТЕ ЗАМЕТИТЬ, КАК СНОВА ЗАХОТИТЕ ВЕРНУТЬСЯ В НАШ БАРБЕРШОП"
        />
      </div>
    </section>
  );
};
