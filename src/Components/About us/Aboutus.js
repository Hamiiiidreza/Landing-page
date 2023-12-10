import React from 'react';
import "./Aboutus.css";


export default function Aboutus() {
  return (
    <div className='about'>
       <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
                <div className='about__content'>
                   <h3 className='about__title'>شرکت دیجیتال کاسوکا</h3>
                   <p className='about__description'>شرکت دیجیتال مارکتینگ نوآد به عنوان شرکتی پیشرو در صنعت دیجیتال مارکتینگ ایران در تلاش است تا با بهره گیری از دانش فنی روز و ارایه راهکارهای نوین بازاریابی و برندینگ، با پیشرفت کسب و کارهای داخلی نقش مهمی در شکوفایی اقتصادی ایران ایفا نماید و با تثبیت نام نوآد به عنوان تخصصی ترین برند دیجیتال مارکتینگ در ایران و گسترش نام آن در بازارهای جهانی به صادرات خدمات مبتنی بر تکنولوژی های نوین گام بردارد. نوآد پیشرفت خود در طول یک دهه فعالیت را مرهون شفافیت، انسجام و پایبندی به نتایج پیش بینی شده مشتریان خود می داند. سرمایه گذاری روی تکنولوژی های نوین، کیفیت و نوآوری، پایبندی به تعهدات، رضایتمندی و وفاداری مشتریان، نیروی انسانی متمرکز و پویا از ارزش های ذاتی نوآد می باشند. فضای دیجیتال تحول شگرف در ارتباطات و نحوه تعامل مردم با یکدیگر بوجود آورده است. ابزارها و پلتفرم های بوجود آمده در این عصر، قدرت چانه زنی و انتخاب را برای مردم افزایش داده و موجب سهولت در ارزیابی و مقایسه برندها و محصولات مختلف گردیده است. ما این تغییر نگرش در انتخاب یک برند و محصول را نوعی فرصت برای خود و مشتریانمان به حساب می آوریم. در فضای دیجیتال به راحتی می توان بازار هدف را شناسایی، نیازها، خواسته ها و علایق آنها را کشف و با استفاده از اطلاعاتی که بدست می آید به خلق و توسعه محصولات، برند و تجربیات مناسب که از ادغام تکنولوژی و خلاقیت در کنار متد بازاریابی نوین ناشی میشود، اقدام کرد. در نوآد ما آماده پذیرفتن چالش های جدید هستیم و با هر قیمت که شده به تعهدات خود پایبند می مانیم.</p>
                </div>
                <ul className='about-list'>
                   <li className='about-list__item'>
                      <i className='fa-solid fa-check-double about-list__icon'></i>
                      <span className='about-list__description'>ده سال تجربه ارایه خدمات تخصصی دیجیتال مارکتینگ و راهکارهای نوین بازاریابی</span>
                   </li>
                   <li className='about-list__item'>
                      <i className='fa-solid fa-check-double about-list__icon'></i>
                      <span className='about-list__description'>تمرکز ما در تمامی استراتژی های اجرایی معطوف به دیجیتال برندینگ و همسو کردن استراتژی های دیجیتال مارکتینگ با دیگر فعالیت های برندینگ و بازاریابی شما می باشد.</span>
                   </li>
                   <li className='about-list__item'>
                      <i className='fa-solid fa-check-double about-list__icon'></i>
                      <span className='about-list__description'>برای دریافت آخرین اخبار، گرایش ها و رویداد های دیجیتال مارکتینگ ثبت نام کنید</span>
                   </li>
                </ul>
                <p className='about-text'>خدمات نوآد در جهت یکپارچه سازی تمامی فعالیت های یک کسب و کار از مرحله ورود به بازار، ساخت، گسترش و ایجاد تصویری یکپاچه از برند، دیجیتال مارکتینگ، افزایش مزیت رقابتی و سهم بازار تا مراحل پس از فروش و ایجاد وفاداری در مشتریان یک برند ارایه می گردد.</p>
            </div>
              <div className='col-lg-6'>
                 <div className='about__cover'>
                    <img src='img/about.jpg' alt='about us' className='about__img'/>
                 </div>
              </div>
          </div>
       </div>
    </div>
  )
}
