import React from 'react';
import { Carousel } from 'react-bootstrap';
import Slider1 from '../images/SliderImages/logo_main_page.png';
import Slider2 from '../images/SliderImages/Slide_Blue_Pill.jpg';
import Slider3 from '../images/SliderImages/Slide_Green_Pill.jpg';
import Slider4 from '../images/SliderImages/Slide_Purple_Pill.jpg';
import Slider5 from '../images/SliderImages/Slide_Red_Pill.jpg';

function Body() {
  return (
    <div className="Body">
      <Carousel className="SliderWrapper">
        <Carousel.Item className="SliderItem">
          <img src={Slider1} alt="slide"/>
        </Carousel.Item>
        <Carousel.Item className="SliderItem">
          <img src={Slider2} alt="slide"/>
        </Carousel.Item>
        <Carousel.Item className="SliderItem">
          <img src={Slider3} alt="slide"/>
        </Carousel.Item>
        <Carousel.Item className="SliderItem">
          <img src={Slider4} alt="slide"/>
        </Carousel.Item>
        <Carousel.Item className="SliderItem">
          <img src={Slider5} alt="slide"/>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Body;
