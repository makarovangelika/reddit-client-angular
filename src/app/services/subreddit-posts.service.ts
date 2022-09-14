import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';
import { Observable, delay, retry, tap } from 'rxjs';
import { baseURL } from './baseURL';
import { SubredditPostsResponse } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class SubredditPostsService {

  constructor(private http: HttpClient) { }

  subredditPosts: Post[] = [];

  getAll(subreddit: string): Observable<SubredditPostsResponse> {
    return this.http.get<SubredditPostsResponse>(`${baseURL}/r/${subreddit}.json`)
      .pipe(
        tap(posts => {
          this.subredditPosts = posts.data.children.map(post => post.data)
        })
      )
  }

}
