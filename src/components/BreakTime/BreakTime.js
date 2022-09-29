import React from 'react';

const BreakTime = ({setBrTime}) => {
    return (
        <div>
            <h1 className='text-3xl mt-10'>Add A Break</h1>
            <div className="btn-container bg-[#f2f4fa] p-5 mt-10 flex items-center justify-around rounded-lg">
                <button onClick={()=>{
                    setBrTime(3)
                    localStorage.setItem('brTime',JSON.stringify(3))
                }} className='text-[20px] bg-white text-black hover:bg-[#5d5fef] p-3 hover:text-white rounded-full mr-3'>3m</button>
                <button onClick={()=>{
                    setBrTime(5)
                    localStorage.setItem('brTime',JSON.stringify(5))
                }} className='text-[20px] bg-white text-black hover:bg-[#5d5fef] p-3 hover:text-white rounded-full mr-3'>5m</button>
                <button onClick={()=>{
                    setBrTime(10)
                    localStorage.setItem('brTime',JSON.stringify(10))
                }} className='text-[20px] bg-white text-black hover:bg-[#5d5fef] p-3 hover:text-white rounded-full mr-3'>10m</button>
                <button onClick={()=>{
                    setBrTime(20)
                    localStorage.setItem('brTime',JSON.stringify(20))
                }} className='text-[20px] bg-white text-black hover:bg-[#5d5fef] p-3 hover:text-white rounded-full mr-3'>20m</button>
                <button onClick={()=>{
                    setBrTime(30)
                    localStorage.setItem('brTime',JSON.stringify(30))
                }} className='text-[20px] bg-white text-black hover:bg-[#5d5fef] p-3 hidden md:block hover:text-white rounded-full mr-3'>30m</button>
                <button onClick={()=>{
                    setBrTime(60)
                    localStorage.setItem('brTime',JSON.stringify(60))
                }} className=' text-[20px] bg-white text-black hover:bg-[#5d5fef] p-3 hidden md:block hover:text-white rounded-full mr-3'>1h</button>
            </div>
        </div>
    );
};

export default BreakTime;