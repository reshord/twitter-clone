'use client'

import { useParams, usePathname } from "next/navigation";
import SearchInput from "./searchInput";
import WhoToFollow from "./whoToFollow";

const SearchSidebar = () => {

    const pathname = usePathname()
    const params = useParams()

    return ( 
        <div className="color-white w-1/4 pt-2">
            <div>
                {pathname !== `/explore` && (
                    <SearchInput />
                )}
            </div>
            <div>
                {pathname !== `/profile/${params.username}` && (
                    <WhoToFollow />
                )}
            </div>
        </div>
     );
}
 
export default SearchSidebar;