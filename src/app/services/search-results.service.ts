import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap, throwError, catchError } from 'rxjs';
import { Post } from '../models/post';
import { PostsResponse } from '../models/post';
import { baseURL } from './baseURL';

@Injectable({
  providedIn: 'root'
})
export class SearchResultsService {

  results: Post[];
  loading = false;
  error = '';

  constructor(private http: HttpClient) { }

  getResults(term: string): Observable<Post[]> {
    return this.http.get<PostsResponse>(`${ baseURL }/search.json?q=${term}`)
      .pipe(
        map(results => results.data.children.map(post => post.data)),
        tap(results => {
          this.results = results;
        }),
        catchError((err: HttpErrorResponse) => {
          return throwError(() => new Error(err.message));
        })
      )
  }
}
