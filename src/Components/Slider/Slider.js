import React from 'react';
import "./Slider.css";


export default function Slider() {
  return (
    <div className='slider'>
       <div className='container'>
          <div className='slider__wrapper'>
             <img src='img/client-1.png' alt='client-1' className='slider__img' />
             <img src='img/client-2.png' alt='client-2' className='slider__img' />
             <img src='img/client-3.png' alt='client-3' className='slider__img' />
             <img src='img/client-4.png' alt='client-4' className='slider__img' />
             <img src='img/client-5.png' alt='client-5' className='slider__img' />
             <img src='img/client-6.png' alt='client-6' className='slider__img' />
          </div>
       </div>
    </div>
  )
}



