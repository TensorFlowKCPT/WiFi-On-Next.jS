'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';
// @ts-ignore
import ReviewCard from 'components/reviewCard'; 
import { useRef } from "react";
import { useInView } from "framer-motion"
import Modal from './ModalReview';
// @ts-ignore
import mobileStyles from 'components/ReviewSection.module.mobile.css';


// @ts-ignore
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
  const [name, setName] = useState('');
  const [review, setReview] = useState('');

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const gridStyles = {
    gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr));',
  };

  return (
    <>
      <Section>
    <div className={`max-w-screen-2xl mx-auto px-8 sm:px-16 md:px-24 ${mobileStyles.mobileReviewSection}`}>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        {/* Блок с отзывами */}
        <div style={gridStyles} className="grid gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="mb-8 md:mb-0 md:pr-8"> {/* Add margin-bottom for spacing and padding-right for right spacing on medium screens */}
              <ReviewCard {...review} />
            </div>
          ))}
        </div>

        <div className="w-full flex flex-col md:flex-row items-center mt-8">
          <div className="w-full md:w-[360px] mb-4 md:mb-0 md:mr-4 mx-auto">
            <button
              className="w-full h-[47px] relative bg-white rounded-[5px] border border-cyan-700 focus:outline-none flex items-center justify-center"
              onClick={openModal}
            >
              <div className="text-cyan-700 text-sm font-semibold font-inter uppercase leading-[15px] tracking-wide">
                Оставить отзыв
              </div>
            </button>
          </div>
          <div className="w-full md:w-[360px] mx-auto">
            <Link href="/Reviews" className='no-underline'>
              <button className="w-full h-[47px] relative bg-cyan-700 rounded-[5px] border border-cyan-700 focus:outline-none flex items-center justify-center">
                <div className="text-white text-sm font-semibold font-inter uppercase leading-[15px] tracking-wide">
                  Все отзывы
                </div>
              </button>
            </Link>
          </div>
          <Modal isOpen={modalIsOpen} onRequestClose={closeModal} />
        </div>
    </div>
    
    </Section>
    </>
  );
}
