'use client'

import { useRouter } from "next/navigation";
import { BsTwitter } from "react-icons/bs";

const SidebarLogo = () => {

    const router = useRouter()


    return ( 
        <div >
            <BsTwitter
                onClick={() => router.push('/')} 
                className='cursor-pointer' 
                color='rgb(29, 155, 240)' size={30}
            />
        </div>
     );
}
 
export default SidebarLogo;