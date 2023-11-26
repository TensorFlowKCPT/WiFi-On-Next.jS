'use client';
import React, { useState } from 'react';
import styles from 'components/headerAnim.css';  
import { motion } from 'framer-motion';
import ModalComponent from './ModalComponent';
import Link from 'next/link';
import BurgerMenu from './BurgerMenu';

const Header = (): JSX.Element => {
    const fadeInAnimation = {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 50 },
      transition: { duration: 0.8 }, 
    };

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
    };
  return (
    <header  className="relative w-full h-[84px] bg-neutralsilver">
      {/* WiFi Icon */}
      <motion.div {...fadeInAnimation} className="absolute top-[10px] left-[16px]">
        <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_58_208)">
            <path d="M47.6089 10.4663H33.654C32.7004 10.4663 31.9097 9.67548 31.9097 8.7219C31.9097 7.76831 32.7004 6.97754 33.654 6.97754H47.6089C48.5625 6.97754 49.3532 7.76831 49.3532 8.7219C49.3532 9.67548 48.5625 10.4663 47.6089 10.4663Z" fill="#292D32"/>
            <path d="M40.6314 17.4438H33.654C32.7004 17.4438 31.9097 16.653 31.9097 15.6994C31.9097 14.7459 32.7004 13.9551 33.654 13.9551H40.6314C41.585 13.9551 42.3758 14.7459 42.3758 15.6994C42.3758 16.653 41.585 17.4438 40.6314 17.4438Z" fill="#2A6F97"/>
            <path d="M27.8395 47.6791C14.6987 47.6791 4 36.9804 4 23.8395C4 10.6987 14.6987 0 27.8395 0C28.7931 0 29.5839 0.790775 29.5839 1.74436C29.5839 2.69794 28.7931 3.48871 27.8395 3.48871C16.6059 3.48871 7.48871 12.6291 7.48871 23.8395C7.48871 35.0499 16.6059 44.1904 27.8395 44.1904C39.0732 44.1904 48.1904 35.0499 48.1904 23.8395C48.1904 22.886 48.9811 22.0952 49.9347 22.0952C50.8883 22.0952 51.6791 22.886 51.6791 23.8395C51.6791 36.9804 40.9804 47.6791 27.8395 47.6791Z" fill="#013A63"/>
            <path d="M52.2615 50.0046C51.8196 50.0046 51.3777 49.8418 51.0288 49.493L46.3772 44.8413C45.7027 44.1669 45.7027 43.0505 46.3772 42.376C47.0517 41.7015 48.1681 41.7015 48.8426 42.376L53.4942 47.0276C54.1687 47.7021 54.1687 48.8185 53.4942 49.493C53.1453 49.8418 52.7034 50.0046 52.2615 50.0046Z" fill="#292D32"/>
          </g>
          <defs>
            <filter id="filter0_d_58_208" x="0" y="0" width="58" height="58.0044" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_58_208"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_58_208" result="shape"/>
            </filter>
          </defs>
        </svg>
      </motion.div>

      {/* Логотип для всех устройств */}
      <motion.p {...fadeInAnimation} className="absolute top-[-10px] left-[90px] text-shadow:0px_4px_4px_#00000040 font-heading-headline-2 text-transparent text-[length:var(--heading-headline-2-font-size)] text-left tracking-[var(--heading-headline-2-letter-spacing)] leading-[var(--heading-headline-2-line-height)] whitespace-nowrap font-[number:var(--heading-headline-2-font-weight)]">
        <a href="/" className="text-black font-heading-headline-2 no-underline">On-</a>
        <a href="/" className="text-[#2a6f97] font-heading-headline-2 no-underline">Wi</a>
        <a href="/" className="text-[#013a63] font-heading-headline-2 no-underline">Fi</a>
      </motion.p>


      <BurgerMenu></BurgerMenu>


          {/* Меню для ПК */}
      <motion.div {...fadeInAnimation} className="hidden md:flex items-center justify-center gap-10 px-20 h-full">
        <a href="/Tariffs">
          <motion.div {...fadeInAnimation} className="relative font-semibold text-text-gray-900 text-[20px] tracking-[0] leading-[24px] whitespace-nowrap {styles['nav-link']}" >
            Тарифы
          </motion.div>
        </a>
        <a href="/Providers" className={styles['nav-link']}>
          <motion.div {...fadeInAnimation} className="relative font-semibold text-text-gray-900 text-[20px] tracking-[0] leading-[24px] whitespace-nowrap">
            Провайдеры
          </motion.div>
        </a>
        <a href="/Reviews" className={styles['nav-link']}>
          <motion.div {...fadeInAnimation} className="relative font-semibold text-text-gray-900 text-[20px] tracking-[0] leading-[24px] whitespace-nowrap">
            Отзывы клиентов
          </motion.div>
        </a>
        <a href="/About" className={styles['nav-link']}>
          <motion.div {...fadeInAnimation} className="relative font-semibold text-text-gray-900 text-[20px] tracking-[0] leading-[24px] whitespace-nowrap">
            О нас
          </motion.div>
        </a>
        <motion.div {...fadeInAnimation} className="relative flex items-center gap-2">
          <a
            className="relative font-medium text-black text-[20px] whitespace-nowrap"
            href="tel:8 (800) 550-07-92"
            rel="noopener noreferrer"
            target="_blank"
          >
            8 (800) 550-07-92
          </a>
        <svg width="30" height="30" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.8039 8.5361C17.7058 8.5361 15.7152 8.06383 15.0949 7.32331C14.7141 6.86868 14.6244 6.29944 14.5516 5.84102C14.4619 5.27682 14.4081 5.10932 14.2014 5.00227C13.2498 4.51363 11.8848 4.23405 10.4554 4.23405C9.04182 4.23405 7.69154 4.50985 6.75057 4.98968C6.54591 5.09421 6.49317 5.2617 6.40561 5.82465C6.33388 6.28432 6.24527 6.85608 5.8655 7.30946C5.51949 7.72254 4.79477 8.00716 4.24833 8.17214C3.54365 8.38497 2.78834 8.50839 2.17754 8.50839C1.47709 8.50839 1.00343 8.34971 0.730212 8.02227C0.317744 7.52985 0.054017 6.85608 0.00760115 6.17476C-0.0314304 5.60048 0.0614014 4.74914 0.724938 3.95572C1.80305 2.66863 3.25249 1.6649 5.03529 0.973503C6.67461 0.336255 8.53969 0 10.4301 0C12.3331 0 14.214 0.340034 15.8692 0.984838C17.6678 1.68506 19.132 2.69886 20.2196 3.99854C21.3273 5.3209 21.053 7.07522 20.2323 8.05502C19.9612 8.37868 19.4938 8.5361 18.8039 8.5361ZM10.4554 2.97466C12.0451 2.97466 13.5231 3.28447 14.6181 3.8449C15.3702 4.23027 15.4968 5.0262 15.5886 5.60552C15.6434 5.95185 15.6909 6.25158 15.8418 6.43167C16.1076 6.74904 17.6414 7.27672 18.805 7.27672C19.3124 7.27672 19.4727 7.17345 19.4928 7.15834C19.8198 6.76289 20.2291 5.79065 19.4749 4.88893C17.5707 2.61574 14.1898 1.25938 10.4301 1.25938C6.70099 1.25938 3.35271 2.60063 1.47076 4.84611C1.16694 5.20881 1.0277 5.62189 1.05829 6.07275C1.08466 6.45308 1.23762 6.84601 1.4697 7.12559C1.48975 7.1407 1.6522 7.24901 2.17649 7.24901C3.33478 7.24901 4.85701 6.7314 5.11863 6.41908C5.26737 6.2415 5.31378 5.94177 5.36758 5.59544C5.45831 5.01361 5.58173 4.21642 6.33493 3.8323C7.41727 3.27943 8.88042 2.97592 10.4543 2.97592L10.4554 2.97466Z" fill="black"/>
          <path d="M17.3334 19.9996H3.61964C2.9118 19.9996 2.25881 19.6671 1.78094 19.0639C1.30306 18.4606 1.06149 17.6634 1.10052 16.8197C1.10474 16.7227 1.225 14.4256 2.44025 12.1108C3.1597 10.7406 4.11334 9.64872 5.27373 8.86539C6.70946 7.89692 8.45955 7.40576 10.4765 7.40576C12.4935 7.40576 14.2436 7.89692 15.6793 8.86539C16.8408 9.64872 17.7944 10.7406 18.5128 12.1108C19.7281 14.4268 19.8483 16.7239 19.8525 16.8197C19.8916 17.6634 19.65 18.4606 19.1721 19.0639C18.6943 19.6671 18.0413 19.9996 17.3334 19.9996ZM10.4765 8.66515C7.18839 8.66515 4.7927 10.0354 3.35697 12.7367C2.27041 14.7807 2.15543 16.87 2.15437 16.8914C2.13117 17.3851 2.27147 17.8498 2.54785 18.1987C2.82424 18.5475 3.20506 18.7402 3.6207 18.7402H17.3345C17.7491 18.7402 18.1299 18.5475 18.4073 18.1987C18.6848 17.8498 18.824 17.3851 18.8008 16.8902C18.7998 16.87 18.6837 14.7807 17.5982 12.7367C16.1614 10.0354 13.7657 8.66515 10.4786 8.66515H10.4765Z" fill="black"/>
          <path d="M10.4765 17.4816C8.73167 17.4816 7.31177 15.7865 7.31177 13.7034C7.31177 11.6204 8.73167 9.92529 10.4765 9.92529C12.2213 9.92529 13.6412 11.6204 13.6412 13.7034C13.6412 15.7865 12.2213 17.4816 10.4765 17.4816ZM10.4765 11.1847C9.31293 11.1847 8.36667 12.3143 8.36667 13.7034C8.36667 15.0925 9.31293 16.2222 10.4765 16.2222C11.64 16.2222 12.5863 15.0925 12.5863 13.7034C12.5863 12.3143 11.64 11.1847 10.4765 11.1847Z" fill="black"/>
        </svg>
        </motion.div>
      </motion.div>

      {/* Кнопка "Оставить заявку" для всех устройств */}
      <motion.button {...fadeInAnimation} 
      className="hidden md:flex w-[156px] h-[50px] items-center gap-10 px-[20px] py-[10px] absolute top-[17px] right-[16px] bg-[#2a6f97] rounded-[10px] all-[unset] box-border"
      whileHover={{ scale: 1.04 }}
      onClick={openModal}
      transition={{ type: "tap", stiffness: 300, damping: 10 }}>
        <motion.div {...fadeInAnimation} className="relative font-semibold text-default-white text-[14px] text-center leading-[20px] whitespace-nowrap"
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "tap", stiffness: 300, damping: 10 }}>
          Оставить заявку
        </motion.div>
      </motion.button>
      <ModalComponent isOpen={modalIsOpen} onRequestClose={closeModal} />
    </header>
  );
};

export default Header;
