import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Header from "components/header";
import Sidemenu from "components/filterSideMenu";
import Tariffs from "components/tariffs";
import { motion } from 'framer-motion';

export const metadata: Metadata = {
  title: 'Тарифы',
  description: 'Лучшие провайдеры',
}

const tariffs: React.FC = () => {
    return (
      <div>
      <Header />
      <div className="flex">
        <Sidemenu />
        <div className="flex-1 mt-10">
          <Tariffs/>
        </div>
      </div>
    </div>
    );
  };

export default tariffs;
