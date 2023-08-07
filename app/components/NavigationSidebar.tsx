'use client'
import Image from 'next/image';
import {BiHomeCircle, BiLogOut, BiLogIn} from 'react-icons/bi'
import {AiOutlineSearch} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import SidebarLogo from './sidebarLogo';
import SidebarItem from './sidebarItem';
import TweetButton from './tweetButton';
import SidebarProfile from './sidebarProfile';
import {signIn, useSession} from 'next-auth/react'
import AuthButton from './authButton';


const NavigationSidebar = ({currentUser}: any) => {

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
            url: currentUser ? `/profile/${currentUser.username}` : '/sign-in'
        },
    ]

    return ( 
        <div className='flex flex-col justify-between py-3 w-1/6'>
            <div className='sticky top-3'>
                <SidebarLogo />
                <div className='my-6 '>
                    {sibarItems.map((item, index) => (
                        <SidebarItem key={index} icon={item.icon} label={item.label} url={item.url}/>
                    ))}
                </div>

                <TweetButton />

                <AuthButton currentUser={currentUser} />

            </div>
            <SidebarProfile />
        </div>
     );
}
 
export default NavigationSidebar;