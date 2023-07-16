'use client'
import ProfileHeader from "@/app/components/profileHeader";
import SearchInput from "@/app/components/searchInput";
import { useParams } from "next/navigation";

const ProfilePage = () => {

    const params = useParams()

    return ( 
        <div className="w-2/5">
            <ProfileHeader />
        </div>
     );
}
 
export default ProfilePage;