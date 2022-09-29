import { faAnchor, faBookBookmark, faCode, faSprayCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Practices = ({items,timeHabdler}) => {
    
    return (
        <div className='lg:mx-16 md:mx-10 mx-2 my-8 lg:my-32 md:my-16 ' >
            <h1 className='text-center md:text-left text-3xl md:text-5xl font-black mb-6 text-[#5d5fef]'><FontAwesomeIcon icon={faCode}></FontAwesomeIcon> ZERO-CODER-CLUB</h1>
            <h2 className='text-2xl text-center md:text-left'>Select today’s Practices item</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 mt-14 rounded-xl'>
            {
                items.map(item => <Item item={item} key={item.id}  timeHabdler={timeHabdler}></Item>)
            }
            </div>
        </div>
    );
};

export default Practices;