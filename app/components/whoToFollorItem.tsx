'use client'

import Link from "next/link";
import React, {useState} from "react";

interface WhoToFollowItemProps {
    username: string
    name: string
    avatar?: string
    userId: string
}

const WhoToFollowItem: React.FC<WhoToFollowItemProps> = (
    {
        username, 
        name, 
        avatar,
        userId
    }
    ) => {
    
    const [isHovered, setIsHovered] = useState<boolean>(false)

    return ( 
        <Link href={`/profile/${username}`}>
            <div
                onMouseMove={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{backgroundColor: `${isHovered ? 'rgba(0,0,0,0.03)' : ''}`}}
                className="w-full py-2 px-2 flex items-center justify-between cursor-pointer transition"
            >
                <div className="flex items-center">
                    <div className="mr-2">
                        <img className="rounded-full w-10" src={avatar} alt="" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold">{name}</span>
                        <span className="opacity-60">@{username}</span>
                    </div>
                </div>
                <button className="text-white bg-black rounded-full py-1 px-3 transition font-medium">Follow</button>
            </div>
        </Link>
     );
}
 
export default WhoToFollowItem;