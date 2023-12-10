import React from 'react';
import "./HeaderBoxes.css";


export default function HeaderBoxes({icon, text}) {
  return (
        <div className='col-xl-2 col-md-4'>
           <div className='header-box'>
             <i className={`${icon} header-box__icon`}></i>
             <h3 className='header-box__text'>
               <a href='#' className='header-box__link'>{text}</a>
             </h3>
           </div>
        </div>
  )
}
       





