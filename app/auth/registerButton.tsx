import { useRouter } from "next/navigation";

const RegisterButton = () => {

    const registerHandler = async () => {
        const user = await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({
                name: 'reshord mufc', 
                username: 'reshord12', 
                email: 'reshord0@gmail.com', 
                password: 'reshord123',
                bio: 'hello im bio'
            }),
            headers: {
                "Content-Type": "application/json",
              },
        })
    }

    return ( 
        <button onClick={() => registerHandler()}>register</button>
     );
}
 
export default RegisterButton;