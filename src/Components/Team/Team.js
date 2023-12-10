import React from 'react';
import "./Team.css";
import TeamItem from './TeamItem';


export default function Team() {
  return (
    <div className='team'>
        <div className='container'>
            <div className='team-header'>
                <span className='team-header__title title'>تیم</span>
                <span className='team-header__text'>تیم ما را بررسی کنید</span>
            </div>
            <div className='team-content'>
                <div className='row'>
                    <TeamItem imgUrl="img/team-1.jpg" name="والتر وایت"
                    role="مدیر ارشد اجرایی"/>
                    <TeamItem imgUrl="img/team-2.jpg" name="سارا جونسون"
                    role="مدیر تولید"/>
                    <TeamItem imgUrl="img/team-3.jpg" name="ویلیام اندرسون"
                    role="CTO"/>
                    <TeamItem imgUrl="img/team-4.jpg" name="آماندا جپسون"
                    role="حسابدار"/>
                </div>
            </div>
        </div>
    </div>
  )
}

