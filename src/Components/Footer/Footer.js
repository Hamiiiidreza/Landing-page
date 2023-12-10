import React from "react";
import "./Footer.css";


export default function Footer() {
  return (
    <div className="footer">
        <div className="footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="footer-info">
                            <div className="footer-info__logo">
                                <img src="img/logo.png" className="footer-info__img" />
                                <span className="footer-info__title">kasuka</span>
                            </div>
                            <div className="footer-info__main">
                                <p className="footer-info__description">تهران خیابان آزادی</p>
                                <p className="footer-info__description">تفن:01234567895</p>
                                <p className="footer-info__description">ایمیل:info@example.com</p>
                            </div>
                            <div className="footer-info__social">
                                <a href="#" className="footer-info__social-link">
                                   <i className="fa-brands fa-twitter footer-info__social-icon" />
                                </a>
                                <a href="#" className="footer-info__social-link">
                                   <i className="fa-brands fa-facebook footer-info__social-icon" />
                                </a>
                                <a href="#" className="footer-info__social-link">
                                   <i className="fa-brands fa-instagram footer-info__social-icon" />
                                </a>
                                <a href="#" className="footer-info__social-link">
                                   <i className="fa-brands fa-skype footer-info__social-icon" />
                                </a>
                                <a href="#" className="footer-info__social-link">
                                   <i className="fa-brands fa-linkedin footer-info__social-icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <h4 className="footer__title">لینک های مفید</h4>
                        <ul className="footer-menu">
                           <li className="footer-menu__list"> 
                              <i className="fa-solid fa-chevron-left footer-menu__icon"></i>
                              <a href="#" className="footer-menu__link">خانه</a>
                           </li>
                           <li className="footer-menu__list"> 
                              <i className="fa-solid fa-chevron-left footer-menu__icon"></i>
                              <a href="#" className="footer-menu__link">درباره ما</a>
                           </li>
                           <li className="footer-menu__list"> 
                              <i className="fa-solid fa-chevron-left footer-menu__icon"></i>
                              <a href="#" className="footer-menu__link">خدمات</a>
                           </li>
                           <li className="footer-menu__list"> 
                              <i className="fa-solid fa-chevron-left footer-menu__icon"></i>
                              <a href="#" className="footer-menu__link">شرایط استفاده از خدمات</a>
                           </li>
                           <li className="footer-menu__list"> 
                              <i className="fa-solid fa-chevron-left footer-menu__icon"></i>
                              <a href="#" className="footer-menu__link">سیاست حفظ حریم خصوصی</a>
                           </li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                    <h4 className="footer__title">خدمات ما</h4>
                        <ul className="footer-menu">
                           <li className="footer-menu__list"> 
                              <i className="fa-solid fa-chevron-left footer-menu__icon"></i>
                              <a href="#" className="footer-menu__link">طراحی وب سایت</a>
                           </li>
                           <li className="footer-menu__list"> 
                              <i className="fa-solid fa-chevron-left footer-menu__icon"></i>
                              <a href="#" className="footer-menu__link">توسعه وب</a>
                           </li>
                           <li className="footer-menu__list"> 
                              <i className="fa-solid fa-chevron-left footer-menu__icon"></i>
                              <a href="#" className="footer-menu__link">مدیریت تولید</a>
                           </li>
                           <li className="footer-menu__list"> 
                              <i className="fa-solid fa-chevron-left footer-menu__icon"></i>
                              <a href="#" className="footer-menu__link">بازاریابی</a>
                           </li>
                           <li className="footer-menu__list"> 
                              <i className="fa-solid fa-chevron-left footer-menu__icon"></i>
                              <a href="#" className="footer-menu__link">طراحی گرافیک</a>
                           </li>
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <h4 className="footer__title">خبرنامه ها</h4>
                        <p className="footer__text">با این حال ، هیچ یک از چیزهایی که من می خوانم تقصیر بزرگ ما نخواهد بود</p>
                        <form className="footer-form">
                             <input type="email" className="footer-form__input-email"/>
                             <input type="submit" value="دنبال کردن" className="footer-form__input-submit"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottem">
                <div className="copyright">
                   <strong className="copyright__title">
                          <span>kasuka</span>
                   </strong>
                   همه حقوق محفوظ است
                </div>
                <div className="credits">
                    طراحی شده توسط
                <a href="#" className="credits__link">HamidReza</a>
                </div>
        </div>
    </div>
  )
}
