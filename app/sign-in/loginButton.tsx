'use client'
import { signIn } from "next-auth/react";

const LoginButton = () => {

    const loginHandler = () => {
        signIn('credentials', {
            username: 'reshord666',
            password: 'reshord666'
        })
    }

    return (
        <div>
            <button onClick={loginHandler}>sign in</button>
        </div>
      );
}
 
export default LoginButton;