import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Practices = () => {
    const [items,setItems]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])
    return (
        <div className='md:mx-60 mx-2 my-5 md:my-32 ' >
            <h1 className='text-center md:text-left text-3xl md:text-5xl font-black mb-6 text-[#5d5fef]'>ZERO-CODER-CLUB</h1>
            <h2 className='text-2xl'>Select today’s Practices item</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-14 rounded-xl'>
            {
                items.map(item => <Item item={item} key={item.id}></Item>)
            }
            </div>
        </div>
    );
};

export default Practices;