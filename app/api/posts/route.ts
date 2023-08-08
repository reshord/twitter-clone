import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from '@/app/lib/prismadb'

export async function POST(req: Request) {

    const currentUser = await getCurrentUser()

    if(!currentUser) {
        return null
    }

    const {postBody} = await req.json()

    const post = await prisma.post.create({
        data: {
            postBody,
            userId: currentUser.id
        }
    })

    return post
}