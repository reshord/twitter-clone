'use client'

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import {IconType} from 'react-icons'

interface SidebarItemProps {
    icon: IconType
    label: string
    url: string
}

const SidebarItem: React.FC<SidebarItemProps> = ({
    icon: Icon,
    label,
    url
}) => {

    const [isHovered, setIsHovered] = useState<boolean>(false)

    const pathname = usePathname()

    console.log(pathname)

    return ( 
        <Link href={url}>
            <div 
                onMouseMove={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{backgroundColor: `${isHovered || pathname === label ? 'rgb(239, 243, 244)' : ''}`}}
                className='flex mt-2 py-2 px-2 rounded-full font-bold text-lg cursor-pointer'
            >
                <Icon className='mr-3' size={30} />
                <span>{label}</span>
            </div>
        </Link>
     );
}
 
export default SidebarItem;