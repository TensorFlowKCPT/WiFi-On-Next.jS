import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ContactUs = () => {
const key = "eedd6882-ab52-4127-a367-69e4286b00bf";
const [userCity, setUserCity] = useState('Unknown');

const getUserCity = async () => {
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const response = await axios.get(
              `https://catalog.api.2gis.com/3.0/items/geocode?lat=${position.coords.latitude}&lon=${position.coords.longitude}&fields=items.point&key=${key}`
            );
  
            const city = response.data.result?.items[3]?.full_name;
  
            if (city && city.trim() !== '') {
              setUserCity(city);
            } else {
              setUserCity('');
            }
          },
          (error) => {
            console.error('Error getting geolocation:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    } catch (error) {
      console.error('Error getting city information:', error);
      setUserCity('');
    }
  };

  useEffect(() => {
    getUserCity();
  }, []);
    return (
    <span className="block text-[#012a4a]">в городе {userCity}</span>
  );
};

export default ContactUs;
