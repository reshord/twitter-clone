import Image from "next/image"

interface ContentPostProps {
    avatar: string
    name: string
    username: string
    createdAt: string
    image?: string | string[]
    postTextContent: string
    postId: number
}

const ContentPost: React.FC<ContentPostProps> = (
    {
        name, 
        username, 
        avatar, 
        createdAt, 
        postTextContent,
        image,
        postId
    }) => {

    return ( 
        <div className="flex flex-col mt-2 cursor-pointer">
            <div className="flex ">
                <div className="mr-3 w-10">
                    <img className="rounded-full w-10" src={avatar} alt="" />
                </div>
                <div className="flex flex-col w-4/5">
                    <div className="flex">
                        <span className="mr-3 font-bold">{username}</span>
                        <span className="mr-3 opacity-75">@{name}</span>
                        <span className="mr-3">·</span>
                        <span className="mr-3 opacity-75">{createdAt}m</span>
                    </div>
                    <div className="w-full">
                        {postTextContent}
                    </div>
                </div>
            </div>
            <div className="px-16 my-3">
                {/* <img src={} alt="" /> */}
            </div>
        </div>
     );
}
 
export default ContentPost;