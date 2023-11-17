import React from 'react';
import ReviewCard from 'components/reviewCard'; // Путь к вашему компоненту отзыва

export const Reviews = (): JSX.Element => {
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
    <div className="max-w-screen-2xl mx-auto px-8 sm:px-16 md:px-24">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-neutraldgrey">Отзывы клиентов</h2>
        <p className="text-xl text-variable-collection-dark-blue">
          Только честные отзывы о тарифах и провайдерах!
        </p>
      </div>

        {/* Блок с отзывами */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
        ))}
        </div>

        {/* Кнопки "Оставить отзыв" и "Все отзывы" */}
        <div className="w-full flex justify-center items-center mt-8">
        <div className="w-[740px] h-[47px] justify-center items-center gap-5 inline-flex">
            <button className="w-[360px] h-[47px] relative bg-white rounded-[5px] border border-cyan-700 focus:outline-none">
            <div className="left-[108px] top-[16px] absolute text-cyan-700 text-sm font-semibold font-inter uppercase leading-[15px] tracking-wide">
                Оставить отзыв
            </div>
            </button>
            <button className="w-[360px] h-[47px] relative bg-cyan-700 rounded-[5px] border border-cyan-700 focus:outline-none">
            <div className="left-[128px] top-[16px] absolute text-white text-sm font-semibold font-inter uppercase leading-[15px] tracking-wide">
                Все отзывы
            </div>
            </button>
        </div>
        </div>

    </div>

  );
};
export default Reviews;
