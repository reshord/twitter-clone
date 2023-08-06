'use client'

import { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {FiSettings} from 'react-icons/fi'

const ExploreHeader = () => {

    const [isHovered, setIsHovered] = useState<boolean>(false)

    return ( 
        <div className='sticky top-0 bg-white  py-2 '>
            <div className='flex items-center'>
                <div className='flex w-full items-centerpx-4 rounded-full outline-slate-700'>
                    <AiOutlineSearch size={22} className='relative mr-2'/>
                    <input placeholder='Search Twitter' className='abosulte outline-none' type="text" />
                </div>
                <FiSettings className='ml-10 cursor-pointer' size={20}/>
            </div>
        </div>
     );
}
 
export default ExploreHeader;