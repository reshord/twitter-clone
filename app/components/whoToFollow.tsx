'use client'
import {useState} from 'react'
import WhoToFollowItem from "./whoToFollorItem";

const WhoToFollow = () => {

    const whoToFollowSlices = [
        {username: 'TenHagEra', name: 'Frank 🧠🇳🇱', avatar: 'https://i.ibb.co/LRZqDDH/image.png', userId: ''},
        {username: 'utdreport', name: 'utdreport', avatar: 'https://i.ibb.co/MnKZwgy/image.png', userId: ''},
        {username: 'TenHagBall_', name: 'Ten Hag\'\s Reds✍🏼🇳🇱', avatar: 'https://i.ibb.co/k1gqrjt/image.png', userId: ''},
    ]

    const [isHoveredButton, setIsHoveredButton] = useState<boolean>(false)


    return ( 
        <div 
            className="mt-4 rounded-lg" 
            style={{backgroundColor: 'rgb(239, 243, 244)'}}
        >
            <div className="p-3">
                <span className="font-bold text-xl">Who to follow</span>
            </div>
            <div className="flex flex-col">
                {whoToFollowSlices.map((item, index) => (
                    <WhoToFollowItem 
                        key={index}
                        name={item.name} 
                        username={item.username} 
                        avatar={item.avatar} 
                        userId={item.userId}
                    />
                ))}
            </div>
            <button 
                onMouseMove={() => setIsHoveredButton(true)}
                onMouseLeave={() => setIsHoveredButton(false)}
                style={{
                    color: 'rgb(29, 155, 240)',
                    backgroundColor: `${isHoveredButton ? 'rgba(0,0,0,0.03)' : ''}`
                }} 
                className="font-medium p-3 w-full text-start transition">
                    Show more
            </button>
        </div>
     );
}
 
export default WhoToFollow;