'use client';
import React, { useState } from 'react';
import { motion } from "framer-motion";
import TariffModal from './TariffModal';

// @ts-ignore
const TariffCard = ({ Name, Price, ImageUrl, OptionsJSON, providerName, Description, PriceOld}) => {
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
  const formattedName = Name.replace(/[-_]/g, ''); 
  const Options = JSON.parse(OptionsJSON)
  var InternetSpeed
  var GigabytesCount
  var MinutesCount
  var SMSCount
  try{
    InternetSpeed = Options.Values.InternetSpeed[0]
    GigabytesCount = Options.Values.GigabytesCount[0]
    MinutesCount = Options.Values.MinutesCount[0]
    SMSCount = Options.Filters.SmsCountFilter;
  }
  catch{
    InternetSpeed = null
  }
  
  return (
      <div className="relative border border-gray-300 p-4 rounded-md shadow-md flex flex-col items-center justify-center text-center hidden" data-internetspeed={InternetSpeed} data-providerName={providerName} data-price={Price}>
        <img
          style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
          alt={formattedName}
          src={ImageUrl}
        />
        <div className="grid grid-cols-1">
          <h3 className="col-start-1 text-xl h-[50px] font-semibold mb-5">{formattedName}</h3>
          <p className="col-start-1 text-gray-600 text-lg mt-10 mb-2">{providerName}</p>
        </div>
        <div className="flex items-center">
          <p className="text-lg font-bold text-variable-collection-dark-blue mb-2 mr-2">
            {Price} ₽
          </p>
          <p className="text-gray-500 text-sm line-through mb-1">
            {PriceOld} ₽
          </p>
        </div>

        <span className="text-gray-500 text-sm">Скорость:</span>
        <span className="text-lg font-semibold mb-3">{InternetSpeed} м/бит в сек.</span>

        <span className="text-gray-500 text-sm">Гигабайты:</span>
        <span className="text-lg font-semibold mb-3">{GigabytesCount} гигабайт</span>

        <span className="text-gray-500 text-sm">Минуты:</span>
        <span className="text-lg font-semibold mb-3">{MinutesCount} минут</span>

        <span className="text-gray-500 text-sm">СМС:</span>
        <span className="text-lg font-semibold mb-3">{SMSCount}</span>
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
        
        <TariffModal isOpen={modalIsOpen} onRequestClose={closeModal}
        // @ts-ignore
         tariffInfo={{ Name, Price, providerName, ImageUrl, formattedName, Description, PriceOld, OptionsJSON }} />
      </div>
    );
  };
  
  export default TariffCard;