'use client'
import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Slider, { SliderThumb, SliderValueLabelProps } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';


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
    padding: '13px 0',
    '& .MuiSlider-thumb': {
      height: 27,
      width: 27,
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
  return (
    <div>
      <button className="mobile-menu-button" onClick={toggleDrawer}>
        Toggle Menu
      </button>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <div className="bg-neutralsilver p-4">
          <label
            style={{
              marginLeft: '8px',
              fontSize: '20px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 'bold',
            }}
          >
            Провайдеры
          </label>


          <label
            style={{
              marginLeft: '8px',
              fontSize: '20px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 'bold',
              marginTop: '8px',
            }}
          >
            Услуги
          </label>
          <div className="ml-8 " style={{ display: 'flex', flexDirection: 'column' }}>
            <div>
              <input type="checkbox" placeholder="Интернет" style={{ width: '30px', height: '30px' }} />
              <span style={{ marginLeft: '8px', fontSize: '20px', fontFamily: 'Inter, sans-serif' }}>Интернет</span>
            </div>
            <div>
              <input type="checkbox" style={{ width: '30px', height: '30px' }} />
              <span style={{ marginLeft: '8px', fontSize: '20px', fontFamily: 'Inter, sans-serif' }}>Связь</span>
            </div>
            <div>
              <input type="checkbox" style={{ width: '30px', height: '30px' }} />
              <span style={{ marginLeft: '8px', fontSize: '20px', fontFamily: 'Inter, sans-serif' }}>Телевидение</span>
            </div>
          </div>

          <div>
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
              <input
                id="default-range-from"
                type="number"
                value={range[0]}
                onChange={(e) => {

                }}
                style={{ width: '60px', height: '30px', borderRadius: '8px', marginLeft: '8px' }}
              />
              <input
                id="default-range-to"
                type="number"
                value={range[1]}
                disabled
                onChange={(e) => {}}
                style={{ width: '60px', height: '30px', borderRadius: '8px', marginLeft: '8px' }}
              />
              <Slider
                min={100}
                max={2100}
                value={range[0]}
                onChange={(value) => {
                  
                }}
              />
            </div>

            <div>
              <p
                style={{
                  marginLeft: '8px',
                  fontSize: '20px',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 'bold',
                }}
              >
                Скорость интернета
              </p>
              <input
                id="default-range-price-from"
                type="number"
                value={rangeSpeed[0]}
                onChange={(e) => {
                }}
                style={{ width: '60px', height: '30px', borderRadius: '8px', marginLeft: '8px' }}
              />
              <input
                id="default-range-price-to"
                type="number"
                value={rangeSpeed[1]}
                disabled
                onChange={(e) => {
                }}
                style={{ width: '60px', height: '30px', borderRadius: '8px', marginLeft: '8px' }}
              />
                <AirbnbSlider
                  getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                  defaultValue={[20, 40]}
                />
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default SidebarMenu;