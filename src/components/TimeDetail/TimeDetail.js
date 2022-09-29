import { fa0, faArrowUpRightDots, faBookOpen, faRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const TimeDetail = ({time,brTime}) => {
    // console.log(time,brTime);
    const notify = () => {
    toast("Wow Nice Completed Your Practices!");
    };
           
    return (
        <div className='mt-24'>
            <h1 className='text-3xl'>Exercise Details</h1>
            <div className='bg-[#f2f4fa] py-7 my-5 px-3 font-semibold flex justify-between items-center'>
            <h2 className='text-2xl'>Exercise time</h2>
            <p className='text-2xl'>{time} minute</p>
            </div>
            <div className='bg-[#f2f4fa] py-7 my-5 px-3 font-semibold flex justify-between items-center'>
            <h2 className='text-2xl'>Break time</h2>
            <p className='text-2xl'>{brTime} minute</p>
            </div>
            
            <div className="btn md:mt-16">
                <button onClick={notify} className='bg-[#5d5fef] md:px-32  px-12 my-8 text-2xl text-white font-bold rounded-xl py-6'> <FontAwesomeIcon className='mr-2' icon={faBookOpen}></FontAwesomeIcon>Activity Completed </button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default TimeDetail;