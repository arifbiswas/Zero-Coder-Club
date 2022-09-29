import { faLocation, faLocationArrow, faLocationCrosshairs, faMapLocation, faRoute, faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import BreakTime from '../BreakTime/BreakTime';
import TimeDetail from '../TimeDetail/TimeDetail';
import Userinfo from '../Userinfo/Userinfo';
import profile  from './img/profile.jpg'
import './Sidebar.css'

const Sidebar = ({time}) => {
    const [brTime,setBrTime]=useState([])
       useEffect(()=>{
        // console.log(brTime);
         const oldTime = localStorage.getItem('brTime')
        //  console.log(oldTime);
        setBrTime(oldTime)
       },[brTime])
    return (
        <div className='sidebar relative'>
            <div className="user  mt-14 mx-5">
            <div className="user flex md:justify-start items-center bg-[]">
            <img className='rounded-3xl w-20 ' src={profile} alt="" />
            <div className="name-info ml-2">
                <h1 className='text-3xl font-bold'>Arif Biswas</h1>
                <p className='text-[18px]  text-[#9dacc1]'><FontAwesomeIcon icon={faLocationArrow}></FontAwesomeIcon> Dhaka, Bangladesh</p>
            </div>
            </div>
           <Userinfo></Userinfo>
           <BreakTime setBrTime={setBrTime}></BreakTime>
           <TimeDetail time={time} brTime={brTime}></TimeDetail>
            </div>
            
        </div>
    );
};

export default Sidebar;

// #9dacc1 text
// #f2f4fa body
// #5d5fef botton