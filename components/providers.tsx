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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center md:justify-start">
        <img className="w-[59px] h-[58px] object-cover mb-4" alt="Logo dom ru" src="logo-dom-ru-1.png" />
        <img className="w-[59px] h-[57px] object-cover mb-4" alt="Img" src="df583655157572a113a4980bf91dac34-1.png" />
        <img className="w-[80px] h-[75px] object-cover mb-4" alt="Xypwcfby" src="xyp80w6cfby-transformed-1.png" />
        <img className="w-[69px] h-[71px] object-cover mb-4" alt="Ndydwuhc" src="nd66y0dwuhc-1.png" />
        <img className="w-[102px] h-[94px] object-cover mb-4" alt="Element" src="4idqlebacza-1.png" />
        <img className="w-[102px] h-[94px] object-cover mb-4" alt="Element" src="4idqlebacza-1.png" />
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
