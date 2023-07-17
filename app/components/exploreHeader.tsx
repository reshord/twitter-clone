'use client'

import { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {FiSettings} from 'react-icons/fi'

const ExploreHeader = () => {

    const [isHovered, setIsHovered] = useState<boolean>(false)

    return ( 
        <div className='flex items-center sticky top-0 z-10 py-2 bg-white'>
                <div style={{backgroundColor: 'rgb(239, 243, 244)'}} className='flex w-full items-center py-2 px-4 rounded-full outline-slate-700'>
                    <AiOutlineSearch size={20} className='relative mr-2'/>
                    <input placeholder='Search Twitter' className='abosulte bg-transparent outline-none' type="text" />
                </div>
                <FiSettings className='ml-10 cursor-pointer' size={20}/>
        </div>
     );
}
 
export default ExploreHeader;