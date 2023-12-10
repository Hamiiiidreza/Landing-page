import React from 'react';
import "./Features.css";
import FeaturesBox from './FeaturesBox';


export default function Features() {
  return (
    <div className='features'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                    <div className='features__cover'>
                       <img src='img/features.jpg' alt='features' className='features__img' />
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='features__content'>
                        <FeaturesBox icon="fa-solid fa-book" title="تبلیغ سختی است" text="نتایج یا در نتیجه هر یک از این اهداف اشتغال حاصل می شوند"/>
                        <FeaturesBox icon="fa-solid fa-cube" title="کدام یک از اینهاست" text="کسانی که هوس سیاهان می کنند نمی بینند ، آنها مقصر هستند که خدمات خود را رها کرده اند"/>
                        <FeaturesBox icon="fa-regular fa-file-image" title="یا کور شده است" text="یا می پذیرد یا زمانی که هیچ کس از همه اجتناب نمی کند. همه دردهایی که آنها را بیشتر می کند"/>
                        <FeaturesBox icon="fa-solid fa-shield" title="حقیقت مبارک" text="آنها بدون تحمل حقیقت در زمان ستایش زندگی از هیچ چیزی پیروی نمی کنند"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
