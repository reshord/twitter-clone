import { signIn, signOut } from "next-auth/react";

const AuthButton = ({currentUser}: any) => {

    if(currentUser) {
        return (
            <button 
                className="bg-black text-white w-full p-3 rounded-full cursor-pointer font-bold" 
                onClick={() => signOut()}
            >
                Logout
            </button>
        )
    }

    return ( 
        <button 
            className="bg-black text-white w-full p-3 rounded-full cursor-pointer font-bold" 
            onClick={() => signIn()}
        >
            Login
        </button>
     );
}
 
export default AuthButton;