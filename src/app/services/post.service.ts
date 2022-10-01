import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Comment, FullPost } from '../models/fullPost';
import { Observable, map, catchError, throwError } from 'rxjs';
import { baseURL } from './baseURL';

interface PostResponse {
  0: {
    data: {
      children: {
        data: Post
      }[]
    }
  },
  1: {
    data: {
      children: {
        data: Comment
      }[]
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPost(postId: string): Observable<FullPost> {
    return this.http.get<PostResponse>(`${baseURL}/comments/${postId}.json`)
      .pipe(
        map(post => {
          return {
            post: post[0].data.children[0].data,
            comments: post[1].data.children.filter((comment: any) => {
              return comment.kind !== 'more';
            }).map(comment => comment.data)
          }
        }),
        catchError((err: HttpErrorResponse) => {
          return throwError(() => new Error(err.message));
        })
      )
  }
}
