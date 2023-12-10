import React from 'react';
import "./FeaturesBox.css";


export default function FeaturesBox({icon, title, text}) {
  return (
    <div className='feature__box'>
        <div className='features__box-right'>
           <i className={`${icon} features__box-icon`}></i>
        </div>
        <div className='features__box-left'>
           <span className='features__box-title'>{title}</span>
           <span className='features__box-text'>{text}</span>
        </div>
    </div>
  )
}

