import { useParams, usePathname } from 'next/navigation';
import {AiOutlineSearch} from 'react-icons/ai'

const SearchInput = () => {

    return ( 
        <div style={{
            border: '2px solid rgb(239, 243, 244)'
        }} className='flex items-center  py-2 px-4 rounded-full'>
            <AiOutlineSearch size={20} className='mr-2'/>
            <input placeholder='Search Twitter' className='outline-none bg-transparent' type="text" />
        </div>
     );
}
 
export default SearchInput;