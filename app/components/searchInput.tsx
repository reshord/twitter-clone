import { useParams, usePathname } from 'next/navigation';
import {AiOutlineSearch} from 'react-icons/ai'

const SearchInput = () => {

    return ( 
        <div className='flex items-center bg-red-700 py-2 px-4 rounded-full sticky top-0'>
            <AiOutlineSearch size={20} className='mr-2'/>
            <input placeholder='Search Twitter' className='outline-none bg-transparent' type="text" />
        </div>
     );
}
 
export default SearchInput;