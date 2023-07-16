import SearchInput from "./searchInput";
import WhoToFollow from "./whoToFollow";

const SearchSidebar = () => {
    return ( 
        <div className="color-white w-1/4 pt-2">
            <div>
                <SearchInput />
            </div>
            <div>
                <WhoToFollow />
            </div>
        </div>
     );
}
 
export default SearchSidebar;