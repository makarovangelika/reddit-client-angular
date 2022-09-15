import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Comment, FullPost } from '../models/fullPost';
import { Observable, map } from 'rxjs';
import { baseURL } from './baseURL';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPost(postId: string): Observable<FullPost> {
    return this.http.get<any>(`${baseURL}/comments/${postId}.json`)
      .pipe(
        map(post => {
          return <FullPost>{
            post: post[0].data.children[0].data as Post,
            comments: post[1].data.children.filter((comment: any) => {
              return comment.kind !== 'more';
            }).map((comment: any) => comment.data) as Comment[]
          }
        })
      )
  }
}
