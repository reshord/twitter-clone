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
            url: '/profile'
        },
        {
            label: 'Logout',
            icon: BiLogOut,
            url: '/logout'
        },
       
    ]

    return ( 
        <div className='flex flex-col h-screen justify-between py-3 w-1/6'>
            <div className='sticky'>
                <SidebarLogo />
                <div className='my-6'>
                    {sibarItems.map(item => (
                        <SidebarItem icon={item.icon} label={item.label} url={item.url}/>
                    ))}
                </div>
                <TweetButton />
            </div>
            <SidebarProfile />
        </div>
     );
}
 
export default NavigationSidebar;