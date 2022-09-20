import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';
import { Observable, map } from 'rxjs';
import { baseURL } from './baseURL';

interface SubredditPostsResponse {
  data: {
      children: {
          data: Post
      }[]
  }
}

@Injectable({
  providedIn: 'root'
})
export class SubredditPostsService {

  constructor(private http: HttpClient) { }

  getPosts(subreddit: string): Observable<Post[]> {
      return this.http.get<SubredditPostsResponse>(`${baseURL}/r/${subreddit}.json`)
      .pipe(
        map(posts => {
          return posts.data.children.map(post => post.data);
        }))
  }

}
