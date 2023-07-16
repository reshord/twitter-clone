import React from "react";

interface WhoToFollowItemProps {
    username: string
    name: string
    avatar?: string
}

const WhoToFollowItem: React.FC<WhoToFollowItemProps> = ({username, name, avatar}) => {
    return ( 
        <div className="w-full h-10 flex items-center justify-between mt-4 cursor-pointer">
            <div className="flex items-center">
                <div className="mr-2">
                    <img className="rounded-full w-10" src={avatar} alt="" />
                </div>
                <div className="flex flex-col">
                    <span className="font-bold">{username}</span>
                    <span className="opacity-60">@{name}</span>
                </div>
            </div>
            <button className="text-white bg-black rounded-full py-1 px-3">Follow</button>
        </div>
     );
}
 
export default WhoToFollowItem;