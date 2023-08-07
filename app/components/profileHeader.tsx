'use client'
import { useParams, usePathname, useRouter } from 'next/navigation';
import {IoArrowBackOutline} from 'react-icons/io5'
import useUser from '../hooks/useCurrentProfile';
import ArrowBack from './arrowBack';


const ProfileHeader = ({title}: {title?: string}) => {

    const pathname = usePathname()
    const params = useParams()

    const {data, isLoading} = useUser(params?.username)

    return ( 
        <div 
            style={{
                border: '1px solid rgb(239, 243, 244)',
                backgroundColor: 'rgba(255, 255, 255, 0.85)', 
                backdropFilter: 'blur(12px)',
            }} 
            className="sticky top-0 z-10 py-2 px-3 bg-white cursor-pointer"
        >
            <div className='w-1/2 flex items-center'>

                <ArrowBack />

                {pathname === `/profile/${params?.username}` 
                    && data 
                    && (
                    <div className='flex flex-col'>
                        <span className='font-bold text-xl'>{data?.name}</span>
                        <span className='opacity-80 text-sm text-neutral-500'>68 Tweets</span>
                    </div>
                )}
                {pathname === `/${params?.username}/status/${params?.postId}` 
                 && (
                   <span className='font-bold text-2xl cursor-pointer'>{title}</span>
                )}
                {!data && (
                   <span className='font-bold text-2xl cursor-pointer'>Profile</span>
                )}
            </div>
        </div>
     );
}
 
export default ProfileHeader;