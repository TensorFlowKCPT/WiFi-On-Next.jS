'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import type { Metadata } from 'next';
// @ts-ignore
import Header from "components/header";
// @ts-ignore
import Footer from "components/footer";




const about: React.FC = () => {
    const fadeInAnimation = {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 50 },
      transition: { duration: 0.8 }, // Set the duration here (in seconds)
    };
    return (
      <motion.div>
            <Header />
            <iframe src="https://2ip.ru/speed-widget/" height="550px" width="550px"></iframe>
      <Footer />
      </motion.div>
  );

};
export default about;

