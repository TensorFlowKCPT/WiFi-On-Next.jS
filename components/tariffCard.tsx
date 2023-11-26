import React from "react";
import { motion } from "framer-motion";

const TariffCard = ({ title, price, imageUrl, provider, onConnectClick }) => {
  const fadeInAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <div className="relative border border-gray-300 p-4 rounded-md shadow-md">
      <img
        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
        alt={title}
        src={imageUrl}
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">{provider}</p>
      <p className="text-lg font-bold text-variable-collection-dark-blue mb-2">
        {price}
      </p>
      <motion.button
        {...fadeInAnimation}
        className="md:flex w-[156px] h-[50px] items-center gap-10 px-[20px] py-[10px] bg-[#2a6f97] rounded-[10px] all-[unset] box-border"
        whileHover={{ scale: 1.04 }}
        transition={{ type: "tap", stiffness: 300, damping: 10 }}
        onClick={onConnectClick}
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
    </div>
  );
};

export default TariffCard;
