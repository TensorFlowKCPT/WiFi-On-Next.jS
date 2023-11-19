import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Header from "components/header";

export const metadata: Metadata = {
  title: 'Отзывы клиентов',
  description: 'Лучшие провайдеры',
}

const reviews: React.FC = () => {
    return (
      <div>
        <Header />
      </div>
    );
  };

export default reviews;
