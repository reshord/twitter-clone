import prisma from '@/app/lib/prismadb'

export default async function getCurrentProfile({params}: {params: {username: string}}) {
    console.log(params)

    const currentUserProfile = await prisma.user.findUnique({
        where: {
            username: params.username
        }
    })

    if(!currentUserProfile) {
        throw new Error('This account doesn\'t exist')
    }

    const {hashedPassword, ...currentProfile} = currentUserProfile

    return currentProfile

}