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
    <div>
      {/* Render checkboxes based on the providers array */}
      {providers.map((provider) => (
  <div key={provider.providerId}>
    <input
      type="checkbox"
      id={provider.providerId}
      onChange={() => {
        const providerElements = document.querySelectorAll(".providername");

        providerElements.forEach((element) => {
          const isMatchingProvider = element.dataset.providerId === provider.providerId;

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
    <label htmlFor={provider.providerId}>{provider.providerName}</label>
  </div>
))}


      {/* Example sliders */}
      <div>
        <p>Range Slider</p>
        <input type="range" value={range[0]} min={0} max={100} onChange={(e) => handleSliderChange([Number(e.target.value), range[1]])} />
        <input type="range" value={range[1]} min={0} max={100} onChange={(e) => handleSliderChange([range[0], Number(e.target.value)])} />
      </div>

      <div>
        <p>Price Range Slider</p>
        <input type="range" value={rangePrice[0]} min={0} max={100} onChange={(e) => handleSliderPriceChange([Number(e.target.value), rangePrice[1]])} />
        <input type="range" value={rangePrice[1]} min={0} max={100} onChange={(e) => handleSliderPriceChange([rangePrice[0], Number(e.target.value)])} />
      </div>
    </div>
  );
};

export default SidebarMenu;
