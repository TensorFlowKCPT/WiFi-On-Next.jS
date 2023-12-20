'use client';
import React, { useEffect, useState } from 'react';// @ts-ignore
import { motion } from 'framer-motion';
import axios from 'axios';
import styles from './BurgerMenu.module.css';

const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const key = "eedd6882-ab52-4127-a367-69e4286b00bf";
  const [userCity, setUserCity] = useState('Unknown');
  const getUserCity = async () => {
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const response = await axios.get(
              `https://catalog.api.2gis.com/3.0/items/geocode?lat=${position.coords.latitude}&lon=${position.coords.longitude}&fields=items.point&key=${key}`
            );
  
            const city = response.data.result?.items[3]?.full_name.split(",")[0]
            if (city && city.trim() !== '') {
              setUserCity(city);
            } else if(city == "Unknown"){
              setUserCity('');
            }
            else {
              setUserCity('');
            }
          },
          (error) => {
            console.error('Error getting geolocation:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    } catch (error) {
      console.error('Error getting city information:', error);
      setUserCity('');
    }
  };

  useEffect(() => {
    getUserCity();
  }, []);

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
          <a href={`/Tariffs?address=${userCity}`} >Тарифы</a>
          <a href="/Reviews">Отзывы</a>
          <a href="/About">О нас</a>
          <a href="/Questions">Вопросы</a>
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
