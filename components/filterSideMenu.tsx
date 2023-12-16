'use client';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { debounce } from 'chart.js/helpers';

// @ts-ignore
const SidebarMenu = ({ providers }) => {

  const [range, setRange] = useState([70, 2000]);
  const [rangeSpeed, setRangeSpeed] = useState([240, 1910]);
  const [activeProviders, setActiveProviders] = useState([]);

// @ts-ignore
  const handleSliderChange = (value) => {
    setRange(value);
  };
// @ts-ignore
  const handleSliderPriceChange = (value) => {
    setRangeSpeed(value);
  };
  function CheckTariffs(){
    var tariffsContainer = document.getElementById("tariffs");
    
    // Перебираем все потомки элемента с id "tariffs"
    tariffsContainer?.childNodes.forEach(element => {
      if (element.nodeType === 1) {
        var providerName = element.dataset.providername;
        var internetspeed = parseInt(element.dataset.internetspeed);
        console.log(activeProviders)
        element.classList.add("hidden");
        if (internetspeed>=rangeSpeed[0]&&activeProviders.includes(providerName)){
          element.classList.remove("hidden");
        }
      }
    });
  }
  
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

      {providers.map((
        // @ts-ignore
        provider) => (
   <div className="ml-8" key={provider.providerId}>
      <input
          type="checkbox"
          id={provider.providerId}
          style={{ width: '30px', height: '30px' }} // Adjust the width and height as needed
          onChange={() => {
            // @ts-ignore
            if (activeProviders.includes(provider.providerName)) {
              // @ts-ignore
            setActiveProviders(activeProviders.filter(name => name !== provider.providerName));
          } else {
            // @ts-ignore
            setActiveProviders([...activeProviders, provider.providerName]);
          }
        CheckTariffs()}}
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
          fontWeight: 'bold',
          marginTop: '8px', 
        }}>Услуги</label>
      <div className="ml-8 " style={{ display: 'flex', flexDirection: 'column' }}>
        <div>
          <input
            type="checkbox"
            placeholder='Интернет'
            style={{ width: '30px', height: '30px' }}
          />
          <span style={{
              marginLeft: '8px',
              fontSize: '20px',
              fontFamily: 'Inter, sans-serif', 
            }}>Интернет</span>
        </div>
        <div>
          <input
            type="checkbox"
            style={{ width: '30px', height: '30px' }}
          />
          <span             style={{
              marginLeft: '8px',
              fontSize: '20px',
              fontFamily: 'Inter, sans-serif', 
            }}>Связь</span>
        </div>
        <div>
          <input
            type="checkbox"
            style={{ width: '30px', height: '30px' }}
          />
          <span             style={{
              marginLeft: '8px',
              fontSize: '20px',
              fontFamily: 'Inter, sans-serif', 
            }}>Телевидение</span>
        </div>
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
            
            onChange={(e) => {handleSliderChange([Number(e.target.value), range[1]]);
              CheckTariffs()
            }}
            style={{ width: '60px', height: '30px', borderRadius: '8px', marginLeft: '8px' }}
          />
          <input
            id="default-range-to"
            type="number"
            value={range[1]}
            disabled
            onChange={(e) => {handleSliderChange([range[0], Number(e.target.value)]);
              CheckTariffs()
            }}
            style={{ width: '60px', height: '30px', borderRadius: '8px', marginLeft: '8px' }}/>
          <input
            id="default-range"
            type="range"
            className="w-240 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            min={100}
            max={2100}
            value={range[0]}
            onChange={(e) => {handleSliderChange([Number(e.target.value), range[1]]);CheckTariffs()}}
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
            value={rangeSpeed[0]}
            onChange={(e) => {handleSliderPriceChange([Number(e.target.value), rangeSpeed[1]]);CheckTariffs()}}
            style={{ width: '60px', height: '30px', borderRadius: '8px', marginLeft: '8px' }}
          />
          <input
            id="default-range-price-to"
            type="number"
            value={rangeSpeed[1]}
            disabled
            onChange={(e) => {handleSliderPriceChange([rangeSpeed[0], Number(e.target.value)]);CheckTariffs()}}
            style={{ width: '60px', height: '30px', borderRadius: '8px', marginLeft: '8px' }}
          />
          <input
            id="default-range-price"
            type="range"
            className="w-240 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            min={100}
            max={2100}
            value={rangeSpeed[0]}
            onChange={(e) => {handleSliderPriceChange([Number(e.target.value), rangeSpeed[1]]); CheckTariffs()}}
          />
        </div>
      </div>
      </aside>
    </div>

  );
};

export default SidebarMenu;
