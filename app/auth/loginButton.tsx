'use client'
import {useSession} from 'next-auth/react'

import {signIn, signOut} from 'next-auth/react'


const LoginButton = () => {

    const session = useSession().data?.user
    console.log(session)

    return ( 
        <button onClick={() => signIn()}>auth</button>
     );
}
 
export default LoginButton;