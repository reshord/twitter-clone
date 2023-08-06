'use client'

import { useParams, usePathname } from "next/navigation";
import SearchInput from "./searchInput";
import WhoToFollow from "./whoToFollow";
import TrendsForYou from "./trendsForYou";
import SidebarSearchFooter from "./sidebarSearchFooter";

const SearchSidebar = () => {

    const pathname = usePathname()
    const params = useParams()

    return ( 
        <div className="color-white w-1/4 pt-2">
                {pathname !== `/explore` && (
                    <SearchInput />
                )}
               <div>
                    <div>
                        {pathname !== '/explore' && (
                            <TrendsForYou />
                        )}
                    </div>
                    <div>
                        {pathname !== `/profile/${params?.username}` && (
                            <WhoToFollow />
                        )}
                    </div>
                    <SidebarSearchFooter />
               </div>
        </div>
     );
}
 
export default SearchSidebar;