'use client';
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { motion } from "framer-motion";
import ModalComponent from './ModalComponent';
export const Top = (): JSX.Element => {
  const fadeInAnimation = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.3 }, 
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-4 py-8 bg-neutralsilver">
      <div className="flex flex-col items-center md:text-left md:w-1/2 md:gap-8">
      <motion.div {...fadeInAnimation} className="mb-8 md:mb-0" style={{ textAlign: 'center' }}>
        <motion.p {...fadeInAnimation} className="font-semibold text-4xl md:text-6xl text-variable-collection-dark-green-duplicate">
          <span className="block text-[#012a4a]">Найди своего идеального</span>
          <span className="block text-[#2c7da0]">провайдера</span>
          <span className="block text-[#2c7da0]">здесь</span>
        </motion.p>
        <motion.p {...fadeInAnimation} className="mt-4 text-xl md:text-2xl text-variable-collection-dark-blue">
          До сих пор в раздумьях? <br />
          Наш сервис поможет вам с выбором!
        </motion.p>
      </motion.div>
        <div className="flex flex-col md:flex-col items-center md:w-full md:gap-4">
        <motion.input
          {...fadeInAnimation}
          type="text"
          placeholder="Введите адрес"
          className="flex-grow w-full h-12 md:h-[40px] px-4 py-2 rounded-[12px] border-0 bg-white mb-4 md:mb-0"
        />

        <motion.button
            {...fadeInAnimation}
            onClick={openModal}
            className="flex-grow w-full text-white text-center text-3xl font-semibold leading-6 whitespace-nowrap justify-center items-center shadow-sm bg-[#2a6f97] px-5 py-6 rounded-xl"
            whileHover={{ scale: 1.04 }}
            transition={{ type: "tap", stiffness: 300, damping: 10 }}
          >
            Оставить заявку
          </motion.button>

          {/* Modal */}
          <ModalComponent isOpen={modalIsOpen} onRequestClose={closeModal} />
        </div>
        </div>
      </div>
  );
};

export default Top;
