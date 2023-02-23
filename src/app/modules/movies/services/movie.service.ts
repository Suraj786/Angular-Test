import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieDetails } from '../models/movieDetails';
import { MovieSearchData } from '../models/movieSearchData';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movieDetails$: BehaviorSubject<MovieSearchData> | any = new BehaviorSubject(undefined);

  constructor(private http: HttpClient) { }

  getMovieDetailsFromApi(imdbId: string): Observable<MovieDetails> {
    let params = new HttpParams()
      .set('apikey', environment.api_key)
      .set('i', imdbId);

    return this.http.get<MovieDetails>(environment.base_url, { params });
  }

  emitNextMovieDetails(movieDetails: MovieSearchData) {
    this.movieDetails$.next(movieDetails);
  }

  getMovieDetails(): Observable<MovieSearchData> {
    return this.movieDetails$.asObservable();
  }
}
