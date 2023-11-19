import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Header from "components/header";

export const metadata: Metadata = {
  title: 'Тарифы',
  description: 'Лучшие провайдеры',
}

const tariffs: React.FC = () => {
    return (
      <div>
        <Header />
      </div>
    );
  };

export default tariffs;
