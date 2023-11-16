import React from "react";

const TariffCard = ({ title, price, imageUrl, provider, onConnectClick }) => {
  return (
    <div className="border border-gray-300 p-4 rounded-md shadow-md">
      <img className="w-full h-auto mb-4" alt={title} src={imageUrl} />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">{provider}</p>
      <p className="text-lg font-bold text-variable-collection-dark-blue mb-2">{price}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
      >
        Подключить
      </button>
    </div>
  );
};

export default TariffCard;
