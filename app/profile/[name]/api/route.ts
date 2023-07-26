import { NextResponse } from "next/server"
import prisma from '@/libs/prismadb'

export async function GET(req: Request, {params}: {params: {name: string}}) {

    const data = await prisma.user.findUnique({
        where: {
            username: params.name
        }
    })
    
    return NextResponse.json({data})
}