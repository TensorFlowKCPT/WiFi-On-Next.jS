import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
// @ts-ignore
import Header from "components/header";
// @ts-ignore
import ReviewsList from "components/reviewContainer";
// @ts-ignore
import Footer from "components/footer";
export const metadata: Metadata = {
  title: 'Отзывы клиентов',
  description: 'Лучшие провайдеры',
}

const reviews: React.FC = () => {
    return (
      <div>
        <Header />
        <div className="flex flex-col items-center px-5 my-15 mt-5"> 
          <div className="text-black text-4xl font-medium leading-10 whitespace-nowrap mt-15">
            Отзывы клиентов
          </div>
          <div className="self-stretch text-cyan-700 text-center text-base leading-6 w-full -mr-5 mt-6">
            Только честные отзывы о тарифах и провайдерах!
          </div>
        </div>
        <ReviewsList className="mt-15"/>
        <Footer/>
      </div>

    );
  };

export default reviews;
