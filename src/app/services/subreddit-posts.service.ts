import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Post } from '../models/post';
import { Observable, map, throwError, catchError } from 'rxjs';
import { baseURL } from './baseURL';
import { PostsResponse } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class SubredditPostsService {

  constructor(private http: HttpClient) { }

  getPosts(subreddit: string): Observable<Post[]> {
      return this.http.get<PostsResponse>(`${baseURL}/r/${subreddit}.json`)
      .pipe(
        map(posts => {
          return posts.data.children.map(post => post.data);
        }),
        catchError((err: HttpErrorResponse) => {
          return throwError(() => new Error(err.message));
        })
        )
  }

}
