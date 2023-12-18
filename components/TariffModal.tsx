'use client';
import React from 'react';
import Modal from 'react-modal';
import { motion } from 'framer-motion';
import Cords from "./Cords";
interface TariffModalProps {
    isOpen: boolean;
    onRequestClose: () => void;    
  }
  // @ts-ignore
  const TariffModal: React.FC<TariffModalProps> = ({ isOpen, onRequestClose, tariffInfo }) => {
    const fadeInAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };
  const cordsValue = <Cords />;
  const descriptionWithCords = tariffInfo.Description.replace('{name_city}', cordsValue); 

  const iconStyle = {
    backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets/TEMP/17ffe372-dd0d-418f-9408-9f3f14c7765d?)',
    backgroundSize: '20px 20px', // Укажите размеры изображения
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '10px center', // Укажите позицию изображения
    paddingLeft: '40px', // Укажите отступ слева, который больше ширины изображения
    borderColor: '#DFDFE6'
  };



  const iconStyleAdress = {
    backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets/TEMP/8e099acc-adc8-4175-b191-730423468ffd?)',
    backgroundSize: '20px 20px', // Укажите размеры изображения
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '10px center', // Укажите позицию изображения
    paddingLeft: '40px', // Укажите отступ слева, который больше ширины изображения
    borderColor: '#DFDFE6'
  };
  const iconStyleCall = {
    backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets/TEMP/3df5e8820c3d7b7fcd48e65ac41133fdc8fe0b8b56eaae10aba76e709b07bb9c?)',
    backgroundSize: '20px 20px', // Укажите размеры изображения
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '10px center', // Укажите позицию изображения
    paddingLeft: '40px', // Укажите отступ слева, который больше ширины изображения
    borderColor: '#DFDFE6'
  };

  const Options = JSON.parse(tariffInfo.OptionsJSON)
  var InternetSpeed
  var GigabytesCount
  var MinutesCount
  var ChannelsCount
  var SMSCount
  try{
    InternetSpeed = Options.Values.InternetSpeed[0]
    GigabytesCount = Options.Values.GigabytesCount[0]
    MinutesCount = Options.Values.MinutesCount[0]
    ChannelsCount = Options.Filters.ChannelsCountFilter;
    SMSCount = Options.Filters.SmsCountFilter;
  }
  catch{
    InternetSpeed = null
  }


  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel="Example Modal"
    style={{
      overlay: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      content: {
        position: 'relative',
        top: 'auto',
        left: 'auto',
        right: 'auto',
        bottom: 'auto',
        borderRadius: '10px',
        outline: 'none',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '700px', 
        width: '100%',
        maxHeight: '80vh', 
        overflowY: 'auto', 
      },
    }}
  >
      <motion.div {...fadeInAnimation} className="modal-content">
        <h2>{tariffInfo.formattedName}</h2>
        <img
          style={{ width: 'auto', height: 'auto', maxWidth: '50%', maxHeight: '50%', objectFit: 'cover' }}
          alt={tariffInfo.formattedName}
          src={tariffInfo.ImageUrl}
        />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <h4 className="text-gray-500 text-sm">Провайдер</h4>
          <p className="text-lg font-semibold mb-3">{tariffInfo.providerName}</p>
        </div>

        <div>
          <h4 className="text-gray-500 text-sm">Цена тарифа</h4>
          <div className="flex items-center">
            <p className="text-lg font-bold text-variable-collection-dark-blue mb-2 mr-2">
              {tariffInfo.Price} ₽
            </p>
            <p className="text-gray-500 text-sm line-through mb-1">
              {tariffInfo.PriceOld} ₽
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-gray-500 text-sm">Каналы</h4>
          <p className="text-lg font-semibold mb-3">{ChannelsCount}</p>
        </div>

        <div>
          <h4 className="text-gray-500 text-sm">Скорость:</h4>
          <span className="text-lg font-semibold mb-3">{InternetSpeed} м/бит в сек.</span>
        </div>

        <div>
          <h4 className="text-gray-500 text-sm">Гигабайты:</h4>
          <span className="text-lg font-semibold mb-3">{GigabytesCount} гигабайт</span>
        </div>

        <div>
          <h4 className="text-gray-500 text-sm">Связь:</h4>
          <span className="text-lg font-semibold mb-3">{MinutesCount} минут и {SMSCount}</span>
        </div>
      </div>
        <p className="text-gray-500 text-sm">Информация</p>
        <p className="text-lg font-semibold mb-3">{descriptionWithCords}</p>
      <div className="flex items-center">
      <input
          type="text"
          className="border-[color:var(--color-light-light-3,#DFDFE6)] bg-gray-50 gap-2 mt-6 px-4 py-4 rounded-xl border-2 border-solid max-md:max-w-full max-md:flex-wrap w-full"  // Added 'w-full' to make the input stretch
          placeholder="Ваше имя"
          style={iconStyle}
        />
      </div>

      <div className="flex items-center">
        <input
          type="text"
          className="border-[color:var(--color-light-light-3,#DFDFE6)] bg-gray-50 gap-2 mt-6 px-4 py-4 rounded-xl border-2 border-solid max-md:max-w-full max-md:flex-wrap w-full"  // Added 'w-full' to make the input stretch
          placeholder="Ваш номер"
          style={iconStyleCall}
        />
      </div>

      <div className="flex items-center">
        <input
          type="text"
          className="border-[color:var(--color-light-light-3,#DFDFE6)] bg-gray-50 gap-2 mt-6 px-4 py-4 rounded-xl border-2 border-solid max-md:max-w-full max-md:flex-wrap w-full"  // Added 'w-full' to make the input stretch
          placeholder="Адрес подключения"
          style={iconStyleAdress}
        />
      </div>
    <motion.button
        className="w-full mt-5 items-center gap-10 px-[20px] py-[10px] bg-[#2a6f97] rounded-[10px] all-[unset] box-border"
        whileHover={{ scale: 1.04 }}
        transition={{ type: "tap", stiffness: 300, damping: 10 }}
      >
        <motion.div className="relative font-semibold text-default-white text-[14px] text-center leading-[20px] whitespace-nowrap"
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "tap", stiffness: 300, damping: 10 }}>
          Оставить заявку
        </motion.div>
      </motion.button>
      </motion.div>
    </Modal>
  );
};

export default TariffModal;
