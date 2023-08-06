'use client'

import ProfileHeader from "@/app/components/profileHeader";
import { useParams } from "next/navigation";

const TweetPage = () => {

    const params = useParams()

    return ( 
        <div className="w-2/4">
            <ProfileHeader title={"Tweet"} />
            
            <div>
                {params?.postId}
            </div>
        </div>
     );
}
 
export default TweetPage;