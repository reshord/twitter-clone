'use client'

import ProfileHeader from "@/app/components/profileHeader";
import { useParams } from "next/navigation";

const TweetPage = () => {

    const params = useParams()

    return ( 
        <div className="w-2/5 py-3">
            <ProfileHeader title={"Tweet"} />
            
            {params?.postId}
        </div>
     );
}
 
export default TweetPage;