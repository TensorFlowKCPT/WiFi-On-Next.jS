"use client";
import React, { useState } from "react";
import { motion, Variants } from 'framer-motion';
import ModalComponent from "./ModalComponent";
import { Typewriter } from 'react-simple-typewriter';
const buttonStyles = {
  base: "flex-grow w-full h-full items-center gap-10 px-[20px] py-[10px] bg-[#2a6f97] rounded-[10px] all-[unset] box-border",
  text: "relative font-semibold text-default-white text-[14px] text-center leading-[20px] whitespace-nowrap",
  hover: { scale: 1.04 },
  transition: { type: "tap", stiffness: 300, damping: 10 },
};

export const Top = (): JSX.Element => {
  const fadeInAnimation = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.3 },
  };


  const containerVariants: Variants = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  
  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  var [suggestions, setSuggestions] = useState([]); // Состояние для хранения предложенных вариантов

  const CheckAdress = (query: string) => {
    // Ваша логика проверки адреса и получения предложенных вариантов
    // Например, это может быть запрос к серверу или фильтрация из статического списка
    var url =
      "http://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
    var token = "37246a81de5e3317c98fb92126a5e5bf19aae2b2";
    var options = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Token " + token,
      },
      body: JSON.stringify({ query: query, count: 5 }),
    };
    fetch(url, options)
      .then((response) => response.text())
      .then(async (result) => {
        console.log(JSON.parse(result))
        const suggestions = JSON.parse(result).suggestions.filter(
            (suggestion) => suggestion.data.fias_level < 9
          )
          .map((suggestion) => suggestion);
        if (suggestions[0].value === query&&suggestions[0].data.fias_level==8) {
          window.location.href = "/Tariffs?address=" + query;
        }
        setSuggestions(suggestions.map((suggestion) => suggestion.value));
      })
      .catch((error) => console.log("error", error));
  };

  const [inputValue, setInputValue] = useState("");
  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setSuggestions([]); // Закрываем список подсказок после выбора
    CheckAdress(suggestion);
  };
  const handleInput = (event) => {
    const query = event.target.value;
    setInputValue(query);

    // Вызываем CheckAdress при каждом вводе пользователя
    CheckAdress(query);
  };
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-4 py-8 bg-neutralsilver">
      <div className="flex flex-col items-center md:text-left md:w-1/2 md:gap-8">
        <motion.div
          {...fadeInAnimation}
          className="mb-8 md:mb-0"
          style={{ textAlign: "center" }}
        >
          <motion.p
            {...fadeInAnimation}
            className="font-semibold text-4xl md:text-6xl text-variable-collection-dark-green-duplicate"
          >
            <span className="block text-[#012a4a]">
              Найди своего идеального
            </span>
            <span className="block text-[#2c7da0]">провайдера</span>
            <span className="block text-[#2c7da0]">здесь</span>
            <div>
              <span className="block text-[#012a4a] text-5xl" style={{ display: 'inline-block', marginRight: '10px' }}>Подключите</span>
              <span style={{ color: '#2c7da0', fontWeight: 'bold', fontSize: '50px', display: 'inline-block' }}>
                <Typewriter
                  words={['Интернет', 'Телевидение', 'Связь']}
                  loop={3}
                  cursor
                  cursorStyle='|'
                  typeSpeed={100}
                  deleteSpeed={100}
                  delaySpeed={1500}
                />
              </span>
            </div>


          </motion.p>
          <motion.p
            {...fadeInAnimation}
            className="mt-4 text-xl md:text-2xl text-variable-collection-dark-blue"
          >
            До сих пор в раздумьях? <br />
            Наш сервис поможет вам с выбором!
          </motion.p>
        </motion.div>
        <div className="flex flex-col md:flex-col items-center md:w-full md:gap-4">
          <motion.input
            {...fadeInAnimation}
            onInput={handleInput}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            placeholder="Введите адрес"
            className="flex-grow w-full h-12 md:h-[40px] px-4 py-2 rounded-[12px] border-0 bg-white mb-4 md:mb-0"
          />
            {suggestions.length > 0 && (
              <motion.ul
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="max-h-40 overflow-y-auto w-full px-4 py-2 mt-2 bg-white border rounded-md shadow-lg cursor-pointer transition-colors duration-300 list-none"
              >
                {suggestions.map((suggestion, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="px-4 py-2 cursor-pointer hover:bg-blue-100"
                    onClick={() => handleSuggestionClick(suggestion)}
                    whileHover={{ backgroundColor: '#e3f2fd' }}
                  >
                    {suggestion}
                  </motion.li>
                ))}
              </motion.ul>
            )}

          <motion.button
            {...fadeInAnimation}
            onClick={openModal}
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

          {/* Modal */}
          <ModalComponent isOpen={modalIsOpen} onRequestClose={closeModal} />
        </div>
      </div>
    </div>
  );
};

export default Top;
