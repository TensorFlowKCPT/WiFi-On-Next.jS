// pages/providers.tsx

import React from 'react';
import type { Metadata } from 'next';
// @ts-ignore
import Header from "components/header";
// @ts-ignore
import Sidemenu from "components/filterSideMenu";
// @ts-ignore
import Tariffs from "components/tariffs";

export const metadata: Metadata = {
  title: 'Провайдеры',
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
