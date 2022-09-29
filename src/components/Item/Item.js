import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Item = ({item ,timeHabdler}) => {
    // console.log(item);
    const {pic,name,challenge,id,info,time}=item;
    // console.log(pic,name,challange,id,info);

    return (
        <div className='w-96 lg:w-80 h-[500px] border  mx-1 shadow-lg relative rounded-xl bg-white hover:outline outline-[#5d5fef]'>
            <img className='w-full h-[150px] rounded-t-2xl ' src={pic} alt="" />
            <div className='px-2'>
            <h5 className='text-3xl font-bold my-5'>{name}</h5>
            <p className='text-[#848484] text-1xl my-4'>{info.slice(0,100)}</p>
            <p className='text-[#848484] my-5'>For Challenge Time : <span className='font-semibold text-black'>{challenge} hour's</span></p>
            <p className='text-[#848484]'>Time : <span className='font-semibold text-black'>{time} minute</span> </p>
            </div>
            <button onClick={()=>timeHabdler(id)} className='btn bg-[#5d5fef] hover:text-[#5d5fef] hover:bg-white font-bold px-28 lg:px-20 py-4 hover:outline text-white text-1xl absolute bottom-0 w-full  rounded-b-2xl'><FontAwesomeIcon icon={faAdd}></FontAwesomeIcon> Add To List</button>
            
        </div>
    );
};

export default Item;