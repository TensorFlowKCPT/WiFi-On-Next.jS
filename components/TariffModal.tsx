'use client';
import React from 'react';
import Modal from 'react-modal';
import { motion } from 'framer-motion';
interface TariffModalProps {
    isOpen: boolean;
    onRequestClose: () => void;    
  }
  const TariffModal: React.FC<TariffModalProps> = ({ isOpen, onRequestClose, tariffInfo }) => {
    const fadeInAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
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
        maxWidth: '700px', // Adjust the maximum width as needed
        width: '100%',
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
        <p>Provider: {tariffInfo.providerName}</p>
        <p>Price: {tariffInfo.Price} ₽</p>
        {/* Add more details as needed */}
        <button onClick={onRequestClose}>Close</button>
      </motion.div>
    </Modal>
  );
};

export default TariffModal;
