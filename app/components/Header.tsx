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
        <div className="w-full flex flex-col sticky top-0">
            <div className="font-bold text-xl my-3">
                <span>{title}</span>
            </div>
            <div className="w-full flex justify-between my-4">
                {methods.map((el, index) => (
                    <span 
                    onClick={() => onClickMethod(index)}
                    style={{backgroundColor: `${currentMethod === index ? 'rgb(209 213 219)' : ''}`}} 
                    className=" hover:bg-gray-400 transition opacity-80 w-2/4 text-center font-bold py-3 cursor-pointer">{el}</span>
                ))}
            </div>
        </div>
     );
}

export default Header;