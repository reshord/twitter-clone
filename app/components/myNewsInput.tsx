'use client'
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const MyNewsInput = ({currentUser}: any) => {

    const [inputValue, setInputValue] = useState<string>('')

    const inputBlockRef = useRef<HTMLInputElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    const handlePost = async () => {
        try {
            await fetch('/api/posts', {
                method: 'POST',
                body: JSON.stringify({
                    postBody: 'hello im reshord'
                })
            })
        }
        catch(e) {

        }
    }

    useEffect(() => {
        inputBlockRef.current?.addEventListener('click', (e) => {
            inputRef.current?.focus()
        })
    }, []);

    return ( 
        <div 
            style={{border: '1px solid rgb(239, 243, 244)'}}
            className="w-full h-40 p-5 flex flex-col justify-between" 
            ref={inputBlockRef}
        >
            <div className="flex w-1/2" >
                <div className="rounded-full mr-4">
                    <Link href={`/profile/${currentUser?.username}`}>
                        <img className="rounded-full w-10" src={currentUser?.profileImage || '/placeholder.png'} alt="" />
                    </Link>
                </div>
                <input 
                    ref={inputRef}
                    placeholder="What is happening?!"
                    className="opacity-90 text-lg placeholder:text-xl outline-none"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </div>
            <div className="">
                <button 
                    style={{backgroundColor: 'rgb(29, 155, 240)'}} 
                    className="py-1 px-4 rounded-full text-lg font-medium text-white cursor-pointer " 
                    onClick={handlePost}
                >
                        Tweet
                </button>
            </div>
        </div>
     );
}
 
export default MyNewsInput;