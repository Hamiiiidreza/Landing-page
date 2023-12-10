import React from 'react';
import "./StatisticsBox.css";


export default function StatisticsBox({icon, count, caption}) {
  return (
    <div className='col-md-6'>
        <div className='statistics-box'>
            <i className={`${icon} statistics-box__icon`}></i>
            <span className='statistics-box__count'>{count}</span>
            <p className='statistics-box__caption'>{caption}</p>
        </div>
    </div>
  )
}

