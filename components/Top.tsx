import React from "react";

export const Top = (): JSX.Element => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-4 py-8 bg-neutralsilver">
      <div className="flex flex-col items-center md:items-start md:text-left md:w-1/2 md:gap-8">
        <div className="mb-8 md:mb-0">
          <p className="font-semibold text-4xl text-center md:text-left md:text-6xl text-variable-collection-dark-green-duplicate">
            <span className="block text-[#012a4a]">Найди своего идеального</span>
            <span className="block text-[#2c7da0]">провайдера</span>
            <span className="block text-[#2c7da0]">здесь</span>
          </p>
          <p className="mt-4 text-xl md:text-2xl text-center md:text-left text-variable-collection-dark-blue">
            До сих пор в раздумьях? <br />
            Наш сервис поможет вам с выбором!
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center md:w-full md:gap-4">
          <input
            type="text"
            placeholder="Введите адрес"
            className="w-full md:w-[200px] h-12 md:h-[40px] px-4 py-2 rounded-[12px] border-[2px] border-gray-300 bg-white mb-4 md:mb-0"
          />
          <button className="w-full md:w-auto h-16 md:h-[40px] rounded-md shadow-md bg-variable-collection-blue-secondary text-white text-xl font-semibold">
            Оставить заявку
          </button>
        </div>
      </div>
      {/* Дополнительный контент для больших экранов, если необходимо */}
    </div>
  );
};

export default Top;
