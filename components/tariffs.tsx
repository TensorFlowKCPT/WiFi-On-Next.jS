import React from "react";
import TariffCard from "components/tariffCard"; // Путь к вашему компоненту карточки

export const Tariffs = (): JSX.Element => {
  const tariffs = [
    {
      title: "Тариф 1",
      price: "$10",
      imageUrl: "path/to/image1.jpg",
      provider: "Провайдер 1",
    },
    {
      title: "Тариф 2",
      price: "$15",
      imageUrl: "path/to/image2.jpg",
      provider: "Провайдер 2",
    },
    {
      title: "Тариф 3",
      price: "$15",
      imageUrl: "path/to/image2.jpg",
      provider: "Провайдер 2",
    },
    {
      title: "Тариф 4",
      price: "$15",
      imageUrl: "path/to/image2.jpg",
      provider: "Провайдер 2",
    },
    // Добавьте другие тарифы по аналогии
  ];

  return (
    <div className="max-w-screen-2xl mx-auto px-8 sm:px-16 md:px-24">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-neutraldgrey">
          Ознакомьтесь с тарифами
        </h2>
        <p className="text-xl text-variable-collection-dark-blue">
          Тут вы найдете тот, который подходит именно вам!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tariffs.map((tariff, index) => (
          <TariffCard key={index} {...tariff} onConnectClick={() => handleConnect(tariff.title)} />
        ))}
      </div>
    </div>
  );
};

const handleConnect = (tariffTitle) => {
  // Обработка нажатия кнопки "Подключить" для конкретного тарифа
  console.log(`Подключение к тарифу: ${tariffTitle}`);
};

export default Tariffs;