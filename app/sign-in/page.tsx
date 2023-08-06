import { signIn, useSession } from "next-auth/react"
import LoginButton from "./loginButton"
import RegisterButton from "./registerButton"
import getCurrentUser from "../actions/getCurrentUser"

export default async function Signin() {

    const session = await getCurrentUser()

    console.log(session)


    return (
        <div>
            <div>
                {session?.hashedPassword}
            </div>
            <LoginButton /> 
            <RegisterButton />
        </div>
    )
}