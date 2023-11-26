'use client';
import React from 'react';
import Link from 'next/link';
import ReviewCard from 'components/reviewCard'; 
import { useRef } from "react";
import { useInView } from "framer-motion"
import mobileStyles from 'components/ReviewSection.module.mobile.css';


function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </span>
    </section>
  );
}

export default function App() {
  const reviews = [
    {
      name: 'Иван',
      internetProvider: 'Провайдер A',
      review: 'Отличный сервис, никаких проблем!',
    },
    {
      name: 'Елена',
      internetProvider: 'Провайдер B',
      review: 'Скорость интернета поражает! Рекомендую.Скорость интернета поражает! Рекомендую. Скорость интернета поражает! Рекомендую. Скорость интернета поражает! Рекомендую.',
    },
    {
      name: 'Алексей',
      internetProvider: 'Провайдер C',
      review: 'Надежный провайдер, отзывчивая поддержка.',
    },
    {
        name: 'Иван',
        internetProvider: 'Провайдер A',
        review: 'Отличный сервис, никаких проблем!',
      },
      {
        name: 'Елена',
        internetProvider: 'Провайдер B',
        review: 'Скорость интернета поражает! Рекомендую.',
      },
      {
        name: 'Алексей',
        internetProvider: 'Провайдер C',
        review: 'Надежный провайдер, отзывчивая поддержка.',
      },

      {
        name: 'Иван',
        internetProvider: 'Провайдер A',
        review: 'Отличный сервис, никаких проблем!',
      },
      {
        name: 'Елена',
        internetProvider: 'Провайдер B',
        review: 'Скорость интернета поражает! Рекомендую.',
      },
      {
        name: 'Алексей',
        internetProvider: 'Провайдер C',
        review: 'Надежный провайдер, отзывчивая поддержка.',
      },
    // Добавьте другие отзывы по аналогии
  ];
  return (
    <>
      <Section>
   <div  className={`max-w-screen-2xl mx-auto px-8 sm:px-16 md:px-24 ${mobileStyles.mobileReviewSection}`}>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        {/* Блок с отзывами */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="mb-8 md:mb-0 md:pr-8"> {/* Add margin-bottom for spacing and padding-right for right spacing on medium screens */}
              <ReviewCard {...review} />
            </div>
          ))}
        </div>


        {/* Кнопки "Оставить отзыв" и "Все отзывы" */}
        <div  className="w-full flex justify-center items-center mt-8">
        <div  className="w-[740px] h-[47px] justify-center items-center gap-5 inline-flex">
            <button className="w-[360px] h-[47px] relative bg-white rounded-[5px] border border-cyan-700 focus:outline-none">
            <div  className="left-[108px] top-[16px] absolute text-cyan-700 text-sm font-semibold font-inter uppercase leading-[15px] tracking-wide">
                Оставить отзыв
            </div>
            </button>
            <Link href="/Reviews">
              <button className="w-[360px] h-[47px] relative bg-cyan-700 rounded-[5px] border border-cyan-700 focus:outline-none">
                <div  className="left-[128px] top-[16px] absolute text-white text-sm font-semibold font-inter uppercase leading-[15px] tracking-wide">
                  Все отзывы
                </div>
              </button>
            </Link>
        </div>
        </div>
    </div>
    </Section>
    </>
  );
}
