import React from 'react';
import Navbar from './Navbar';
import "./Header.css";
import HeaderBoxes from './HeaderBoxes';

export default function Header() {
  return (
    <div>
      <div className='header'>
           <Navbar />
           <div className='header-content'>
                <h1 className='header-content__title'>راه حل های قدرتمند<br />
                 دیجیتال با</h1>
                <span className='yellow'>Kasuka</span>
                <h2 className='header-content__description'>ما تیمی از بازاریابان با استعداد دیجیتال هستیم</h2>
           </div>
              <div className='row align-items-center'>
                 <div className='squareBoxContainer'>
                    <HeaderBoxes icon="fa-regular fa-file-lines" text="متن نمایشی"/>
                    <HeaderBoxes icon="fas fa-chart-simple" text="نمودار کیفی"/>
                    <HeaderBoxes icon="fas fa-layer-group " text="نمونه کارها"/>
                    <HeaderBoxes icon="fas fa-hourglass-start " text="عملکرهای پایانی"/>
                    <HeaderBoxes icon="fas fa-database " text="اطلاعات ذخیره شده"/>
                 </div>
              </div>
      </div>
    </div>
  )
}
