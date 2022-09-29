import React from 'react';

const BreakTime = () => {
    return (
        <div>
            <h1 className='text-3xl mt-10'>Add A Break</h1>
            <div className="btn-container bg-[#f2f4fa] p-5 mt-10 flex items-center justify-around rounded-lg">
                <button className='text-[20px] bg-white text-black hover:bg-[#5d5fef] p-3 hover:text-white rounded-full mr-3'>3m</button>
                <button className='text-[20px] bg-white text-black hover:bg-[#5d5fef] p-3 hover:text-white rounded-full mr-3'>5m</button>
                <button className='text-[20px] bg-white text-black hover:bg-[#5d5fef] p-3 hover:text-white rounded-full mr-3'>10m</button>
                <button className='text-[20px] bg-white text-black hover:bg-[#5d5fef] p-3 hover:text-white rounded-full mr-3'>20m</button>
                <button className='text-[20px] bg-white text-black hover:bg-[#5d5fef] p-3 hidden md:block hover:text-white rounded-full mr-3'>30m</button>
                <button className=' text-[20px] bg-white text-black hover:bg-[#5d5fef] p-3 hidden md:block hover:text-white rounded-full mr-3'>1h</button>
            </div>
        </div>
    );
};

export default BreakTime;