import { NextResponse } from "next/server"
import prisma from '@/app/lib/prismadb'

export async function GET(req: Request, {params}: {params: {username: string}}) {

    const currentProfile = await prisma.user.findUnique({
        where: {
            username: params.username
        }
    })

    return NextResponse.json(currentProfile)
}