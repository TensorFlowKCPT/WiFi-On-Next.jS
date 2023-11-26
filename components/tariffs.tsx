'use client';
import React from "react";
import TariffCard from "components/tariffCard"; // Путь к вашему компоненту карточки
import { motion } from 'framer-motion';


export const Tariffs = (): JSX.Element => {
  const tariffs = [
    {
      title: "Дом.Ру",
      price: "990p.",
      imageUrl: "/domru.png",
      provider: "Дом.ру",
    },
    {
      title: "Тариф Билайн",
      price: "1500p.",
      imageUrl: "/beeline.png",
      provider: "Билайн",
    },
    {
      title: "Тариф Ростелеком",
      price: "1250p.",
      imageUrl: "/rtk.png",
      provider: "Ростелеком",
    },
    {
      title: "Тариф Мегафон",
      price: "1990р.",
      imageUrl: "/megafon.png",
      provider: "Мегафон",
    },
    // Добавьте другие тарифы по аналогии
  ];
  const fadeInAnimation = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.8 }, 
  };
  return (
    <motion.div {...fadeInAnimation} className="max-w-screen-2xl mx-auto px-8 sm:px-16 md:px-24">
      <motion.div {...fadeInAnimation} className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tariffs.map((tariff, index) => (
          <TariffCard key={index} {...tariff} onConnectClick={() => handleConnect(tariff.title)} />
        ))}
      </motion.div>
    </motion.div>
  );
};

const handleConnect = (tariffTitle) => {
  // Обработка нажатия кнопки "Подключить" для конкретного тарифа
  console.log(`Подключение к тарифу: ${tariffTitle}`);
};

export default Tariffs;