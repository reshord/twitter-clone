import { fetcher } from "../lib/fetcher"
import useSwr from 'swr'

const useFollowingUsers = (username: string | string[] | undefined) => {
    const {data, isLoading} = useSwr(`/profile/${username}/api/followingUsers`, fetcher)

    return {
        data: data, 
        isLoading
    }
}

export default useFollowingUsers