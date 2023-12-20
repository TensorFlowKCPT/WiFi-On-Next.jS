import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class NextJsCarousel extends Component {
    render() {
        const carouselOptions = {
            showThumbs: false,  // Скрыть миниатюры
            showArrows: false,  // Скрыть стрелки
            showStatus: false,  // Скрыть статус (текущий слайд / общее количество слайдов)
            showIndicators: false,  // Скрыть индикаторы (точки внизу)
            infiniteLoop: true,  // Зациклить карусель
            useKeyboardArrows: true,  // Использовать стрелки на клавиатуре
            autoPlay: true,  // Автоматическое воспроизведение
            dynamicHeight: false,  // Фиксированная высота слайдов
            swipeable: true,  // Включить свайп
            emulateTouch: true,  // Эмулировать тач (например, на устройствах без тач-экрана)
        };

        const containerStyle = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        };

        const imageStyle = {
            width: '300px',
            height: '300px',
        };

        return (   
            <div style={containerStyle}>
                <div>
                    <Carousel {...carouselOptions}>
                        <div>
                            <img src="/beeline.png" style={imageStyle} alt="image1"/>
                        </div>
                        <div>
                            <img src="/domru.png" style={imageStyle} alt="image2" />
                        </div>
                        <div>
                            <img src="/megafon.png" style={imageStyle} alt="image3"/>
                        </div>
                        <div>
                            <img src="/rtk.png" style={imageStyle} alt="image5"/>
                        </div>
                    </Carousel>
                </div>
            </div>
        );
    }
}
