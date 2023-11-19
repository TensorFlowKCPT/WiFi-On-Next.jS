import React from 'react';
import styles from 'components/Footer.module.css';  

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-900 py-8 mt-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <a href="#" className={styles['nav-link']}>Тариф</a>
        <a href="#" className={styles['nav-link']}>Провайдеры</a>
        <a href="#" className={styles['nav-link']}>Отзывы клиентов</a>
        <a href="#" className={styles['nav-link']}>О нас</a>
      </div>
      <div className="max-w-7xl mx-auto mt-8 flex flex-col items-center">
        <div className="w-full h-px bg-gray-200" />
        <div className="text-center mt-4">
          <span className="text-white text-4xl font-semibold font-inter leading-[44px]">On-</span>
          <span className="text-sky-400 text-4xl font-semibold font-inter leading-[44px]">Wi</span>
          <span className="text-sky-700 text-4xl font-semibold font-inter leading-[44px]">Fi</span>
        </div>
        <div className="text-gray-400 text-sm font-normal font-inter leading-tight mt-4">© 2023 On-WiFi. Все права защищены.</div>
      </div>
    </footer>
  );
};

export default Footer;
