'use client'

const TweetButton = () => {

    const activateModalTweet = () => {
    }

    return ( 
        <button 
            className="text-white rounded-3xl py-3 w-full font-bold " 
            style={{backgroundColor: 'rgb(29, 155, 240)'}} 
            onClick={activateModalTweet}
        >
            Tweet
        </button>
     );
}
 
export default TweetButton;