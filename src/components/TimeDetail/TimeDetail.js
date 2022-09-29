import React from 'react';

const TimeDetail = () => {
    return (
        <div className='mt-24'>
            <h1 className='text-3xl'>Exercise Details</h1>
            <div className='bg-[#f2f4fa] py-7 my-5 px-3 font-semibold'>
            <h2 className='text-2xl'>Exercise time</h2>
            <p></p>
            </div>
            <div className='bg-[#f2f4fa] py-7 my-5 px-3 font-semibold'>
            <h2 className='text-2xl'>Break time</h2>
            </div>
            
            <div className="btn md:mt-16">
                <button className='bg-[#5d5fef] md:px-20  px-16 mb-20 text-2xl text-white font-bold rounded-xl py-5'>Activity Completed</button>
            </div>
        </div>
    );
};

export default TimeDetail;