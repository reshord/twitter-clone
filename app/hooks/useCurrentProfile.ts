import useSwr from 'swr'
import { fetcher } from '../lib/fetcher'
import { IPost } from '../types/types'


interface IUserData {
    data: {
        id: string
        name: string
        username: string
        bio: string
        email: string
        image?: string
        coverImage?: string
        profileImage?: string
        hashedPassword: string
        followingIds?: string[]
        createdAt: Date
        updatedAt: Date
        posts: IPost[]
    },
    isLoading: boolean
}

const useCurrentProfile = (username: string | string[] | undefined) => {
    const {data, isLoading}: IUserData = useSwr(`/profile/${username}/api/currentProfile`, fetcher)

    return {
        data: data, 
        isLoading
    }
}

export default useCurrentProfile