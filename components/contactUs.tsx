'use client';
import React from 'react';
import { motion, Variants } from 'framer-motion';

const ContactUs = () => {
  const buttonStyles = {
    base: "flex-grow w-full h-full items-center gap-10 px-[20px] py-[10px] bg-[#2a6f97] rounded-[10px] all-[unset] box-border",
    text: "relative font-semibold text-default-white text-[14px] text-center leading-[20px] whitespace-nowrap",
    hover: { scale: 1.04 },
    transition: { type: "tap", stiffness: 300, damping: 10 },
  };
  const fadeInAnimation = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.3 },
  };
    return (
    <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Свяжитесь с нами</h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Для сотрудничества</p>
            <form action="#" className="space-y-8">
      <div className="flex flex-col md:flex-col items-center md:w-full md:gap-4">
          <motion.input
            {...fadeInAnimation}
            type="text"
            placeholder="Ваше имя"
            className="flex-grow w-full h-12 md:h-[40px] px-4 py-2 rounded-[12px] border-0 bg-gray-50 border-2 border-solid border-[color:var(--color-light-light-3,#DFDFE6)] mb-4 md:mb-0"
          />
          </div>
          <div className="flex flex-col md:flex-col items-center md:w-full md:gap-4">
          <motion.input
            {...fadeInAnimation}
            type="email"
            placeholder="Ваш E-mail"
            className="flex-grow w-full h-12 md:h-[40px] px-4 py-2 rounded-[12px] border-0 bg-gray-50 border-2 border-solid border-[color:var(--color-light-light-3,#DFDFE6)] mb-4 md:mb-0"
          />
          </div>
          <motion.button
            {...fadeInAnimation}
            className={buttonStyles.base}
            whileHover={buttonStyles.hover}
            transition={buttonStyles.transition}
          >
            <motion.div
              {...fadeInAnimation}
              className={buttonStyles.text}
              whileHover={buttonStyles.hover}
              transition={buttonStyles.transition}
            >
              Оставить заявку
            </motion.div>
          </motion.button>      
      </form>
  </div>
</section>
  );
};

export default ContactUs;
