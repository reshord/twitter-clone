'use client'

import React, { useState } from "react";

interface HeaderProps {
    title: string
    onClickMethod: (index: number) => void
    currentMethod: number
    methods: string[]
}

const Header: React.FC<HeaderProps> = ({title, onClickMethod, methods, currentMethod}) => {

    

    const handleClick = async () => {
        const test = await fetch('/api/post', {
            method: 'GET'
        })
    }

    const handleMouseMove = () => {
    }

    return ( 
        <div 
            style={{
                backgroundColor: 'rgba(255, 255, 255, 0.85)', 
                backdropFilter: 'blur(12px)',
                border: '1px solid rgb(239, 243, 244)'
            }} 
            className="w-full flex flex-col sticky top-0 z-40 ">
            <div className="font-bold text-xl my-3">
                <span>{title}</span>
            </div>
            <div className="w-full flex justify-between mt-4">
                {methods.map((el, index) => (
                    <span
                        key={index} 
                        onClick={() => onClickMethod(index)}
                        style={{
                            backgroundColor: `${currentMethod === index ? 'rgb(239, 243, 244)' : ''}`
                            
                        }} 
                        className=" hover:bg-gray-200 transition w-2/4 text-center font-bold py-3 cursor-pointer"
                    >
                        {el}
                    </span>
                ))}
            </div>
        </div>
     );
}

export default Header;