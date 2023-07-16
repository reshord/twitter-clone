import {IoArrowBackOutline} from 'react-icons/io5'


const ProfileHeader = () => {
    return ( 
        <div className="w-full sticky t-0">
            <div className='w-1/2 flex items-center'>
                <div className='mr-10'>
                    <IoArrowBackOutline className='cursor-pointer' size={20} />
                </div>
                <div className='flex flex-col'>
                    <span className='font-bold text-xl'>Reshord MUFC</span>
                    <span className='opacity-80 text-sm'>68 Tweets</span>
                </div>
            </div>
        </div>
     );
}
 
export default ProfileHeader;