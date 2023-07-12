import Image from 'next/image';
import {BsTwitter} from 'react-icons/bs'
import {BiHomeCircle, BiLogOut} from 'react-icons/bi'
import {AiOutlineSearch} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'

const NavigationSidebar = () => {
    return ( 
        <div className='flex flex-col justify-between pt-3'>
            <div className=''>
                <BsTwitter className='cursor-pointer' color='rgb(29, 155, 240)' size={30}/>
            </div>
            <div className='mt-4'>
                <ul>
                    <li className='flex pt-4 font-medium text-lg cursor-pointer'>
                        <BiHomeCircle className='mr-3' size={30}/>
                        Home
                    </li>
                    <li className='flex pt-4 font-medium text-lg cursor-pointer'>
                        <AiOutlineSearch className='mr-3' size={30} fontWeight={700}/>
                        Explore
                    </li>
                    <li className='flex pt-4 font-medium text-lg cursor-pointer'>
                        <CgProfile className='mr-3' size={30} fontWeight={700}/>
                        Profile
                    </li>
                    <li className='flex pt-4 font-medium text-lg cursor-pointer'> 
                        <BiLogOut className='mr-3' size={30} fontWeight={700}/>
                        Logout
                    </li>
                </ul>
            </div>
        </div>
     );
}
 
export default NavigationSidebar;