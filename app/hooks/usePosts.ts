import useSwr from 'swr'
import { fetcher } from './fetcher'
import { IPost } from '../types/types'

interface IPostsData {
    data: {
        posts: IPost[] | []
    },
    isLoading: boolean
}

const usePosts = (username: string | string[] | undefined) => {
    const {data, isLoading}: IPostsData = useSwr(`/profile/${username}/api/posts`, fetcher)

    return {
        data: data, 
        isLoading
    }
}

export default usePosts