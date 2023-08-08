import prisma from '@/app/lib/prismadb'

export default async function getUserPosts({params}: {params: {username: string}}) {

    const user = await prisma.user.findUnique({
        where: {
            username: params.username
        }
    })

    const userPosts = await prisma.post.findMany({
        where: {
            userId: user?.id
        },
        orderBy: {
            createdAt: 'desc'
        }
    })
    
    return userPosts
} 