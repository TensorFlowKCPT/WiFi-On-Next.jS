import React from "react";
import Header from "components/header";
import Footer from "components/footer";
import Top from "components/Top";
import Providers from "components/providers";
import { AnimatePresence } from "framer-motion";
import type { Metadata } from "next";
import Tariffs from "components/tariffs";
import Link from "next/link";
import ReviewsList from "components/reviewContainer";
import ContactUs from "components/contactUs";
import RatingChart from "components/RatingChart";

export const metadata: Metadata = {
  title: "WiFi-On",
  description: "Лучшие провайдеры",
};
const providers = [
  { name: "Provider A", rating: 8 },
  { name: "Provider B", rating: 9 },
  { name: "Provider C", rating: 7 },
  { name: "Provider A", rating: 8 },
  { name: "Provider B", rating: 9 },
  { name: "Provider C", rating: 7 },
  { name: "Provider A", rating: 8 },
  { name: "Provider B", rating: 9 },
  { name: "Provider C", rating: 7 },
];

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Top />
      <Providers />
      {/* <Tariffs /> */}
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
      <h1 className="text-2xl font-bold mb-4">График рейтинга провайдеров</h1>
      <RatingChart providerData={providers} />
      <Footer />
    </div>
  );
};

export default App;
