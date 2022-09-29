import React from 'react';
import { faLocation, faLocationArrow, faLocationCrosshairs, faMapLocation, faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Userinfo = () => {
    return (
        <div>
            <div className="user-info  text-[#9dacc1] text-3xl bg-[#f2f4fa] p-5 rounded-xl mt-10 flex flex-col md:flex-row  text-center  md:items-center md:justify-around">
                <p className='mb-10 md:mb-0'><span className='font-bold text-black '>80</span>kg <br /> Weight</p>
                <p className='mb-10 md:mb-0'><span className='font-bold text-black'>5.6</span><br /> Height</p>
                <p className='mb-10 md:mb-0'><span className='font-bold text-black'>21</span>yrs <br /> Age</p>
            </div>
        </div>
    );
};

export default Userinfo;