import ContentPost from "./contentPost";
import MyNewsInput from "./myNewsInput";

const ForMeContent = () => {

    const posts = [
        {
            postId: 1,
            name: 'centredevils', 
            username: 'centredevils.', 
            avatar: 'https://i.ibb.co/3krfKQK/image.png', 
            createdAt: '30', 
            postTextContent: 'All eyes on the ball', 
            image: '',
            comments: 9,
            reposts: 24,
            likes: 120,
            view: 200
        },
        {
            postId: 2,
            name: 'ManUtd', 
            username: 'Manchester United', 
            avatar: 'https://i.ibb.co/sv1z9KB/image.png', 
            createdAt: '40', 
            postTextContent: 'Great to have you back', 
            image: '',
            comments: 19,
            reposts: 44,
            likes: 40,
            view: 400
        },
        {
            postId: 3,
            name: 'UtdPlug', 
            username: 'UtdPlug', 
            avatar: 'https://i.ibb.co/yX9WMCZ/image.png', 
            createdAt: '50', 
            postTextContent: '🚨 West Ham are interested in signing Harry Maguire.', 
            image: '',
            comments: 119,
            reposts: 244,
            likes: 240,
            view: 3300
        },
        {
            postId: 4,
            name: 'UnitedStandMUFC', 
            username: 'The United Stand', 
            avatar: 'https://i.ibb.co/vwbq4Sy/image.png', 
            createdAt: '36', 
            postTextContent: '🚨 Luton Town hope to get a thumbs up from #mufc to land goalkeeper Tom Heaton, who could be allowed to leave once United have added new signings in that department. [@SunSport]', 
            image: '',
            comments: 129,
            reposts: 244,
            likes: 430,
            view: 4400
        },
        {
            postId: 5,
            name: 'UnitedRadar', 
            username: 'United Radar', 
            avatar: 'https://i.ibb.co/VJ9QhXQ/image.png', 
            createdAt: '8', 
            postTextContent: 'Fabrizio Romano: "[R]elax with Onana. It’s just matter of formal things and small details. He’s joining Manchester United. 🧘🏼‍♂️"',
            replies: 219,
            reposts: 244,
            likes: 240,
            view: 700
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
                        avatar={post.avatar} 
                        image={post.image} 
                        postTextContent={post.postTextContent} 
                        createdAt={post.createdAt}
                        replies={post.replies}
                        views={post.view}
                        reposts={post.reposts}
                        likes={post.likes}
                    />
                ))}
            </div>
        </div>
     );
}
 
export default ForMeContent;