import prismadb from '@/libs/prismadb'
import { NextResponse } from 'next/server'

export async function GET(req: Request, {params}: {params: {username: string}}) {
    
    const currentUser = await prismadb.user.findUnique({
        where: {
            username: params.username
        }
    })

    const posts = await prismadb.post.findMany({
        where: {
            userId: '64c18753dd0dc69d1b702df4'
        },
    })

    console.log(posts)

    return NextResponse.json(posts)
}