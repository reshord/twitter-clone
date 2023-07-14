'use client'
import { useParams } from "next/navigation";

const getUsers = async () => {
    const data = await fetch('/api/users', {
        method: 'GET'
    })

    return data.json()
}

const ProfilePage = () => {

    const params = useParams()

    const users = getUsers()

    console.log(users)


    return ( 
        <div>
            <button>click</button>
            {params.username}
        </div>
     );
}
 
export default ProfilePage;