import { redirect } from "next/navigation"

export async function GET(req: Request) {

    const user = {
        name: 'dmitriy',
        age: 16
    }

    return new Response(JSON.stringify(user))
}