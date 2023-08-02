'use client'

import ProfileHeader from "@/app/components/profileHeader";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function Error({error, reset}: {error: Error, reset: () => void}) {

    const params = useParams()

    useEffect(() => {
    }, [error])

    return (
       <div className="w-3/6" style={{border: '1px solid rgb(239, 243, 244)'}}>
            <ProfileHeader />
            <div className="flex flex-col">
                <div 
                    style={{backgroundColor: 'rgb(207, 217, 222)'}} 
                    className="h-56 flex items-center"
                >
                    
                </div>
                <div className="mx-3 relative bottom-16">
                        <div 
                            style={{backgroundColor: 'rgb(247, 249, 249)', border: '4px solid white'}} 
                            className="w-32 h-32 rounded-full"
                        >
                        </div>
                        <span className="font-bold text-lg">@{params?.username}</span>
                    </div>
                <div className="w-2/3 m-auto flex flex-col my-10">
                    <span className="font-bold text-3xl">{error.message}</span>
                    <span className="text-neutral-500">Try searching for another</span>
                </div>
            </div>
       </div>
    )

}