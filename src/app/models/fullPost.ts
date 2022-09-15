import { Post } from './post';

export interface Comment {

}

export interface FullPost {
    post: Post,
    comments: Comment[]
}

