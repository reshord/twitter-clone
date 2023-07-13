'use client'

import React from "react";

interface HeaderProps {
    title: string
}

const Header: React.FC<HeaderProps> = ({title}) => {

    const handleClick = async () => {
        const test = await fetch('/api/post', {
            method: 'GET'
        })
    }

    return ( 
        <div className="w-full flex flex-col">
            <div>
                ghf
                {title}
            </div>
            <div className="w-2/3 flex justify-around">
                <span></span>
            </div>
        </div>
     );
}

export default Header;