export async function GET(req: Request) {
    const users = [
        {username: "dmitriy"},
        {username: "oleg"},
        {username: "vika"}
    ]
    
    return new Response(JSON.stringify(users))
}
