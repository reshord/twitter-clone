import Image from 'next/image';
import {BsTwitter} from 'react-icons/bs'
import {BiHomeCircle, BiLogOut} from 'react-icons/bi'
import {AiOutlineSearch} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import SidebarLogo from './sidebarLogo';
import SidebarItem from './sidebarItem';

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
        <div className='flex flex-col justify-between pt-3'>
            <div>
                <SidebarLogo />
            </div>
            <div className='mt-4'>
                {sibarItems.map(item => (
                    <SidebarItem icon={item.icon} label={item.label} url={item.url}/>
                ))}
            </div>
        </div>
     );
}
 
export default NavigationSidebar;