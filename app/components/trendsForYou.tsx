'use client'

import {useState} from 'react'
import { usePathname } from "next/navigation";
import TrendsForYouItem from "./trendsForYouItem";

const TrendsForYou = () => {

    const pathname = usePathname()

    const [isHoveredButton, setIsHoveredButton] = useState<boolean>(false)

    const trends = [
        {category: 'Sports Trending', trendTitle: 'Sofyan Ambarat', tweetsCount: '5,427'},
        {category: 'Sports Trending', trendTitle: 'Ornstein', tweetsCount: '10.7K'},
        {category: 'Trending', trendTitle: 'Maguire', tweetsCount: '17.1K'},
        {category: 'Sports Trending', trendTitle: 'Hojlund', tweetsCount: '191K'},
        {category: 'Sports Trending', trendTitle: 'Onana', tweetsCount: '98.4K'},
        {category: 'Sports Trending', trendTitle: 'Casemiro', tweetsCount: '15.2K'},
    ]

    return ( 
        <div 
            className="w-full rounded-lg mt-4 pt-3"
        >
            <span style={{marginLeft: ``}} className="text-2xl font-bold pl-4">
                Trends for you
            </span>
            <div className="flex flex-col mt-2">
                {trends.map((trend, index) => (
                    <TrendsForYouItem 
                        key={index}
                        category={trend.category} 
                        trendTitle={trend.trendTitle} 
                        tweetsCount={trend.tweetsCount}
                    />
                ))}
            </div>
            <button
                className='p-3 w-full text-start rounded-b-lg' 
                onMouseMove={() => setIsHoveredButton(true)}
                onMouseLeave={() => setIsHoveredButton(false)}
                style={{
                    color: 'rgb(29, 155, 240)',
                    backgroundColor: `${isHoveredButton ? 'rgb(239, 243, 244)' : ''}`
                }}>
                    Show more
            </button>
        </div>
     );
}
 
export default TrendsForYou;