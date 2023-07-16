'use client'
import { useState } from "react";

const SidebarProfile = () => {

    const [isHovered, setIsHovered] = useState<boolean>(false)

    const myProfile = {
        avatar: "https://i.ibb.co/fDNyK87/image.png",
        username: "Reshord",
        name: "reshord0"
    }

    return ( 
        <div 
            onMouseMove={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{backgroundColor: `${isHovered ? 'rgb(239, 243, 244)' : ''}`}}
            className="flex items-center cursor-pointer py-2 px-4 rounded-full"
        >
            <div className="mr-3">
                <img className="rounded-full w-10" src={myProfile.avatar} alt="" />
            </div>
            <div className="flex flex-col">
                <span className="font-bold">{myProfile.username}</span>
                <span className="opacity-80">@{myProfile.name}</span>
            </div>
        </div>
     );
}
 
export default SidebarProfile;