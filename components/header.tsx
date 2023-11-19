import React from "react";
import styles from 'components/headerAnim.css';  

const Header = (): JSX.Element => {
  return (
    <header className="relative w-full h-[84px] bg-neutralsilver">
        {/* Логотип для всех устройств */}
        <p className="absolute top-[-10px] left-[16px] text-shadow:0px_4px_4px_#00000040 font-heading-headline-2 text-transparent text-[length:var(--heading-headline-2-font-size)] text-left tracking-[var(--heading-headline-2-letter-spacing)] leading-[var(--heading-headline-2-line-height)] whitespace-nowrap font-[number:var(--heading-headline-2-font-weight)]">
        <span className="text-black font-heading-headline-2">On-</span>
        <span className="text-[#2a6f97] font-heading-headline-2">Wi</span>
        <span className="text-[#013a63] font-heading-headline-2">Fi</span>
        </p>


        <button className="md:hidden flex items-center gap-2 px-2 py-1 absolute top-[17px] right-[16px]">
        <div className="w-[16px] h-[12px]">
            <img className="fixed w-full h-full top-0 left-0" alt="Vector" src="vector.svg" />
        </div>
        <div className="font-semibold text-default-white text-[12px] text-center leading-[16px] whitespace-nowrap">
            Меню
        </div>
        </button>


          {/* Меню для ПК */}
      <div className="hidden md:flex items-center justify-center gap-10 px-20 h-full">
        <a href="/tariffs">
          <div className="relative font-semibold text-text-gray-900 text-[20px] tracking-[0] leading-[24px] whitespace-nowrap {styles['nav-link']}" >
            Тарифы
          </div>
        </a>
        <a href="/providers" className={styles['nav-link']}>
          <div className="relative font-semibold text-text-gray-900 text-[20px] tracking-[0] leading-[24px] whitespace-nowrap">
            Провайдеры
          </div>
        </a>
        <a href="/reviews" className={styles['nav-link']}>
          <div className="relative font-semibold text-text-gray-900 text-[20px] tracking-[0] leading-[24px] whitespace-nowrap">
            Отзывы клиентов
          </div>
        </a>
        <a href="/about" className={styles['nav-link']}>
          <div className="relative font-semibold text-text-gray-900 text-[20px] tracking-[0] leading-[24px] whitespace-nowrap">
            О нас
          </div>
        </a>
        <div className="relative flex-0-auto" />
        <a
          className="relative font-medium text-black text-[20px] whitespace-nowrap"
          href="tel:8 (800) 550-07-92"
          rel="noopener noreferrer"
          target="_blank"
        >
          8 (800) 550-07-92
        </a>
        <img className="relative w-[41.91px] h-[30px]" alt="Icon phone" src="icon-phone.png" />
      </div>

      {/* Кнопка "Оставить заявку" для всех устройств */}
      <button className="hidden md:flex w-[156px] h-[50px] items-center gap-10 px-[20px] py-[10px] absolute top-[17px] right-[16px] bg-[#2a6f97] rounded-[10px] all-[unset] box-border">
        <div className="relative font-semibold text-default-white text-[14px] text-center leading-[20px] whitespace-nowrap">
          Оставить заявку
        </div>
      </button>
    </header>
  );
};

export default Header;
