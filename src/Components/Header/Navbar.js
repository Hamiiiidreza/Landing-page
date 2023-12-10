import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="nav">
       <div className="nav-logo">
          <img src="img/logo.png" className="nav-logo__img"/>
          <span className="nav-logo__title">KASUKA</span>
       </div>
       <div className="nav-menu">
          <ul className="nav-menu__container">
             <li className="nav-menu__item">
                <a href="#" className="nav-menu__link nav-menu__link--active">خانه</a>
             </li>
             <li className="nav-menu__item">
                <a href="#" className="nav-menu__link">درباره ی ما</a>
             </li>
             <li className="nav-menu__item">
                <a href="#" className="nav-menu__link">خدمات</a>
             </li>
             <li className="nav-menu__item">
                <a href="#" className="nav-menu__link">نمونه کارها</a>
             </li>
             <li className="nav-menu__item">
                <a href="#" className="nav-menu__link">تیم</a>
             </li>
             <li className="nav-menu__item">
                <a href="#" className="nav-menu__link">لیست کشویی
                   <i className="fas fa-angle-down nav-menu__link-icon"></i>
                   <ul className="nav-menu__dropdown">
                      <li className="nav-menu__dropdown-item">
                         <a href="#" className="nav-menu__dropdown-link">لیست کشویی 1</a>
                      </li>
                      <li className="nav-menu__dropdown-item">
                         <a href="#" className="nav-menu__dropdown-link">لیست کشویی 2</a>
                      </li>
                      <li className="nav-menu__dropdown-item">
                         <a href="#" className="nav-menu__dropdown-link">لیست کشویی 3</a>
                      </li>
                      <li className="nav-menu__dropdown-item">
                         <a href="#" className="nav-menu__dropdown-link">لیست کشویی 4</a>
                      </li>
                      <li className="nav-menu__dropdown-item">
                         <a href="#" className="nav-menu__dropdown-link">لیست کشویی 5</a>
                      </li>
                   </ul>
                </a>
             </li>
             <li className="nav-menu__item">
                <a href="#" className="nav-menu__link">تماس با ما</a>
             </li>
          </ul>
       </div>
       <a href="#" className="nav-btn"><span>شروع</span></a>
    </div>
  )
}