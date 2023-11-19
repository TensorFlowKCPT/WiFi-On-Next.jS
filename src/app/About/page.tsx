import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Header from "components/header";

export const metadata: Metadata = {
  title: 'О нас',
  description: 'Лучшие провайдеры',
}

const about: React.FC = () => {
    return (
      <div>
        <Header />
      </div>
    );
  };

export default about;
