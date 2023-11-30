import React from "react";
import Header from "components/header";
import Footer from "components/footer";
import Top from "components/Top";
import Providers from "components/providers";
import { AnimatePresence } from 'framer-motion';
import type { Metadata } from 'next';
import Tariffs from "components/tariffs";
import Link from 'next/link';
import ReviewsList from "components/reviewContainer";
import ContactUs from "../../components/ContactUs"; 

export const metadata: Metadata = {
  title: 'WiFi-On',
  description: 'Лучшие провайдеры',
}

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Top />
      <Providers />
      <Tariffs />
      <div className="flex flex-col items-center px-5 my-15 mt-8">
        <div className="mb-8 text-3xl font-semibold text-center md:text-left md:text-6xl">
          Отзывы клиентов
        </div>
        <div className="self-stretch text-cyan-700 text-center text-base leading-6 w-full -mr-5 mt-6">
          Только честные отзывы о тарифах и провайдерах!
        </div>
      </div>
      <div className="w-full">
        <ReviewsList />
      </div>
      <ContactUs /> 
      <Footer/>
    </div>
  );
};

export default App;
