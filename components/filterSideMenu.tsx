'use client';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const SidebarMenu = () => {
  const [internetChecked, setInternetChecked] = useState(false);
  const [tvChecked, setTvChecked] = useState(false);
  const [communicationChecked, setCommunicationChecked] = useState(false);
  const [mtsChecked, setMtsChecked] = useState(false);
  const [rostelekomChecked, setRostelekomChecked] = useState(false);
  const [domRuChecked, setDomRuChecked] = useState(false);
  const [beelineChecked, setBeelineChecked] = useState(false);
const [range, setRange] = useState([70, 2000]);
const [rangePrice, setRangePrice] = useState([240, 1910]); 
      
const handleSliderChange = (value) => {
          setRange(value);
        };
const handleSliderPriceChange = (value) => {
            setRangePrice(value);
          };

  const handleCheckboxChange = (checkboxName) => {
    switch (checkboxName) {
      case 'internet':
        setInternetChecked(!internetChecked);
        break;
      case 'tv':
        setTvChecked(!tvChecked);
        break;
      case 'communication':
        setCommunicationChecked(!communicationChecked);
        break;
        case 'mts':
            setMtsChecked(!mtsChecked);
            break;
          case 'rostelekom':
            setRostelekomChecked(!rostelekomChecked);
            break;
          case 'domRu':
            setDomRuChecked(!domRuChecked);
            break;
          case 'beeline':
            setBeelineChecked(!beelineChecked);
            break;
      default:
        break;
    }
  };


  return (
    <aside id="default-sidebar" className="w-400 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">   
      <div className="items-start bg-slate-100 flex flex-col pl-8 pr-4 max-md:pl-5">
      <div className="text-black text-2xl font-bold leading-7 self-stretch whitespace-nowrap mt-12 max-md:mt-10">
          Тарифы
        </div>
        <div className="flex items-start mt-7 ml-6 max-md:ml-2.5">
          <input
            type="checkbox"
            id="internet"
            checked={internetChecked}
            onChange={() => handleCheckboxChange('internet')}
            className={`bg-zinc-300 flex w-7 h-7 flex-col rounded-xl cursor-pointer ${internetChecked ? 'checked' : ''}`}
          />
          <div className="text-black text-xl font-light leading-6 grow whitespace-nowrap mt-1.5 self-start ml-3">
            Интернет
          </div>
        </div>

        <div className="flex items-start mt-3 ml-6 max-md:ml-2.5">
          <input
            type="checkbox"
            id="tv"
            checked={tvChecked}
            onChange={() => handleCheckboxChange('tv')}
            className={`bg-zinc-300 flex w-7 h-7 flex-col rounded-xl cursor-pointer ${tvChecked ? 'checked' : ''}`}
          />
          <div className="text-black text-xl font-light leading-6 self-center grow whitespace-nowrap my-auto ml-3">
            Телевидение
          </div>
        </div>

        <div className="flex items-start mt-3 ml-6 max-md:ml-2.5">
          <input
            type="checkbox"
            id="communication"
            checked={communicationChecked}
            onChange={() => handleCheckboxChange('communication')}
            className={`bg-zinc-300 flex w-7 h-7 flex-col rounded-xl cursor-pointer ${communicationChecked ? 'checked' : ''}`}
          />
          <div className="text-black text-xl font-light leading-6 self-center grow whitespace-nowrap my-auto ml-3">
            Связь
          </div>
        </div>

        <div className="text-black text-2xl font-bold leading-7 self-stretch whitespace-nowrap mt-12 max-md:mt-10">
          Провайдеры
        </div>
        <div className="flex items-start mt-7 ml-6 max-md:ml-2.5">
          <input
            type="checkbox"
            id="mts"
            checked={mtsChecked}
            onChange={() => handleCheckboxChange('mts')}
            className={`bg-zinc-300 flex w-7 h-7 flex-col rounded-xl cursor-pointer ${mtsChecked ? 'checked' : ''}`}
          />
          <div className="text-black text-xl font-light leading-6 grow whitespace-nowrap mt-1.5 self-start ml-3">
            МТС
          </div>
        </div>

        <div className="flex items-start mt-3 ml-6 max-md:ml-2.5">
          <input
            type="checkbox"
            id="rostelekom"
            checked={rostelekomChecked}
            onChange={() => handleCheckboxChange('rostelekom')}
            className={`bg-zinc-300 flex w-7 h-7 flex-col rounded-xl cursor-pointer ${rostelekomChecked ? 'checked' : ''}`} ></input>        
            <div className="text-black text-xl font-light leading-6 self-center grow whitespace-nowrap my-auto ml-3">
            Ростелеком
          </div>
        </div>

        <div className="flex items-start mt-3 ml-6 max-md:ml-2.5">
          <input
            type="checkbox"
            id="beeline"
            checked={beelineChecked}
            onChange={() => handleCheckboxChange('beeline')}
            className={`bg-zinc-300 flex w-7 h-7 flex-col rounded-xl cursor-pointer ${beelineChecked ? 'checked' : ''}`}
          />
          <div className="text-black text-xl font-light leading-6 self-center grow whitespace-nowrap my-auto ml-3">
            Билайн
          </div>
        </div>
        

        <div className="text-black text-2xl font-bold leading-7 self-stretch whitespace-nowrap mt-12 max-md:mt-10">
          Дополнительно
        </div>
        <div className="flex items-start mt-7 ml-6 max-md:ml-2.5">
          <input
            type="checkbox"
            id="mts"
            checked={mtsChecked}
            onChange={() => handleCheckboxChange('mts')}
            className={`bg-zinc-300 flex w-7 h-7 flex-col rounded-xl cursor-pointer ${mtsChecked ? 'checked' : ''}`}
          />
          <div className="text-black text-xl font-light leading-6 grow whitespace-nowrap mt-1.5 self-start ml-3">
            МТС
          </div>
        </div>

        <div className="flex items-start mt-3 ml-6 max-md:ml-2.5">
          <input
            type="checkbox"
            id="rostelekom"
            checked={rostelekomChecked}
            onChange={() => handleCheckboxChange('rostelekom')}
            className={`bg-zinc-300 flex w-7 h-7 flex-col rounded-xl cursor-pointer ${rostelekomChecked ? 'checked' : ''}`} ></input>        
            <div className="text-black text-xl font-light leading-6 self-center grow whitespace-nowrap my-auto ml-3">
            Ростелеком
          </div>
        </div>

        <div className="flex items-start mt-3 ml-6 max-md:ml-2.5">
          <input
            type="checkbox"
            id="beeline"
            checked={beelineChecked}
            onChange={() => handleCheckboxChange('beeline')}
            className={`bg-zinc-300 flex w-7 h-7 flex-col rounded-xl cursor-pointer ${beelineChecked ? 'checked' : ''}`}
          />
          <div className="text-black text-xl font-light leading-6 self-center grow whitespace-nowrap my-auto ml-3">
            Билайн
          </div>
        </div>
        <div className="text-black text-2xl font-bold leading-7 self-stretch whitespace-nowrap mt-12 max-md:mt-10">
          Абонентская плата
        </div>
        <div className="self-stretch flex items-stretch justify-between gap-5 mt-4">
        <div className="flex grow basis-[0%] flex-col items-stretch">
            <div className="flex items-center">
            <input
                type="text"
                disabled
                value={rangePrice[0]}
                className="text-black text-center text-xl font-light leading-6 bg-zinc-300 items-stretch px-4 py-2.5 rounded-xl max-md:pr-px mr-2.5"
                style={{ width: '100px' }}
            />
            <input
                type="text"
                disabled
                value={rangePrice[1]}
                className="text-black text-center text-xl font-light leading-6 bg-zinc-300 items-center px-4 py-2.5 rounded-xl"
                style={{ width: '100px' }}
            />
            </div>
            <div className="flex shrink-0 h-[13px] flex-col mt-4 rounded-[50%]" />
        </div>
        </div>
      
      <Slider
        range
        min={70}
        max={2000}
        defaultValue={[70, 2000]}
        value={rangePrice}
        onChange={handleSliderPriceChange}
      />
          
        <div className="text-black text-2xl font-bold leading-7 self-stretch whitespace-nowrap mt-12 max-md:mt-10">
        Скорость интернета
      </div>
      <div className="self-stretch flex items-stretch justify-between gap-5 mt-4">
        <div className="flex grow basis-[0%] flex-col items-stretch">
            <div className="flex items-center">
            <input
                type="text"
                disabled
                value={range[0]}
                className="text-black text-center text-xl font-light leading-6 bg-zinc-300 items-stretch px-4 py-2.5 rounded-xl max-md:pr-px mr-2.5"
                style={{ width: '100px' }}
            />
            <input
                type="text"
                disabled
                value={range[1]}
                className="text-black text-center text-xl font-light leading-6 bg-zinc-300 items-center px-4 py-2.5 rounded-xl"
                style={{ width: '100px' }}
            />
            </div>
            <div className="flex shrink-0 h-[13px] flex-col mt-4 rounded-[50%]" />
        </div>
        </div>
      
      <Slider
        range
        min={70}
        max={2000}
        defaultValue={[70, 2000]}
        value={range}
        onChange={handleSliderChange}
      />
    <button className="text-white text-xl font-semibold leading-6 whitespace-nowrap justify-center items-center shadow-sm bg-cyan-700 self-stretch mt-3 mb-[1727px] px-5 py-3.5 rounded-xl max-md:mb-10">
          Сбросить фильтры
    </button>
        </div>
    </aside>
  );
};

export default SidebarMenu;
