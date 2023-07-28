'use client'

import { useState } from "react"
import {FaRegComment} from 'react-icons/fa'
import {BiRepost} from 'react-icons/bi'
import {AiOutlineHeart} from 'react-icons/ai'
import {VscGraph} from 'react-icons/vsc'
import { useRouter } from "next/navigation"
import Link from "next/link"

interface ContentPostProps {
    avatar: string
    name: string
    username: string
    createdAt: string
    images?: string | string[]
    postTextContent: string
    postId: number
    repliesTweetIds: string[] | []
    repostsTweetIds: string[] | []
    likesTweetIds: string[] | []
    viewsTweetIds: string[] | []
}

const ContentPost: React.FC<ContentPostProps> = (
    {
        name, 
        username, 
        avatar, 
        createdAt, 
        postTextContent,
        images,
        postId,
        repliesTweetIds,
        repostsTweetIds,
        likesTweetIds,
        viewsTweetIds
    }) => {

    const [isHovered, setIsHovered] = useState<boolean>(false)
    const router = useRouter()


    return ( 
        <div 
            
            style={{
                backgroundColor: `${isHovered ? 'rgba(0,0,0,0.03)' : ''}`,
                border: '1px solid rgb(239, 243, 244)'
            }}
            onMouseMove={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex flex-col cursor-pointer pl-3 pt-3"
        >
            <div className="flex">
                <div className="mr-3 w-10">
                    <Link href={`/profile/${username}`}>
                        <img className="rounded-full w-10" src={avatar} alt="" />
                    </Link>
                </div>
                <div className="flex flex-col w-4/5">
                    <div className="flex">
                        <Link href={`/profile/${username}`} className="mr-3 font-bold hover:underline">{name}</Link>
                        <Link href={`/profile/${username}`} className="mr-3 opacity-75">@{username}</Link>
                        <span className="mr-3">·</span>
                        <span className="mr-3 opacity-75">{createdAt}m</span>
                    </div>
                    <div className="w-full" onClick={() => router.push(`/${username}/status/${postId}`)} >
                        {postTextContent}
                    </div>
                </div>
            </div>
            <div className="flex justify-between w-full py-4 px-12">
                <div className="flex items-center">
                    <FaRegComment className="mr-2" />
                    <span className="text-sm opacity-80 font-medium">{repliesTweetIds.length || 0}</span>
                </div>
                <div className="flex items-center">
                    <BiRepost size={22} className="mr-2"/>
                    <span className="text-sm opacity-80 font-medium">{repostsTweetIds.length || 0}</span>
                </div>
                <div className="flex items-center">
                    <AiOutlineHeart size={18} className="mr-2"/>
                    <span className="text-sm opacity-80 font-medium">{likesTweetIds.length || 0}</span>
                </div>
                <div className="flex items-center">
                    <VscGraph  className="mr-2"/>
                    <span className="text-sm opacity-80 font-medium">{viewsTweetIds.length || 0}</span>
                </div>
            </div>
        </div>
     );
}
 
export default ContentPost;