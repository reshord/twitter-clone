import { signIn, useSession } from "next-auth/react"
import LoginButton from "./loginButton"
import RegisterButton from "./registerButton"
import getCurrentUser from "../actions/getCurrentUser"

export default async function Signin() {

    return (
        <div>
            <LoginButton /> 
            <RegisterButton />
        </div>
    )
}