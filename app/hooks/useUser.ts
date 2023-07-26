import useSwr from 'swr'

const fetcher = async (url: string) => await fetch(url).then(res => res.json())

const useUser = (username: string | string[] | undefined) => {
    const {data, isLoading} = useSwr(`/profile/${username}/api`, fetcher)

    return {
        data: data.data, 
        isLoading
    }
}

export default useUser