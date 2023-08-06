import prisma from '@/app/lib/prismadb'
import bcrypt from 'bcrypt'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {

    const {username, password, email} = await req.json()

    const existingUser = await prisma.user.findUnique({
        where: {
            username: username
        }
    })

    if(existingUser) {
        throw new Error('User already exist')
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const newUser = await prisma.user.create({
        data: {
            username: username,
            email: email,
            hashedPassword: hashedPassword
        }
    })

    return NextResponse.json(newUser)
}