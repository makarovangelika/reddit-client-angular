import { Post } from './post';

export interface Comment {
    author: string,
    created: number,
    replies: {
        data: {
            children: {
                kind: string,
                data: Comment
            }[]
        }
    },
    body: string
}

export interface FullPost {
    post: Post,
    comments: Comment[]
}

