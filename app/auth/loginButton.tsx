'use client'

import {signIn, signOut} from 'next-auth/react'


const LoginButton = () => {

    return ( 
        <button onClick={() => signIn()}>login</button>
     );
}
 
export default LoginButton;