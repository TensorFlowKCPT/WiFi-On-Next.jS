"use client";
import React, { useState, useEffect } from "react";
// @ts-ignore
import TariffCard from "components/tariffCard"; // Путь к вашему компоненту карточки
import { motion } from "framer-motion";
// @ts-ignore
export const Tariffs = ({ tariffs }): JSX.Element => {
  const fadeInAnimation = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.8 },
  };

  const gridStyles = {
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr));",
  };

  return (

    <motion.div
      {...fadeInAnimation}
      className="max-w-screen-2xl mx-auto px-8 sm:px-16 md:px-24"
    >

      <motion.div
        {...fadeInAnimation}
        style={gridStyles}
        className="grid gap-8"
        id = "tariffs"
      >
        {tariffs.map((tariff, index) => (
          <TariffCard
            key={index}
            {...tariff}
            onConnectClick={() => handleConnect(tariff.title)}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};
// @ts-ignore
const handleConnect = (tariffTitle) => {
  // Обработка нажатия кнопки "Подключить" для конкретного тарифа
  console.log(`Подключение к тарифу: ${tariffTitle}`);
};

export default Tariffs;
