import { useParams, usePathname } from 'next/navigation';
import {AiOutlineSearch} from 'react-icons/ai'

const SearchInput = () => {

    return ( 
        <div style={{backgroundColor: 'rgb(239, 243, 244)'}} className='flex items-center py-2 px-4 rounded-full outline-slate-700'>
            <AiOutlineSearch size={20} className='relative mr-2'/>
            <input placeholder='Search Twitter' className='abosulte bg-transparent outline-none' type="text" />
        </div>
     );
}
 
export default SearchInput;