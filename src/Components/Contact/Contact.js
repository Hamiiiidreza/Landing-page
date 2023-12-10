import React from 'react';
import "./Contact.css";


export default function Contact() {
  return (
    <div className='contact'>
        <div className='container'>
            <div className='contact-header'>
                <span className='contact-header__title title'>تماس با ما</span>
                <span className='contact-header__text'>با ما تماس بگیرید</span>
            </div>
            <div className='row'>
                <div className='col-lg-4'>
                    <div className='contact-info'>
                        <div className='contact-info__box'>
                            <div className='contact-info__box-right'>
                                <i className='fa-solid fa-location-dot contact-info__box-icon'></i>
                            </div>
                            <div className='contact-info__box-left'>
                                <h4 className='contact-info__box-title'>مکان</h4>
                                <p className='contact-info__box-caption'>تهران خیابان آزادی</p>
                            </div>
                        </div>
                        <div className='contact-info__box'>
                            <div className='contact-info__box-right'>
                                <i className='fa-regular fa-envelope contact-info__box-icon'></i>
                            </div>
                            <div className='contact-info__box-left'>
                                <h4 className='contact-info__box-title'>ایمیل</h4>
                                <p className='contact-info__box-caption'>info@example.com</p>
                            </div>
                        </div>
                        <div className='contact-info__box'>
                            <div className='contact-info__box-right'>
                                <i className='fa-solid fa-mobile-screen-button contact-info__box-icon'></i>
                            </div>
                            <div className='contact-info__box-left'>
                                <h4 className='contact-info__box-title'>شماره تماس</h4>
                                <p className='contact-info__box-caption'>0123467889</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-8'>
                    <form className='contact-forms'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <input type="text" className='contact-forms__name-input' placeholder='نام' required />
                            </div>
                            <div className='col-md-6'>
                                <input type="text" className='contact-forms__email-input' placeholder='ایمیل' required />
                            </div>
                        </div>
                        <div className='contact-forms__subject'>
                            <input type="text" className='contact-forms__subject-input' placeholder='عنوان' required />
                        </div>
                        <div className='contact-forms__message'>
                            <textarea className='contact-forms__message-textarea' placeholder='پیام' required/>
                        </div>
                        <div className='contact-forms__btn'>
                            <button type='submit' className='contact-forms__btn-text'>ارسال پیام</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

