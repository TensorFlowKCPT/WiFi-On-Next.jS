'use client';
import React, { useState } from 'react';
import { motion } from "framer-motion";
import ModalComponent from './ModalComponent';

const TariffCard = ({ Name, Price, ImageUrl, providerName, onConnectClick }) => {
  const fadeInAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div className="relative border border-gray-300 p-4 rounded-md shadow-md flex flex-col items-center justify-center text-center">
      <img
        style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
        alt={Name}
        src={ImageUrl}
      />
      <h3 className="text-xl font-semibold mb-2">{Name}</h3>
      <p className="text-gray-600 mb-2">{providerName}</p>
      <p className="text-lg font-bold text-variable-collection-dark-blue mb-2">
        {Price} ₽
      </p>
      <motion.button
        {...fadeInAnimation}
        className="md:flex w-[156px] h-[50px] items-center gap-10 px-[20px] py-[10px] bg-[#2a6f97] rounded-[10px] all-[unset] box-border"
        whileHover={{ scale: 1.04 }}
        transition={{ type: "tap", stiffness: 300, damping: 10 }}
        onClick={openModal}
      >
        <motion.div
          {...fadeInAnimation}
          className="relative font-semibold text-default-white text-[14px] text-center leading-[20px] whitespace-nowrap"
          whileHover={{ scale: 1.04 }}
          transition={{ type: "tap", stiffness: 300, damping: 10 }}
        >
          Оставить заявку
        </motion.div>
      </motion.button>
      <ModalComponent isOpen={modalIsOpen} onRequestClose={closeModal} />
    </div>
  );
};

export default TariffCard;
