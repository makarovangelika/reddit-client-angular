export interface Post {
    subreddit: string,
    title: string,
    created_utc: number,
    post_hint: string,
    thumbnail: string,
    id: string,
    score: number,
    num_comments: number,
    url: string,
    is_self: boolean
}
export interface PostsResponse {
    data: {
        children: {
            data: Post
        }[]
    }
  }