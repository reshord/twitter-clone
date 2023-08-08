import ProfileHeader from "@/app/components/profileHeader";
import SearchInput from "@/app/components/searchInput";
import useUser from "@/app/hooks/useCurrentProfile";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import {RxCalendar} from 'react-icons/rx'
import Head from "next/head";
import Image from "next/image";
import useFollowingUsers from "@/app/hooks/useFollowingUsers";
import usePosts from "@/app/hooks/usePosts";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getCurrentProfile from "@/app/actions/getCurrentProfile";
import getUserPosts from "@/app/actions/getUserPosts";
import ContentPost from "@/app/components/contentPost";

const ProfilePage = async ({params}: {params: {username: string}}) => {

    const currentUser = await getCurrentUser()

    const currentProfile = await getCurrentProfile({params})

    const currentUserPosts = await getUserPosts({params})

    if(!currentProfile) {
        return (
            <div className="h-screen flex items-center justify-center">
                <ClipLoader />
            </div>
        )
    }

    return ( 
        <div className="w-3/6" style={{border: '2px solid rgb(239, 243, 244)'}}>
            <ProfileHeader />

            <div className="flex flex-col box-border" style={{borderBottom: '2px solid rgb(239, 243, 244)'}}>
                <div 
                    style={{
                        backgroundColor: `${!currentProfile.coverImage && 'rgb(207, 217, 222)'}`,
                    }} 
                    className="h-56"
                >
                    {/* <Image
                        src={data.coverImage} 
                        fill
                        alt="Cover image" 
                    /> */}
                </div>
                <div className="mt-14 relative">
                    <div className="flex justify-between">
                        <div className="my-3 mx-5">
                            <div 
                                style={{
                                    backgroundColor: `${!currentProfile.profileImage && 'rgb(247, 249, 249)'}`, 
                                    border: '4px solid white'
                                }} 
                                className="w-32 h-32 rounded-full absolute -top-28"
                            >
                                <img className="rounded-full cursor-pointer" src={currentProfile.profileImage as string || '/placeholder.png'} alt="" />
                            </div>
                            <div className="flex flex-col mt-8">
                                <span className="font-bold text-2xl">{currentProfile?.name}</span>
                                <span className="text-md text-neutral-500">@{currentProfile?.username}</span>
                            </div>
                            <div className="my-3">
                                <span>{currentProfile.bio}</span>
                            </div>
                            <div className="flex items-center">
                                <RxCalendar className="mr-2" />
                                <span className="text-neutral-500">Joined March 2020</span>
                            </div>
                            <div className="flex flex-row my-3">
                                <div className="mr-3">
                                    <span className="mr-2 font-bold">{currentProfile.followingIds?.length || 0}</span>
                                    <span className="opacity-60 text-sm">Following</span>
                                </div>
                                <div>
                                    <span className="mr-2 font-bold">{6}</span>
                                    <span className="opacity-60 text-sm">Followers</span>
                                </div>
                            </div>
                            
                        </div>
                        <div>
                            {currentProfile.id === currentUser?.id ? (
                                <button 
                                    style={{border: '2px solid black'}} 
                                    className="font-bold py-1 px-6 rounded-full cursor-pointer mr-5"
                                >
                                    Edit
                                </button>
                            ) : (
                                <button
                                    style={{border: '2px solid black'}} 
                                    className="font-bold py-1 px-6 rounded-full cursor-pointer mr-5"
                                >
                                    Follow
                                </button>
                            )}
                        </div>
                    </div>
                </div>
                
            </div>
            <div>
                {currentUserPosts.map(post => (
                    <ContentPost 
                        profileImage={currentProfile.profileImage as string} 
                        name={currentProfile.name as string} 
                        username={currentProfile.username as string} 
                        createdAt={post.createdAt} 
                        postBody={post.postBody as string} 
                        postId={post.id}
                    />
                ))}
            </div>
        </div>
     );
}
 
export default ProfilePage;