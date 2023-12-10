import React from 'react';
import "./TeamItem.css";


export default function TeamItem({imgUrl, name, role}) {
  return (
    <div className='col-lg-3'>
        <div className='team-item'>
            <div className='team-item__cover'>
                <img src={imgUrl} alt='team' className='team-item__img'/>
                <div className='social'>
                    <a href='#' className='social__link'>
                      <i className='fa-brands fa-twitter social__icon'></i>
                    </a>
                    <a href='#' className='social__link'>
                      <i className='fa-brands fa-facebook social__icon'></i>
                    </a>
                    <a href='#' className='social__link'>
                      <i className='fa-brands fa-instagram social__icon'></i>
                    </a>
                    <a href='#' className='social__link'>
                      <i className='fa-brands fa-linkedin social__icon'></i>
                    </a>
                </div>
            </div>
            <div className='team-item__info'>
                <h4 className='team-item__name'>{name}</h4>
                <span className='team-item__role'>{role}</span>
            </div>
        </div>
    </div>
  )
}

