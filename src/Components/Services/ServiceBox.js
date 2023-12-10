import React from 'react';
import "./ServiceBox.css";


export default function ServiceBox({icon, title, caption}) {
  return (
   <div className='col-lg-4'>
        <div className='service'>
            <div className='service__icon-box'>
               <i className={`${icon} service__icon`}></i>
            </div>
            <h4 className='service__title'>
               <a href='#' className='service__link'>{title}</a>
            </h4>
            <p className='service__caption'>{caption}</p>
        </div>
   </div>
  )
}


