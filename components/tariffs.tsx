'use client';
import React, { useState, useEffect } from "react";
import TariffCard from "components/tariffCard"; // Путь к вашему компоненту карточки
import { motion } from 'framer-motion';
import { useRouter } from "next/router";



export const Tariffs = (): JSX.Element => {
  const [tariffs, setTariffs] = useState([]);
  const router = useRouter();
  const { address } = router.query;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/getTariffs",);
        const result = await response.json();
        setTariffs(result);
      } catch (error) {
        console.error("Error fetching tariffs:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render

   
  const fadeInAnimation = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.8 }, 
  };

  const gridStyles = {
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr));',
  };

  return (
    <motion.div {...fadeInAnimation} className="max-w-screen-2xl mx-auto px-8 sm:px-16 md:px-24">
      <motion.div {...fadeInAnimation} style={gridStyles} className="grid gap-8">
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