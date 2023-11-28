'use client';
import React from 'react';
import Link from 'next/link';
import ReviewCard from 'components/reviewCard'; 
import { motion } from 'framer-motion';
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
  return (
    <>
      <Section>
      <div className="flex flex-col items-center px-4 py-8 md:px-16 lg:px-32">
      <div className="mb-8 text-3xl font-semibold text-center md:text-left md:text-6xl text-variable-collection-dark-green-duplicate">
        Лучшие провайдеры
      </div>
      <p className="mb-4 text-xl text-center md:text-left text-variable-collection-blue-secondary">
        Мы подберем лучших провайдеров для вас!
      </p>
      <div className="grid grid-cols-5 gap-x-20 justify-items-center items-center">
        <img className="w-[75px] h-[75px] object-cover mb-3" alt="Logo dom ru" src="/domru.png" />
        <img className="w-[75px] h-[75px] object-cover mb-3" alt="Img" src="/megafon.png" />
        <img className="w-[75px] h-[75px] object-cover mb-3" alt="Xypwcfby" src="/mts.png" />
        <img className="w-[85px] h-[75px] object-cover mb-3" alt="Ndydwuhc" src="/rtk.png" />
        <img className="w-[75px] h-[75px] object-cover mb-3" alt="Element" src="/beeline.png" />
      </div>





      {/* Медиа-запрос для мобильных устройств */}
      <style>
        {`
          @media (max-width: 767px) {
            .grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }
        `}
      </style>
    </div></Section>
    </>
  );
}
