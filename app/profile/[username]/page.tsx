'use client'
import ProfileHeader from "@/app/components/profileHeader";
import SearchInput from "@/app/components/searchInput";
import useUser from "@/app/hooks/useUser";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import {RxCalendar} from 'react-icons/rx'
import Head from "next/head";

const ProfilePage = () => {

    const [currentProfile, setCurrentProfile] = useState()

    const params = useParams()

    const {data, isLoading} = useUser(params?.username)


    if(isLoading) {
        return (
            <div className="h-screen flex items-center justify-center">
                <ClipLoader />
            </div>
        )
    }

    if(!data) throw new Error('This account doesn\'t exist')

    console.log(data)

    return ( 
        <div className="w-3/6" style={{border: '1px solid rgb(239, 243, 244)'}}>
            <ProfileHeader />

            <div className="flex flex-col">
                <div 
                    style={{
                        backgroundColor: `${!data.coverImage && 'rgb(207, 217, 222)'}`
                    }} 
                    className="h-56"
                >
                    <img src={data.coverImage} alt="" />
                </div>
                <div>
                <div className="my-3 mx-5 relative bottom-24">
                    <div 
                        style={{
                            backgroundColor: `${!data.profileImage && 'rgb(247, 249, 249)'}`, 
                            border: '4px solid white'
                        }} 
                        className="w-32 h-32 rounded-full "
                    >
                        <img className="rounded-full cursor-pointer" src={data.profileImage} alt="" />
                    </div>
                    <div className="flex flex-col mt-3">
                        <span className="font-bold text-2xl">{data?.name}</span>
                        <span className="text-md text-neutral-500">@{data?.username}</span>
                    </div>
                    <div className="my-3">
                        <span>{data.bio}</span>
                    </div>
                    <div className="flex items-center">
                        <RxCalendar className="mr-2" />
                        <span className="text-neutral-500">Joined March 2020</span>
                    </div>
                </div>
                <div>

                </div>
                </div>
            </div>
        </div>
     );
}
 
export default ProfilePage;