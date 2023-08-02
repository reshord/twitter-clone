import prismadb from '@/libs/prismadb'

export async function GET(req: Request, {params}: {params: {followingIds: string[]}}) {
    
    if(!params.followingIds) return

//    const teset = prisma?.user.findMany({
//         where: {
//             followingIds: ''
//         }
//    })
}