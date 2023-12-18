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

  const iconStyleCall = {
    backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets/TEMP/3df5e8820c3d7b7fcd48e65ac41133fdc8fe0b8b56eaae10aba76e709b07bb9c?)',
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
    </Modal>

  );
};

export default ModalComponent;
