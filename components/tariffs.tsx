'use client';
import React from "react";
import TariffCard from "components/tariffCard"; // Путь к вашему компоненту карточки
import { motion } from 'framer-motion';


export const Tariffs = (): JSX.Element => {
  const tariffs = [
    {
      title: "Тариф 1",
      price: "$10",
      imageUrl: "path/to/image1.jpg",
      provider: "Провайдер 1",
    },
    {
      title: "Тариф 2",
      price: "$15",
      imageUrl: "path/to/image2.jpg",
      provider: "Провайдер 2",
    },
    {
      title: "Тариф 3",
      price: "$15",
      imageUrl: "path/to/image2.jpg",
      provider: "Провайдер 2",
    },
    {
      title: "Тариф 4",
      price: "$15",
      imageUrl: "path/to/image2.jpg",
      provider: "Провайдер 2",
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