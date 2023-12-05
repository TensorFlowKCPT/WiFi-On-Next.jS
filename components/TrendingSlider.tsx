'use client';
import React, { Component } from 'react'; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'; 
  
export default class NextJsCarousel extends Component { 
    render() { 
        const carouselOptions = {
            showThumbs: false,
        };

        return ( 
            <div className='w-[200px] h-[200px]'> 
                <Carousel {...carouselOptions}> 
                    <div className='w-[200px] h-[200px]'> 
                        <img src="/beeline.png" className='w-[200px] h-[200px]' alt="image1"/> 
                    </div> 
                    <div className='w-[200px] h-[200px]'> 
                        <img src="/domru.png" className='w-[200px] h-[200px]' alt="image2" /> 
                    </div > 
                    <div className='w-[200px] h-[200px]'> 
                        <img src="/megafon.png" className='w-[200px] h-[200px]' alt="image3"/> 
                    </div> 
                    <div className='w-[200px] h-[200px]'> 
                        <img src="/mts.png" className='w-[200px] h-[200px]' alt="image4"/> 
                    </div> 
                    <div className='w-[200px] h-[200px]'> 
                        <img src="/rtk.png" className='w-[200px] h-[200px]' alt="image5"/> 
                    </div> 
                </Carousel> 
            </div> 
        ); 
    } 
};
