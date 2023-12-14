'use client';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { debounce } from 'chart.js/helpers';

const SidebarMenu = ({ providers }) => {

  const [range, setRange] = useState([70, 2000]);
  const [rangePrice, setRangePrice] = useState([240, 1910]);

  const handleSliderChange = (value) => {
    setRange(value);
  };

  const handleSliderPriceChange = (value) => {
    setRangePrice(value);
  };

  return (
<div className='bg-neutralsilver floating p-4 mx-auto'>
    <aside>
     <label 
     style={{
              marginLeft: '8px',
              fontSize: '20px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 'bold' 
            }}>Провайдеры</label>
      {providers.map((provider) => (
   <div className="ml-8" key={provider.providerId}>
      <input
          type="checkbox"
          id={provider.providerId}
          style={{ width: '30px', height: '30px' }} // Adjust the width and height as needed
          onChange={() => {
            const providerElements = document.getElementById("tariffs")?.querySelectorAll("div");

            providerElements?.forEach((element) => {
              const isMatchingProvider = element.dataset.providername === provider.providerName;

              if (isMatchingProvider) {
                if (document.getElementById(provider.providerId).checked) {
                  element.classList.remove("hidden");
                  element.classList.add("visible");
                } else {
                  element.classList.remove("visible");
                  element.classList.add("hidden");
                }
              }
            });
          }}
        />
          <label
          htmlFor={provider.providerId}
            style={{
              marginLeft: '8px',
              fontSize: '20px',
              fontFamily: 'Inter, sans-serif', 
            }}
          >
    {provider.providerName}
  </label>
      </div>
      ))}
       <label 
     style={{
              marginLeft: '8px',
              fontSize: '20px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 'bold' 
            }}>Услуги</label>
      <div className="ml-8">
        <input
            type="checkbox"
            placeholder='Интернет'
            style={{ width: '30px', height: '30px' }}>
        </input>
        <input
            type="checkbox"
            style={{ width: '30px', height: '30px' }}>
        </input>
        <input
            type="checkbox"
            style={{ width: '30px', height: '30px' }}>
        </input>
      </div>

      {/* Example sliders */}
      <div>
        <div>
          <p  style={{
              marginLeft: '8px',
              fontSize: '20px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 'bold' 
            }}>Cтоимость тарифа</p>
          <input
            id="default-range-from"
            type="number"
            value={range[0]}
            
            onChange={(e) => handleSliderChange([Number(e.target.value), range[1]])}
            style={{ width: '60px', height: '30px', borderRadius: '8px', marginLeft: '8px' }}
          />
          <input
            id="default-range-to"
            type="number"
            value={range[1]}
            disabled
            onChange={(e) => handleSliderChange([range[0], Number(e.target.value)])}
            style={{ width: '60px', height: '30px', borderRadius: '8px', marginLeft: '8px' }}/>
          <input
            id="default-range"
            type="range"
            className="w-240 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            min={100}
            max={2100}
            value={range[0]}
            onChange={(e) => handleSliderChange([Number(e.target.value), range[1]])}
          />
        </div>

        <div>
          <p  style={{
              marginLeft: '8px',
              fontSize: '20px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 'bold' 
            }}>Скорость интернета</p>
          <input
            id="default-range-price-from"
            type="number"
            value={rangePrice[0]}
            onChange={(e) => handleSliderPriceChange([Number(e.target.value), rangePrice[1]])}
            style={{ width: '60px', height: '30px', borderRadius: '8px', marginLeft: '8px' }}
          />
          <input
            id="default-range-price-to"
            type="number"
            value={rangePrice[1]}
            disabled
            onChange={(e) => handleSliderPriceChange([rangePrice[0], Number(e.target.value)])}
            style={{ width: '60px', height: '30px', borderRadius: '8px', marginLeft: '8px' }}
          />
          <input
            id="default-range-price"
            type="range"
            className="w-240 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            min={100}
            max={2100}
            value={rangePrice[0]}
            onChange={(e) => handleSliderPriceChange([Number(e.target.value), rangePrice[1]])}
          />
        </div>
      </div>
      </aside>
    </div>

  );
};

export default SidebarMenu;
