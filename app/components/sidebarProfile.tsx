'use client'
import Link from "next/link";
import { useState } from "react";
import {useSession} from 'next-auth/react'

const SidebarProfile = ({currentUser}: any) => {

    const [isHovered, setIsHovered] = useState<boolean>(false)

    if(!currentUser) {
        return null
    }

    return ( 
        <Link href={`/profile/${currentUser?.username}`}>
            <div 
                onMouseMove={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{backgroundColor: `${isHovered ? 'rgb(239, 243, 244)' : ''}`}}
                className="flex items-center cursor-pointer py-2 px-4 rounded-full"
            >
                <div className="mr-3">
                    <img className="rounded-full w-10" src={currentUser?.profileImage || '/placeholder.png'} alt="" />
                </div>
                <div className="flex flex-col">
                    <span className="font-bold">{currentUser?.name}</span>
                    <span className="opacity-80">@{currentUser?.username}</span>
                </div>
            </div>
        </Link>
     );
}
 
export default SidebarProfile;