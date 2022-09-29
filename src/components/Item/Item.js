import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Item = ({item}) => {
    // console.log(item);
    const {pic,name,challenge,id,info,time}=item;
    // console.log(pic,name,challange,id,info);

    return (
        <div className='w-96 h-[550px] border p-3 shadow-lg relative rounded-xl bg-white'>
            <img className='w-[350px] h-[150px]  rounded-2xl mt-2' src={pic} alt="" />
            <div className='px-2'>
            <h5 className='text-3xl font-bold my-5'>{name}</h5>
            <p className='text-[#848484] text-1xl my-4'>{info.slice(0,100)}</p>
            <p className='text-[#848484] my-5'>For Challenge Time : <span className='font-semibold text-black'>{challenge} hour's</span></p>
            <p className='text-[#848484]'>Time : <span className='font-semibold text-black'>{time} minute</span> </p>
            </div>
            <button className='btn bg-[#5d5fef] px-28 py-4 text-white text-1xl absolute bottom-5  right-7 rounded-2xl'><FontAwesomeIcon icon={faAdd}></FontAwesomeIcon> Add To List</button>
            
        </div>
    );
};

export default Item;