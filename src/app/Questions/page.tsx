
import React from 'react';
import type { Metadata } from 'next';
import Header from "components/header";
import Sidemenu from "components/filterSideMenu";
import Tariffs from "components/tariffs";

export const metadata: Metadata = {
  title: 'Часто задаваемые вопросы',
  description: 'Лучшие провайдеры',
}

const Providers: React.FC = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default Providers;
