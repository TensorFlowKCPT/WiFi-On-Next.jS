'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './BurgerMenu.module.css';

const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.burgerMenu}>
      <button 
        className="md:hidden flex items-center gap-2 px-2 py-1 absolute top-[17px] right-[16px] bg-transparent border-none" 
        onClick={toggleMenu}
      >
        <img 
          className="w-[50px] h-[50px]" 
          alt="Burger Icon" 
          src="burger.svg" 
        />
      </button>


      {isOpen && (
        <div className={styles.menu}>
          {/* Здесь вы можете добавить ссылки или другие элементы меню */}
          <a href="/Tariffs">Тарифы</a>
          <a href="/Reviews">Отзывы</a>
          <a href="/About">О нас</a>
        </div>
      )}
    </div>
  );
};

const fadeInAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 },
};

export default BurgerMenu;
