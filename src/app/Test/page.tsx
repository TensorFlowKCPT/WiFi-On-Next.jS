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
      <footer className={`w-full bg-neutral-900 py-8 mt-8 ${styles.mobileFooter}`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <a href="/Tariffs" className={styles['nav-link']}>Тариф</a>
        <a href="/Providers" className={styles['nav-link']}>Провайдеры</a>
        <a href="/Reviews" className={styles['nav-link']}>Отзывы клиентов</a>
        <a href="/About" className={styles['nav-link']}>О нас</a>
      </div>
      <div className="max-w-7xl mx-auto mt-8 flex flex-col items-center">
        <div className="w-full h-px bg-gray-200" />
        <div className="text-center mt-4">
          <span className="text-white text-4xl font-semibold font-inter leading-[44px]">On-</span>
          <span className="text-sky-400 text-4xl font-semibold font-inter leading-[44px]">Wi</span>
          <span className="text-sky-700 text-4xl font-semibold font-inter leading-[44px]">Fi</span>
        </div>
        <div className="text-gray-400 text-sm font-normal font-inter leading-tight mt-4">© 2023 On-WiFi. Все права защищены.</div>
      </div>
    </footer></Section>
    </>
  );
}
