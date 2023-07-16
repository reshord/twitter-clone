import WhoToFollowItem from "./whoToFollorItem";

const WhoToFollow = () => {

    const whoToFollowSlices = [
        {name: 'TenHagEra', username: 'Frank 🧠🇳🇱', avatar: 'https://i.ibb.co/LRZqDDH/image.png'},
        {name: 'utdreport', username: 'utdreport', avatar: 'https://i.ibb.co/MnKZwgy/image.png'},
        {name: 'TenHagBall_', username: 'Ten Hag\'\s Reds✍🏼🇳🇱', avatar: 'https://i.ibb.co/k1gqrjt/image.png'},
    ]

    return ( 
        <div 
            className="mt-4 p-4 rounded-md" 
            style={{backgroundColor: 'rgb(239, 243, 244)'}}
        >
            <div>
                <span className="font-bold text-xl">Who to follow</span>
            </div>
            <div className="flex flex-col">
                {whoToFollowSlices.map(item => (
                    <WhoToFollowItem 
                        name={item.name} 
                        username={item.username} 
                        avatar={item.avatar} 
                    />
                ))}
            </div>
            <button 
                style={{color: 'rgb(29, 155, 240)'}} 
                className="font-medium mt-5">
                    Show more
            </button>
        </div>
     );
}
 
export default WhoToFollow;