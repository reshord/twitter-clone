'use client'
import ProfileHeader from "@/app/components/profileHeader";
import SearchInput from "@/app/components/searchInput";
import useUser from "@/app/hooks/useUser";
import { useParams } from "next/navigation";
import ClipLoader from "react-spinners/ClipLoader";

const ProfilePage = () => {

    const params = useParams()
    const {data, isLoading} = useUser(params?.name)

    

    if(!params?.name || !data) {
        return (
            <div className="h-screen flex items-center justify-center">
                <ClipLoader />
            </div>
        )
    }


    return ( 
        <div className="w-2/5">
            <ProfileHeader />
            <div>
                <span>{data.name}</span>
            </div>
        </div>
     );
}
 
export default ProfilePage;