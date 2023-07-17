'use client'

import Image from 'next/image';
import {BsTwitter} from 'react-icons/bs'
import {BiHomeCircle, BiLogOut} from 'react-icons/bi'
import {AiOutlineSearch} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import SidebarLogo from './sidebarLogo';
import SidebarItem from './sidebarItem';
import TweetButton from './tweetButton';
import SidebarProfile from './sidebarProfile';

const NavigationSidebar = () => {

    const currentUser = {
        name: 'Reshord'
    }

    const sibarItems = [
        {
            label: 'Home',
            icon: BiHomeCircle,
            url: '/'
        },
        {
            label: 'Explore',
            icon: AiOutlineSearch,
            url: '/explore'
        },
        {
            label: 'Profile',
            icon: CgProfile,
            url: `/profile/${currentUser.name}`
        },
        {
            label: 'Logout',
            icon: BiLogOut,
            url: '/logout'
        },
       
    ]

    

    return ( 
        <div className='flex flex-col justify-between py-3 w-1/6 h-screen'>
            <div className=''>
                <SidebarLogo />
                <div className='my-6 '>
                    {sibarItems.map((item, index) => (
                        <SidebarItem key={index} icon={item.icon} label={item.label} url={item.url}/>
                    ))}
                </div>
                <TweetButton />
            </div>
            <SidebarProfile />
        </div>
     );
}
 
export default NavigationSidebar;