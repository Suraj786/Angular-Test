import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { MoviesRoutingModule } from './movies-routing.module';

import { MovieSearchFormComponent } from './components/movie-search-form/movie-search-form.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { SearchMoviesComponent } from './pages/search-movies/search-movies.component';


@NgModule({
  declarations: [
    SearchMoviesComponent,
    MovieDetailComponent,
    MovieSearchFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
