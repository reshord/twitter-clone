import { NextResponse } from "next/server"
import prisma from '@/libs/prismadb'
import { hash } from "bcrypt"


export async function POST(req: Request) {

    try {
        const {
            name, 
            username, 
            password, 
            email,
            bio
        } = await req.json()

        const hashedPassword = await hash(password, 12)
    
        const isUserExist = await prisma.user.findUnique({
            where: {
                username: username
            }
        })

        if(isUserExist) {
            throw new Error('invalid credentials')
        }

        const newUser = await prisma.user.create({
            data: {
                name, 
                email, 
                username, 
                hashedPassword,
                bio
            }
        })

        console.log(newUser)
        
        return NextResponse.json(newUser)
    }
    catch(e) {
        return new NextResponse(
            JSON.stringify({
                status: 'error',
                message: 'server error'
            }),
            {status: 500}
        )
    }

    // const user = await prisma.user.create({
    //     data: {

    //     }
    // })

    return NextResponse.json({'user': 'sdfsdf'})
}