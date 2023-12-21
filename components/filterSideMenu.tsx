'use client'
import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Slider, { SliderThumb, SliderValueLabelProps } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
//@ts-ignore
var activeProviders = []
// @ts-ignore
const SidebarMenu = ({ providers }) => {

  const [range, setRange] = useState([70, 2000]);
  const [rangeSpeed, setRangeSpeed] = useState([240, 1910]);
  const [drawerOpen, setDrawerOpen] = useState(false);

   const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  
  const AirbnbSlider = styled(Slider)(({ theme }) => ({
    color: '#012a4a',
    height: 3,
    maxWidth: '210px', // Limit the width to the container's width
    '& .MuiSlider-thumb': {
      height: 15,
      width: 15,
      backgroundColor: '#fff',
      border: '1px solid currentColor',
      '&:hover': {
        boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
      },
      '& .airbnb-bar': {
        height: 9,
        width: 1,
        backgroundColor: 'currentColor',
        marginLeft: 1,
        marginRight: 1,
      },
    },
    '& .MuiSlider-track': {
      height: 3,
    },
    '& .MuiSlider-rail': {
      color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
      opacity: theme.palette.mode === 'dark' ? undefined : 1,
      height: 3,
    },
  }));
  
  function CheckTariffs(){
    var tariffsContainer = document.getElementById("tariffs");
    // Перебираем все потомки элемента с id "tariffs"
    tariffsContainer?.childNodes.forEach(element => {
      if (element.nodeType === 1) {
        // @ts-ignore
        var providerName = element.dataset.providername;
        // @ts-ignore
        var internetspeed = parseInt(element.dataset.internetspeed);
        // @ts-ignore
        var price = parseInt(element.dataset.price);
        // @ts-ignore
        element.classList.add("hidden");
        // @ts-ignore
        if (((internetspeed>=rangeSpeed[0]&&internetspeed<=rangeSpeed[1])||Number.isNaN(internetspeed))&&((price>=range[0]&&price<=range[1])||Number.isNaN(price))&&(activeProviders.includes(providerName)||activeProviders.length == 0)){
          // @ts-ignore
          element.classList.remove("hidden");
        }
      }
    });
  }
  
  return (
<div className='bg-neutralsilver floating p-4 mx-auto'>      
<FilterAltIcon className="mobile-menu-button" onClick={toggleDrawer} />

    <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer} >
    <span className="block text-[#012a4a] font-semibold text-4xl mb-10 ml-5 mt-5">Фильтры</span>
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
      <p
            style={{
              marginLeft: '8px',
              fontSize: '20px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 'bold',
            }}
          >
            Cтоимость тарифа
          </p>
       <div>
          <input
            id="default-range-from"
            type="number"
            value={range[0]}
            onChange={(e) => {
              setRange([Number(e.target.value), range[1]]);
              CheckTariffs()
            }}
            style={{ width: '100px', height: '30px', borderRadius: '8px', marginLeft: '8px' }}
          />
          <input
            id="default-range-to"
            type="number"
            value={range[1]}
            disabled
            onChange={(e) => {
              setRange([range[0], Number(e.target.value)]);
              CheckTariffs()
            }}
            style={{ width: '100px', height: '30px', borderRadius: '8px', marginLeft: '10px' }}
          />
          <AirbnbSlider
            id="default-range"
            className='ml-3 '
            onChange={(e, values) => {
              //@ts-ignore
              setRange(values);
              CheckTariffs()
            }}
            value={range}
            min={100}
            max={2100}
            defaultValue={[150, 650]}
            valueLabelDisplay="auto" // Optional: To display the current value on the slider thumb
          />
        </div> 
        <p  style={{
              marginLeft: '8px',
              fontSize: '20px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 'bold' 
            }}>Скорость интернета</p>
        <div>

          <input
            id="default-range-price-from"
            type="number"
            value={rangeSpeed[0]}
            onChange={(e) => {
              setRangeSpeed([Number(e.target.value), rangeSpeed[1]])
              CheckTariffs();}}
            style={{ width: '100px', height: '30px', borderRadius: '8px', marginLeft: '8px' }}
          />
          <input
            id="default-range-price-to"
            type="number"
            value={rangeSpeed[1]}
            disabled
            onChange={(e) => {
              setRangeSpeed([rangeSpeed[0], Number(e.target.value)])
              CheckTariffs();}}
            style={{ width: '100px', height: '30px', borderRadius: '8px', marginLeft: '8px' }}
          />
          <AirbnbSlider
            id="default-range"
            className='ml-3 mr-3'
            //@ts-ignore
            onChange={(e, values) => {
              //@ts-ignore
              setRangeSpeed(values);
              CheckTariffs();
            }}
            min={100}
            max={2100}
            value={rangeSpeed}
            defaultValue={[150, 650]}
            valueLabelDisplay="auto" // Optional: To display the current value on the slider thumb
          />
        </div>
      </div>
      </Drawer>
    </div>

  );
};

export default SidebarMenu;
