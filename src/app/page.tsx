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
      <ReviewsList />
      <Footer/>
    </div>
  );
};

export default App;
