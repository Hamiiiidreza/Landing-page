import React from 'react';
import "./Services.css";
import ServiceBox from './ServiceBox';


export default function Services() {
  return (
    <div className='services'>
        <div className='container'>
            <div className='services-header'>
                <span className='services-header__title title'>خدمات</span>
                <span className='services-header__text'>خدمات مارا بررسی کنید</span>
            </div>
            <div className='services-content'>
                <div className='row'>
                    <ServiceBox icon="fa-brands fa-dribbble" title="لورم اپیسوم" caption="برای آرامش بخشیدن و لذت بردن از مفاسد ، چه دردها و چه دردسرهایی را دریافت خواهند کرد" />
                    <ServiceBox icon="fa-regular fa-file-lines" title="اما همانطور که مشاهده می کنید" caption="آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند" />
                    <ServiceBox icon="fa-brands fa-firstdraft" title="دردهای بزرگ" caption="آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند" />
                    <ServiceBox icon="fa-solid fa-earth-americas" title="هیچکس دیگر" caption="اما در واقع ما هم آنها را متهم می کنیم و هم با یک نفرت عادلانه شایسته چاپلوسی هستیم" />
                    <ServiceBox icon="fa-regular fa-square-caret-up" title="لولا را پاک کنید" caption="آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند" />
                    <ServiceBox icon="fa-solid fa-archway" title="دیوا دان" caption="روشها یا تلاشهای ما علاوه بر این ، خطا فرار می کند ، بگذار کوچکتر عاقل باشد" />
                </div>
            </div>
        </div>
    </div>
  )
}

