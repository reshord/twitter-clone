import { useEffect } from "react";
import ContentPost from "./contentPost";
import MyNewsInput from "./myNewsInput";

const FollowinContent = () => {

    const posts = [
        {
            postId: '1',
            name: 'UtdPlug', 
            username: 'UtdPlug', 
            profileImage: 'https://i.ibb.co/yX9WMCZ/images.png', 
            createdAt: Date, 
            postBody: '🚨 West Ham are interested in signing Harry Maguire.', 
            images: [],
            repostsTweetIds: [],
            repliesTweetIds: [],
            likesTweetIds: [],
            viewsTweetIds: []
        },
        {
            postId: '2',
            name: 'UnitedRadar', 
            username: 'United Radar', 
            profileImage: 'https://i.ibb.co/VJ9QhXQ/images.png', 
            createdAt: Date, 
            postBody: 'Fabrizio Romano: "[R]elax with Onana. It’s just matter of formal things and small details. He’s joining Manchester United. 🧘🏼‍♂️"',
            images: [],
            repostsTweetIds: [],
            repliesTweetIds: [],
            likesTweetIds: [],
            viewsTweetIds: []
        },
        {
            postId: '3',
            name: 'centredevils', 
            username: 'centredevils.', 
            profileImage: 'https://i.ibb.co/3krfKQK/images.png', 
            createdAt: Date, 
            postBody: 'All eyes on the ball', 
            images: [],
            repostsTweetIds: [],
            repliesTweetIds: [],
            likesTweetIds: [],
            viewsTweetIds: []
        },
        {
            postId: '4',
            name: 'UnitedStandMUFC', 
            username: 'The United Stand', 
            profileImage: 'https://i.ibb.co/vwbq4Sy/images.png', 
            createdAt: Date, 
            postBody: '🚨 Luton Town hope to get a thumbs up from #mufc to land goalkeeper Tom Heaton, who could be allowed to leave once United have added new signings in that department. [@SunSport]', 
            images: [],
            repostsTweetIds: [],
            repliesTweetIds: [],
            likesTweetIds: [],
            viewsTweetIds: []
        },
        {
            postId: '5',
            name: 'ManUtd', 
            username: 'Manchester United', 
            profileImage: 'https://i.ibb.co/sv1z9KB/images.png', 
            createdAt: Date, 
            postBody: 'Great to have you back', 
            images: [],
            repostsTweetIds: [],
            repliesTweetIds: [],
            likesTweetIds: [],
            viewsTweetIds: []
        },
    ]

    return ( 
        <div className="flex flex-col">
            <MyNewsInput />
            <div 
                className=" flex flex-col"
            >
                {posts.map(post => (
                    <ContentPost
                        key={post.postId}
                        postId={post.postId}
                        name={post.name} 
                        username={post.username} 
                        profileImage={post.profileImage} 
                        images={post.images} 
                        postBody={post.postBody} 
                        repostsTweetIds={post.repostsTweetIds}
                        viewsTweetIds={post.viewsTweetIds}
                        repliesTweetIds={post.repostsTweetIds}
                        likesTweetIds={post.likesTweetIds}
                    />
                ))}
            </div>
        </div>
     );
}
 
export default FollowinContent;