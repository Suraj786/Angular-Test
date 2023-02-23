import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, take } from 'rxjs';
import { Location } from '@angular/common';

import { MovieDetails } from '../../models/movieDetails';

import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movieDetails$: Observable<MovieDetails>;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    public location: Location
  ) { }

  ngOnInit(): void {
    let imdbID: any = this.route.snapshot.paramMap.get('id');

    this.movieDetails$ = this.movieService.getMovieDetailsFromApi(imdbID)
  }

  setDefaultPic(event?:any) {
    if(!!event) {
      event.target.src = "assets/no-movie-icon.png";
      return;
    }
    return "assets/no-movie-icon.png"
  }

  navigateBack() {
    this.location.back()
  }
}
