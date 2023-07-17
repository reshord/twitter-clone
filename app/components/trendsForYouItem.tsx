'use client'
import {useState} from 'react'

interface TrendsForYouItemProps {
    category: string
    trendTitle: string
    tweetsCount: string
}

const TrendsForYouItem: React.FC<TrendsForYouItemProps> = (
    {
        category, 
        trendTitle, 
        tweetsCount
    }
    ) => {

        const [isHovered, setIsHoverd] = useState<boolean>(false)

    return ( 
        <div 
            style={{backgroundColor: `${isHovered ? 'rgba(0,0,0,0.03)' : ''}`}} 
            className="flex flex-col pl-4 py-2 cursor-pointer"
            onMouseMove={() => setIsHoverd(true)}
            onMouseLeave={() => setIsHoverd(false)}
        >
            <span className="opacity-40 text-sm font-medium">{category}</span>
            <span className="font-bold">{trendTitle}</span>
            <span className="opacity-40 text-sm font-medium">{tweetsCount} Tweets</span>
        </div>
     );
}
 
export default TrendsForYouItem;