import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription, take, tap } from 'rxjs';

import { MovieSearchEnum } from '../../models/enums/movieEnum';
import { MovieSearchData } from '../../models/movieSearchData';
import { MovieSearchResponse } from '../../models/movieSearchResponse';
import { MovieSearchService } from '../../services/movie-search.service';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.scss']
})
export class SearchMoviesComponent implements OnInit, OnDestroy {
  private componentSubscriptions$: Subscription = new Subscription();

  movies$: BehaviorSubject<MovieSearchData[]>;
  moviesData$: Observable<MovieSearchResponse>;
  shouldDisplayList: boolean = false;
  allMoviesFetched: boolean = false;
  private currentPageNumber: number = 1;
  totalMoviesFound: number;
  listView: string = "grid";

  displayedColumns: string[] = Object.values(MovieSearchEnum); //['Poster', 'Title', 'Type', 'Year', 'imdbID', 'Detail'];
  dataSource = new MatTableDataSource<MovieSearchData>([]);
  // @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private movieService: MovieService,
    private router: Router,
    private movieSearchService: MovieSearchService) { }

  ngOnInit() {
    const sub = this.movieSearchService.getLatestSearchParams().subscribe(searchParams => {
      if (searchParams) {
        this.shouldDisplayList = true;
        this.moviesData$ = this.movieSearchService.getMovies().pipe(
          tap(resp => {
            this.movies$ = new BehaviorSubject<MovieSearchData[]>(resp.Search);
            this.totalMoviesFound = resp.totalResults;
          })
        )
      }
    });

    this.componentSubscriptions$.add(sub);

    // this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.componentSubscriptions$.unsubscribe();
  }

  resultView(view: string) {
    this.listView = view;
    
    if (this.listView == 'table') {
      this.dataSource.data = this.movies$.value;
      // this.dataSource.paginator = this.paginator;
    }
  }

  setDefaultPic(event?:any) {
    if(!!event) {
      event.target.src = "assets/no-movie-icon.png";
      return;
    }
    return "assets/no-movie-icon.png"
  }

  onDownScroll() {
    this.currentPageNumber++;
    let shouldFetchNextPage = false;

    if (this.totalMoviesFound < 10 || this.totalMoviesFound % 10 == 0) {
      shouldFetchNextPage = this.currentPageNumber <= this.totalMoviesFound / 10 ? true : false;
    } else {
      shouldFetchNextPage = this.currentPageNumber <= this.totalMoviesFound / 10 + 1 ? true : false;
    }

    if (shouldFetchNextPage) {
      this.movieSearchService.getMovies(this.currentPageNumber)
        .pipe(
          tap(response => {
            const currentDisplayedMovies = this.movies$.value;
            this.movies$.next(currentDisplayedMovies.concat(response.Search));

            this.dataSource.data = this.movies$.value;
            // this.dataSource.paginator = this.paginator;
          }),
          take(1))
        .subscribe();
    } else {
      this.allMoviesFetched = true;
    }
  }

  openMovieDetails(details: MovieSearchData) {
    console.log(details)
    this.movieService.emitNextMovieDetails(details);
    this.router.navigate([`movies/${details.imdbID}`]);

  }
}
