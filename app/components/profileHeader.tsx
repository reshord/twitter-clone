'use client'

import { useParams, usePathname, useRouter } from 'next/navigation';
import {IoArrowBackOutline} from 'react-icons/io5'


const ProfileHeader = ({title}: {title?: string}) => {

    const rounter = useRouter()
    const pathname = usePathname()
    const params = useParams()

    return ( 
        <div className="w-full sticky t-0">
            <div className='w-1/2 flex items-center'>
                <div className='mr-9'>
                    <IoArrowBackOutline onClick={() => rounter.back()} className='cursor-pointer' size={20} />
                </div>
                {pathname === `/profile/${params?.name}` && (
                    <div className='flex flex-col'>
                        <span className='font-bold text-xl'>Reshord MUFC</span>
                        <span className='opacity-80 text-sm'>68 Tweets</span>
                    </div>
                )}
                {pathname === `/${params?.name}/status/${params?.postId}` && (
                   <span className='font-bold text-2xl cursor-pointer'>{title}</span>
                )}
            </div>
        </div>
     );
}
 
export default ProfileHeader;