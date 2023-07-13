'use client'
import { useParams } from "next/navigation";

const ProfilePage = () => {

    const params = useParams()

    return ( 
        <div>
            {params.username}
        </div>
     );
}
 
export default ProfilePage;