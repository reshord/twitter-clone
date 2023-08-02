export interface IComment {
    id: string
    body: string
    createAt: Date
    updatedAt: Date
    userId: string
    postId:  string
}

export interface IPost {
    id: string
    createAt: Date
    updatedAt: Date
    userId: string
    postBody: string
}