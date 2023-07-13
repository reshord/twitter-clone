import Link from "next/link";
import React from "react";
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

    return ( 
        <Link href={url}>
            <div className='flex mt-4 font-bold text-lg cursor-pointer'>
                <Icon className='mr-3' size={30} />
                <span>{label}</span>
            </div>
        </Link>
     );
}
 
export default SidebarItem;