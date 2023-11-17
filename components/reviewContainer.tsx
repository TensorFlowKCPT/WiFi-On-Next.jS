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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
