import React from 'react';
import "./Members.css";


export default function Members() {
  return (
    <div className='members'>
        <div className='container'>
            <div className='members__content'>
                <img src='img/testimonials-5.jpg' alt='member' className='members__img'/>
                <h3 className='members__name'>جان لارسون</h3>
                <h4 className='members__job'>کارآفرین</h4>
                <p className='members__caption'>
                   <i className='fa-solid fa-quote-left members__icon'/>
                   چه کسی برخی از مواردی را که من خواهم خواند ، مطمئن بودم که برخی از آنها به موقع عفو ما به دلیل تقصیر زایمان تقصیر خواهند ، تقصیر او نیست من می خوانم که او می آید ، تقصیر خواهد بود چیزی جز 
                   <i className='fa-solid fa-quote-right members__icon'/>             
                   </p>
            </div>
        </div>
    </div>
  )
}

