import React from 'react';
import "./Portfolio.css";


export default function Portfolio() {
  return (
    <div className='portfolio'>
        <div className='container'>
            <div className='portfolio-header'>
                <span className='portfolio-header__title title'>نمونه کارها</span>
                <span className='portfolio-header__text'>نمونه کارها ما را بررسی کنید</span>
            </div>
            <div className='row'>
                <div className='col-lg-12'>
                    <ul className='portfolio__menu'>
                       <li className='portfolio__item portfolio__item--active'>همه</li>
                       <li className='portfolio__item'>برنامه</li>
                       <li className='portfolio__item'>محصول</li>
                       <li className='portfolio__item'>اینترنت</li>
                    </ul>
                </div>
            </div>
            <div className='portfolio-content'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <div className='portfolio-wrap'>
                            <img src='img/portfolio-2.jpg' alt='portfolio-2' className='portfolio-wrap__img' />
                            <div className='portfolio-bg'></div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='portfolio-wrap'>
                            <img src='img/portfolio-3.jpg' alt='portfolio-3' className='portfolio-wrap__img' />
                            <div className='portfolio-bg'></div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='portfolio-wrap'>
                            <img src='img/portfolio-4.jpg' alt='portfolio-4' className='portfolio-wrap__img' />
                            <div className='portfolio-bg'></div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='portfolio-wrap'>
                            <img src='img/portfolio-7.jpg' alt='portfolio-7' className='portfolio-wrap__img' />
                            <div className='portfolio-bg'></div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='portfolio-wrap'>
                            <img src='img/portfolio-8.jpg' alt='portfolio-8' className='portfolio-wrap__img' />
                            <div className='portfolio-bg'></div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='portfolio-wrap'>
                            <img src='img/portfolio-9.jpg' alt='portfolio-9' className='portfolio-wrap__img' />
                            <div className='portfolio-bg'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

