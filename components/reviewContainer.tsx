'use client';
import React from 'react';
import Link from 'next/link';
import ReviewCard from 'components/reviewCard'; 
import { motion } from 'framer-motion';
import mobileStyles from 'components/ReviewSection.module.mobile.css';


export const Reviews = (): JSX.Element => {
  const fadeInAnimation = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.8 }, 
  };
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
    // Добавьте другие отзывы по аналогии
  ];

  return (

    <motion.div {...fadeInAnimation} className={`max-w-screen-2xl mx-auto px-8 sm:px-16 md:px-24 ${mobileStyles.mobileReviewSection}`}>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        {/* Блок с отзывами */}
        <motion.div {...fadeInAnimation} className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
        ))}
        </motion.div>

        {/* Кнопки "Оставить отзыв" и "Все отзывы" */}
        <motion.div {...fadeInAnimation} className="w-full flex justify-center items-center mt-8">
        <motion.div {...fadeInAnimation} className="w-[740px] h-[47px] justify-center items-center gap-5 inline-flex">
            <button className="w-[360px] h-[47px] relative bg-white rounded-[5px] border border-cyan-700 focus:outline-none">
            <motion.div {...fadeInAnimation} className="left-[108px] top-[16px] absolute text-cyan-700 text-sm font-semibold font-inter uppercase leading-[15px] tracking-wide">
                Оставить отзыв
            </motion.div>
            </button>
            <Link href="/Reviews">
              <button className="w-[360px] h-[47px] relative bg-cyan-700 rounded-[5px] border border-cyan-700 focus:outline-none">
                <motion.div {...fadeInAnimation} className="left-[128px] top-[16px] absolute text-white text-sm font-semibold font-inter uppercase leading-[15px] tracking-wide">
                  Все отзывы
                </motion.div>
              </button>
            </Link>
        </motion.div>
        </motion.div>
    </motion.div>

  );
};
export default Reviews;
