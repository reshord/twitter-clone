'use client'
import axios from "axios"

const RegisterButton = () => {

    const registerHandler = async () => {
        await axios.post('/api/auth/register', {
            username: 'reshord666',
            password: 'reshord666',
            email: 'reshord666@gmail.com'
        })
    }

    return ( 
        <div>
            <button className="ml-2" onClick={registerHandler}>register</button>

        </div>
     );
}
 
export default RegisterButton;