'use client';
import React, { useEffect, useState } from 'react';
// @ts-ignore
import Header from "components/header";
// @ts-ignore
import Footer from "components/footer";
// @ts-ignore
import Top from "components/Top";
// @ts-ignore
import Providers from "components/providers";
import { AnimatePresence } from "framer-motion";
import type { Metadata } from "next";
import Link from "next/link";
// @ts-ignore
import ReviewsList from "components/reviewContainer";
// @ts-ignore
import ContactUs from "components/contactUs";
// @ts-ignore
import Carusel from "components/TrendingSlider";
// @ts-ignore
import RatingChart from "components/RatingChart";

const providers = [
  { name: "Ростелеком", rating: 3.1 },
  { name: "Дом.Ру", rating: 4.5 },
  { name: "Билайн", rating: 4.1 },
  { name: "ТТК", rating: 3.6 },
  { name: "МТС", rating: 4.4 },
];
const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
    // Проверяем наличие window перед использованием
    if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth <= 768);

        // Добавим слушателя для изменения размера окна
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        // Очистим слушателя при размонтировании компонента
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }
}, []);
  return (
    <div>
      <Header />
      <Top />
      <div className="flex flex-col items-center px-4 py-8 md:px-16 lg:px-32">
          <div className="mb-8 text-3xl font-semibold text-center md:text-left md:text-6xl">
            Лучшие провайдеры
          </div>
          <p className="mb-4 text-xl text-center md:text-left text-variable-collection-blue-secondary">
            Мы подберем лучших провайдеров для вас!
          </p>
      </div>
      {isMobile && <Carusel />}
      {!isMobile && <Providers />}
      {/* <Tariffs /> */}
      <div className="flex flex-col items-center px-5 my-15 mt-8">
        <div className="mb-8 text-3xl font-semibold text-center md:text-left md:text-6xl">
          Отзывы клиентов
        </div>
        <div className="self-stretch text-cyan-700 text-center text-base leading-6 w-full -mr-5 mt-6">
          Только честные отзывы о тарифах и провайдерах!
        </div>
      </div>
      <div className="w-full grid place-items-center">
        <ReviewsList />
      </div>
      <ContactUs />
      <h1 className="text-2xl font-bold mb-4">График рейтинга провайдеров</h1>
      <RatingChart providerData={providers} />
      <Footer />
    </div>
  );
};

export default App;
