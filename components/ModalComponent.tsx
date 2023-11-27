'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Modal from 'react-modal';
import { motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const ModalComponent: React.FC<ModalProps> = ({ isOpen, onRequestClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const fadeInAnimation = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.8 }, 
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Add your logic here to handle the form submission
    console.log('Name:', name);
    console.log('Phone:', phone);
    // You may want to close the modal after submission
    onRequestClose();
  };
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
          maxWidth: '500px', // Adjust the maximum width as needed
          width: '100%',
        },
      }}
    >
        <div className="justify-between items-stretch flex gap-5 mt-6 max-md:max-w-full max-md:flex-wrap">
        <div className="text-zinc-800 text-2xl font-medium leading-8">
          Оставить заявку
        </div>
        <motion.div
          whileHover={{ scale: 1.1 }} // Change the scale factor as needed
          whileTap={{ scale: 0.9 }} // Change the scale factor as needed
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d36ed647-49b7-480c-91a0-e8cc0adbf26d?apiKey=f97110349e09463883ec63bac45e4e6e&"
            className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden self-center shrink-0 max-w-full my-auto"
            onClick={onRequestClose}
          />
        </motion.div>
      </div>
      <div style={{ position: 'relative', width: '440px' }}>
          <input
            type="text"
            className="border-[color:var(--color-light-light-3,#DFDFE6)] bg-gray-50 gap-2 mt-6 px-4 py-4 rounded-xl border-2 border-solid max-md:max-w-full max-md:flex-wrap w-full"
            placeholder="Номер телефона"
            style={{ paddingLeft: '40px', width: '100%' }}
          />
        <div style={{ position: 'absolute', top: '70%', left: '13px', transform: 'translateY(-50%)' }}>
          <svg width="21" height="21" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.8446 16.1351L17.1913 13.6019L17.1757 13.5947C16.8822 13.4692 16.5621 13.4188 16.2442 13.4481C15.9264 13.4775 15.6209 13.5856 15.3553 13.7627C15.3241 13.7833 15.294 13.8058 15.2653 13.8299L12.3445 16.3199C10.4941 15.4211 8.58367 13.5251 7.68487 11.6987L10.1785 8.73344C10.2025 8.70344 10.2253 8.67344 10.2469 8.64104C10.4202 8.3762 10.5254 8.07262 10.553 7.75732C10.5806 7.44202 10.5299 7.12477 10.4053 6.83382V6.81942L7.86487 1.15657C7.70015 0.776482 7.41693 0.45986 7.05749 0.253966C6.69804 0.0480719 6.28164 -0.0360501 5.87045 0.0141573C4.2444 0.228127 2.75185 1.02669 1.67154 2.26069C0.59124 3.4947 -0.00292914 5.07976 1.08584e-05 6.71982C1.08584e-05 16.2479 7.75207 24 17.2801 24C18.9202 24.0029 20.5052 23.4088 21.7393 22.3285C22.9733 21.2481 23.7718 19.7556 23.9858 18.1295C24.0361 17.7185 23.9521 17.3022 23.7465 16.9428C23.5408 16.5833 23.2244 16.3 22.8446 16.1351ZM17.2801 22.08C13.2077 22.0755 9.30342 20.4558 6.42381 17.5762C3.54419 14.6966 1.92447 10.7922 1.92002 6.71982C1.91551 5.548 2.33769 4.41459 3.10772 3.53128C3.87774 2.64796 4.94297 2.07514 6.10445 1.91978C6.10398 1.92456 6.10398 1.92939 6.10445 1.93418L8.62447 7.57423L6.14405 10.5431C6.11888 10.572 6.09601 10.6029 6.07565 10.6355C5.89507 10.9126 5.78913 11.2316 5.76811 11.5617C5.74709 11.8918 5.81169 12.2217 5.95565 12.5195C7.04286 14.7431 9.28328 16.9667 11.5309 18.0527C11.8309 18.1954 12.1627 18.2577 12.494 18.2337C12.8252 18.2098 13.1446 18.1003 13.4209 17.9159C13.4517 17.8952 13.4814 17.8727 13.5097 17.8487L16.4269 15.3599L22.067 17.8859H22.0802C21.9267 19.0491 21.3547 20.1164 20.4713 20.8884C19.5878 21.6603 18.4533 22.0839 17.2801 22.08Z" fill="#87898E"/>
          </svg>
        </div>
      </div>

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
    </Modal>

  );
};

export default ModalComponent;
