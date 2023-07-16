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
            image: ''
        },
        {
            postId: 2,
            name: 'ManUtd', 
            username: 'Manchester United', 
            avatar: 'https://i.ibb.co/sv1z9KB/image.png', 
            createdAt: '40', 
            postTextContent: 'Great to have you back', 
            image: ''
        },
        {
            postId: 3,
            name: 'UtdPlug', 
            username: 'UtdPlug', 
            avatar: 'https://i.ibb.co/yX9WMCZ/image.png', 
            createdAt: '50', 
            postTextContent: '🚨 West Ham are interested in signing Harry Maguire.', 
            image: ''
        },
        {
            postId: 4,
            name: 'UnitedStandMUFC', 
            username: 'The United Stand', 
            avatar: 'https://i.ibb.co/vwbq4Sy/image.png', 
            createdAt: '36', 
            postTextContent: '🚨 Luton Town hope to get a thumbs up from #mufc to land goalkeeper Tom Heaton, who could be allowed to leave once United have added new signings in that department. [@SunSport]', 
            image: ''
        },
        {
            postId: 5,
            name: 'UnitedRadar', 
            username: 'United Radar', 
            avatar: 'https://i.ibb.co/VJ9QhXQ/image.png', 
            createdAt: '8', 
            postTextContent: 'Fabrizio Romano: "[R]elax with Onana. It’s just matter of formal things and small details. He’s joining Manchester United. 🧘🏼‍♂️"'
        },
    ]

    return ( 
        <div className="flex flex-col">
            <MyNewsInput />
            <div>
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
                    />
                ))}
            </div>
        </div>
     );
}
 
export default ForMeContent;