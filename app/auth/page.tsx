'use client'
import { authOptions } from '@/libs/auth'
import LoginButton from './loginButton'
import {SessionProvider, useSession} from 'next-auth/react'
import SignOutButton from './signOutButton'
import RegisterButton from './registerButton'

// import useUser from '../hooks/useUser'
 
const Auth = () => {

    const session = useSession().data?.user
    console.log(session)

    return ( 
        <div className="w-3/6">
                <LoginButton />
                <SignOutButton />
                <RegisterButton />
        </div>
     );
}
 
export default Auth;