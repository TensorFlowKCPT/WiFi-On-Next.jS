"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ModalComponent from "./ModalComponent";
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
        const suggestions = JSON.parse(result)
          .suggestions.suggestions.filter(
            (suggestion) => suggestion.data.fias_level < 9
          )
          .map((suggestion) => suggestion.value);
        if (suggestions.length === 1 && suggestions[0] === query) {
          window.location.href = "/Tariffs?address=" + query;
        }
        setSuggestions(suggestions);
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
            <ul className="px-4 py-2 cursor-pointer transition-colors duration-300">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
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
