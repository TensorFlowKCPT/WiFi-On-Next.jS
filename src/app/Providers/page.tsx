import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Header from "components/header";

export const metadata: Metadata = {
  title: 'Провайдеры',
  description: 'Лучшие провайдеры',
}

const providers: React.FC = () => {
    return (
      <div>
        <Header />
      </div>
    );
  };

export default providers;
