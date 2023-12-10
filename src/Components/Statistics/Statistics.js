import React from 'react';
import "./Statistics.css";
import StatisticsBox from './StatisticsBox';


export default function Statistics() {
  return (
    <div className='statistics'>
        <div className='container'>
            <div className='row'>
                <div className='col-xl-5'>
                    <div className='statistics__cover'>
                        <img src='img/counts-img.jpg' alt='statistics' className='statistics__img'/>
                    </div>
                </div>
                <div className='col-xl-7'>
                    <div className='statistics__content'>
                        <h3 className='statistics__title'> شایسته ترین لذت را به هر حال ارائه می دهد</h3>
                        <p className='statistics__caption'> خود درد ممکن است درد زیادی باشد ، اما دلیل اصلی آن درد است ، اما من به آن زمان می دهم تا مانند یک درد و درد بزرگ در آن فرو برود. درد مقصر است</p>
                        <div className='row'>
                            <StatisticsBox icon="fa-regular fa-smile" count="65" caption="مشتریان خوشحال خوشحالیم که از معمار چیزی دریافت کنیم."/>
                            <StatisticsBox icon="fa-regular fa-newspaper" count="85" caption="پروژه ها برای بدست آوردن و زمانی که او کل کسانی را که از او تعریف می کنند رد می کند و آنها را حقیر می شمارد"/>
                            <StatisticsBox icon="fa-regular fa-clock" count="35" caption="سال ها تجربه یا اجازه دهید به دنبال نوعی مزیت باشد"/>
                            <StatisticsBox icon="fa-regular fa-sun" count="20" caption="جوایز درد دردناک تر است در زمانی دیگر که هیچکس او را متهم نمی کند و هیچ وقت او را متهم نمی کند" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

