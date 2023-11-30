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
  const [review, setReview] = useState('');

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setReview(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Review:', review);
    onRequestClose();
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
          Оставить отзыв
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
        className="text-black-400 text-xl font-medium leading-4 border-[color:var(--color-light-light-3,#DFDFE6)] bg-gray-50 mt-8 px-4 py-5 rounded-xl border-2 border-solid max-md:max-w-full w-full"
        placeholder="Ваше имя"
        />


      </div>
      <div className="flex items-center">
      <textarea
          className="text-black-400 text-xl font-medium leading-4 border-[color:var(--color-light-light-3,#DFDFE6)] bg-gray-50 mt-6 px-4 py-5 rounded-xl border-2 border-solid max-md:max-w-full w-full"
          style={{ 
              height: '150px',
              fontFamily: 'Inter, sans-serif'
          }}
          placeholder="Ваш отзыв"
      ></textarea>
      </div>
    </Modal>

  );
};

export default ModalComponent;
