import useSwr from 'swr'
import { fetcher } from './fetcher'
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

const useUser = (username: string | string[] | undefined) => {
    const {data, isLoading}: IUserData = useSwr(`/profile/${username}/api/currentUser`, fetcher)

    return {
        data: data, 
        isLoading
    }
}

export default useUser