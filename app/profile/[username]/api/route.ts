import { NextResponse } from "next/server"
import prisma from '@/libs/prismadb'

export async function GET(req: Request, {params}: {params: {username: string}}) {

    const existingUser = await prisma.user.findUnique({
        where: {
            username: params.username.toLowerCase()
        }
    })

    return NextResponse.json(existingUser)
}