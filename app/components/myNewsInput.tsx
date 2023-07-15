import { useEffect, useRef, useState } from "react";

const MyNewsInput = () => {

    const [inputValue, setInputValue] = useState<string>('')

    const inputBlockRef = useRef<HTMLInputElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    const sendTweet = () => {

    }

    useEffect(() => {
        inputBlockRef.current?.addEventListener('click', (e) => {
            inputRef.current?.focus()
        })
    }, []);

    return ( 
        <div className="w-full h-48  p-5" ref={inputBlockRef}>
            <div className="flex w-1/2" >
                <div className="rounded-full mr-4">
                    avatar
                </div>
                <input 
                    ref={inputRef}
                    placeholder="What is happening?!"
                    className="opacity-90 text-lg placeholder:text-xl outline-none"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </div>
            <div className="m-4">
                <button 
                    style={{backgroundColor: 'rgb(29, 155, 240)'}} 
                    className="py-1 px-4 rounded-full text-lg font-medium text-white cursor-pointer " 
                    onClick={sendTweet}
                    disabled={inputValue ? true : false}
                >
                        Tweet
                </button>
            </div>
        </div>
     );
}
 
export default MyNewsInput;