'use client';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { debounce } from 'chart.js/helpers';
//@ts-ignore
var activeProviders = []
// @ts-ignore
const SidebarMenu = ({ providers }) => {

  const [range, setRange] = useState([70, 2000]);
  const [rangeSpeed, setRangeSpeed] = useState([240, 1910]);
  
  

// @ts-ignore
  const handleSliderChange = (value) => {
    //@ts-ignore
    setRange(value);
    CheckTariffs()
  };
// @ts-ignore
  const handleSliderSpeedChange = (value) => {
    //@ts-ignore
    setRangeSpeed(value);
    CheckTariffs()
  };
  function CheckTariffs(){
    var tariffsContainer = document.getElementById("tariffs");
    // Перебираем все потомки элемента с id "tariffs"
    tariffsContainer?.childNodes.forEach(element => {
      if (element.nodeType === 1) {
        // @ts-ignore
        var providerName = element.dataset.providername;
        // @ts-ignore
        var internetspeed = parseInt(element.dataset.internetspeed);
        //@ts-ignore
        console.log(activeProviders)
        console.log(internetspeed)
        console.log(providerName)
        // @ts-ignore
        element.classList.add("hidden");
        // @ts-ignore
        if ((internetspeed>=rangeSpeed[0]||Number.isNaN(internetspeed))&&(activeProviders.includes(providerName)||activeProviders.length == 0)){
          // @ts-ignore
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
          onChange={(e) => {
            const isChecked = e.target.checked;
          
            if (isChecked) {
              // Если чекбокс отмечен, добавляем провайдера
              activeProviders.push(provider.providerName)
            } else {
              //@ts-ignore
              activeProviders = activeProviders.filter((name) => name !== provider.providerName)
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
            
            onChange={(e) => {
              //handleSliderChange([Number(e.target.value), range[1]]);
              CheckTariffs()
            }}
            style={{ width: '60px', height: '30px', borderRadius: '8px', marginLeft: '8px' }}
          />
          <input
            id="default-range-to"
            type="number"
            value={range[1]}
            disabled
            onChange={(e) => {
              //handleSliderChange([range[0], Number(e.target.value)]);
            }}
            style={{ width: '60px', height: '30px', borderRadius: '8px', marginLeft: '8px' }}/>
          <input
            id="default-range"
            type="range"
            className="w-240 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            min={100}
            max={2100}
            value={range[0]}
            onChange={(e) => {
              //handleSliderChange([Number(e.target.value), range[1]]);
              CheckTariffs()}}
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
            onChange={(e) => {
              handleSliderSpeedChange([Number(e.target.value), rangeSpeed[1]])}}
            style={{ width: '60px', height: '30px', borderRadius: '8px', marginLeft: '8px' }}
          />
          <input
            id="default-range-price-to"
            type="number"
            value={rangeSpeed[1]}
            disabled
            onChange={(e) => {
              handleSliderSpeedChange([rangeSpeed[0], Number(e.target.value)])}}
            style={{ width: '60px', height: '30px', borderRadius: '8px', marginLeft: '8px' }}
          />
          <input
            id="default-range-price"
            type="range"
            className="w-240 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            min={100}
            max={2100}
            value={rangeSpeed[0]}
            onChange={(e) => {
              handleSliderSpeedChange([Number(e.target.value), rangeSpeed[1]])}}
          />
        </div>
      </div>
      </aside>
    </div>

  );
};

export default SidebarMenu;
