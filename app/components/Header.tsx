'use client'

const Header = () => {

    const handleClick = async () => {
        const test = await fetch('/api/post', {
            method: 'GET'
        })
    }

    return ( 
        <div>
            header
        </div>
     );
}

export default Header;