import { useRouter } from "next/navigation";
import { IoArrowBackOutline } from "react-icons/io5";

const ArrowBack = () => {

    const router = useRouter()

    return ( 
        <div className='mr-9'>
                <IoArrowBackOutline onClick={() => router.back()} className='cursor-pointer' size={20} />
        </div>
     );
}
 
export default ArrowBack;