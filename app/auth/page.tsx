'use client'
import { authOptions } from '@/libs/auth'
import LoginButton from './loginButton'
import {SessionProvider} from 'next-auth/react'

// import useUser from '../hooks/useUser'
 
const Auth = () => {

    return ( 
        <div className="w-3/6">
            <SessionProvider>
                <LoginButton />
            </SessionProvider>
        </div>
     );
}
 
export default Auth;