import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, throwError, catchError } from 'rxjs';
import { Subreddit } from '../models/subreddit';
import { baseURL } from './baseURL';

interface SubredditsResponse {
  data: {
    children: {
      data: Subreddit
    }[]
  }
}

@Injectable({
  providedIn: 'root'
})
export class SubredditsService {

  constructor(private http: HttpClient) { }

  getSubreddits(): Observable<Subreddit[]> {
    return this.http.get<SubredditsResponse>(`${baseURL}/subreddits.json`)
      .pipe(
        map(subreddits => {
          return subreddits.data.children.map(subreddit => subreddit.data)
        }),
        catchError((err: HttpErrorResponse) => {
          return throwError(() => new Error(err.message));
        })
      )
  }
}
