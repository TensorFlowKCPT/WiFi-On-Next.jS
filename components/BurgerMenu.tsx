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
      <button className="md:hidden flex items-center gap-2 px-2 py-1 absolute top-[17px] right-[16px]" onClick={toggleMenu}>
        <motion.div {...fadeInAnimation} className="w-[16px] h-[12px]">
          <img className="fixed w-full h-full top-0 left-0" alt="Vector" src="vector.svg" />
        </motion.div>
        <motion.div {...fadeInAnimation} className="font-semibold text-default-white text-[12px] text-center leading-[16px] whitespace-nowrap">
          Меню
        </motion.div>
      </button>

      {isOpen && (
        <div className={styles.menu}>
          {/* Здесь вы можете добавить ссылки или другие элементы меню */}
          <a href="#">Ссылка 1</a>
          <a href="#">Ссылка 2</a>
          <a href="#">Ссылка 3</a>
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
